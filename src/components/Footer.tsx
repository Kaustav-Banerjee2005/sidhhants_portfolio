import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About This Site</h3>
            <p className="text-sm text-muted-foreground">
              Portfolio of Siddhant Chopra — Data Science & Mathematics graduate, Founding
              GTM & Business Operations at Tynari, and founder of WeThinkDIGI and EDU TECH BOOM.
            </p>
          </div>

          {/* Developer Credit */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Website Developer</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Created by <span className="text-foreground font-medium">Kaustav Banerjee</span>
            </p>
            <p className="text-sm text-muted-foreground mb-3">
              Full-stack developer & designer
            </p>
            <div className="flex gap-3">
              <a 
                href="mailto:kaustav@example.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email Kaustav"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/kaustavbanerjee" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Kaustav's LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/kaustavbanerjee" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Kaustav's GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Kaustav */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Need a website like this?
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              Email: <a href="mailto:kaustav@example.com" className="text-primary hover:underline">
                kaustav@example.com
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              Phone: <a href="tel:+1234567890" className="text-primary hover:underline">
                +1 (234) 567-890
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Siddhant Chopra. All rights reserved. 
            <span className="mx-2">•</span>
            Developed by <span className="text-primary">Kaustav Banerjee</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
