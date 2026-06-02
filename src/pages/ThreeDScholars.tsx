import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";

const ThreeDScholars = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-20 relative overflow-hidden">
        <div className="bg-gradient-to-br from-fun-blue/20 via-fun-green/15 to-fun-yellow/10 py-20">
          <div className="absolute top-24 left-10 w-16 h-16 fun-blob bg-fun-blue/30 animate-float" />
          <div className="container mx-auto px-6 text-center">
            <div className="inline-block bg-primary/10 rounded-full px-5 py-2 mb-4">
              <span className="text-primary font-bold text-sm">🏗️ Build & Create</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-primary">3D Scholars</span> Program
            </h1>
            <p className="text-xl text-muted-foreground mt-4">Big Ideas, Real Impact.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-card rounded-3xl p-10 shadow-sm border-2 border-fun-blue/20 mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Mission 🎯</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At ZINEniac, our mission is to use art as a gateway to learning. We create inclusive, joyful spaces where children explore science, technology, language, and critical thinking through creativity, play, and storytelling. By centering artistic expression in every program, we help young learners build confidence, curiosity, and a lifelong love of learning—while honoring every child's unique way of thinking.
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://links.dipus.ai/widget/groups/zineniac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300"
            >
              🏗️ Book A Tour
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ThreeDScholars;
