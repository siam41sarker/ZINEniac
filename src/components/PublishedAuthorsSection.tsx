import { Link } from "react-router-dom";
import scholar1 from "@/assets/scholar-1.png";
import scholar2 from "@/assets/scholar-2.png";
import scholar3 from "@/assets/scholar-3.png";

const PublishedAuthorsSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-10 right-20 w-14 h-14 fun-blob bg-fun-pink/20 animate-float" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our students are published authors!
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[scholar1, scholar2, scholar3].map((img, i) => (
            <div key={i} className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ring-2 ring-transparent hover:ring-primary/30 bg-muted">
              <img
                src={img}
                alt={`Students working on art projects ${i + 1}`}
                className={`w-full h-72 ${i === 2 ? "object-contain" : "object-cover"}`}
                style={i === 2 ? undefined : { objectPosition: "center" }}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/children/zineniac-trading-card-game"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 uppercase"
          >
            Checkout Our Zines
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PublishedAuthorsSection;
