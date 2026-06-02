import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";

const SchoolAdministration = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-20 relative overflow-hidden">
        <div className="bg-gradient-to-br from-fun-green/20 via-fun-blue/15 to-fun-purple/10 py-20">
          <div className="absolute top-24 left-10 w-16 h-16 fun-blob bg-fun-green/30 animate-float" />
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-block bg-primary/10 rounded-full px-5 py-2 mb-4">
                  <span className="text-primary font-bold text-sm">🏫 For Schools</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  School <span className="text-primary">Administration</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  ZINEniac: Where Learning Comes to Life!
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl ring-4 ring-fun-green/30">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/0c7b8980-50dc-4ded-964e-c4a4a117c319/Rectangle+57.png"
                  alt="School Administration at ZINEniac"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-card rounded-3xl p-10 shadow-sm border-2 border-primary/10 mb-10">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ZINEniac isn't just a program; it's a revolution in education. By prioritizing engagement, fun, and inclusivity, we are transforming the educational landscape one school at a time. Be part of this transformative movement and witness firsthand the joy of learning as it unfolds in your classrooms.
            </p>
          </div>

          {/* Feature images grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/06032a9c-d928-43a0-8e12-d756fe24832a/Group+9+%283%29.png",
              "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/13131a70-a0fa-401d-8c84-deb53169f514/Group+11.png",
              "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/b1b4f706-74c5-4e7f-8d8a-700d3f84c937/Group+10.png",
              "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/3e1394c5-ceba-420c-835f-7a4c4815c7e7/Group+12.png",
            ].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-md">
                <img src={img} alt={`ZINEniac feature ${i + 1}`} className="w-full object-cover" />
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-10">
            <div className="bg-card rounded-3xl p-10 shadow-sm border-2 border-fun-green/20">
              <h2 className="text-2xl font-bold mb-4">Join the ZINEniac Revolution 🚀</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Embark on an educational journey like no other with ZINEniac, the leading STEAM and Literacy enrichment program that has captured the hearts and minds of scholars in over 30 schools across New Jersey and New York City.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/3a3d71d6-01dc-494e-b55a-d1393e686938/Rectangle+61+%281%29.png"
                  alt="ZINEniac in schools"
                  className="w-full object-cover"
                />
              </div>
              <div className="mt-6">
                <a
                  href="https://links.dipus.ai/widget/groups/zineniac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300"
                >
                  📞 Book a Call
                </a>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-10 shadow-sm border-2 border-fun-blue/20">
              <h2 className="text-2xl font-bold mb-4">Contact Us for a Personalized Demonstration 📋</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Ready to revolutionize your school's approach to education? Contact us today to schedule a personalized demonstration. See how ZINEniac can elevate the learning experience for your students, making education not just a necessity but a thrilling adventure.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-md mb-6">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/842df8b0-bdb4-470e-9ea3-b291e6097548/Rectangle+65+%282%29.png"
                  alt="Contact ZINEniac"
                  className="w-full object-cover"
                />
              </div>
              <a
                href="/children/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300"
              >
                ✉️ Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SchoolAdministration;
