import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MissionSection from "@/components/MissionSection";
import LearningIncognitoSection from "@/components/LearningIncognitoSection";
import PublishedAuthorsSection from "@/components/PublishedAuthorsSection";
import CTABanner from "@/components/CTABanner";
import ZigzagDivider from "@/components/ZigzagDivider";
import MainFooter from "@/components/MainFooter";

const ChildrenHome = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ZigzagDivider topColor="hsl(var(--background))" bottomColor="hsl(var(--primary))" />
      <VideoSection />
      <ZigzagDivider
        blendWithTop
        bottomColor="hsl(var(--background))"
      />
      <TestimonialsSection />
      <MissionSection />
      <ZigzagDivider topColor="hsl(var(--background))" bottomColor="hsl(45 100% 92%)" />
      <LearningIncognitoSection />
      <PublishedAuthorsSection />
      <ZigzagDivider topColor="hsl(var(--background))" bottomColor="hsl(var(--primary))" />
      <CTABanner />
      <ZigzagDivider topColor="hsl(var(--primary))" bottomColor="hsl(220 20% 14%)" />
      <MainFooter />
    </div>
  );
};

export default ChildrenHome;
