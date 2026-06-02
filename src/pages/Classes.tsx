import { useState, useRef, useEffect, MouseEvent } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

import clipart3DDrawing from "@/assets/clipart-3d-drawing.png";
import clipartArt from "@/assets/clipart-art.png";
import clipartCrafts from "@/assets/clipart-crafts.png";
import clipartArchitecture from "@/assets/clipart-architecture.png";
import clipartActing from "@/assets/clipart-acting.png";
import clipartMusic from "@/assets/clipart-music.png";
import clipartYoga from "@/assets/clipart-yoga.png";
import clipartMindfulness from "@/assets/clipart-mindfulness.png";
import clipartRobotics from "@/assets/clipart-robotics.png";
import clipartLego from "@/assets/clipart-lego.png";
import clipartStorytelling from "@/assets/clipart-storytelling.png";
import clipartMagic from "@/assets/clipart-magic.png";
import clipartTrivia from "@/assets/clipart-trivia.png";
import clipartTutoring from "@/assets/clipart-tutoring.png";

type ClassItem = {
  name: string;
  slug: string;
  image: string;
  photo: string;
  blurb: string;
};

const PHOTO = {
  art: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/810e11e3-3c60-400d-b7a0-f8b944ce61ef/student%2Btutoring%2BTeaneck%2C%2BNew%2BJersey+1+%283%29.png",
  crafts: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/631b16b1-fe18-4913-8649-5d99af8dfb11/student%2Btutoring%2BTeaneck%2C%2BNew%2BJersey+1+%285%29.png",
  architecture: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/8646aa12-490f-4437-bb53-461cdd0e54f1/student%2Btutoring%2BTeaneck%2C%2BNew%2BJersey+1+%287%29.png",
  music: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/fbc3613d-a552-4a5c-b1a1-69a1ac7c1fd1/student%2Btutoring%2BTeaneck%2C%2BNew%2BJersey+1+%288%29.png",
  yoga: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/db7524b7-7a66-4543-91d4-32aaf374a9e8/student%2Btutoring%2BTeaneck%2C%2BNew%2BJersey+1+%284%29.png",
  mindfulness: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/77c9e833-6506-43c2-9a97-85f964c76bb5/student%2Btutoring%2BTeaneck%2C%2BNew%2BJersey+1+%282%29.png",
  acting: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/4d65f6af-d088-4b1c-979d-6648bc72bda6/student%2Btutoring%2BTeaneck%2C%2BNew%2BJersey+1+%2810%29.png",
};

type Category = {
  title: string;
  tagline: string;
  color: string;
  soft: string;
  classes: ClassItem[];
};

const PLACEHOLDER =
  "Full class description coming soon. Hands-on activities, age-appropriate challenges, and creative outcomes designed for curious young learners.";

