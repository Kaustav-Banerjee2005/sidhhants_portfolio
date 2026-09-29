import { Link } from "react-router-dom";
import { Mail, Linkedin, Github, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const exploreLinks = [
    { path: "/about", label: "About" },
    { path: "/experience", label: "Experience" },
    { path: "/skills", label: "Skills" },
    { path: "/certifications", label: "Certifications" },
    { path: "/volunteers", label: "Volunteers" },
    { path: "/products", label: "Products" },
  ];

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Siddhant */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Siddhant Chopra</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Data Science &amp; Mathematics graduate. Founding GTM &amp; Business Operations at
              Tynari. Founder of WeThinkDIGI and EDU TECH BOOM.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/siddhant-chopra/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Siddhant Chopra on LinkedIn"
                className="p-2.5 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:siddhant.chopra@example.com"
                aria-label="Email Siddhant Chopra"
                className="p-2.5 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Explore</h3>
            <ul className="space-y-2">
              {exploreLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Siddhant */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Work With Me</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Open to analytics, FinTech, go-to-market and collaboration conversations.
            </p>
            <div className="space-y-2 mb-4">
              <p className="text-sm text-muted-foreground">
                Email:{" "}
                <a
                  href="mailto:siddhant.chopra@example.com"
                  className="text-primary hover:underline"
                >
                  siddhant.chopra@example.com
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                Phone:{" "}
                <a
                  href="tel:+917303230767"
                  className="text-primary hover:underline"
                >
                  +91 73032 30767
                </a>
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Delhi, India
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Send me a message
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Siddhant Chopra. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <p className="text-sm text-muted-foreground">
              Website developed by <span className="text-foreground font-medium">Kaustav Banerjee</span>
            </p>
            <div className="flex gap-1">
              <a
                href="mailto:kaustav@example.com"
                aria-label="Email Kaustav Banerjee"
                className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/kaustavbanerjee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kaustav Banerjee on LinkedIn"
                className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/kaustavbanerjee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kaustav Banerjee on GitHub"
                className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
