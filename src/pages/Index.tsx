import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductDesignWalkthrough from "@/components/ProductDesignWalkthrough";
import CaseStudies from "@/components/CaseStudies";
import InteractiveWireframes from "@/components/InteractiveWireframes";
import FuturisticPrototypes from "@/components/FuturisticPrototypes";
import AIDemos from "@/components/AIDemos";
import ProductStrategy from "@/components/ProductStrategy";
import GTMStrategy from "@/components/GTMStrategy";
import ExperimentsBoard from "@/components/ExperimentsBoard";
import ProductDashboards from "@/components/ProductDashboards";
import Timeline from "@/components/Timeline";
import SkillsTools from "@/components/SkillsTools";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ProductDesignWalkthrough />
      <CaseStudies />
      <InteractiveWireframes />
      <FuturisticPrototypes />
      <AIDemos />
      <ProductStrategy />
      <GTMStrategy />
      <ExperimentsBoard />
      <ProductDashboards />
      <Timeline />
      <SkillsTools />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