const categories: Category[] = [
  {
    title: "Creative Arts",
    tagline: "Color, sculpt, draw, design.",
    color: "#f9591f",
    soft: "#fff1ea",
    classes: [
      {
        name: "3D Drawing",
        slug: "3d-drawing",
        image: clipart3DDrawing,
        photo: PHOTO.architecture,
        blurb:
          "Utilizing STEAM principles, scholars explore how art and architecture collide to create structures and more. They employ everyday objects, traditional artistic mediums, and special tools to bring their projects to life. Along the way, scholars learn about sustainable design — building with as little impact on the natural world as possible while keeping recycling, repurposing, and renewability in mind.",
      },
      {
        name: "Art",
        slug: "art",
        image: clipartArt,
        photo: PHOTO.art,
        blurb:
          "In this art program, scholars learn artistic techniques using traditional mediums such as pencil, paint, and clay. Through interdisciplinary learning, they explore art history by studying works of art and developing the skills to truly \"look\" at art — employing critical thinking to examine and critique it. Scholars discuss the emotional response a piece invokes, then create their own work to demonstrate their understanding. Social Emotional Learning is a strong component, especially during dedicated classroom critiques.",
      },
      {
        name: "Arts & Crafts",
        slug: "arts-crafts",
        image: clipartCrafts,
        photo: PHOTO.crafts,
        blurb:
          "In this arts and crafts program, scholars crank up the fun with glitter, fabric, and an unlimited supply of crafting materials. They learn crafting techniques utilizing a variety of raw materials such as pipe cleaners, yarn, and more. Through interdisciplinary learning, scholars explore the history of the techniques and projects, developing the skills to really \"look\" at art and employ critical thinking when examining and critiquing. Social Emotional Learning is a strong component during dedicated classroom critiques.",
      },
      {
        name: "ARTchitecture",
        slug: "architecture",
        image: clipartArchitecture,
        photo: PHOTO.architecture,
        blurb:
          "Utilizing STEAM principles, scholars explore how art and architecture collide to create structures and more. They employ everyday objects, traditional artistic mediums, and special tools to create projects. Scholars also learn about sustainable architectural design so building is made with as little impact to the natural world as possible while keeping in mind recycling, repurposing, and renewability.",
      },
    ],
  },
  {
    title: "Performing Arts & Expression",
    tagline: "Move, sing, breathe, perform.",
    color: "#7c3aed",
    soft: "#f1ecfe",
    classes: [
      {
        name: "Acting",
        slug: "acting",
        image: clipartActing,
        photo: PHOTO.acting,
        blurb:
          "Scholars explore the world of the performing arts by learning improvisational skills to respond imaginatively to a range of scenarios. They develop their public speaking, storytelling, and performance skills in a positive, creative environment — and have fun nurturing their self-expression and creative thinking along the way. No need to be a professional or have an Oscar and Emmy. Our classes are acting for beginners.",
      },
      {
        name: "Music",
        slug: "music",
        image: clipartMusic,
        photo: PHOTO.music,
        blurb:
          "We want our musicians to know that music comes from within their soul. In other words… they are the music. During this awesome music program, scholars sing, dance, play instruments, and create sweet music! Original music is composed by the musicians in collaboration with their instructor, recorded, and shared with all to jam out to. Scholars learn music techniques using percussion, string, Eastern, and contemporary instruments — from tambourines and ukuleles to singing bowls and analog drum machines. All instruments and supplies are included. The program ends with a music concert featuring performances by scholars.",
      },
      {
        name: "Yoga",
        slug: "yoga",
        image: clipartYoga,
        photo: PHOTO.yoga,
        blurb:
          "Scholars are introduced to the benefits of yoga via this yoga intensive program. Topics such as breathing, yoga-based movement, and mindful meditation are taught so scholars can bring attention to their present moment and prepare their whole being. Scholars develop self-regulation skills, tackle academic stress, and improve their attention and memory by practicing yoga. Utilizing a non-competitive form of physical activity, scholars improve their motor abilities, sleep quality, and diet.",
      },
      {
        name: "Mindfulness",
        slug: "mindfulness",
        image: clipartMindfulness,
        photo: PHOTO.mindfulness,
        blurb:
          "In a post-COVID world, where scholars have suffered the traumas of its effects, mindfulness meditation has a place to help heal. The practice is equivalent to reducing one's stress, enhancing social emotional skills, and improving self-regulation through increased attention and self-awareness. By learning important strategies to identify their own needs, scholars in our mindfulness programs are able to reduce stress and anxiety while avoiding potential problem behaviors — leading to enhanced well-being, academic achievement, and social competence. It's time to get on your mindfulness zen!",
      },
    ],
  },
  {
    title: "STEAM & Innovation",
    tagline: "Build, code, invent, engineer.",
    color: "#0ea5e9",
    soft: "#e0f4fe",
    classes: [
      {
        name: "Robotics",
        slug: "robotics",
        image: clipartRobotics,
        photo: PHOTO.acting,
        blurb:
          "Scholars learn and implement the engineering design process while creating and building robots. This problem-solving methodology — used by engineers to solve real problems and learn through failure — is taught in a safe and positive environment where curiosity is celebrated and every prototype is a step forward.",
      },
      {
        name: "Lego Legends",
        slug: "lego-legends",
        image: clipartLego,
        photo: PHOTO.acting,
        blurb:
          "Scholars build up their love for learning utilizing LEGO bricks to create fun and unique projects. They systematically create and innovate while connecting ideas and bricks. Exploration in engineering and art opens up new ideas and concepts — and turns every brick into a building block for big thinking!",
      },
    ],
  },
  {
    title: "Literacy & Enrichment",
    tagline: "Read, wonder, learn, share.",
    color: "#16a34a",
    soft: "#e3f7e9",
    classes: [
      {
        name: "Storytelling",
        slug: "storytelling",
        image: clipartStorytelling,
        photo: PHOTO.art,
        blurb:
          "Scholars discover the power of their own voice through the art of storytelling. They explore narrative structure, character, and imagination — crafting and sharing original stories that build confidence, vocabulary, and public speaking skills. Through games, prompts, and collaborative tales, scholars learn that every great story starts with curiosity.",
      },
      {
        name: "Magic",
        slug: "magic",
        image: clipartMagic,
        photo: PHOTO.architecture,
        blurb:
          "Scholars explore and learn the fundamentals of magic and the secret world it lives in. There are astounding tricks to practice to perfection — card magic, making objects float in midair, coin magic, and more — to later perform for an audience. Scholars also further develop their public speaking, storytelling, and performance skills in a positive, creative environment. Who knew STEAM could be so magical?",
      },
      {
        name: "Trivia",
        slug: "trivia",
        image: clipartTrivia,
        photo: PHOTO.mindfulness,
        blurb:
          "Scholars sharpen their general knowledge, recall, and quick thinking through fun and friendly trivia challenges spanning history, science, pop culture, geography, and the arts. Working solo and in teams, scholars build confidence, collaboration, and a love for learning — proving that being curious is its own superpower.",
      },
      {
        name: "Tutoring",
        slug: "tutoring",
        image: clipartTutoring,
        photo: PHOTO.art,
        blurb:
          "Personalized academic support designed to meet each scholar where they are. Our tutors help with homework, reinforce core subjects like reading, writing, and math, and build study habits that last. Sessions are encouraging, patient, and focused on growing both skills and confidence.",
      },
    ],
  },
];

