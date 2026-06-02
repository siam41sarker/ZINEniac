import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "I don't understand, can you explain further?",
    a: `Of course! ZINEniac is a STEAM powered Learning Studio offering enrichment programming from 9:00 AM – 9:00 PM for students grades K - 12. Our headquarters is based in Bergen County, Teaneck, New Jersey. We specialize in the Learning Incognito method by applying STEAM fundamentals to our Student Led, Hands On, and Project Based curriculum.

We also offer day programming for adults 18+ with intellectual / developmental disabilities Monday - Friday from 9:00 AM – 9:00 PM. We are proud to accept DDD and self pay. We are licensed vendors with the State of New Jersey DDD - PPL and our vendor number is: PONJD034457. We also apply our Learning Incognito method to STEAM fundamentals for our Student Led, Hands On, and Project Based curriculum for our I/DD adults.

ZINEniac is very excited to also offer a Student Led, Hands On, and Project Based curriculum for our multilingual learners. As a Women owned, Latina owned, and Family operated business (NJ & NYC Certified MWBE), we are super proud to work with students in their home language and help bridge their learning from their school to home life. We understand what it is like and it is our mission to help English as a Second Language Learners during this transitioning time.

Last but definitely not least, we offer programming for schools and organizations. Students have the option to come to our studio or School Administrators can schedule us to perform services at their school! ZINEniac is available during the school day, after school, weekends, and to run summer camps! All of our curriculums align with NJ, NY, and FL school learning standards.

It is fun and exciting to be able to offer everything we do at ZINEniac. We are blessed to meet so many new and interesting individuals who we get to share our love for STEAM with! If you will like to better understand what ZINEniac is all about, please feel free to reach out as well! We are always happy to communicate with everyone and share our mission.

For a detailed overview of our revolutionary enrichment program please download our free catalog.`
  },
  {
    q: "How many children in a class?",
    a: "We maintain a Student to Teacher ratio of 10:1, ensuring every student receives the attention they deserve. For our I/DD Programming, our Student to Teacher ratio is 4:1. We prefer to stay under ratio and over-staffed. This means that we tend to keep class sizes small and have extra support to make for optimal learning environments."
  },
  {
    q: "What will my child do?",
    a: "What won't they do? From STEAM, art and music, to sports, yoga & mindfulness, your child will participate in whichever classes they choose. There is a world of possibilities and ZINEniac is proud to offer it! For a full scope of our offerings, view our free catalog."
  },
  {
    q: "How much does ZINEniac cost?",
    a: "ZINEniac offers flexible courses and pricing to meet the needs of each student and family. Everything is based off our ZINEniac membership.\n\nIf you are inquiring for an I/DD adult, we are proud to accept DDD and self pay. We are licensed vendors with the State of New Jersey DDD - PPL and our vendor number is: PONJD034457.\n\nFor a detailed quote please reach out to us."
  },
  {
    q: "How long is your enrichment program?",
    a: "The core ZINEniac program meets weekly. However, it is up to the student, and their family, to choose their schedule and frequency. Contact us to find out more."
  },
  {
    q: "Do you offer private lessons?",
    a: "Yes. ZINEniac proudly offers assistance in homework and tutoring. For more information on our private offerings, please contact us."
  },
  {
    q: "Do you have parking?",
    a: "Yes, we have ample parking to accommodate all of our students."
  },
  {
    q: "What do I need to do to register my child?",
    a: "All of our registration for Enrichment Programming at the Studio, Adult I/DD Programming, School Programming, Vacation Camps, and Summer Camps are all possible by calling or texting us at: (201) 469-7194. You can also email us at: ZINEniac@gmail.com"
  },
  {
    q: "What ages can enroll?",
    a: "ZINEniac is a STEAM powered enrichment program offering classes from 9:00 AM – 9:00 PM for students grades K - 12 in Teaneck. For Schools, we are available any day and time. We also offer day programming for adults 18+ with intellectual / developmental disabilities Monday - Friday from 9:00 AM – 9:00 PM."
  },
  {
    q: "Do you offer transportation?",
    a: "ZINEniac is excited to offer programming for our I/DD Adults living in Bergen, Hudson, Passaic, and Essex County. Contact us to find out more."
  },
  {
    q: "Can my child drop in without being registered?",
    a: "Due to limited capacity and staffing ratios we strive to maintain, we do not offer drop-ins. All classes must be scheduled with our staff unless otherwise mentioned."
  },
  {
    q: "Will my child have time to work on their homework?",
    a: "We will always allow students to work on their homework if that is what their parents want. Our goal is to work with families to enrich their child's education the best way we can. Working together as a team, anything is possible!"
  },
  {
    q: "When does registration open?",
    a: "We have a rolling admissions policy. Therefore, participants can register whenever they are ready to join in on the fun and learning experience!"
  },
  {
    q: "Do you allow tree nut or peanut products?",
    a: "No. We do not allow tree nut or peanut products due to the high risk of severe allergic reactions."
  },
  {
    q: "Do team members receive ongoing training and education?",
    a: "Certainly! We are a learning-oriented community, relying on input from our students to guide our continuous development. Our staff receives ongoing education and training annually to always stay learning!"
  },
  {
    q: "What education qualifications do your teachers have?",
    a: "All of our teachers are highly educated and are college graduates. A large percentage of our teachers have their Masters. Our teachers complete a thorough training process supervised by experienced staff members. New teachers observe classes before they begin teaching their own classes. On the first day of class, an experienced teacher helps the new teacher instruct the classes, and after that, teachers are observed regularly."
  },
  {
    q: "What is STEAM?",
    a: "STEAM stands for Science, Technology, Engineering, Art, and Mathematics. Since we greatly focus on Literacy as well, we have added that 'E' also stands for English."
  },
];

const FAQs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero banner with background image - matching original */}
      <section className="pt-20 relative">
        <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src="https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d2ab7758-3876-41c1-8e24-ad02dfe7d9a2/image+1+%284%29.png"
            alt="Children learning at ZINEniac"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
          <h1 className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-black text-white text-center uppercase leading-tight px-6">
            Frequently Asked<br />Questions.
          </h1>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-[hsl(var(--fun-yellow)/0.15)] border-b-2 border-[hsl(var(--fun-yellow)/0.3)] px-8 py-2 first:rounded-t-2xl last:rounded-b-2xl"
              >
                <AccordionTrigger className="text-left font-black text-lg uppercase hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line text-base pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;
