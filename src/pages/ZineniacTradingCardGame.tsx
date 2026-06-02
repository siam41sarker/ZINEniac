import { useRef, useState, forwardRef } from "react";
// @ts-ignore - no types
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";
import BrandName from "@/components/BrandName";

import zineStudents1 from "@/assets/zine-students-1.jpg";
import zineStudents2 from "@/assets/zine-students-2.jpg";
import zineStudents3 from "@/assets/zine-students-3.jpg";
import appStoreBadge from "@/assets/app-store-badge.png";
import googlePlayBadge from "@/assets/google-play-badge.png";

const zineImages = [zineStudents1, zineStudents2, zineStudents3];

const gameImages = [
  { src: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/13eeb264-681d-49a7-b771-f43e661362e1/Rules+Book+ZINEniac+_00002.jpg", alt: "Table of Contents" },
  { src: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d6305f2c-89e9-4788-a207-3752f62699dd/Rules+Book+ZINEniac+_00003.jpg", alt: "About the Game" },
  { src: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/b0eb0bba-3b7e-401c-a023-11c42003932f/Rules+Book+ZINEniac+_00004.jpg", alt: "Basic Concepts" },
  { src: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f742db3b-6c18-4d89-b991-6bdd7eeb78a1/Rules+Book+ZINEniac+_00005.jpg", alt: "Basic Concepts 2" },
  { src: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5963c3dc-09d0-464d-81b3-3244499e2410/Rules+Book+ZINEniac+_00006.jpg", alt: "Parts of a Card" },
];

const Page = forwardRef<HTMLDivElement, { src: string; alt: string }>(({ src, alt }, ref) => (
  <div ref={ref} className="bg-white overflow-hidden">
    <img src={src} alt={alt} className="w-full h-full object-contain" loading="lazy" />
  </div>
));
Page.displayName = "Page";

const ZineniacTradingCardGame = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-20">
        <div className="bg-gradient-to-br from-[hsl(var(--fun-purple)/0.15)] via-[hsl(var(--fun-pink)/0.1)] to-[hsl(var(--fun-yellow)/0.15)] py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 flex flex-wrap items-center justify-center gap-3">
              <BrandName className="text-6xl md:text-8xl" /> <span>Trading Card Game</span>
            </h1>
            <p className="text-foreground text-xl max-w-3xl mx-auto">
              A creative STEAM-powered universe where storytelling, strategy, imagination, and learning come together through collectible cards, interactive play, and immersive adventures.
            </p>
          </div>
        </div>
      </section>

      {/* Game intro */}
      <section className="pt-16 pb-8 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">About The Game</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            The ZINEniac Trading Card Game is an immersive educational experience that blends collectible card gameplay, storytelling, creativity, and STEAM-inspired learning into one interactive universe. Through imaginative challenges, strategic gameplay, collaborative experiences, and role-playing adventures, players explore worlds designed to encourage problem-solving, creativity, communication, and critical thinking in engaging and memorable ways.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            By combining physical gameplay with creative world-building and interactive experiences, the ZINEniac universe transforms learning into an adventure driven by curiosity, exploration, and imagination.
          </p>
        </div>
      </section>

      {/* Game flipbook */}
      <FlipbookSection />


      {/* Zines section */}
      <section className="py-16 bg-gradient-to-br from-[hsl(var(--fun-blue)/0.08)] via-[hsl(var(--fun-green)/0.06)] to-[hsl(var(--fun-yellow)/0.08)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Student <span className="text-primary">Zines</span>
            </h2>
            <p className="text-foreground text-lg">
              Original stories, characters, artwork, and ideas created by ZINEniac scholars. Every adventure within the ZINEniac universe begins with student-created zines that encourage storytelling, creativity, literacy, and self-expression through imaginative world-building and design.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            {zineImages.map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]">
                <img src={img} alt={`Student zine ${i + 1}`} className="w-full h-80 object-cover" loading="lazy" />
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-black mb-4">What is a Zine?</h3>
            <p className="text-foreground text-lg leading-relaxed mb-4">
              A Zine is an original character, story, or world created by ZINEniac scholars through creativity, storytelling, illustration, and imagination. Each Zine begins as a student-created concept that is developed into part of the larger ZINEniac TCG Universe.
            </p>
            <p className="text-foreground text-lg leading-relaxed mb-4">
              Inspired by collectible trading card games, ZINEniac transforms student-created characters into interactive cards, adventures, and immersive gameplay experiences that encourage creativity, literacy, strategy, and self-expression. Through the Zine-making process, learners build storytelling, writing, artistic, and world-building skills while seeing their original creations come to life in meaningful and exciting ways.
            </p>
          </div>
        </div>
      </section>

      {/* App Store Section */}
      <section className="pt-20 pb-0 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-foreground">
            Download <BrandName className="text-4xl md:text-6xl" /> TCG
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Take the ZINEniac adventure with you! Play the trading card game anytime, anywhere on your mobile device.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a
              href="#"
              className="block hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={appStoreBadge}
                alt="Download on the App Store"
                className="w-full h-auto block drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 20px 25px rgba(0,0,0,0.4))" }}
                loading="lazy"
              />
            </a>
            <a
              href="#"
              className="block hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={googlePlayBadge}
                alt="Get it on Google Play"
                className="w-full h-auto block"
                style={{ filter: "drop-shadow(0 20px 25px rgba(0,0,0,0.4))" }}
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

const FlipbookSection = () => {
  const bookRef = useRef<any>(null);
  const [page, setPage] = useState(0);
  const total = gameImages.length;

  return (
    <section className="py-16 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-10">ZINEniac TCG Instructions</h2>

        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-[900px]">
            {/* @ts-ignore */}
            <HTMLFlipBook
              ref={bookRef}
              width={400}
              height={560}
              size="stretch"
              minWidth={280}
              maxWidth={500}
              minHeight={400}
              maxHeight={700}
              showCover={false}
              maxShadowOpacity={0.5}
              mobileScrollSupport
              className="mx-auto"
              onFlip={(e: any) => setPage(e.data)}
            >
              {gameImages.map((img, i) => (
                <Page key={i} src={img.src} alt={img.alt} />
              ))}
            </HTMLFlipBook>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={() => bookRef.current?.pageFlip()?.flipPrev()}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform shadow-lg disabled:opacity-40"
              disabled={page === 0}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-semibold text-muted-foreground min-w-[80px] text-center">
              Page {page + 1} / {total}
            </span>
            <button
              onClick={() => bookRef.current?.pageFlip()?.flipNext()}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform shadow-lg disabled:opacity-40"
              disabled={page >= total - 1}
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZineniacTradingCardGame;

