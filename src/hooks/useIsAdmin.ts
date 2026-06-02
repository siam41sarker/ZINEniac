import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ADMIN_AUTH_CHANGED_EVENT } from "@/lib/adminAuth";

export const useIsAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const checkId = useRef(0);

  useEffect(() => {
    let mounted = true;

    const check = async (userId?: string) => {
      const currentCheck = ++checkId.current;
      if (mounted) setLoading(true);

      const checkedUserId = userId ?? (await supabase.auth.getUser()).data.user?.id;

      if (!checkedUserId) {
        if (mounted && currentCheck === checkId.current) {
          setIsAdmin(false);
          setLoading(false);
        }
        return;
      }
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", checkedUserId)
        .eq("role", "admin")
        .maybeSingle();
      if (mounted && currentCheck === checkId.current) {
        setIsAdmin(!!data);
        setLoading(false);
      }
    };

    const refresh = () => void check();

    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      window.setTimeout(() => void check(session?.user?.id), 0);
    });

    void check();
    window.addEventListener(ADMIN_AUTH_CHANGED_EVENT, refresh);

    return () => {
      mounted = false;
      window.removeEventListener(ADMIN_AUTH_CHANGED_EVENT, refresh);
      sub.subscription.unsubscribe();
    };
  }, []);

  return { isAdmin, loading };
};
