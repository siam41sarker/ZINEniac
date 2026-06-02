import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";
import BrandName from "@/components/BrandName";

const gameImages = [
  { src: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/13eeb264-681d-49a7-b771-f43e661362e1/Rules+Book+ZINEniac+_00002.jpg", alt: "Table of Contents" },
  { src: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d6305f2c-89e9-4788-a207-3752f62699dd/Rules+Book+ZINEniac+_00003.jpg", alt: "About the Game" },
  { src: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/b0eb0bba-3b7e-401c-a023-11c42003932f/Rules+Book+ZINEniac+_00004.jpg", alt: "Basic Concepts" },
  { src: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f742db3b-6c18-4d89-b991-6bdd7eeb78a1/Rules+Book+ZINEniac+_00005.jpg", alt: "Basic Concepts 2" },
  { src: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5963c3dc-09d0-464d-81b3-3244499e2410/Rules+Book+ZINEniac+_00006.jpg", alt: "Parts of a Card" },
];

const ZineniacGames = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <BrandName className="text-4xl md:text-5xl" /> Games
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              ZINEniac is a dynamic, STEAM-powered ecosystem that integrates a collectible trading card game, an immersive tabletop role-playing game, and an interactive educational app into one cohesive learning experience. Students embark on an epic journey through the ZINEniac multiverse, where storytelling, strategy, and problem-solving converge across physical and digital play.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10"><BrandName className="text-3xl" /> Adventures</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {gameImages.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img src={img.src} alt={img.alt} className="w-full h-auto" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ZineniacGames;
