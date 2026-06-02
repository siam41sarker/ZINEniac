import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";
import { useState, useEffect } from "react";
import heroImage from "@/assets/our-program-hero.jpg";
import steamLetters from "@/assets/steam-letters.png";

import eslClassroom1 from "@/assets/esl-classroom-1.jpeg";
import eslClassroom2 from "@/assets/esl-classroom-2.jpeg";
import afterSchoolEnrichment1 from "@/assets/after-school-enrichment-1.png";
import afterSchoolEnrichment2 from "@/assets/after-school-enrichment-2.jpeg";
import summerCampsImg from "@/assets/summer-camps.jpg";
import afterCareHero from "@/assets/after-care-hero.png";



const SIGNATURE = "#f9591f";

const programLinks = [
  {
    id: "steam",
    title: "STEAM",
    emoji: "🔬",
    image:
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c48db982-a873-4982-8919-72b86586aa5e/Group+9.png",
    tagline: "Hands-on science, tech, engineering, art & math.",
    examples: ["Robotics", "Coding", "Art Studio", "Math Lab"],
  },
  {
    id: "after-care",
    title: "After Care",
    emoji: "🌅",
    image:
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/0c7b8980-50dc-4ded-964e-c4a4a117c319/Rectangle+57.png",
    tagline: "A safe, enriching home-away-from-home after the school bell.",
    examples: ["Homework Help", "Snack Time", "Creative Play"],
  },
  {
    id: "esl-multilingual",
    title: "ESL / Multilingual",
    emoji: "🌍",
    image:
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/36fa916d-15b8-43f7-918f-3a0f326ac57d/Group+14.png",
    tagline: "Confident communication in any language.",
    examples: ["ELL/ENL", "SIFE Support", "Bilingual Tutors"],
  },
  {
    id: "camps",
    title: "ZINEniac's Seasonal Camps",
    emoji: "☀️",
    image:
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d21044bb-ec98-40e1-8475-ee058dfa5928/Group+8+%284%29.png",
    tagline: "Sun-soaked days of creativity and play.",
    examples: ["STEAM Camp", "Art Camp", "Adventure Weeks"],
  },
  {
    id: "after-school-enrichment",
    title: "After School Enrichment",
    emoji: "🎒",
    image:
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/06032a9c-d928-43a0-8e12-d756fe24832a/Group+9+%283%29.png",
    tagline: "Hands-on classes that turn afternoons into adventures.",
    examples: ["STEAM Labs", "Arts Studio", "Robotics"],
  },
];

