import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";
import BrandName from "@/components/BrandName";

const blogPosts = [
  {
    title: "Unleashing Creativity: ZINEniac Adventures - A STEAM-Powered Tabletop Game in Teaneck, New Jersey",
    date: "12/18/23",
    author: "Stephanie Santiago",
    image: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1710000468277-C83G1623IQFOCKCJQGYG/download.jpg",
    slug: "zineniac-steam-tabletop-game",
  },
  {
    title: "Empowering Minds: ZINEniac's Tailored Tutoring Services in Teaneck, New Jersey",
    date: "12/11/23",
    author: "Stephanie Santiago",
    image: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1702309456479-YVP245EWALT2FO0LD1KN/pexels-katerina-holmes-5905492-822x548.jpg",
    slug: "empowering-minds-tutoring",
  },
  {
    title: "Unleashing Birthday Magic: ZINEniac's Chiky Chiky's Fun Zone in Teaneck, New Jersey",
    date: "12/4/23",
    author: "Stephanie Santiago",
    image: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1701711275628-8LCT4PCDJ77SCTO84GDH/Screen+Shot+2023-12-04+at+12.34.29+PM.png",
    slug: "unleashing-birthday-magic",
  },
  {
    title: "Mind, Body, and Soul: ZINEniac's Transformative Yoga Class in Teaneck, New Jersey",
    date: "11/27/23",
    author: "Stephanie Santiago",
    image: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1701113034346-DY82BUO04RDSLCV88PVB/Screen+Shot+2023-11-27+at+2.23.49+PM.png",
    slug: "yoga-class-teaneck",
  },
  {
    title: "Building Brilliance: ZINEniac's LEGO Class Ignites Learning in Teaneck, New Jersey",
    date: "11/20/23",
    author: "Stephanie Santiago",
    image: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1700510204471-V99EAFHFVNV1FVE1W08B/how-to-organize-legos-GettyImages-458636567-aac4ce7b1e16458793d6b2082460890e.jpg",
    slug: "lego-class-teaneck",
  },
  {
    title: "Harmony and Soul: ZINEniac's Unique Music Program in Teaneck, New Jersey",
    date: "11/13/23",
    author: "Stephanie Santiago",
    image: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1699897193709-1EOSIAVXC09VOW9S4O1J/Screen+Shot+2023-11-13+at+12.39.46+PM.png",
    slug: "music-program-teaneck",
  },
  {
    title: "Unlocking the Secrets of STEM and Magic: ZINEniac's Enrichment Program in Teaneck, New Jersey",
    date: "11/6/23",
    author: "Stephanie Santiago",
    image: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1699291766369-RG0HVZKX1HJP0MF1GL2O/61cWI5TZbNL.jpg",
    slug: "stem-magic-enrichment",
  },
  {
    title: "Unleash Creativity and Critical Thinking with Arts and Crafts at ZINEniac's After-School Program in Teaneck, New Jersey",
    date: "10/30/23",
    author: "Stephanie Santiago",
    image: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1698682247938-8QD8ZT0UHE6DJ1NWCU77/pipe-cleaner-crafts-iStock-1064711236-0382901.jpg",
    slug: "arts-crafts-after-school",
  },
  {
    title: "Mindfulness: A Key Element in ZINEniac's Enriching After-School Program for Kids in Teaneck, New Jersey",
    date: "10/29/23",
    author: "Absalom Studios",
    image: "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1589847004013-RNEHHE5FQMD3X6X9S995/20140301_Trade-151_0124-copy.jpg",
    slug: "mindfulness-after-school",
  },
  {
    title: "STEAM Adventures: Igniting Imagination with ZINEniac",
    date: "10/11/23",
    author: "Stephanie Santiago",
    image: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1697075795975-D8KJH0IJ7QKQIAYAYVNX/kelly-sikkema-pXmyDPziB8w-unsplash.jpg",
    slug: "steam-adventures-imagination",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-20">
        <div className="bg-gradient-to-br from-[hsl(var(--fun-purple)/0.15)] via-[hsl(var(--fun-pink)/0.1)] to-[hsl(var(--fun-yellow)/0.1)] py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-4">
              <BrandName className="text-5xl md:text-7xl" /> Blog
            </h1>
            <p className="text-foreground text-xl max-w-2xl mx-auto">
              Stories, updates, and insights from the ZINEniac community.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <article
                key={i}
                className="group bg-card rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-lg font-bold leading-snug mb-4 group-hover:text-primary transition-colors line-clamp-3">
                    {post.title}
                  </h2>
                  <span className="inline-flex items-center text-primary font-bold text-sm group-hover:gap-2 transition-all">
                    Read More →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
