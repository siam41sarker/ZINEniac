import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<"loading" | "valid" | "already" | "invalid" | "success" | "error">("loading");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!token) { setState("invalid"); return; }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_KEY } }
        );
        const data = await res.json();
        if (data.valid) setState("valid");
        else if (data.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      } catch {
        setState("error");
      }
    })();
  }, [token]);

  const handleConfirm = async () => {
    if (!token) return;
    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", { body: { token } });
      if (error) throw error;
      if (data?.success) setState("success");
      else if (data?.reason === "already_unsubscribed") setState("already");
      else setState("error");
    } catch {
      setState("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-md w-full bg-card border border-border rounded-2xl p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold mb-3">Email Preferences</h1>
        {state === "loading" && <p className="text-muted-foreground">Verifying your link…</p>}
        {state === "valid" && (
          <>
            <p className="text-muted-foreground mb-6">Click below to unsubscribe from ZINEniac emails.</p>
            <Button onClick={handleConfirm} disabled={submitting} className="w-full">
              {submitting ? "Processing…" : "Confirm Unsubscribe"}
            </Button>
          </>
        )}
        {state === "success" && <p className="text-muted-foreground">You've been unsubscribed. Sorry to see you go.</p>}
        {state === "already" && <p className="text-muted-foreground">You're already unsubscribed.</p>}
        {state === "invalid" && <p className="text-muted-foreground">This unsubscribe link is invalid or expired.</p>}
        {state === "error" && <p className="text-muted-foreground">Something went wrong. Please try again later.</p>}
      </div>
    </div>
  );
};

export default Unsubscribe;
