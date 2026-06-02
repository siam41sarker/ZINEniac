import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    title: "",
    reason: "",
    phone: "",
    email: "",
  });
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
          idempotencyKey: `contact-${formData.email}-${Date.now()}`,
          templateData: {
            source: "Contact Page",
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            title: formData.title,
            reason: formData.reason,
          },
        },
      });
      if (error) throw error;
      setSent(true);
      toast.success("Thanks! We'll get back to you soon.");
      setFormData({ firstName: "", lastName: "", company: "", title: "", reason: "", phone: "", email: "" });
    } catch (err) {
      console.error(err);
      toast.error("Could not send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const inputCls =
    "w-full bg-background border-b-2 border-border px-1 py-3 text-base focus:outline-none focus:border-primary transition-colors";

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Map + Form section */}
      <section className="pt-20 bg-[hsl(var(--fun-yellow)/0.15)]">
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Google Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.2!2d-74.01!3d40.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f75247bb8875%3A0x751064cedfdfd773!2s223%20Degraw%20Ave%2C%20Teaneck%2C%20NJ%2007666!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ZINEniac Location"
              />
            </div>

            {/* Contact Form */}
            <div className="bg-background rounded-2xl p-8 md:p-10 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-black text-primary uppercase mb-6">
                Contact Us
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      className={inputCls}
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      className={inputCls}
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold mb-2">Company Name</label>
                    <input
                      type="text"
                      maxLength={150}
                      className={inputCls}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Title</label>
                    <input
                      type="text"
                      maxLength={100}
                      className={inputCls}
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Reason for Contact *</label>
                  <select
                    required
                    className={`${inputCls} cursor-pointer`}
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  >
                    <option value="">Select a reason…</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Programs & Classes">Programs & Classes</option>
                    <option value="Birthday Parties">Birthday Parties</option>
                    <option value="School Partnership">School Partnership</option>
                    <option value="Camps">Camps</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Phone Number *</label>
                  <div className="flex gap-3 items-center">
                    <span className="text-sm font-medium text-muted-foreground">+1</span>
                    <input
                      type="tel"
                      required
                      maxLength={20}
                      className={`${inputCls} flex-1`}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    className={inputCls}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity mt-4 disabled:opacity-60"
                >
                  {sending ? "Sending..." : sent ? "Sent ✓" : "Send Inquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="mailto:ZINEniac@gmail.com"
              className="group relative overflow-hidden bg-card border-2 border-border rounded-3xl p-8 hover:border-primary hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-2xl"
            >
              <div className="absolute top-5 right-5 text-muted-foreground group-hover:text-primary transition-colors">
                <ArrowUpRight size={22} />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail size={26} />
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">
                Email
              </p>
              <p className="font-black text-xl text-foreground mb-1">Email Us</p>
              <p className="text-sm text-muted-foreground break-all">ZINEniac@gmail.com</p>
            </a>

            <a
              href="tel:+12014697194"
              className="group relative overflow-hidden bg-card border-2 border-border rounded-3xl p-8 hover:border-primary hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-2xl"
            >
              <div className="absolute top-5 right-5 text-muted-foreground group-hover:text-primary transition-colors">
                <ArrowUpRight size={22} />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Phone size={26} />
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">
                Phone
              </p>
              <p className="font-black text-xl text-foreground mb-1">Call / Text</p>
              <p className="text-sm text-muted-foreground">(201) 469-7194</p>
            </a>

            <a
              href="https://www.google.com/maps/dir//223+Degraw+Ave,+Teaneck,+NJ+07666"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-card border-2 border-border rounded-3xl p-8 hover:border-primary hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-2xl"
            >
              <div className="absolute top-5 right-5 text-muted-foreground group-hover:text-primary transition-colors">
                <ArrowUpRight size={22} />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <MapPin size={26} />
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">
                Location
              </p>
              <p className="font-black text-xl text-foreground mb-1">Visit Us</p>
              <p className="text-sm text-muted-foreground">223 DeGraw Ave, Teaneck NJ</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
