import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";

const Mindfulness = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Marquee header like original */}
      <section className="pt-20 relative overflow-hidden">
        <div className="overflow-hidden bg-primary/5 py-3">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="text-2xl md:text-3xl font-bold text-primary/30 mx-8">
                Big Ideas, Real Impact.
              </span>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-fun-green/20 via-fun-blue/10 to-fun-purple/15 py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-block bg-primary/10 rounded-full px-5 py-2 mb-4">
                  <span className="text-primary font-bold text-sm">🧘 Inner Peace</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="text-primary">Mindfulness</span>
                </h1>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl ring-4 ring-fun-green/30">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/77c9e833-6506-43c2-9a97-85f964c76bb5/student%2Btutoring%2BTeaneck%2C%2BNew%2BJersey+1+%282%29.png"
                  alt="Mindfulness at ZINEniac"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-card rounded-3xl p-10 shadow-sm border-2 border-fun-green/20">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              In a post COVID world, where scholars have suffered the traumas of its effects, mindfulness meditation has a place to help heal.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The practice of mindfulness meditation is equivalent to the practice of reducing one's stress, enhancing social emotional skills, and self-regulation via the increase of attention and self-awareness.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Mindfulness meditation helps facilitate healthy social emotional development. By learning important strategies on how to identify their own needs, scholars in our mindfulness programs are able to reduce their stress and anxiety while avoiding any potential problem behaviors.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              This, in turn, leads to an enhanced version of one's well being, academic achievement, and social competence. It's time for getting on your mindfulness zen!
            </p>
            <a
              href="https://links.dipus.ai/widget/groups/zineniac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300"
            >
              🧘 Book A Call
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Mindfulness;
