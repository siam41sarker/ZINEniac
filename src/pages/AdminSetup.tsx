import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export default function AdminSetup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUserEmail(data.user?.email ?? null);
    });
  }, []);

  const handleSetup = async () => {
    setLoading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast.error("Please log in first.");
        navigate("/admin/login");
        return;
      }

      const { data, error } = await supabase.functions.invoke("bootstrap-admin", {
        body: {},
      });

      if (error || data?.error) {
        toast.error(data?.error || error?.message || "Setup failed.");
        return;
      }

      toast.success("You are now an admin!");
      navigate("/admin/events");
    } catch (err: any) {
      toast.error(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Admin Setup</CardTitle>
          <CardDescription>
            Claim admin access. Only works if no admin exists yet, or if you are already an admin.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {userEmail ? (
            <p className="text-sm text-green-600">
              Logged in as: <strong>{userEmail}</strong>
            </p>
          ) : (
            <p className="text-sm text-amber-600">
              Not logged in.{" "}
              <a href="/admin/login" className="underline">Log in first</a>.
            </p>
          )}

          <Button onClick={handleSetup} disabled={loading || !userEmail} className="w-full">
            {loading ? "Setting up..." : "Make Me Admin"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
