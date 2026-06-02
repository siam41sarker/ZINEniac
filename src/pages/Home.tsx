import MainNavbar from "@/components/MainNavbar";
import MainHeroSection from "@/components/MainHeroSection";
import ProgramCardsSection from "@/components/ProgramCardsSection";
import FeaturesSection from "@/components/FeaturesSection";
import MainMissionSection from "@/components/MainMissionSection";
import MainTestimonialsSection from "@/components/MainTestimonialsSection";
import MainFooter from "@/components/MainFooter";

const Home = () => {
  return (
    <div className="min-h-screen">
      <MainNavbar />
      <MainHeroSection />
      <ProgramCardsSection />
      <FeaturesSection />
      <MainMissionSection />
      <MainTestimonialsSection />
      <MainFooter />
    </div>
  );
};

export default Home;
