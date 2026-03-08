import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImpactSnapshot from "@/components/ImpactSnapshot";
import FeaturedWork from "@/components/FeaturedWork";
import CaseStudies from "@/components/CaseStudies";
import ProductPhilosophy from "@/components/ProductPhilosophy";
import ProductDesignWalkthrough from "@/components/ProductDesignWalkthrough";
import ProductStrategy from "@/components/ProductStrategy";
import GTMStrategy from "@/components/GTMStrategy";
import ExperimentsBoard from "@/components/ExperimentsBoard";
import Capabilities from "@/components/Capabilities";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import InnovationLab from "@/components/InnovationLab";
import LiveDemos from "@/components/LiveDemos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ImpactSnapshot />
      <FeaturedWork />
      <CaseStudies />
      <ProductPhilosophy />
      <ProductDesignWalkthrough />
      <ProductStrategy />
      <GTMStrategy />
      <ExperimentsBoard />
      <Capabilities />
      <ExperienceTimeline />
      <InnovationLab />
      <LiveDemos />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
