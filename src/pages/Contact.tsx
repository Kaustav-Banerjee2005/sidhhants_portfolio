import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's connect and explore how we can leverage data to unlock new opportunities and drive innovation together. 
            I'm always eager to collaborate and exchange ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're interested in data analytics, entrepreneurship, or collaboration opportunities, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="p-6 border border-border hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">siddhant.chopra@example.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-border hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a
                      href="tel:+917303230767"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 73032 30767
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-border hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">Delhi, India</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/siddhant-chopra/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Siddhant Chopra on LinkedIn"
                  className="p-3 bg-card border border-border rounded-lg hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-card border border-border rounded-lg hover:bg-accent/10 hover:border-accent/20 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-accent" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-card border border-border rounded-lg hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 group"
                >
                  <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8 border border-border shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input 
                      placeholder="John" 
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input 
                    placeholder="What's this about?" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project or collaboration idea..." 
                    rows={6}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
              I'm always open to discussing new opportunities, innovative projects, and ways to leverage data 
              for meaningful impact. Let's create something amazing together!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90">
                Schedule a Call
              </Button>
              <Button variant="outline" className="border-border hover:bg-card">
                View My Calendar
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;