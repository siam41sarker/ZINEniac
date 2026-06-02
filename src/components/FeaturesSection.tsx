import { BookOpen, FlaskConical, Heart, TrendingUp } from "lucide-react";
import logo from "@/assets/logo.png";

const features = [
  {
    icon: BookOpen,
    title: "Hands-On Learning",
    description:
      "Our interactive, engagement-driven approach transforms learning into an active experience that builds confidence, creativity, communication, and critical thinking skills that extend beyond the classroom.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: FlaskConical,
    title: "Research-Based",
    description:
      "Our programs are thoughtfully designed using evidence-based educational practices that support development, learner engagement, creativity, and long-term academic growth.",
    color: "bg-blue-program/10 text-blue-program",
  },
  {
    icon: Heart,
    title: "Inclusive By Design",
    description:
      "We create welcoming, supportive learning environments where individuals of all ages, backgrounds, and learning styles feel empowered, respected, and encouraged to succeed.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: TrendingUp,
    title: "Real Results",
    description:
      "From stronger communication and literacy skills to increased confidence and engagement, our programs are designed to create measurable growth and lasting impact.",
    color: "bg-accent/10 text-accent",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 flex flex-wrap items-center justify-center gap-3">
          <span>Why People Choose</span>
          <img src={logo} alt="ZINEniac" className="h-16 md:h-20 w-auto inline-block" />
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mx-auto mb-5`}
              >
                <feature.icon size={28} />
              </div>
              <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
