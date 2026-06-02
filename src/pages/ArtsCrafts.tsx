import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";

const ArtsCrafts = () => {
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
        <div className="bg-gradient-to-br from-fun-pink/20 via-fun-purple/15 to-fun-yellow/10 py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-block bg-primary/10 rounded-full px-5 py-2 mb-4">
                  <span className="text-primary font-bold text-sm">✂️ Hands-On Fun</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="text-primary">Arts & Crafts</span>
                </h1>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl ring-4 ring-fun-pink/30">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/631b16b1-fe18-4913-8649-5d99af8dfb11/student%2Btutoring%2BTeaneck%2C%2BNew%2BJersey+1+%285%29.png"
                  alt="Arts and Crafts at ZINEniac"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-card rounded-3xl p-10 shadow-sm border-2 border-fun-pink/20">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              In this arts and crafts program, scholars crank up the fun with glitter, fabric, and an unlimited supply of crafting materials.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Scholars learn crafting techniques utilizing a variety of raw materials such as pipe cleaners, yarn, and more. Through interdisciplinary learning, scholars explore the history of the utilized techniques and craft projects.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              By studying these works, and developing skills to really "look" at art, scholars will develop an understanding on how to employ critical thinking in examining and critiquing.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Social Emotional Learning is a strong component of the program during dedicated classroom critiques.
            </p>
            <a
              href="https://links.dipus.ai/widget/groups/zineniac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300"
            >
              ✂️ Book A Call
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ArtsCrafts;
