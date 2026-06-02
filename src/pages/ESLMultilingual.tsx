import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";
import eslClassroom1 from "@/assets/esl-classroom-1.jpeg";
import eslClassroom2 from "@/assets/esl-classroom-2.jpeg";

const ESLMultilingual = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-20 relative overflow-hidden">
        <div className="bg-gradient-to-br from-fun-blue/20 via-fun-purple/15 to-fun-green/10 py-20">
          <div className="absolute top-24 left-10 w-16 h-16 fun-blob bg-fun-blue/30 animate-float" />
          <div className="container mx-auto px-6 text-center">
            <div className="inline-block bg-primary/10 rounded-full px-5 py-2 mb-4">
              <span className="text-primary font-bold text-sm">🌍 Language Learning</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-primary">ESL</span> / Multilingual
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The Best Literacy Enrichment Program
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-card rounded-3xl p-10 shadow-sm border-2 border-primary/10 mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Mission 🎯</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At ZINEniac, our mission is to use art as a gateway to learning. We create inclusive, joyful spaces where children explore science, technology, language, and critical thinking through creativity, play, and storytelling. By centering artistic expression in every program, we help young learners build confidence, curiosity, and a lifelong love of learning—while honoring every child's unique way of thinking.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-10 shadow-sm border-2 border-fun-blue/20 mb-10">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Embark on an exciting educational adventure with the Learning Incognito method – the ultimate STEAM/Literacy enrichment program! Our game-based approach revolutionizes learning, empowering young minds to thrive. Say goodbye to passive education, and hello to an engaging journey where curiosity leads to discovery.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Join us in fostering a love for learning and preparing the next generation for a dynamic future. Experience the difference with Learning Incognito.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-fun-blue/30">
              <img src={eslClassroom1} alt="Students engaged in ESL literacy enrichment activity" className="w-full h-80 object-cover" loading="lazy" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-fun-purple/30">
              <img src={eslClassroom2} alt="Young learner writing during multilingual storytelling session" className="w-full h-80 object-cover" loading="lazy" />
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://links.dipus.ai/widget/groups/zineniac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300"
            >
              📚 Book A Tour
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ESLMultilingual;
