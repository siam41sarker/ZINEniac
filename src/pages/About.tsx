import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";
import ZigzagDivider from "@/components/ZigzagDivider";
import CTABanner from "@/components/CTABanner";
import BrandName from "@/components/BrandName";
import { Sparkles, Compass, Target } from "lucide-react";
import stephanieImg from "@/assets/stephanie-santiago.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO — Where Creativity, Learning, and Community Come Together */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-[#fff4d6] via-[#ffe0c2] to-[#ffd0e0]">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-[#7c3aed]/20 blur-3xl" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-foreground/10 mb-8">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-foreground">
                About Us
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-8 text-foreground">
              Where Creativity,
              <br />
              <span className="bg-gradient-to-r from-[#f9591f] via-[#e11d74] to-[#7c3aed] bg-clip-text text-transparent">
                Learning, and Community
              </span>
              <br />
              Come Together
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-foreground/80 max-w-3xl mx-auto">
              ZINEniac is an innovative educational enrichment organization dedicated to creating engaging, inclusive, and hands-on learning experiences for children, adults, schools, families, and communities. Through literacy, STEAM, creative arts, movement, and interactive enrichment programming, we provide welcoming environments where everyone is encouraged to explore ideas, express creativity, collaborate with others, and build meaningful skills through active participation.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-foreground/80 max-w-3xl mx-auto mt-6">
              At ZINEniac, we believe learning should feel inspiring, accessible, and engaging. Our programs are intentionally designed to encourage curiosity, confidence, communication, and creativity while supporting a wide range of learning styles, backgrounds, interests, and abilities. By blending education with immersive experiences, we help everyone remain connected, motivated, and excited throughout the learning process.
            </p>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-24 bg-[#f1ecfe] relative overflow-hidden">
        <div className="pointer-events-none absolute top-10 right-10 w-72 h-72 rounded-full bg-[#7c3aed]/15 blur-3xl" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#7c3aed] flex items-center justify-center shadow-lg">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#7c3aed]">
                Our Approach
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-3 text-foreground">
              Learning Incognito
              <span className="align-super text-2xl md:text-3xl">™</span>
            </h2>
            <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#e11d74] mb-8" />

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-white">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/85 mb-6">
                ZINEniac's Learning Incognito™ approach encourages students to develop skills naturally through participation, exploration, collaboration, storytelling, movement, design, and project-based experiences. Rather than relying solely on traditional instruction, our programs emphasize hands-on engagement, creative problem-solving, and interactive learning environments that encourage meaningful participation and discovery.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/85">
                Through this approach, learners strengthen communication, literacy, critical-thinking, collaboration, and social-emotional skills while engaging in experiences that feel welcoming, creative, and memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="py-24 bg-gradient-to-br from-[#e3f7e9] via-[#e0f4fe] to-[#fff1ea] relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#16a34a]/15 blur-3xl" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#16a34a] flex items-center justify-center shadow-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#16a34a]">
                Our Mission
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-8 text-foreground">
              Empowering every student
              <br />
              through{" "}
              <span className="bg-gradient-to-r from-[#16a34a] via-[#0ea5e9] to-[#7c3aed] bg-clip-text text-transparent">
                creativity, literacy,
              </span>
              <br />
              and meaningful educational experiences.
            </h2>
          </div>
        </div>
      </section>

      {/* Stephanie Santiago */}
      <section className="relative py-28 overflow-hidden bg-background">
        <div className="container mx-auto px-6 max-w-6xl relative">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Image — white framed pop-up portrait */}
            <div className="lg:col-span-2 relative flex justify-center">
              <img
                src={stephanieImg}
                alt="Stephanie Santiago — Founder & CEO of ZINEniac"
                className="relative w-full max-w-md aspect-[4/5] object-cover rounded-[2rem] shadow-2xl ring-4 ring-white"
              />
            </div>

            {/* Bio */}
            <div className="lg:col-span-3">
              <span className="inline-block text-xs font-black uppercase tracking-[0.3em] text-primary mb-3">
                Meet Our Founder
              </span>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-2 text-foreground">
                Stephanie Santiago
              </h2>
              <p className="font-bold text-xl mb-6 bg-gradient-to-r from-[#f9591f] via-[#e11d74] to-[#7c3aed] bg-clip-text text-transparent">
                Founder &amp; CEO
              </p>
              <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-[#f9591f] to-[#7c3aed] mb-8" />

              <div className="space-y-5 text-foreground/85 text-lg leading-relaxed">
                <p>
                  Stephanie Santiago is a Cuban-American artist, educator, and creative visionary from New Jersey whose passion for education, creativity, and community inspired the creation of ZINEniac.
                </p>
                <p>
                  She studied at the Dalia Condis Fine Arts School and earned her Master of Fine Arts (MFA) from Montclair State University. With more than 15 years of experience working across private schools, K–12 education, special education, at-risk youth programs, and collegiate environments, Stephanie has dedicated her career to creating engaging and meaningful learning experiences for learners of diverse backgrounds and abilities.
                </p>
                <p>
                  Her approach combines creativity, hands-on exploration, artistic expression, and interactive learning to help learners feel connected, inspired, and empowered through education. Through ZINEniac, Stephanie continues to build welcoming environments where curiosity, imagination, collaboration, and self-expression come together to create memorable educational experiences for schools, families, and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <ZigzagDivider topColor="hsl(var(--background))" bottomColor="hsl(var(--primary))" />
      <CTABanner />
      <ZigzagDivider topColor="hsl(var(--primary))" bottomColor="hsl(220 20% 14%)" />
      <Footer />
    </div>
  );
};

export default About;
