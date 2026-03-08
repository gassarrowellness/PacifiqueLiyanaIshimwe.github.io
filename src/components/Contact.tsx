import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, MapPin, Phone, Copy, Check } from "lucide-react";
import { CONTACT } from "@/data/contact";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    toast({ title: "Email copied!", description: CONTACT.email });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-3xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Contact</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-10">
            Let's <span className="gradient-text">Connect</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I'm always open to discussing new product challenges, consulting opportunities,
            or just connecting with fellow product thinkers.
          </p>

          <div className="space-y-4">
            <button
              onClick={copyEmail}
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
            >
              {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5 text-primary" />}
              <span>{CONTACT.email}</span>
              <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                {copied ? "Copied!" : "Click to copy"}
              </span>
            </button>
            <a href={CONTACT.phoneLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <Phone className="h-5 w-5 text-primary" />
              {CONTACT.phone}
            </a>
            <a href={CONTACT.linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5 text-primary" />
              LinkedIn Profile
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              {CONTACT.location}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
