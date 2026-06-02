import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LockedLink } from "./LockedLink";
import logo from "@/assets/logo.png";
import BrandName from "./BrandName";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Footer = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", phone: "", email: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-notification",
          recipientEmail: "ZINEniac@gmail.com",
          idempotencyKey: `subscribe-${formData.email}-${Date.now()}`,
          templateData: {
            source: "Landing Page Subscribe",
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
          },
        },
      });
      if (error) throw error;
      setSent(true);
      toast.success("Thanks! We'll be in touch.");
      setFormData({ firstName: "", lastName: "", phone: "", email: "" });
    } catch (err) {
      console.error(err);
      toast.error("Could not send. Please try again.");
    } finally {
      setSending(false);
    }
  };


  return (
    <footer className="bg-cta-dark pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Subscribe Form */}
          <div className="bg-card rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-2 text-center">Subscribe</h3>
            <p className="text-muted-foreground text-sm mb-6 text-center">
              Sign up with your email address to receive news and updates.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-full bg-background border border-border px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-primary"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-full bg-background border border-border px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-primary"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
              <div className="flex gap-2">
                <span className="bg-muted px-3 py-2.5 rounded-lg text-sm border border-border text-muted-foreground">+1</span>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="flex-1 bg-background border border-border px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-primary"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full bg-background border border-border px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-primary"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {sending ? "Sending..." : sent ? "Sent ✓" : "Sign Up"}
              </button>
            </form>
          </div>

          {/* Location & Contact */}
          <div className="text-primary-foreground space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3" style={{ fontFamily: "Georgia, serif" }}>Location</h3>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1" />
                <div>
                  <p className="text-lg font-semibold">223 DeGraw Avenue</p>
                  <p>Teaneck, New Jersey 07666</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-3" style={{ fontFamily: "Georgia, serif" }}>Hours</h3>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-primary mt-1" />
                <div>
                  <p>Monday — Friday</p>
                  <p>9:00am — 9:00pm</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-3" style={{ fontFamily: "Georgia, serif" }}>Contact</h3>
              <div className="space-y-2">
                <a href="mailto:ZINEniac@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail size={18} className="text-primary" />
                  ZINEniac@gmail.com
                </a>
                <a href="tel:+12014697194" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone size={18} className="text-primary" />
                  (201) 469-7194
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center text-primary-foreground/50 text-sm">
          <p>© 2026 <BrandName />. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/children/about" className="hover:text-primary-foreground transition-colors">About Us</Link>
            <Link to="/children/contact" className="hover:text-primary-foreground transition-colors">Contact</Link>
            <LockedLink to="/children/faqs" label="FAQs" className="hover:text-primary-foreground transition-colors">FAQs</LockedLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
