import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <h1 className="text-minimal text-muted-foreground mb-4">GET IN TOUCH</h1>
                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Let's Build Something
                  <br />
                  Impactful
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">EMAIL</h3>
                    <a href="mailto:plishimwe@gmail.com" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                      plishimwe@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">PHONE</h3>
                    <a href="tel:+260966298816" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                      +260 966 298 816
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">LOCATION</h3>
                    <address className="text-xl not-italic">
                      Lusaka, Zambia
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-minimal text-muted-foreground mb-6">CONNECT</h3>
                  <div className="space-y-4">
                    <a href="https://www.linkedin.com/in/pacifique-ishimwe" target="_blank" rel="noopener noreferrer" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      LinkedIn
                    </a>
                    <a href="mailto:plishimwe@gmail.com" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      Email
                    </a>
                  </div>
                </div>
                
                <div className="pt-12 border-t border-border">
                  <p className="text-muted-foreground">
                    I'm always open to discussing new product challenges, consulting opportunities, 
                    or connecting with fellow product thinkers. Whether it's AI, platforms, 
                    or emerging market innovation — let's talk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
