import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Our students are absolutely loving the program.",
    source: "Elisabeth Morrow School",
    color: "bg-fun-yellow/20 border-fun-yellow/40",
  },
  {
    quote: "The children are not only having fun, but also finding new ways to express their creativity.",
    source: "Good Shepherd Services",
    color: "bg-fun-blue/20 border-fun-blue/40",
  },
  {
    quote: "This program... helps motivate students to strive and achieve higher grades.",
    source: "Haworth Public School",
    color: "bg-fun-green/20 border-fun-green/40",
  },
  {
    quote: "I highly recommend Zineniac for student enhancement and enrichment.",
    source: "Wilbert F. Mays Seventh-Day Adventist School",
    color: "bg-fun-pink/20 border-fun-pink/40",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-20 h-20 fun-blob bg-fun-yellow/20 animate-float" />
      <div className="absolute bottom-10 left-10 w-16 h-16 fun-blob-2 bg-fun-blue/20 animate-float-slow" />

      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What People Are <span className="text-primary">Saying</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Hear from schools and organizations who trust ZINEniac
        </p>

        {/* Featured rotating quote */}
        <div className="max-w-3xl mx-auto mb-10 relative h-64 md:h-52">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 ${t.color} border-2 rounded-3xl p-8 md:p-10 text-center transition-all duration-700 flex flex-col items-center justify-center ${
                i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <svg className="w-8 h-8 mb-3 text-primary/40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6v-6.83H4.5C4.5 9.42 5.92 8 7.67 8L7.17 6Zm10 0a5.17 5.17 0 0 0-5.17 5.17V18h6v-6.83h-3.5c0-1.75 1.42-3.17 3.17-3.17l-.5-2Z" />
              </svg>
              <p className="text-xl md:text-2xl font-semibold text-foreground leading-snug mb-4">
                "{t.quote}"
              </p>
              <p className="text-foreground font-bold text-base md:text-lg">— {t.source}</p>
            </div>
          ))}
        </div>

        {/* Continuous scrolling source list */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i % testimonials.length)}
                className={`shrink-0 px-5 py-3 rounded-full border-2 text-base md:text-lg font-bold transition-all ${
                  i % testimonials.length === active
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:border-primary/50"
                }`}
              >
                {t.source}
              </button>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
