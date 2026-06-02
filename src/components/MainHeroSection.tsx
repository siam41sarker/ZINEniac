import ImageSlideshow from "./ImageSlideshow";
import heroImage from "@/assets/real-children-1.jpg";
import hero2 from "@/assets/real-adults.jpg";
import hero3 from "@/assets/real-art.jpg";
import hero4 from "@/assets/real-children-2.jpg";
import hero5 from "@/assets/real-children-3.jpg";

const MainHeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-background">
      {/* Subtle decorative accent */}
      <div className="absolute top-32 right-1/3 w-12 h-12 rounded-full bg-primary/10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-foreground">
              Where Every Learner <br /><span className="text-primary">Finds Their Artistic Voice</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl leading-relaxed">
              ZINEniac provides innovative educational enrichment programs that foster communication, critical thinking, creativity, and personal growth through engaging, hands-on learning experiences. Our student-centered approach empowers everyone to build confidence, strengthen essential life and academic skills, and develop a lasting passion for learning.<br /><br />By Combining inclusive educational practices with dynamic enrichment programming. ZINEniac helps every student create meaningful opportunities that support engagement, growth, and success.
            </p>
            <div className="relative inline-flex flex-wrap gap-4 items-center">
              {/* Decorative green circle to the LEFT of the button */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-accent/30 -z-0" />
              <a
                href="#programs"
                className="relative bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-md"
              >
                Explore Our Programs
              </a>
              <a
                href="#contact"
                className="border-2 border-foreground text-foreground px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-foreground hover:text-background transition-colors"
              >
                Connect With Us
              </a>
            </div>
          </div>

          {/* Slideshow */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <ImageSlideshow
                images={[heroImage, hero2, hero3, hero4, hero5]}
                alt="ZINEniac learners"
                className="w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 left-4 bg-card rounded-xl shadow-lg px-6 py-4">
              <p className="text-3xl font-bold text-primary">2,000+</p>
              <p className="text-sm text-muted-foreground">Learners Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeroSection;
