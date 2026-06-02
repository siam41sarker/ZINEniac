const CTASection = () => {
  return (
    <section className="relative py-24 bg-cta-dark overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-8 left-8 w-20 h-20 rounded-full bg-primary/15" />
      <div className="absolute bottom-12 right-12 w-28 h-28 rounded-full bg-gold/10" />
      <div className="absolute top-1/2 left-1/3 w-14 h-14 rounded-full bg-accent/10" />

      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Ready to <span className="text-gold">Get Started?</span>
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
          Select a program, reach out, and let us grow a brighter future together, one page at a time.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#programs"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            View Programs
          </a>
          <a
            href="#contact"
            className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
