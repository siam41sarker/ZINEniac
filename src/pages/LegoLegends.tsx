import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";

const LegoLegends = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-20 relative overflow-hidden">
        <div className="overflow-hidden bg-primary/5 py-3">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="text-2xl md:text-3xl font-bold text-primary/30 mx-8">
                lego legends
              </span>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-fun-yellow/20 via-fun-green/15 to-fun-blue/10 py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-block bg-primary/10 rounded-full px-5 py-2 mb-4">
                  <span className="text-primary font-bold text-sm">🧱 Brick by Brick</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="text-primary">Lego Legends</span>
                </h1>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl ring-4 ring-fun-yellow/30">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/4d65f6af-d088-4b1c-979d-6648bc72bda6/student%2Btutoring%2BTeaneck%2C%2BNew%2BJersey+1+%2810%29.png"
                  alt="Lego Legends at ZINEniac"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-card rounded-3xl p-10 shadow-sm border-2 border-fun-yellow/20">
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Scholars will build up their love for learning utilizing LEGO bricks to create fun and unique projects. Scholars will systemically create and innovate while connecting ideas and bricks. Exploration in Engineering and Art will open up new ideas and concepts!
            </p>
            <a
              href="https://links.dipus.ai/widget/groups/zineniac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300"
            >
              🧱 Book A Call
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LegoLegends;
