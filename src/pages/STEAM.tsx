import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";

const STEAM = () => {
  const sections = [
    {
      title: "The Marvel of STEAM Learning",
      text: "Before we delve into the magic of ZINEniac, let's understand the essence of STEAM learning. Science, Technology, English/Engineering, Arts, and Mathematics come together in an integrated approach, fostering holistic development in children. It's not just about equations and formulas; it's about creativity, problem-solving, and critical thinking.",
      emoji: "🔬",
      image: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/dfb02258-655c-44f7-aea0-360810f58173/Rectangle+53.png",
    },
    {
      title: "OUR Interactive Lessons: Fanning the Flames of Curiosity",
      text: "At ZINEniac, education isn't confined to textbooks. Our classes bring lessons to life, allowing scholars to experiment, ask questions, and immerse themselves in the world of discovery. It's not about memorizing; it's about understanding.",
      emoji: "🧪",
      image: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ec2dfdc3-d9e7-4049-bb50-0f80f58214c2/Rectangle+52.png",
    },
    {
      title: "Creativity Unleashed: Art and Design in STEAM",
      text: "Who said science and art can't dance together? ZINEniac dispels this myth by incorporating artistic elements into STEAM. From drawing robots to crafting mathematical shapes, children get to express themselves creatively while mastering fundamental concepts.",
      emoji: "🎨",
    },
    {
      title: "Real-World Applications: Turning Theory into Practice",
      text: "Learning gains true meaning when it finds real-world applications. ZINEniac bridges the gap between theory and practice by showcasing how STEAM is woven into the fabric of our daily lives. It's not just about the classroom; it's about preparing scholars for the world beyond.",
      emoji: "🌍",
    },
    {
      title: "Gamifying Education: Turning Challenges into Adventures",
      text: "ZINEniac understands this and introduces an element of gamification into learning. Challenges become adventures, and problems turn into puzzles making the entire process not just educational but also immensely enjoyable.",
      emoji: "🎮",
    },
    {
      title: "ZINEniac's Impact on Academic Performance",
      text: "Parents often wonder about the tangible benefits of educational platforms. ZINEniac does not just promise; it delivers. Studies show a marked improvement in academic performance among children who embrace STEAM learning through ZINEniac. It's not just about grades; it's about building a foundation for a successful future.",
      emoji: "📈",
    },
    {
      title: "Empowering Parents: A Support System",
      text: "ZINEniac does not leave parents out of the equation. With regular progress reports and insights into a child's learning journey, parents become an integral part of the process. It's not just a curriculum for scholars; it's a support system for parents.",
      emoji: "👨‍👩‍👧",
    },
    {
      title: "The ZINEniac Community: Learning Together",
      text: "Education is a journey best traveled with companions. ZINEniac creates a community among learners, encouraging collaboration and the sharing of ideas. It's not just about individual growth; it's about learning together and from each other.",
      emoji: "🤝",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero with image */}
      <section className="pt-20 relative overflow-hidden">
        <div className="bg-gradient-to-br from-fun-yellow/20 via-fun-green/15 to-fun-blue/10 py-20">
          <div className="absolute top-24 left-10 w-16 h-16 fun-blob bg-fun-yellow/30 animate-float" />
          <div className="absolute bottom-10 right-16 w-20 h-20 fun-blob bg-fun-green/20 animate-float-slow" />
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-block bg-primary/10 rounded-full px-5 py-2 mb-4">
                  <span className="text-primary font-bold text-sm">🔬 Unlock Your Creativity</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Fun and Educational <span className="text-primary">STEAM</span>
                </h1>
                <p className="text-xl text-muted-foreground">Learning for SCHOLARS</p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl ring-4 ring-fun-yellow/30">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c48db982-a873-4982-8919-72b86586aa5e/Group+9.png"
                  alt="STEAM Learning at ZINEniac"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections with images */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          {sections.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center mb-16 last:mb-0`}
            >
              {s.image && (
                <div className="lg:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-lg ring-2 ring-primary/10">
                    <img src={s.image} alt={s.title} className="w-full object-cover" />
                  </div>
                </div>
              )}
              <div className={s.image ? "lg:w-1/2" : "max-w-3xl mx-auto"}>
                <div className="bg-card rounded-3xl p-8 shadow-sm border-2 border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="text-4xl mb-4">{s.emoji}</div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-12">
            <a
              href="https://links.dipus.ai/widget/groups/zineniac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300"
            >
              🚀 Book A Tour
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default STEAM;
