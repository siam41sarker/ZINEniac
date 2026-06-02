import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import programAdults from "@/assets/program-adults.jpg";
import gallery2 from "@/assets/gallery-2.png";

const Adults = () => {
  return (
    <div className="min-h-screen">
      <MainNavbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
                Adult Literacy Program
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                It's Never Too Late to{" "}
                <span className="text-secondary">Find Your Voice</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
                Our adult literacy program provides a warm, judgment-free space where you can strengthen your reading, writing, and communication skills — at your own pace, on your own terms.
              </p>
              <a
                href="/contact"
                className="inline-block bg-secondary text-secondary-foreground px-10 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Enroll Now
              </a>
            </div>
            <div className="flex justify-center">
              <img
                src={programAdults}
                alt="Adult learners at ZINEniac"
                className="w-full max-w-lg rounded-3xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            What We <span className="text-secondary">Offer</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "One-on-One Tutoring", desc: "Personalized sessions tailored to your current level and goals. Whether you're learning to read for the first time or improving workplace communication." },
              { title: "Small Group Workshops", desc: "Learn alongside peers in a supportive group setting. Practice conversation, creative writing, and real-world reading skills together." },
              { title: "Digital Literacy", desc: "Build confidence with technology — from email and online forms to job applications and social media. Essential skills for today's world." },
            ].map((item) => (
              <div key={item.title} className="bg-background rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-secondary">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Adults Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-8">
            Why Adults <span className="text-secondary">Choose Us</span>
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              We understand that returning to learning as an adult takes courage. That's why our environment is built on respect, patience, and celebration of every milestone — no matter how small.
            </p>
            <p>
              Our instructors are trained in adult education methods and create lesson plans around your real life — your job, your family, your goals. Learning here isn't abstract; it's deeply personal and immediately useful.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Reach out today — we'll find the right program for you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-secondary px-10 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>
      </section>

      <MainFooter />
    </div>
  );
};

export default Adults;
