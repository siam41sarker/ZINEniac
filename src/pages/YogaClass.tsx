import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";

const YogaClass = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
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
        <div className="bg-gradient-to-br from-fun-green/20 via-fun-yellow/10 to-fun-blue/15 py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-block bg-primary/10 rounded-full px-5 py-2 mb-4">
                  <span className="text-primary font-bold text-sm">🧘‍♀️ Body & Mind</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="text-primary">Yoga</span>
                </h1>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl ring-4 ring-fun-green/30">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/db7524b7-7a66-4543-91d4-32aaf374a9e8/student%2Btutoring%2BTeaneck%2C%2BNew%2BJersey+1+%284%29.png"
                  alt="Yoga class at ZINEniac"
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
              Scholars are introduced to the benefits of yoga via this yoga intensive program. Topics such as breathing, yoga-based movement, and mindful meditation are taught so scholars can bring attention to their present moment and prepare their whole being.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Scholars develop self-regulation skills, tackle academic stress, and improve their attention and memory by practicing yoga. Utilizing a non-competitive form of physical activity, scholars will improve their motor abilities, sleep quality, and diet.
            </p>
            <a
              href="https://links.dipus.ai/widget/groups/zineniac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300"
            >
              🧘‍♀️ Book A Call
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default YogaClass;
