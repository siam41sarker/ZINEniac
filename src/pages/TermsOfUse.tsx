import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />
      <main className="pt-32 pb-20">
        <article className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Terms of Use</h1>
          <p className="text-muted-foreground mb-10">Last updated: May 2026</p>

          <section className="space-y-6 text-foreground/85 leading-relaxed">
            <p>
              Welcome to ZINEniac. By accessing or using our website, programs, and services, you agree to these
              Terms of Use. Please read them carefully.
            </p>

            <h2 className="text-2xl font-bold mt-10">1. Acceptance of Terms</h2>
            <p>
              By using this website, you confirm that you are at least 18 years old (or have parental consent)
              and agree to be bound by these terms.
            </p>

            <h2 className="text-2xl font-bold mt-10">2. Use of Content</h2>
            <p>
              All content on this website, including text, graphics, logos, photographs, and program materials,
              is the property of ZINEniac and is protected by copyright and trademark laws. You may not
              reproduce, modify, or distribute any content without prior written permission.
            </p>

            <h2 className="text-2xl font-bold mt-10">3. Program Enrollment</h2>
            <p>
              Enrollment in any ZINEniac program is subject to availability, eligibility, and applicable program
              policies. We reserve the right to refuse service or cancel enrollment in our sole discretion.
            </p>

            <h2 className="text-2xl font-bold mt-10">4. User Conduct</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You agree to use our website lawfully and respectfully.</li>
              <li>You may not interfere with site security, attempt unauthorized access, or distribute harmful code.</li>
              <li>You may not use our materials for commercial purposes without permission.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10">5. Disclaimer of Warranties</h2>
            <p>
              Our website and content are provided "as is" without warranties of any kind. ZINEniac does not
              guarantee uninterrupted, error-free, or completely secure access.
            </p>

            <h2 className="text-2xl font-bold mt-10">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, ZINEniac is not liable for any indirect, incidental, or
              consequential damages arising from your use of the website or our services.
            </p>

            <h2 className="text-2xl font-bold mt-10">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for the content,
              policies, or practices of those sites.
            </p>

            <h2 className="text-2xl font-bold mt-10">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Use at any time. Updated terms will be posted on
              this page with a revised effective date.
            </p>

            <h2 className="text-2xl font-bold mt-10">9. Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of New Jersey, without regard to conflict of
              law principles.
            </p>

            <h2 className="text-2xl font-bold mt-10">10. Contact</h2>
            <p>
              For questions about these terms, please reach us at{" "}
              <a href="mailto:ZINEniac@gmail.com" className="text-primary hover:underline">ZINEniac@gmail.com</a>{" "}
              or (201) 469-7194.
            </p>
          </section>
        </article>
      </main>
      <MainFooter />
    </div>
  );
};

export default TermsOfUse;
