import logo from "@/assets/logo.png";
import gallery1 from "@/assets/gallery-1.png";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-background">
      {/* Fun decorative blobs */}
      <div className="absolute top-24 left-[-30px] w-32 h-32 fun-blob bg-fun-yellow/40 animate-float" />
      <div className="absolute top-40 right-[-20px] w-20 h-20 fun-blob-2 bg-fun-blue/30 animate-float-slow" />
      <div className="absolute top-60 left-[10%] w-14 h-14 rounded-full bg-fun-green/40 animate-bounce-gentle" />
      <div className="absolute bottom-20 right-[15%] w-16 h-16 fun-blob-3 bg-fun-pink/30 animate-float" />
      <div className="absolute top-32 right-1/3 w-10 h-10 rounded-full bg-fun-purple/30 animate-float-slow" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative flex justify-center order-1 lg:order-1">
            <div className="relative">
              {/* Colorful frame behind image */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary via-fun-yellow to-fun-blue opacity-30 blur-sm" />
              <img
                src={gallery1}
                alt="Children creating art at ZINEniac"
                className="relative w-full max-w-lg rounded-[2rem] object-cover z-10 shadow-2xl"
              />
            </div>
          </div>


          {/* Text side */}
          <div className="order-2 lg:order-2">
            <div className="inline-block bg-primary/10 rounded-full px-5 py-2 mb-4">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">
                Innovative Educational Experiences for Young Learners
              </span>
            </div>
            <img src={logo} alt="ZINEniac" className="h-12 md:h-16 w-auto mb-2" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Where Learning{" "}
              <span className="text-primary relative">
                Feels Like
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C30 1 60 7 100 3.5C140 0 170 6 199 2.5" stroke="hsl(16 95% 55%)" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>{" "}
              <span className="text-primary">Play</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
              ZINEniac provides interactive literacy and STEAM enrichment experiences designed to keep children engaged, curious, and inspired to learn. Our hands-on approach encourages creativity, collaboration, and critical thinking while helping children build meaningful academic and social skills through immersive educational activities.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/children/our-program"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Explore Programs
              </a>
              <a
                href="https://links.dipus.ai/widget/groups/zineniac"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Connect With Our Team
              </a>
            </div>

            {/* Fun stats */}
            <div className="flex gap-6 mt-10">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">K-12</p>
                <p className="text-sm text-muted-foreground font-semibold">Supporting Children Across Grade Levels</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-fun-blue">10:1</p>
                <p className="text-sm text-muted-foreground font-semibold">Small Group Learning Environment</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-fun-green">STEAM</p>
                <p className="text-sm text-muted-foreground font-semibold">Hands-On Educational Experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
