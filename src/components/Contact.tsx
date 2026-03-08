import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Send, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { CONTACT } from "@/data/contact";
import { openMailto } from "@/lib/openMailto";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    openMailto(`mailto:${CONTACT.email}?subject=${subject}&body=${body}`);
    toast({ title: "Opening email client!", description: "Your message details have been pre-filled." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Contact</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-10">
            Let's <span className="gradient-text">Connect</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always open to discussing new product challenges, consulting opportunities, 
                or just connecting with fellow product thinkers.
              </p>

              <div className="space-y-4">
                <button onClick={() => openMailto(CONTACT.mailtoLink)} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                  {CONTACT.email}
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
            </div>

            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-4">
              <Input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="rounded-xl"
              />
              <Input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="rounded-xl"
              />
              <textarea
                placeholder="Your message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="flex w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
              />
              <Button type="submit" className="w-full rounded-xl gap-2 bg-[hsl(var(--cta-action))] text-white hover:bg-[hsl(var(--cta-action)/0.85)]">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
