import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import FuturisticPrototypes from "@/components/FuturisticPrototypes";
import AIDemos from "@/components/AIDemos";
import ProductDashboards from "@/components/ProductDashboards";
import SkillsTools from "@/components/SkillsTools";
import ProductThinking from "@/components/ProductThinking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <CaseStudies />
      <FuturisticPrototypes />
      <AIDemos />
      <ProductDashboards />
      <SkillsTools />
      <ProductThinking />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
