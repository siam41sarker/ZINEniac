const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-fun-yellow/80 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-white/10 animate-float" />
      <div className="absolute bottom-8 right-8 w-12 h-12 fun-blob bg-white/10 animate-float-slow" />

      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-foreground mb-10">
          See ZINEniac in Action!
        </h2>
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/xfVIhpZdLpc?autoplay=1&mute=1&loop=1&playlist=xfVIhpZdLpc&controls=1"
            title="ZINEniac STEAM Spelled FUN"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
