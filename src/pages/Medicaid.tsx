import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import programMedicaid from "@/assets/program-medicaid.jpg";

const Medicaid = () => {
  return (
    <div className="min-h-screen">
      <MainNavbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">
                Medicaid-Covered Programs
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Quality Literacy Support,{" "}
                <span className="text-accent">Covered by Insurance</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
                We proudly accept Medicaid so that every learner — regardless of financial situation — can access the tools, support, and encouragement they deserve.
              </p>
              <a
                href="/contact"
                className="inline-block bg-accent text-accent-foreground px-10 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Check Your Eligibility
              </a>
            </div>
            <div className="flex justify-center">
              <img
                src={programMedicaid}
                alt="Medicaid-covered literacy programs"
                className="w-full max-w-lg rounded-3xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            How It <span className="text-accent">Works</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Verify Coverage", desc: "Contact us or your Medicaid provider to confirm eligibility. We'll walk you through every step of the process." },
              { step: "2", title: "Get Assessed", desc: "We'll evaluate your current reading and writing level to create a personalized learning plan that works for you." },
              { step: "3", title: "Start Learning", desc: "Begin attending sessions — in-person or virtual — with zero out-of-pocket costs. It's that simple." },
            ].map((item) => (
              <div key={item.step} className="bg-background rounded-2xl p-8 shadow-sm text-center">
                <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-5 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-8">
            What's <span className="text-accent">Covered</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Individual literacy tutoring",
              "Group enrichment sessions",
              "Speech & language support",
              "Reading comprehension therapy",
              "Writing skill development",
              "Creative expression workshops",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-card rounded-xl p-5 shadow-sm"
              >
                <div className="w-3 h-3 rounded-full bg-accent shrink-0" />
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Common <span className="text-accent">Questions</span>
          </h2>
          <div className="space-y-4">
            {[
              { q: "Do I need a referral?", a: "In most cases, no. Contact us directly and we'll help you determine the best path to enrollment." },
              { q: "Are sessions in-person or virtual?", a: "Both! We offer flexible scheduling to fit your needs — attend at our center or from the comfort of home." },
              { q: "What ages are covered?", a: "Our Medicaid programs serve learners of all ages, from children to adults." },
            ].map((item) => (
              <details key={item.q} className="bg-background rounded-xl p-5 shadow-sm">
                <summary className="font-bold cursor-pointer">{item.q}</summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't Let Cost Be a Barrier
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Quality literacy support is your right. Let us help you access it.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-accent px-10 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Get Started Today
          </a>
        </div>
      </section>

      <MainFooter />
    </div>
  );
};

export default Medicaid;
