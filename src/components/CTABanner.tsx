import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <section className="bg-primary py-20 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
          <span className="text-foreground">Ready to</span>{" "}
          <span className="text-primary-foreground">Get Started?</span>
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
          Select a program, reach out, and let us grow a brighter future together, one page at a time.
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          <Link
            to="/children/our-program"
            className="bg-primary text-primary-foreground border-2 border-primary-foreground/40 px-10 py-4 rounded-full font-bold text-lg tracking-wide hover:bg-primary-foreground hover:text-primary transition-all duration-300"
          >
            View Programs
          </Link>
          <Link
            to="/children/contact"
            className="bg-primary text-primary-foreground border-2 border-primary-foreground/40 px-10 py-4 rounded-full font-bold text-lg tracking-wide hover:bg-primary-foreground hover:text-primary transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
