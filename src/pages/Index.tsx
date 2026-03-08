import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductDesignWalkthrough from "@/components/ProductDesignWalkthrough";
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
      <Timeline />
      <SkillsTools />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
