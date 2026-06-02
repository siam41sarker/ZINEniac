import { Link } from "react-router-dom";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />
      <main className="pt-32 pb-20">
        <article className="container mx-auto px-6 max-w-3xl prose prose-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10">Last updated: May 2026</p>

          <section className="space-y-6 text-foreground/85 leading-relaxed">
            <p>
              ZINEniac ("we," "us," or "our") respects your privacy and is committed to protecting the personal
              information you share with us. This Privacy Policy explains what information we collect, how we use
              it, and the choices you have regarding your information.
            </p>

            <h2 className="text-2xl font-bold mt-10">1. Information We Collect</h2>
            <p>
              We collect information you provide directly, such as your name, email address, phone number, and
              company name when you contact us, subscribe to updates, register for a program, or fill out a form
              on our site. We may also collect non-identifying analytics data (browser type, pages visited) to
              improve our website experience.
            </p>

            <h2 className="text-2xl font-bold mt-10">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to inquiries and deliver requested services or programs.</li>
              <li>To send updates, newsletters, and program announcements (you may opt out anytime).</li>
              <li>To improve our website, programs, and customer experience.</li>
              <li>To comply with legal obligations and protect our rights.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10">3. Information Sharing</h2>
            <p>
              ZINEniac does not sell your personal information. We may share information with trusted service
              providers who help us operate our website and deliver services, under strict confidentiality
              agreements. We may also disclose information when required by law.
            </p>

            <h2 className="text-2xl font-bold mt-10">4. Cookies & Tracking</h2>
            <p>
              Our website uses cookies and similar tracking technologies to enhance functionality and analyze
              usage. You can adjust browser settings to refuse cookies, but some features may not work properly.
            </p>

            <h2 className="text-2xl font-bold mt-10">5. Data Security</h2>
            <p>
              We use reasonable administrative, technical, and physical safeguards to protect your information.
              However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold mt-10">6. Your Rights & Choices</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information at any time.
              You may also opt out of our information sharing by submitting a request through our secure form.
            </p>
            <div className="bg-muted rounded-xl p-6 my-6">
              <p className="font-semibold mb-2">Opt out of information sharing</p>
              <p className="text-sm text-muted-foreground mb-4">
                To submit a formal removal request, please use our Privacy Information Removal form.
              </p>
              <Link
                to="/privacy-request"
                className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Submit Privacy Request →
              </Link>
            </div>

            <h2 className="text-2xl font-bold mt-10">7. Children's Privacy</h2>
            <p>
              We do not knowingly collect personal information from children under 13 without verifiable parental
              consent. If you believe we have collected such information, please contact us so we can remove it.
            </p>

            <h2 className="text-2xl font-bold mt-10">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. The "Last updated" date at the top reflects the
              most recent version. Continued use of our website after changes indicates your acceptance.
            </p>

            <h2 className="text-2xl font-bold mt-10">9. Contact Us</h2>
            <p>
              For privacy-related questions, contact us at{" "}
              <a href="mailto:ZINEniac@gmail.com" className="text-primary hover:underline">ZINEniac@gmail.com</a>{" "}
              or call (201) 469-7194.
            </p>
          </section>
        </article>
      </main>
      <MainFooter />
    </div>
  );
};

export default PrivacyPolicy;
