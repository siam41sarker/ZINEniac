import { Link } from "react-router-dom";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";

const MissionSection = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-[-20px] w-24 h-24 fun-blob bg-fun-green/20 animate-float" />
      <div className="absolute bottom-20 left-[-15px] w-18 h-18 fun-blob-2 bg-fun-purple/15 animate-float-slow" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At ZINEniac, our mission is rooted in the belief that learning should be accessible, inspiring, and empowering for all. We aim to create inclusive, engaging, and transformative learning opportunities that help individuals build confidence, strengthen communication skills, and develop a lifelong connection to learning everyday. Through hands-on enrichment, literacy support, and innovative educational programming, we partner with schools, families, communities, and support agencies to help everyone reach their full potential.
            </p>
            <Link
              to="/children/about"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Meet Our Founder
            </Link>
          </div>

          {/* Images */}
          <div className="relative flex gap-4">
            <div className="w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-xl ring-4 ring-fun-yellow/30">
                <img
                  src={gallery3}
                  alt="Child creating art with 3D pen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-1/2 mt-8">
              <div className="rounded-3xl overflow-hidden shadow-xl ring-4 ring-fun-blue/30">
                <img
                  src={gallery4}
                  alt="Child using 3D pen for art project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
