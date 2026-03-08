import Navigation from "@/components/Navigation";
import CaseStudies from "@/components/CaseStudies";
import InteractiveWireframes from "@/components/InteractiveWireframes";
import ProductStrategy from "@/components/ProductStrategy";
import GTMStrategy from "@/components/GTMStrategy";
import ExperimentsBoard from "@/components/ExperimentsBoard";
import ProductDashboards from "@/components/ProductDashboards";
import FuturisticPrototypes from "@/components/FuturisticPrototypes";
import AIDemos from "@/components/AIDemos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-label text-primary mb-3">Portfolio</p>
            <h1 className="text-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Product <span className="gradient-text">Work</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Case studies, strategy frameworks, experiments, and prototypes from my product journey.
            </p>
          </motion.div>
        </div>
      </section>

      <CaseStudies />
      <InteractiveWireframes />
      <ProductStrategy />
      <GTMStrategy />
      <ExperimentsBoard />
      <ProductDashboards />
      <FuturisticPrototypes />
      <AIDemos />
      <Contact />
      <Footer />
    </div>
  );
};

export default Work;