type Hovered = { item: ClassItem; color: string } | null;
type Selected = { item: ClassItem; color: string; categoryTitle: string } | null;

const Classes = () => {
  const [hovered, setHovered] = useState<Hovered>(null);
  const [selected, setSelected] = useState<Selected>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const wrapRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Smooth scroll to hash target
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    // wait a tick for DOM to be ready
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 100);
    return () => clearTimeout(t);
  }, [location]);

  const handleMove = (e: MouseEvent) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #fff4d6 0%, #ffe0c2 45%, #ffd0e0 100%)",
        }}
      >
        <div
          className="absolute inset-0 -z-0 opacity-70"
          style={{
            background:
              "radial-gradient(700px 360px at 12% 18%, #fff1ea 0%, transparent 60%), radial-gradient(700px 360px at 88% 28%, #f1ecfe 0%, transparent 60%), radial-gradient(700px 360px at 50% 100%, #e0f4fe 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto px-6 max-w-6xl text-center relative">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight">
            Our Classes
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto font-medium">
            Hands-on classes that spark creativity, build confidence, and grow curious minds.
          </p>
        </div>
      </section>

      {/* Categories with floating preview */}
      <div ref={wrapRef} onMouseMove={handleMove} className="relative">
        {categories.map((cat, idx) => (
          <section
            key={cat.title}
            style={{ backgroundColor: cat.soft }}
            className="py-20 md:py-28"
          >
            <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-12 gap-10 md:gap-16">
              {/* Category title */}
              <div className="md:col-span-5 md:sticky md:top-28 self-start">
                <div
                  className="text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-4"
                  style={{ color: cat.color }}
                >
                  Category 0{idx + 1}
                </div>
                <h2
                  className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight"
                  style={{ color: cat.color }}
                >
                  {cat.title}.
                </h2>
                <p className="mt-5 text-xl md:text-2xl text-foreground/70 font-medium">
                  {cat.tagline}
                </p>
              </div>

              {/* Class list */}
              <ul className="md:col-span-7 flex flex-col">
                {cat.classes.map((c) => {
                  const isHover = hovered?.item.slug === c.slug;
                  return (
                    <li key={c.slug} id={c.slug} className="scroll-mt-28">
                      <button
                        onMouseEnter={() => setHovered({ item: c, color: cat.color })}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() =>
                          setSelected({ item: c, color: cat.color, categoryTitle: cat.title })
                        }
                        className="w-full text-left flex items-center justify-between gap-6 py-5 md:py-6 border-b group transition-colors"
                        style={{ borderColor: `${cat.color}33` }}
                      >
                        <span
                          className="text-3xl md:text-5xl font-black tracking-tight transition-all duration-300"
                          style={{
                            color: isHover ? cat.color : "hsl(var(--foreground))",
                            transform: isHover ? "translateX(12px)" : "translateX(0)",
                            display: "inline-block",
                          }}
                        >
                          {c.name}
                        </span>
                        <span
                          className="text-sm md:text-base font-semibold uppercase tracking-widest transition-opacity duration-300"
                          style={{
                            color: cat.color,
                            opacity: isHover ? 1 : 0.4,
                          }}
                        >
                          View →
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        ))}

        {/* Floating preview that follows cursor */}
        {hovered && (
          <div
            className="pointer-events-none absolute z-30 hidden md:block transition-transform duration-100"
            style={{
              left: cursor.x,
              top: cursor.y,
              transform: "translate(-50%, -110%)",
            }}
          >
            <div
              className="w-72 h-72 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: hovered.color }}
            >
              <img
                src={hovered.item.image}
                alt={hovered.item.name}
                className="w-full h-full object-contain p-6"
                width={512}
                height={512}
              />
            </div>
          </div>
        )}
      </div>

      {/* Detail modal on click */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-[2rem] max-w-3xl w-full overflow-hidden relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="grid md:grid-cols-2">
              <div className="aspect-square md:aspect-auto overflow-hidden bg-black/5">
                <img
                  src={selected.item.photo}
                  alt={selected.item.name}
                  className="block w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div
                  className="text-xs font-black uppercase tracking-[0.25em] mb-3"
                  style={{ color: selected.color }}
                >
                  {selected.categoryTitle}
                </div>
                <h3
                  className="text-4xl md:text-5xl font-black tracking-tight mb-5"
                  style={{ color: selected.color }}
                >
                  {selected.item.name}
                </h3>
                <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
                  {selected.item.blurb}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="container mx-auto px-6 max-w-5xl py-24">
        <div
          className="rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #f9591f 0%, #ff7a45 50%, #7c3aed 100%)",
          }}
        >
          <h3 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ready to bring ZINEniac to your school?
          </h3>
          <p className="text-white/90 text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-medium">
            Let's talk about which classes fit your students best.
          </p>
          <Link
            to="/children/contact"
            className="inline-block bg-white text-foreground px-12 py-5 rounded-full font-black text-lg md:text-xl hover:scale-105 transition-transform duration-300 shadow-2xl"
          >
            Connect With Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Classes;
