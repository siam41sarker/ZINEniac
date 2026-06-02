import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";
import { Link } from "react-router-dom";

const Camps = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-20 relative overflow-hidden">
        <div className="bg-gradient-to-br from-fun-yellow/25 via-fun-pink/15 to-fun-blue/10 py-20">
          <div className="absolute top-24 left-10 w-16 h-16 fun-blob bg-fun-yellow/30 animate-float" />
          <div className="absolute bottom-10 right-16 w-20 h-20 fun-blob bg-fun-pink/20 animate-float-slow" />
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-block bg-primary/10 rounded-full px-5 py-2 mb-4">
                  <span className="text-primary font-bold text-sm">☀️ Camp Fun</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  ZINEniac's <span className="text-primary">Camps</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  STEAM-Powered Adventure Camps for Creative Exploration and Lifelong Learning
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl ring-4 ring-fun-yellow/30">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d21044bb-ec98-40e1-8475-ee058dfa5928/Group+8+%284%29.png"
                  alt="Camps at ZINEniac"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-card rounded-3xl p-10 shadow-sm border-2 border-fun-yellow/20 mb-10">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Elevate every season with ZINEniac's immersive Camps! Picture real-life applications, hands-on experiences, and a vibrant community fostering diverse perspectives.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our meticulously curated programs cover STEAM, language enrichment, and more — catering to a wide range of interests and age groups. Expect interactive lessons that make learning enjoyable, with multimedia elements and real-world scenarios.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Don't miss this extraordinary opportunity for growth, friendship, and limitless possibilities — enroll now at ZINEniac's Camps!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-3xl overflow-hidden shadow-lg ring-2 ring-fun-yellow/20">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5de0a0a6-4ed1-4330-9e5e-5266be5b1f89/Rectangle+58+%281%29.png"
                  alt={`Camp activity ${i}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {["🎨 Creative Arts", "🔬 STEAM Labs", "🌍 Language Fun"].map((item) => (
              <div key={item} className="bg-fun-yellow/10 border-2 border-fun-yellow/20 rounded-2xl p-6 text-center">
                <p className="text-2xl mb-2">{item.split(" ")[0]}</p>
                <p className="font-bold text-foreground">{item.substring(2)}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/children/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300"
            >
              ☀️ Join Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Camps;
