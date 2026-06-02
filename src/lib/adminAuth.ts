import { supabase } from "@/integrations/supabase/client";

export const ADMIN_AUTH_CHANGED_EVENT = "admin-auth-changed";

export const notifyAdminAuthChanged = () => {
  window.dispatchEvent(new Event(ADMIN_AUTH_CHANGED_EVENT));
};

const userHasAdminRole = async (userId: string) => {
  const { data } = await supabase
    .from("user_roles")
    .select("id")
    .eq("user_id", userId)
    .eq("role", "admin")
    .maybeSingle();

  return !!data;
};

export const ensureAdminAccess = async () => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return { ok: false, message: "Please sign in with an admin account." };
  }

  if (await userHasAdminRole(user.id)) {
    return { ok: true, message: "Admin access confirmed." };
  }

  const { data, error } = await supabase.functions.invoke("bootstrap-admin", {
    body: {},
  });

  if (error || data?.error) {
    if (await userHasAdminRole(user.id)) {
      return { ok: true, message: "Admin access confirmed." };
    }

    return {
      ok: false,
      message: data?.error || error?.message || "This account does not have admin access.",
    };
  }

  return { ok: true, message: data?.message || "Admin access confirmed." };
};