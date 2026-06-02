import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";
import ZigzagDivider from "@/components/ZigzagDivider";
import CTABanner from "@/components/CTABanner";
import BrandName from "@/components/BrandName";
import {
  PartyPopper,
  Cake,
  Palette,
  Users,
  Sparkles,
  Music,
  Gift,
  Camera,
  Star,
  Heart,
  Wand2,
  Check,
} from "lucide-react";

const Birthday = () => {
  const includes = [
    { Icon: PartyPopper, text: "Private party space just for you" },
    { Icon: Users, text: "Dedicated party coordinator" },
    { Icon: Palette, text: "Hands-on creative activities" },
    { Icon: Gift, text: "All materials & supplies included" },
    { Icon: Sparkles, text: "Setup & cleanup by our team" },
    { Icon: Wand2, text: "Customizable themes & activities" },
  ];

  const packages = [
    {
      name: "The Mini Maker",
      tag: "Up to 10 kids",
      color: "fun-yellow",
      perks: [
        "90-minute private party",
        "1 signature creative activity",
        "Party host + setup/cleanup",
        "Themed décor & table setup",
        "Take-home creation for each kid",
      ],
    },
    {
      name: "The Creator Bash",
      tag: "Up to 15 kids",
      color: "fun-pink",
      featured: true,
      perks: [
        "2-hour private party",
        "2 hands-on creative activities",
        "Dedicated party coordinator",
        "Themed décor + balloon arch",
        "Custom take-home goody bags",
        "Birthday star spotlight moment",
      ],
    },
    {
      name: "The Legendary",
      tag: "Up to 25 kids",
      color: "fun-purple",
      perks: [
        "2.5-hour private experience",
        "3 premium creative activities",
        "Full event team + photographer",
        "Custom theme & deluxe décor",
        "Premium goody bags + cake setup",
        "Birthday show & spotlight reveal",
      ],
    },
  ];

  const why = [
    { Icon: Sparkles, title: "Wow Moments", desc: "Nonstop surprises kids talk about for weeks." },
    { Icon: Palette, title: "Real Creativity", desc: "Hands-on art, design & making — not screen time." },
    { Icon: Users, title: "Stress-Free", desc: "We run the whole show. You just enjoy." },
    { Icon: Heart, title: "Birthday Star", desc: "Every party puts your child front and center." },
  ];

  const themes = [
    { emoji: "🎨", name: "Mini Artist Studio", color: "fun-pink" },
    { emoji: "🚀", name: "Space Explorers", color: "fun-blue" },
    { emoji: "🦄", name: "Unicorn Magic", color: "fun-purple" },
    { emoji: "🧪", name: "Mad Inventors", color: "fun-green" },
    { emoji: "👑", name: "Royal Ball", color: "fun-yellow" },
    { emoji: "🦖", name: "Dino Discovery", color: "fun-green" },
  ];

  const faqs = [
    {
      q: "How far in advance should I book?",
      a: "We recommend booking 3-4 weeks in advance. Weekend slots fill up fast — especially during spring and fall.",
    },
    {
      q: "Can I bring my own cake & food?",
      a: "Absolutely! Bring the cake of your dreams. We provide the space, plates, napkins and a setup table.",
    },
    {
      q: "What ages are the parties for?",
      a: "Our parties are perfect for ages 3-12. We tailor the activities and energy to your child's age group.",
    },
    {
      q: "Can adults stay during the party?",
      a: "Yes! Parents are welcome to stay, watch the magic happen, and enjoy a coffee while we run the show.",
    },
    {
      q: "Do you offer custom themes?",
      a: "100%. Tell us your child's obsession and we'll build a theme around it — from dinos to space to unicorns.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-20 relative overflow-hidden bg-gradient-to-br from-fun-pink/20 via-fun-yellow/25 to-fun-blue/25">
        {/* Floating confetti */}
        <div className="absolute top-28 left-[8%] w-20 h-20 fun-blob bg-fun-yellow/40 animate-float" />
        <div className="absolute top-40 right-[12%] w-24 h-24 fun-blob-2 bg-fun-pink/40 animate-float-slow" />
        <div className="absolute bottom-16 left-[20%] w-16 h-16 fun-blob-3 bg-fun-green/40 animate-float" />
        <div className="absolute top-[50%] right-[6%] w-14 h-14 rounded-full bg-fun-purple/40 animate-float-slow" />
        <Star className="absolute top-32 right-[35%] text-fun-yellow animate-pulse" size={28} fill="currentColor" />
        <Sparkles className="absolute bottom-24 right-[25%] text-fun-pink animate-pulse" size={32} />

        <div className="container mx-auto px-6 py-12 lg:py-16 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-5 py-2 mb-6 shadow-lg">
                <Cake className="text-fun-pink" size={18} />
                <span className="text-foreground font-bold text-sm uppercase tracking-wider">
                  Birthday Capital of Creativity
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.05]">
                The Birthday <br />
                <span className="text-fun-pink">They'll Never</span>
                <br />
                <span className="bg-gradient-to-r from-fun-purple via-fun-pink to-fun-yellow bg-clip-text text-transparent">
                  Stop Talking About.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
                Welcome to <BrandName className="font-black" /> Birthdays — high-energy, hands-on, fully-hosted parties packed with creativity, laughter, and "wow" moments. You bring the kid. We bring the magic. ✨
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="https://links.dipus.ai/widget/groups/zineniac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-fun-pink text-white px-8 py-4 rounded-full font-black text-lg shadow-[0_12px_30px_-8px_hsl(var(--fun-pink)/0.7)] hover:scale-105 hover:rotate-1 transition-all duration-300"
                >
                  Book My Party
                </a>
                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 bg-white text-foreground px-8 py-4 rounded-full font-bold text-lg border-2 border-foreground/10 hover:border-fun-pink hover:scale-105 transition-all duration-300"
                >
                  See Packages →
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-8 justify-center lg:justify-start text-sm font-bold text-foreground/70">
                <span className="flex items-center gap-1">
                  <Star className="text-fun-yellow" size={18} fill="currentColor" /> Loved by 500+ families
                </span>
                <span className="flex items-center gap-1">
                  <Check className="text-fun-green" size={18} /> Stress-free for parents
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-fun-yellow rounded-full -z-0 animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-fun-blue/60 rounded-full -z-0 animate-pulse" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-8 ring-white rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ca03387b-7ccc-4c97-9dfd-1f10344d1560/Rectangle+57+%281%29.png"
                  alt="ZINEniac birthday party celebration"
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl rotate-6 hidden md:block">
                <div className="text-3xl">🎂</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-14 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block bg-fun-blue/10 rounded-full px-5 py-2 mb-4">
              <span className="text-fun-blue font-bold text-sm uppercase tracking-wider">Why Parents Love Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Not your average <span className="text-fun-pink">birthday party.</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We don't do boring, cookie-cutter parties. We design celebrations that feel legendary.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {why.map(({ Icon, title, desc }, i) => {
              const colors = ["fun-pink", "fun-yellow", "fun-blue", "fun-purple"];
              const c = colors[i];
              return (
                <div
                  key={title}
                  className="group bg-card rounded-3xl p-8 text-center border-2 border-transparent hover:border-foreground/10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center bg-${c}/15 text-${c} group-hover:scale-110 group-hover:rotate-6 transition-transform`}
                  >
                    <Icon size={32} strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-14 bg-gradient-to-br from-fun-yellow/15 via-fun-pink/10 to-fun-purple/15 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-24 h-24 fun-blob bg-fun-blue/20 animate-float" />
        <div className="absolute bottom-10 left-10 w-28 h-28 fun-blob-2 bg-fun-green/20 animate-float-slow" />

        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block bg-fun-pink/15 rounded-full px-5 py-2 mb-4">
              <span className="text-fun-pink font-bold text-sm uppercase tracking-wider">Birthday Packages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Pick a vibe. <span className="text-fun-purple">We'll do the rest.</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Every package is fully hosted, fully creative, and fully customizable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 ${
                  pkg.featured ? `border-${pkg.color} scale-105 md:scale-105` : "border-transparent"
                }`}
              >
                {pkg.featured && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 bg-${pkg.color} text-white text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg`}>
                    ⭐ Most Popular
                  </div>
                )}
                <div className={`w-14 h-14 rounded-2xl bg-${pkg.color}/15 text-${pkg.color} flex items-center justify-center mb-5`}>
                  <PartyPopper size={28} />
                </div>
                <h3 className="text-2xl font-black mb-1">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm font-semibold mb-6 pb-6 border-b-2 border-dashed border-foreground/10">{pkg.tag}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-sm">
                      <div className={`shrink-0 w-5 h-5 rounded-full bg-${pkg.color}/15 text-${pkg.color} flex items-center justify-center mt-0.5`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-foreground/80">{perk}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://links.dipus.ai/widget/groups/zineniac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full bg-${pkg.color} text-white py-3.5 rounded-full font-black hover:scale-105 transition-transform shadow-lg`}
                >
                  Book This Package
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-8">
            * All packages are fully customizable. Talk to us about add-ons, larger groups, and special themes.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-fun-green/15 rounded-full px-5 py-2 mb-4">
                <span className="text-fun-green font-bold text-sm uppercase tracking-wider">What's Included</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-5">
                Everything you need. <br />
                <span className="text-fun-blue">Nothing you don't.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Every <BrandName /> birthday party comes loaded with the essentials so you can show up, smile, and soak in the moment.
              </p>
              <a
                href="https://links.dipus.ai/widget/groups/zineniac"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-fun-blue text-white px-8 py-4 rounded-full font-black text-lg shadow-[0_12px_30px_-8px_hsl(var(--fun-blue)/0.6)] hover:scale-105 transition-all"
              >
                Book A Call
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {includes.map(({ Icon, text }, i) => {
                const colors = ["fun-pink", "fun-yellow", "fun-blue", "fun-green", "fun-purple", "fun-pink"];
                const c = colors[i];
                return (
                  <div
                    key={text}
                    className={`bg-card rounded-2xl p-5 border-2 border-transparent hover:border-${c}/40 hover:bg-${c}/5 transition-all duration-300 group`}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-${c}/15 text-${c} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon size={20} />
                    </div>
                    <p className="text-foreground font-bold text-sm leading-snug">{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* THEMES */}
      <section className="py-14 bg-gradient-to-br from-fun-purple/10 via-background to-fun-blue/10 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block bg-fun-purple/15 rounded-full px-5 py-2 mb-4">
              <span className="text-fun-purple font-bold text-sm uppercase tracking-wider">Pick A Theme</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Whatever they're <span className="text-fun-purple">obsessed with.</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose a ready-made theme or invent your own. We'll bring it to life.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {themes.map((t) => (
              <div
                key={t.name}
                className={`bg-card rounded-2xl p-6 text-center border-2 border-transparent hover:border-${t.color} hover:-translate-y-2 hover:rotate-2 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl`}
              >
                <div className="text-5xl mb-3">{t.emoji}</div>
                <p className="font-black text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-fun-yellow/20 rounded-full px-5 py-2 mb-4">
              <span className="text-foreground font-bold text-sm uppercase tracking-wider">📸 Party Highlights</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Real parties. <span className="text-fun-pink">Real smiles.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { src: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f5ac3890-43cc-4d93-b0bf-8bd9c9a5c71b/Group+11+%281%29.png", ring: "fun-pink", alt: "Birthday celebration" },
              { src: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/9ca0d310-c93d-4486-a86c-e971f1880c13/Group+12+%281%29.png", ring: "fun-yellow", alt: "Party activities" },
              { src: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/46a55e28-d97e-4d4e-ac67-0ef59e0aae06/WhatsApp+Image+2026-02-11+at+2.13.49+PM.jpeg", ring: "fun-blue", alt: "Birthday fun" },
              { src: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ca03387b-7ccc-4c97-9dfd-1f10344d1560/Rectangle+57+%281%29.png", ring: "fun-purple", alt: "Party celebration" },
            ].map((g) => (
              <div
                key={g.src}
                className={`aspect-square rounded-3xl overflow-hidden shadow-lg ring-4 ring-${g.ring}/20 hover:ring-${g.ring}/50 transition-all hover:scale-[1.02]`}
              >
                <img src={g.src} alt={g.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-14 bg-gradient-to-br from-fun-pink/10 to-fun-yellow/15">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block bg-fun-pink/15 rounded-full px-5 py-2 mb-4">
              <span className="text-fun-pink font-bold text-sm uppercase tracking-wider">How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black">
              Three steps to a <span className="text-fun-pink">legendary day.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            {[
              { n: "1", t: "Pick your package", d: "Choose the size and vibe that fits your child's day.", c: "fun-pink" },
              { n: "2", t: "Customize the magic", d: "We'll dial in the theme, activities, and any add-ons.", c: "fun-yellow" },
              { n: "3", t: "Show up & celebrate", d: "We handle setup, hosting, and cleanup. You enjoy.", c: "fun-blue" },
            ].map((s) => (
              <div key={s.n} className="relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className={`absolute -top-6 left-8 w-14 h-14 rounded-2xl bg-${s.c} text-white flex items-center justify-center text-2xl font-black shadow-lg rotate-6`}>
                  {s.n}
                </div>
                <h3 className="text-2xl font-black mt-6 mb-2">{s.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-fun-blue/10 rounded-full px-5 py-2 mb-4">
              <span className="text-fun-blue font-bold text-sm uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black">
              Got <span className="text-fun-blue">questions?</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => {
              const colors = ["fun-pink", "fun-yellow", "fun-blue", "fun-purple", "fun-green"];
              const c = colors[i % colors.length];
              return (
                <details
                  key={f.q}
                  className={`group bg-card rounded-2xl border-2 border-transparent hover:border-${c}/40 transition-all overflow-hidden shadow-sm hover:shadow-md`}
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-6 font-black text-lg">
                    <span>{f.q}</span>
                    <span className={`shrink-0 w-8 h-8 rounded-full bg-${c}/15 text-${c} flex items-center justify-center text-2xl font-black group-open:rotate-45 transition-transform`}>
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</div>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <ZigzagDivider topColor="hsl(var(--background))" bottomColor="hsl(var(--fun-pink))" />
      <section className="py-14 bg-gradient-to-b from-fun-pink via-fun-purple to-fun-blue relative overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-fun-yellow/40 animate-float" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/20 animate-float-slow" />
        <Sparkles className="absolute top-20 right-[20%] text-white/60 animate-pulse" size={40} />
        <Star className="absolute bottom-20 left-[25%] text-fun-yellow animate-pulse" size={36} fill="currentColor" />

        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ready to throw a <br />
            <span className="text-fun-yellow">legendary birthday?</span>
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
            Let's design a party your child — and the whole playground — will be talking about for months.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://links.dipus.ai/widget/groups/zineniac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-fun-pink px-10 py-5 rounded-full font-black text-lg shadow-2xl hover:scale-110 hover:rotate-1 transition-all"
            >
              Book My Party Now
            </a>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border-2 border-white/40 px-10 py-5 rounded-full font-black text-lg hover:bg-white/20 transition-all"
            >
              See Packages
            </a>
          </div>
        </div>
      </section>
      <ZigzagDivider topColor="hsl(var(--fun-blue))" bottomColor="hsl(220 20% 14%)" />
      <Footer />
    </div>
  );
};

export default Birthday;
