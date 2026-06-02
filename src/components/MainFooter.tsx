import { MapPin, Clock, Phone, Mail, Facebook, Instagram, Linkedin, Lock } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LockedLink } from "./LockedLink";
import { useComingSoon } from "./ComingSoonModal";
import logo from "@/assets/logo.png";
import { supabase } from "@/integrations/supabase/client";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { ensureAdminAccess, notifyAdminAuthChanged } from "@/lib/adminAuth";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// TikTok lucide doesn't exist, use inline SVG
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.49a8.16 8.16 0 0 0 4.77 1.52V6.69a4.85 4.85 0 0 1-1.84-.05Z" />
  </svg>
);

const MainFooter = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const { trigger } = useComingSoon();
  const { isAdmin, loading: adminLoading } = useIsAdmin();
  const [authOpen, setAuthOpen] = useState(false);
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
  });
  const [sent, setSent] = useState(false);

  const handleAdminClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isAdmin) {
      await supabase.auth.signOut();
      notifyAdminAuthChanged();
      toast.success("Signed out");
    } else {
      setAuthOpen(true);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: authEmail,
      password: authPassword,
    });
    if (error) {
      setAuthLoading(false);
      toast.error(error.message);
      return;
    }

    const adminAccess = await ensureAdminAccess();
    if (!adminAccess.ok) {
      await supabase.auth.signOut();
      notifyAdminAuthChanged();
      setAuthLoading(false);
      toast.error(adminAccess.message);
      return;
    }

    notifyAdminAuthChanged();
    setAuthLoading(false);
    toast.success("Signed in");
    setAuthOpen(false);
    setAuthEmail("");
    setAuthPassword("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("New Inquiry from Website");
    const body = encodeURIComponent(
      `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nCompany: ${formData.company || "—"}\nEmail: ${formData.email}\nPhone: ${formData.phone}`
    );
    window.location.href = `mailto:ZINEniac@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setFormData({ firstName: "", lastName: "", company: "", email: "", phone: "" });
  };

  const socials = [
    { name: "Facebook", href: "https://www.facebook.com/zineniac", Icon: Facebook },
    { name: "Instagram", href: "https://www.instagram.com/zineniac", Icon: Instagram },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/zineniac", Icon: Linkedin },
    { name: "TikTok", href: "https://www.tiktok.com/@zineniac", Icon: TikTokIcon as any },
  ];

  return (
    <footer id="contact" className="bg-cta-dark pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/"><img src={logo} alt="ZINEniac Logo" className="h-20 w-auto mb-5" /></Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Nurturing learners of all ages through nature-inspired, hands-on enrichment.
            </p>

            {/* Horizontal program buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Link to="/children" className="bg-primary-foreground/10 text-primary-foreground/80 text-xs px-3 py-1.5 rounded-full hover:bg-primary-foreground/20 transition-colors">Children</Link>
              <button onClick={() => trigger("Adults")} className="bg-primary-foreground/10 text-primary-foreground/80 text-xs px-3 py-1.5 rounded-full hover:bg-primary-foreground/20 transition-colors cursor-pointer">Adults</button>
              <button onClick={() => trigger("Community Support")} className="bg-primary-foreground/10 text-primary-foreground/80 text-xs px-3 py-1.5 rounded-full hover:bg-primary-foreground/20 transition-colors cursor-pointer">Community Support</button>
            </div>

            {/* Follow Us */}
            <div>
              <h5 className="text-primary-foreground font-semibold mb-3 text-sm uppercase tracking-wider">Follow Us</h5>
              <div className="flex gap-3">
                {socials.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary text-primary-foreground flex items-center justify-center transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Location & Hours & Map */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Location</h4>
            <div className="space-y-3 text-primary-foreground/70 text-sm mb-5">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-accent shrink-0" />
                <span>223 DeGraw Avenue<br />Teaneck, New Jersey 07666</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 text-accent shrink-0" />
                <div>
                  <p>Monday – Friday</p>
                  <p>9:00 AM – 10:00 PM</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden border border-primary-foreground/10">
              <iframe
                title="ZINEniac Location Map - 223 DeGraw Avenue, Teaneck, NJ 07666"
                src="https://maps.google.com/maps?q=223%20DeGraw%20Avenue%2C%20Teaneck%2C%20New%20Jersey%2007666&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            {/* Custom info card overlay (matches Google Maps info window styling) */}
              <div className="absolute top-2 left-2 right-8 bg-white text-foreground rounded-md shadow-md px-2.5 py-1.5 text-[11px] leading-tight flex items-start justify-between gap-2">
                <a
                  href="https://www.google.com/maps/place/223+DeGraw+Avenue,+Teaneck,+NJ+07666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 hover:opacity-80 transition-opacity"
                >
                  <div className="font-semibold text-[13px] text-foreground">223 Degraw Ave</div>
                  <div className="text-foreground/70">223 Degraw Ave, Teaneck, NJ</div>
                  <div className="text-foreground/70">07666, USA</div>
                </a>
                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href="https://google.com/maps?cid=8435352941746968435&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-GB&source=embed"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open in Google Maps"
                    className="w-7 h-7 flex items-center justify-center rounded border border-foreground/20 text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                  </a>
                  <a
                    href="https://www.google.com/maps/dir/23.7746665,90.40487/223+Degraw+Ave,+Teaneck,+NJ+07666,+USA/@2.3134121,-78.1473002,18455929m/data=!3m1!1e3!4m10!4m9!1m1!4e1!1m5!1m1!1s0x89c2f75247bb8875:0x751064cedfdfd773!2m2!1d-74.0202774!2d40.8752961!3e0?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get directions"
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21.71 11.29l-9-9a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42l9 9a1 1 0 0 0 1.42 0l9-9a1 1 0 0 0 0-1.42zM14 14.5V12h-4v3H8v-4a1 1 0 0 1 1-1h5V7.5l3.5 3.5z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-primary-foreground/70 text-sm">
              <a href="tel:+12014697194" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone size={16} className="text-accent" />
                <span>(201) 469-7194</span>
              </a>
              <a href="mailto:ZINEniac@gmail.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail size={16} className="text-accent" />
                <span>ZINEniac@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-2">Get in Touch!</h4>
            <p className="text-primary-foreground/60 text-sm mb-4">Send us your details and we'll reach out.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="First Name *"
                  required
                  maxLength={100}
                  className="w-full bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 px-3 py-2.5 rounded-lg text-sm border border-primary-foreground/10 focus:outline-none focus:border-primary"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  required
                  maxLength={100}
                  className="w-full bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 px-3 py-2.5 rounded-lg text-sm border border-primary-foreground/10 focus:outline-none focus:border-primary"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
              <input
                type="text"
                placeholder="Company Name (optional)"
                maxLength={150}
                className="w-full bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 px-3 py-2.5 rounded-lg text-sm border border-primary-foreground/10 focus:outline-none focus:border-primary"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                maxLength={255}
                className="w-full bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 px-3 py-2.5 rounded-lg text-sm border border-primary-foreground/10 focus:outline-none focus:border-primary"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <div className="flex gap-2">
                <span className="bg-primary-foreground/10 text-primary-foreground/60 px-3 py-2.5 rounded-lg text-sm border border-primary-foreground/10">+1</span>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  maxLength={20}
                  className="flex-1 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 px-3 py-2.5 rounded-lg text-sm border border-primary-foreground/10 focus:outline-none focus:border-primary"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-foreground py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                {sent ? "Email App Opened ✓" : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Pages navigation (hidden on landing page) */}
        {!isLandingPage && (
        <div className="border-t border-primary-foreground/10 pt-8 mb-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h5 className="text-primary-foreground font-semibold mb-3 uppercase tracking-wider text-xs">Programs</h5>
            <ul className="space-y-2 text-primary-foreground/60">
              <li><Link to="/children/our-program#after-care" className="hover:text-primary-foreground transition-colors">After Care</Link></li>
              <li><Link to="/children/our-program#after-school-enrichment" className="hover:text-primary-foreground transition-colors">After School Enrichment</Link></li>
              <li><Link to="/children/our-program#camps" className="hover:text-primary-foreground transition-colors">Camps</Link></li>
              <li><Link to="/children/our-program#esl-multilingual" className="hover:text-primary-foreground transition-colors">ESL/Multilingual</Link></li>
              
              <li><Link to="/children/our-program#steam" className="hover:text-primary-foreground transition-colors">STEAM</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-primary-foreground font-semibold mb-3 uppercase tracking-wider text-xs">Classes</h5>
            <ul className="space-y-2 text-primary-foreground/60">
              <li><Link to="/children/classes#3d-drawing" className="hover:text-primary-foreground transition-colors">3D Drawing</Link></li>
              <li><Link to="/children/classes#acting" className="hover:text-primary-foreground transition-colors">Acting</Link></li>
              <li><Link to="/children/classes#art" className="hover:text-primary-foreground transition-colors">Art</Link></li>
              <li><Link to="/children/classes#architecture" className="hover:text-primary-foreground transition-colors">ARTchitecture</Link></li>
              <li><Link to="/children/classes#arts-crafts" className="hover:text-primary-foreground transition-colors">Arts & Crafts</Link></li>
              <li><Link to="/children/classes#lego-legends" className="hover:text-primary-foreground transition-colors">Lego Legends</Link></li>
              <li><Link to="/children/classes#magic" className="hover:text-primary-foreground transition-colors">Magic</Link></li>
              <li><Link to="/children/classes#music" className="hover:text-primary-foreground transition-colors">Music</Link></li>
              <li><Link to="/children/classes#mindfulness" className="hover:text-primary-foreground transition-colors">Mindfulness</Link></li>
              <li><Link to="/children/classes#robotics" className="hover:text-primary-foreground transition-colors">Robotics</Link></li>
              <li><Link to="/children/classes#trivia" className="hover:text-primary-foreground transition-colors">Trivia</Link></li>
              <li><Link to="/children/classes#tutoring" className="hover:text-primary-foreground transition-colors">Tutoring</Link></li>
              <li><Link to="/children/classes#yoga" className="hover:text-primary-foreground transition-colors">Yoga</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-primary-foreground font-semibold mb-3 uppercase tracking-wider text-xs">Explore</h5>
            <ul className="space-y-2 text-primary-foreground/60">
              <li><Link to="/children" className="hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/children/about" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/children/zineniac-trading-card-game" className="hover:text-primary-foreground transition-colors">ZINEniac Trading Card Game</Link></li>
              <li><Link to="/children/catalog" className="hover:text-primary-foreground transition-colors">Catalog</Link></li>
              <li><LockedLink to="/children/camps" label="Camps" className="hover:text-primary-foreground transition-colors">Camps</LockedLink></li>
              <li><Link to="/children/events" className="hover:text-primary-foreground transition-colors">Events</Link></li>
              <li><LockedLink to="/children/birthday" label="Birthday" className="hover:text-primary-foreground transition-colors">Birthday</LockedLink></li>
            </ul>
          </div>
          <div>
            <h5 className="text-primary-foreground font-semibold mb-3 uppercase tracking-wider text-xs">Resources</h5>
            <ul className="space-y-2 text-primary-foreground/60">
              
              <li><LockedLink to="/children/faqs" label="FAQs" className="hover:text-primary-foreground transition-colors">FAQs</LockedLink></li>
              <li><Link to="/children/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
              
              <li><LockedLink to="/adults" label="Adults" className="hover:text-primary-foreground transition-colors">Adults</LockedLink></li>
              <li><LockedLink to="/medicaid" label="Community Support" className="hover:text-primary-foreground transition-colors">Community Support</LockedLink></li>
            </ul>
          </div>
        </div>
        )}

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row md:justify-between md:items-start gap-4 text-primary-foreground/60 text-xs leading-relaxed">
          <p className="max-w-3xl">
            © 2026 ZINEniac. All rights reserved. All content, including text, graphics, and images, is protected by copyright law and may not be reproduced, modified, or distributed without written permission.
          </p>
          <div className="flex gap-6 shrink-0 items-center">
            <Link to="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-primary-foreground transition-colors">Terms of Use</Link>
            <button
              onClick={handleAdminClick}
              disabled={adminLoading}
              className="text-[10px] text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors lowercase tracking-wide"
            >
              {isAdmin ? "sign out" : "admin"}
            </button>
          </div>
        </div>
      </div>

      <Dialog open={authOpen} onOpenChange={setAuthOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex flex-col items-center mb-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <DialogTitle className="text-2xl font-black">Admin Sign In</DialogTitle>
              <DialogDescription className="text-center">
                Restricted access for admins only.
              </DialogDescription>
            </div>
          </DialogHeader>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="admin-email">Email</Label>
              <Input
                id="admin-email"
                type="email"
                required
                value={authEmail}
                onChange={(e) => setAuthEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-password">Password</Label>
              <Input
                id="admin-password"
                type="password"
                required
                value={authPassword}
                onChange={(e) => setAuthPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>
            <Button type="submit" className="w-full" disabled={authLoading}>
              {authLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default MainFooter;
