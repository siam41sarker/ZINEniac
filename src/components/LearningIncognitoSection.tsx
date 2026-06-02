import { Link } from "react-router-dom";
import { GraduationCap, Sparkles, Wrench } from "lucide-react";

const LearningIncognitoSection = () => {
  return (
    <section className="py-20 bg-[hsl(45,85%,90%)] relative overflow-hidden">
      <div className="absolute top-10 left-10 w-16 h-16 fun-blob bg-fun-purple/15 animate-float" />
      <div className="absolute bottom-10 right-10 w-20 h-20 fun-blob-3 bg-fun-green/15 animate-float-slow" />

      <div className="container mx-auto px-6 max-w-4xl text-center">

        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 text-center">
          <span className="text-foreground font-black">Learning Incognito</span>
        </h2>
        <div className="text-[hsl(0,0%,25%)] text-lg leading-relaxed space-y-6 mb-10">
          <p>
            Learning Incognito is ZINEniac's hands-on educational philosophy that encourages children to learn through creativity, exploration, collaboration, and immersive experiences. Through project-based activities, storytelling, movement, design, and interactive enrichment, learners build communication, problem-solving, and critical-thinking skills in environments designed to inspire curiosity and participation.
          </p>
          <p>
            Rather than passive instruction, our approach emphasizes active engagement, creative expression, and meaningful learning experiences that help children connect with ideas in dynamic and memorable ways.
          </p>
        </div>

        {/* Feature cards with educational icons */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {[
            { Icon: GraduationCap, title: "Student-Led", desc: "Encouraging independence, creativity, and active participation through learner-centered experiences." },
            { Icon: Sparkles, title: "Hands-On", desc: "Interactive activities designed to make learning engaging, memorable, and collaborative." },
            { Icon: Wrench, title: "Project-Based", desc: "Real-world exploration through creative projects, teamwork, and problem-solving experiences." },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-card rounded-2xl px-6 py-8 min-h-[200px] shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.03] border-2 border-transparent hover:border-fun-blue/30 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 mb-3 rounded-xl bg-fun-blue/10 flex items-center justify-center text-fun-blue">
                <Icon size={26} strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <Link
          to="/children/catalog"
          className="inline-flex items-center gap-2 bg-fun-blue text-white px-10 py-4 rounded-full font-bold text-lg shadow-[0_12px_30px_-8px_hsl(var(--fun-blue)/0.6)] hover:scale-105 hover:shadow-[0_18px_40px_-10px_hsl(var(--fun-blue)/0.75)] transition-all duration-300"
        >
          View Our Program Catalog
        </Link>
      </div>
    </section>
  );
};

export default LearningIncognitoSection;
