import "@/App.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ServicesOverview } from "./components/ServicesOverview";
import { WhyMeSection } from "./components/WhyMeSection";
import { ResultsSection } from "./components/ResultsSection";
import { AboutSection } from "./components/AboutSection";
import { OperationalManagement } from "./components/OperationalManagement";
import { ServicesSection } from "./components/ServicesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#09090b] overflow-x-hidden">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#131316",
              border: "1px solid #1e1e24",
              color: "#f4f4f5",
              fontFamily: "'Inter', sans-serif",
            },
          }}
        />
        <Navbar />
        <main>
          <HeroSection />
          <ServicesOverview />
          <WhyMeSection />
          <ResultsSection />
          <AboutSection />
          <OperationalManagement />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
