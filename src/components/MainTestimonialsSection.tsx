import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "ZINEniac brought a breath of fresh air to my daughter's after-school program. She loves the STEAM explorers program and lights up when she knows Tuesday is coming up.",
    name: "Sara O.",
    role: "Parent",
  },
  {
    quote:
      "My daughter went from hiding her books to writing her own nature stories in just a few months. Watching her grow has been like watching a garden bloom.",
    name: "Maria G.",
    role: "Parent",
  },
  {
    quote:
      "The adult program gave me the roots I needed to go back to school. The warmth and encouragement made all the difference in the world.",
    name: "James T.",
    role: "Adult Learner",
  },
];

const MainTestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          What People <span className="text-primary">Are Saying</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainTestimonialsSection;

