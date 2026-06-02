import { Link } from "react-router-dom";
import { useComingSoon } from "./ComingSoonModal";
import programChildren from "@/assets/real-children-1.jpg";
import programAdults from "@/assets/program-adult-art.jpg";
import programMedicaid from "@/assets/program-adults.jpg";

const programs = [
  {
    title: "Children",
    image: programChildren,
    color: "bg-secondary",
    link: "/children",
    external: false,
    locked: false,
    description:
      "Interactive literacy, creativity, and enrichment programs designed to build confidence, communication, and a lifelong love for learning in every child.",
  },
  {
    title: "Adults",
    image: programAdults,
    color: "bg-blue-program",
    link: "#",
    external: false,
    locked: true,
    description:
      "Interactive experiences that encourage adults to connect, create, collaborate, and build meaningful relationships in welcoming environments.",
  },
  {
    title: "Community Support",
    image: programMedicaid,
    color: "bg-accent",
    link: "#",
    external: false,
    locked: true,
    description:
      "Educational and enrichment services for individuals with developmental disabilities that are designed to provide accessible, meaningful experiences throughout the community. Medicaid accepted.",
  },
];

const ProgramCardsSection = () => {
  const { trigger } = useComingSoon();

  return (
    <section id="programs" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Programs Designed to <span className="text-primary">Inspire Everyone</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => {
            const cardInner = (
              <>
                <div className="relative">
                  <img
                    src={program.image}
                    alt={`${program.title} program at ZINEniac`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-64 object-cover"
                    style={program.title === "Children" ? { objectPosition: "top left" } : undefined}
                  />
                  <div className={`${program.color} py-4 text-center`}>
                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-primary-foreground">
                      {program.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-foreground/80 text-lg leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <span className="text-primary font-semibold hover:underline text-base">
                    Learn more →
                  </span>
                </div>
              </>
            );

            const className =
              "bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow block cursor-pointer";

            if (program.locked) {
              return (
                <div
                  key={program.title}
                  className={className}
                  onClick={() => trigger(program.title)}
                >
                  {cardInner}
                </div>
              );
            }

            return (
              <Link key={program.title} to={program.link} className={className}>
                {cardInner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramCardsSection;
