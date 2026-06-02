import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";

const DDDProgramming = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-20 relative overflow-hidden">
        <div className="bg-gradient-to-br from-fun-purple/20 via-fun-blue/15 to-fun-green/10 py-20">
          <div className="absolute top-24 left-10 w-16 h-16 fun-blob bg-fun-purple/30 animate-float" />
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-block bg-primary/10 rounded-full px-5 py-2 mb-4">
                  <span className="text-primary font-bold text-sm">💜 Inclusive Learning</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="text-primary">DDD</span> Programming
                </h1>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl ring-4 ring-fun-purple/30">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/69656d65-4925-48d5-8f8c-58e2cb69b333/WhatsApp+Image+2025-01-14+at+1.04.25+AM+%282%29.jpeg"
                  alt="DDD Programming at ZINEniac"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 mb-10">
            <div className="bg-card rounded-3xl p-10 shadow-sm border-2 border-fun-purple/20">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                ZINEniac is more than just a learning studio; we are a transformative space for adults with developmental disabilities to explore STEAM. In our nurturing environment, members will make new friends, enhance their social and creative skills, have fun, and develop their communication skills with others through innovation.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our studio is ADA-compliant and wheelchair accessible, ensuring that everyone can fully participate in our programs. We are dedicated to providing an inclusive environment where all individuals can thrive.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Join us and be a part of this revolutionary experience! If you have any questions regarding our DDD program, including eligibility and details about our sessions, please contact us. Don't forget to ask about our vendor ID.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl ring-4 ring-fun-purple/20">
              <img
                src="https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e0854f7a-83ea-48c3-87b6-ac9351530491/WhatsApp+Image+2025-01-14+at+1.03.19+AM+%283%29.jpeg"
                alt="DDD program activities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-fun-purple/10 border-2 border-fun-purple/20 rounded-2xl p-6 mb-10">
            <p className="text-muted-foreground leading-relaxed">
              We are members of <a href="https://autismnj.org/" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">Autism NJ</a> and <a href="https://www.bergenresourcenet.org/" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">Bergen Resource</a>. We are featured on The <a href="https://www.bergen.org/cape" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">Cape Resource Center</a> and listed vendors on the <a href="https://www.publicpartnerships.com/media/ikzawpl3/nj_ddd_community-vendor-list-nov-2023.pdf" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">NJ Community Vendor List</a> through PPL.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-10">
            <div className="bg-card rounded-3xl p-10 shadow-sm border-2 border-primary/10">
              <h2 className="text-2xl font-bold mb-4">Session Schedule 📅</h2>
              <p className="text-lg font-bold text-foreground mb-1">Monday - Friday</p>
              <p className="text-lg font-bold text-primary mb-4">9:00 AM – 9:00 PM</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We look forward to welcoming you to ZINEniac, where learning, creativity, and inclusivity come together for a truly enriching experience.
              </p>
              <p className="text-sm font-bold text-muted-foreground">
                🚌 Transportation Available for Bergen, Hudson, Essex, & Passaic County Participants
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl ring-4 ring-fun-purple/20">
              <img
                src="https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d1e24f16-fc44-4152-b519-7afb5133cd45/WhatsApp+Image+2025-01-14+at+1.04.26+AM+%282%29.jpeg"
                alt="DDD program at ZINEniac"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://links.dipus.ai/widget/groups/zineniac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300"
            >
              📞 Contact Us
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DDDProgramming;
