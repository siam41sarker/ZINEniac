import { useEffect, useState } from "react";
import realAdults from "@/assets/real-adults.jpg";
import realChildren1 from "@/assets/real-children-1.jpg";
import realChildren2 from "@/assets/real-children-2.jpg";
import realChildren3 from "@/assets/real-children-3.jpg";
import realArt from "@/assets/real-art.jpg";

const slides = [realChildren1, realAdults, realArt, realChildren2, realChildren3];

const MainMissionSection = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Slideshow background */}
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="absolute inset-0 bg-foreground/70" />

      <div className="relative container mx-auto px-6 text-center">
        <p className="text-gold font-semibold uppercase tracking-[0.2em] text-sm mb-4">
          Our Mission
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto mb-6">
          Empowering every student through creativity, literacy, and meaningful educational experiences.
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
          At ZINEniac, our mission is rooted in the belief that learning should be accessible, inspiring, and empowering for all. We aim to create inclusive, engaging, and transformative learning opportunities that help individuals build confidence, strengthen communication skills, and develop a lifelong connection to learning everyday. Through hands-on enrichment, literacy support, and innovative educational programming, we partner with schools, families, communities, and support agencies to help everyone reach their full potential.
        </p>
        <a
          href="#contact"
          className="inline-block bg-gold text-foreground px-8 py-3.5 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          Discover Our Approach
        </a>

        {/* slideshow indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-8 bg-gold" : "w-2 bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainMissionSection;
