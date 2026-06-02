import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ComingSoonProvider } from "@/components/ComingSoonModal";

// Main site
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsOfUse from "./pages/TermsOfUse.tsx";
import Unsubscribe from "./pages/Unsubscribe.tsx";
import AdminLogin from "./pages/AdminLogin.tsx";
import AdminEvents from "./pages/AdminEvents.tsx";
import AdminSetup from "./pages/AdminSetup.tsx";
import PrivacyRequest from "./pages/PrivacyRequest.tsx";

// Program sites
import ChildrenHome from "./pages/ChildrenHome.tsx";
import Adults from "./pages/Adults.tsx";
import Medicaid from "./pages/Medicaid.tsx";

// Children's sub-pages
import OurProgram from "./pages/OurProgram.tsx";
import Classes from "./pages/Classes.tsx";
import Birthday from "./pages/Birthday.tsx";
import Zines from "./pages/Zines.tsx";
import Catalog from "./pages/Catalog.tsx";
import ZineniacGames from "./pages/ZineniacGames.tsx";
import ZineniacTradingCardGame from "./pages/ZineniacTradingCardGame.tsx";
import Camps from "./pages/Camps.tsx";
import Events from "./pages/Events.tsx";
import FAQs from "./pages/FAQs.tsx";


// Our Program sub-pages
import STEAM from "./pages/STEAM.tsx";
import ESLMultilingual from "./pages/ESLMultilingual.tsx";
import SummerCamps from "./pages/SummerCamps.tsx";
import SchoolAdministration from "./pages/SchoolAdministration.tsx";
import DDDProgramming from "./pages/DDDProgramming.tsx";

// Classes sub-pages
import Mindfulness from "./pages/Mindfulness.tsx";
import ArtClass from "./pages/ArtClass.tsx";
import YogaClass from "./pages/YogaClass.tsx";
import ArtsCrafts from "./pages/ArtsCrafts.tsx";
import ThreeDScholars from "./pages/ThreeDScholars.tsx";
import Architecture from "./pages/Architecture.tsx";
import MagicClass from "./pages/MagicClass.tsx";
import MusicClass from "./pages/MusicClass.tsx";
import Robotics from "./pages/Robotics.tsx";
import LegoLegends from "./pages/LegoLegends.tsx";
import Acting from "./pages/Acting.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ComingSoonProvider>
          <ScrollToTop />
          <Routes>
            {/* Main landing page */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/children" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/privacy-request" element={<PrivacyRequest />} />

            {/* Children's site */}
            <Route path="/children" element={<ChildrenHome />} />
            <Route path="/children/our-program" element={<OurProgram />} />
            <Route path="/children/classes" element={<Classes />} />
            <Route path="/children/about" element={<About />} />
            <Route path="/children/birthday" element={<Birthday />} />
            <Route path="/children/zines" element={<Zines />} />
            <Route path="/children/catalog" element={<Catalog />} />
            <Route path="/children/zineniac-games" element={<ZineniacGames />} />
            <Route path="/children/zineniac-trading-card-game" element={<ZineniacTradingCardGame />} />
            <Route path="/children/camps" element={<Camps />} />
            <Route path="/children/events" element={<Events />} />
            <Route path="/children/faqs" element={<FAQs />} />
            
            <Route path="/children/contact" element={<Contact />} />

            {/* Our Program sub-pages */}
            <Route path="/children/steam" element={<STEAM />} />
            <Route path="/children/esl-multilingual" element={<ESLMultilingual />} />
            <Route path="/children/summer-camps" element={<SummerCamps />} />
            <Route path="/children/school-administration" element={<SchoolAdministration />} />
            <Route path="/children/ddd-programming" element={<DDDProgramming />} />

            {/* Classes sub-pages */}
            <Route path="/children/mindfulness" element={<Mindfulness />} />
            <Route path="/children/art" element={<ArtClass />} />
            <Route path="/children/yoga" element={<YogaClass />} />
            <Route path="/children/arts-crafts" element={<ArtsCrafts />} />
            <Route path="/children/3d-scholars" element={<ThreeDScholars />} />
            <Route path="/children/architecture" element={<Architecture />} />
            <Route path="/children/magic" element={<MagicClass />} />
            <Route path="/children/music" element={<MusicClass />} />
            <Route path="/children/robotics" element={<Robotics />} />
            <Route path="/children/lego-legends" element={<LegoLegends />} />
            <Route path="/children/acting" element={<Acting />} />

            {/* Adults site */}
            <Route path="/adults" element={<Adults />} />

            {/* Medicaid site */}
            <Route path="/medicaid" element={<Medicaid />} />
            <Route path="/unsubscribe" element={<Unsubscribe />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/setup" element={<AdminSetup />} />
            <Route path="/admin/events" element={<AdminEvents />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </ComingSoonProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
