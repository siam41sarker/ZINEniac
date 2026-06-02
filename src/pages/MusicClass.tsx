import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";

const MusicClass = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-20 relative overflow-hidden">
        <div className="overflow-hidden bg-primary/5 py-3">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="text-2xl md:text-3xl font-bold text-primary/30 mx-8">
                music
              </span>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-fun-yellow/20 via-fun-pink/15 to-fun-blue/10 py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-block bg-primary/10 rounded-full px-5 py-2 mb-4">
                  <span className="text-primary font-bold text-sm">🎵 Make Some Noise!</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="text-primary">Music</span>
                </h1>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl ring-4 ring-fun-yellow/30">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/fbc3613d-a552-4a5c-b1a1-69a1ac7c1fd1/student%2Btutoring%2BTeaneck%2C%2BNew%2BJersey+1+%288%29.png"
                  alt="Music class at ZINEniac"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-card rounded-3xl p-10 shadow-sm border-2 border-fun-yellow/20">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We want our musicians to know that music comes from within their soul. In other words... They are the music.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              During this awesome music program, scholars will sing, dance, play instruments, and create sweet music! Original music is composed by the musicians, in collaboration with their instructor, recorded, and shared with all to jam out to.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Scholars learn music techniques utilizing percussion instruments such as tambourines and hand drums, string instruments such as guitars and ukuleles, Eastern instruments such as singing bowls and tuning forks, and contemporary instruments such as electric guitars and analog drum machines.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              All required instruments and supplies are included.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Program ends with a music concert featuring performances by scholars.
            </p>
            <a
              href="https://links.dipus.ai/widget/groups/zineniac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300"
            >
              🎵 Book A Call
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MusicClass;