const handleJump = (e: React.MouseEvent, id: string) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const ImageSlider = ({ slides }: { slides: { src: string; alt: string }[] }) => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, [slides.length]);
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.src}
          alt={s.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${i === idx ? "w-8 bg-white" : "w-2.5 bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
};

const OurProgram = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = programLinks[activeIdx];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-[140px] pb-[80px]" style={{ backgroundColor: "#faf7eb" }}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src={heroImage}
                alt="Children learning at ZINEniac"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary">
                Our Programs
              </h1>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                ZINEniac provides interactive STEAM and literacy enrichment experiences designed to encourage creativity, participation, and meaningful learning. Through hands-on activities, collaborative projects, and immersive educational experiences, children are supported in developing communication, critical-thinking, and problem-solving skills in engaging and welcoming environments.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our approach combines creativity, exploration, and project-based learning to help children stay curious, actively involved, and connected throughout the learning experience. By creating spaces that encourage self-expression and collaboration, ZINEniac helps students build skills that support both academic and personal development.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ============ STEAM SECTION ============ */}
      <section id="steam" className="py-20 bg-background scroll-mt-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Fun and Educational <span style={{ color: SIGNATURE }}>STEAM</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Hands-on learning through Science, Technology, Engineering, Art, and Mathematics.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={steamLetters}
                alt="STEAM - Science, Technology, English, Arts, Mathematics"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "The Power of STEAM Learning", text: "STEAM connects science, technology, engineering, arts, and mathematics through interactive experiences that encourage creativity, collaboration, and critical thinking.", emoji: "🔬", color: "#e53935" },
              { title: "Interactive Experiences", text: "Students actively participate through hands-on activities, experimentation, discussion, and creative exploration.", emoji: "🧪", color: "#01ebfe" },
              { title: "Creativity in Action", text: "From robotics to visual arts, children are encouraged to express ideas, solve problems, and explore new ways of thinking.", emoji: "🎨", color: "#FD7209" },
              { title: "Real World Connections", text: "Activities are designed to help learners apply concepts through practical experiences that connect learning to everyday life.", emoji: "🌍", color: "#43a047" },
              { title: "Electrified Learning", text: "Educational challenges and interactive activities transform learning into engaging and memorable experiences.", emoji: "⚡", color: "#fdd835" },
              { title: "Collaborative Community", text: "ZINEniac encourages teamwork, participation, communication, and shared discovery in welcoming learning environments.", emoji: "🤝", color: "#FF08ED" },

            ].map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-[2.5rem] p-8 border-4 transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1"
                style={{
                  borderColor: s.color,
                  boxShadow: `8px 8px 0px 0px ${s.color}26`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 text-3xl"
                  style={{
                    backgroundColor: `${s.color}1A`,
                    borderColor: `${s.color}33`,
                  }}
                >
                  {s.emoji}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============ AFTER CARE SECTION ============ */}
      <section id="after-care" className="py-20 bg-card scroll-mt-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span style={{ color: SIGNATURE }}>After Care</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                A welcoming and engaging environment where children can relax, connect, create, and continue learning beyond the school day.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={afterCareHero}
                alt="After Care at ZINEniac"
                className="w-full object-cover"
              />
            </div>
          </div>

          <div
            className="bg-background rounded-3xl p-10 shadow-sm border-2 mb-8"
            style={{ borderColor: `${SIGNATURE}1A` }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              ZINEniac's After Care program provides structured and supportive environments where children can participate in creative activities, collaborative experiences, literacy enrichment, STEAM exploration, and supervised recreational time after school hours.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Our programs are designed to encourage social interaction, creativity, communication, and meaningful engagement while giving families peace of mind in safe and welcoming environments. Students are encouraged to unwind, explore new interests, build friendships, and stay actively engaged through hands-on experiences designed around creativity and connection.
            </p>
          </div>

          <div
            className="relative overflow-hidden rounded-3xl p-10 shadow-lg border-2"
            style={{
              borderColor: `${SIGNATURE}33`,
              background: `linear-gradient(135deg, ${SIGNATURE}0D 0%, hsl(var(--background)) 60%)`,
            }}
          >
            {/* Decorative blobs */}
            <div
              className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full blur-3xl opacity-30"
              style={{ backgroundColor: SIGNATURE }}
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: SIGNATURE }}
            />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-2xl shadow-md"
                  style={{ backgroundColor: SIGNATURE, color: "white" }}
                >
                  🗓️
                </span>
                <h3 className="text-3xl md:text-4xl font-black tracking-tight">
                  <span style={{ color: SIGNATURE }}>Program</span>{" "}
                  <span className="text-foreground">Schedule</span>
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-base font-extrabold text-white shadow-lg -rotate-2 hover:rotate-0 transition-transform"
                  style={{ backgroundColor: SIGNATURE, borderRadius: "9999px 20px 9999px 20px" }}
                >
                  <span className="text-xl">📅</span> Monday – Friday
                </span>
                <span
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-base font-extrabold shadow-lg rotate-2 hover:rotate-0 transition-transform bg-[hsl(var(--fun-yellow))] text-foreground"
                  style={{ borderRadius: "20px 9999px 20px 9999px" }}
                >
                  <span className="text-xl">⏰</span> 3:00 PM – 6:00 PM
                </span>
              </div>

              <p className="text-foreground/80 text-lg leading-relaxed mb-8 max-w-2xl">
                Children participate in engaging after-school experiences that balance{" "}
                <span className="font-bold" style={{ color: SIGNATURE }}>creativity</span>,{" "}
                <span className="font-bold" style={{ color: SIGNATURE }}>exploration</span>,{" "}
                <span className="font-bold" style={{ color: SIGNATURE }}>recreation</span>, and{" "}
                <span className="font-bold" style={{ color: SIGNATURE }}>structured enrichment</span>{" "}
                in supportive group environments.
              </p>

              <a
                href="tel:+12014697194"
                className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-extrabold text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all"
                style={{ backgroundColor: SIGNATURE }}
              >
                Call Us Today
              </a>
            </div>
          </div>


        </div>
      </section>

      {/* ============ ESL / MULTILINGUAL SECTION ============ */}
      <section id="esl-multilingual" className="py-20 bg-background scroll-mt-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span style={{ color: SIGNATURE }}>ESL</span> / Multilingual
              </h2>
              <p className="text-xl text-muted-foreground">
                Language-rich experiences designed to encourage communication, confidence, and cultural connection.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <div className="relative">
                <div
                  className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-[6px] shadow-xl -rotate-3 hover:rotate-0 transition-transform duration-500"
                  style={{ borderColor: SIGNATURE }}
                >
                  <img src={eslClassroom1} alt="Students engaged in ESL literacy enrichment activity" className="w-full h-full object-cover" />
                </div>
                <span className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-[hsl(var(--fun-yellow))]" />
              </div>
              <div className="relative">
                <div
                  className="w-52 h-52 md:w-64 md:h-64 overflow-hidden border-[6px] shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500"
                  style={{ borderColor: SIGNATURE, borderRadius: "62% 38% 55% 45% / 50% 60% 40% 50%" }}
                >
                  <img src={eslClassroom2} alt="Young learner writing during multilingual storytelling session" className="w-full h-full object-cover" />
                </div>
                <span className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full" style={{ backgroundColor: SIGNATURE }} />
              </div>
            </div>
          </div>

          <div
            className="relative rounded-[2rem] p-10 shadow-lg border-4 border-dashed mb-8 -rotate-1 hover:rotate-0 transition-transform duration-300"
            style={{ borderColor: SIGNATURE, backgroundColor: `${SIGNATURE}26` }}
          >
            <span className="absolute -top-4 -left-4 w-10 h-10 rounded-full shadow-md" style={{ backgroundColor: SIGNATURE }} />
            <span className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-white shadow-md border-4" style={{ borderColor: SIGNATURE }} />
            <h3 className="text-3xl font-black mb-4" style={{ color: SIGNATURE }}>Our Approach</h3>
            <p className="text-foreground/80 text-lg leading-relaxed font-medium">
              At ZINEniac, we turn language learning into a blast! Our special program for English learners mixes fun methods with home language support until students master the English language. Students will dive into our exciting enrichment programs, where confidence in communication and academics takes center stage. Join the language-learning party and build a foundation for a lifetime of linguistic success!
            </p>
          </div>

          <div
            className="relative bg-card rounded-[2rem] p-10 shadow-lg border-4 border-dotted mb-8 rotate-1 hover:rotate-0 transition-transform duration-300"
            style={{ borderColor: SIGNATURE }}
          >
            <span className="absolute -top-4 -right-4 w-10 h-10 rounded-full shadow-md bg-[hsl(var(--fun-yellow))] border-4" style={{ borderColor: SIGNATURE }} />
            <p className="text-foreground/80 text-lg leading-relaxed font-medium">
              Our ESL/Multilingual learning program is designed to break down linguistic barriers, fostering communication and understanding in an increasingly interconnected world.
            </p>
          </div>
        </div>
      </section>

      {/* ============ CAMPS SECTION ============ */}
      <section id="camps" className="py-20 bg-card scroll-mt-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                ZINEniac's <span style={{ color: SIGNATURE }}>Seasonal Camps</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                STEAM-powered camp experiences designed for creativity, exploration, and connection throughout the year.
              </p>
            </div>
            <div className="mt-12 md:mt-16 rounded-3xl shadow-xl overflow-hidden">
              <img
                src={summerCampsImg}
                alt="Summer Camps"
                className="w-full object-contain"
              />
            </div>
          </div>

          <div
            className="bg-background rounded-3xl p-10 shadow-sm border-2 mb-8"
            style={{ borderColor: `${SIGNATURE}1A` }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              ZINEniac offers engaging seasonal camp experiences during summer, spring, and holiday breaks through interactive enrichment activities that encourage creativity, collaboration, and hands-on exploration.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our camps combine STEAM experiences, creative arts, literacy enrichment, games, and group activities in welcoming environments designed to keep children active, curious, and connected during school breaks. Our programs are thoughtfully designed for a variety of age groups and interests while creating memorable experiences that balance learning, creativity, and fun.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                emoji: "🎨",
                title: "Creative Arts",
                desc: "Hands-on creative experiences that encourage imagination, self-expression, and artistic exploration.",
              },
              {
                emoji: "🔬",
                title: "STEAM Labs",
                desc: "Interactive science, technology, engineering, arts, and math activities designed around experimentation and discovery.",
              },
              {
                emoji: "🌍",
                title: "Language & Literacy",
                desc: "Storytelling, communication, reading, and collaborative activities designed to encourage expression and participation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 text-center border-2"
                style={{ backgroundColor: `${SIGNATURE}0D`, borderColor: `${SIGNATURE}33` }}
              >
                <p className="text-3xl mb-2">{item.emoji}</p>
                <p className="font-bold text-foreground mb-2">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AFTER SCHOOL ENRICHMENT SECTION ============ */}
      <section id="after-school-enrichment" className="py-20 bg-background scroll-mt-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                After School <span style={{ color: SIGNATURE }}>Enrichment</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Interactive educational experiences that keep learners engaged beyond the classroom.
              </p>
            </div>
            <div className="rounded-3xl shadow-xl overflow-hidden">
              <img
                src={afterSchoolEnrichment2}
                alt="ZINEniac instructor leading a hands-on enrichment activity with students"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div
            className="bg-card rounded-3xl p-10 shadow-sm border-2 mb-8"
            style={{ borderColor: `${SIGNATURE}1A` }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              ZINEniac's After School Enrichment programs combine creativity, collaboration, literacy, STEAM, and hands-on learning in welcoming environments designed to support participation, exploration, and meaningful engagement after the school day ends.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Through interactive activities, project-based experiences, and creative enrichment opportunities, learners are encouraged to build communication, explore new interests, and stay actively connected in supportive group settings.
            </p>
          </div>



          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Engaging Activities",
                desc: "Interactive experiences designed to encourage participation, creativity, teamwork, and exploration through hands-on enrichment.",
                emoji: "✨",
                color: "#01ebfe",
              },
              {
                title: "Literacy & STEAM",
                desc: "Programs that integrate reading, creativity, science, technology, engineering, arts, and mathematics through engaging projects and activities.",
                emoji: "📚",
                color: "#FD7209",
              },
              {
                title: "Supportive Environments",
                desc: "Welcoming spaces where every student feels encouraged to participate, collaborate, and explore new ideas confidently.",
                emoji: "🤝",
                color: "#43a047",
              },
              {
                title: "Skill Development",
                desc: "Activities designed to strengthen communication, critical thinking, problem-solving, collaboration, and self-expression.",
                emoji: "🌱",
                color: "#FF08ED",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-[2.5rem] p-8 border-4 transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1"
                style={{
                  borderColor: s.color,
                  boxShadow: `8px 8px 0px 0px ${s.color}26`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 text-3xl"
                  style={{
                    borderColor: s.color,
                    backgroundColor: `${s.color}1A`,
                  }}
                >
                  {s.emoji}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default OurProgram;
