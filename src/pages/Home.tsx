import { Link } from "react-router-dom";
import profileImage from "@/assets/siddhant-profile.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Founding GTM &amp; Business Operations · Tynari
              </p>
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
                Hello, I'm{" "}
                <span className="gradient-text block mt-2">
                  Siddhant Chopra
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl leading-relaxed font-light">
                Data Science &amp; Mathematics graduate working where analytics, FinTech and
                print-on-demand meet — building go-to-market and business operations for
                early-stage ventures.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="px-5 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm">
                <span className="text-primary font-medium text-sm">Analytics</span>
              </div>
              <div className="px-5 py-2 bg-accent/10 border border-accent/30 rounded-full backdrop-blur-sm">
                <span className="text-accent font-medium text-sm">FinTech</span>
              </div>
              <div className="px-5 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm">
                <span className="text-primary font-medium text-sm">Print-on-Demand</span>
              </div>
              <div className="px-5 py-2 bg-muted/50 border border-border rounded-full backdrop-blur-sm">
                <span className="text-muted-foreground font-medium text-sm">CFA Aspirant</span>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 transform hover:-translate-y-0.5"
              >
                Let's Connect
              </Link>
              <Link 
                to="/experience" 
                className="px-8 py-4 border border-border text-foreground rounded-xl font-medium hover:bg-card/50 transition-all duration-300 backdrop-blur-sm hover:border-primary/30"
              >
                View Experience
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="w-80 h-96 lg:w-96 lg:h-[480px] relative group">
                <img
                  src={profileImage}
                  alt="Siddhant Chopra - Data Science & Mathematics Graduate"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent rounded-3xl" />
                {/* Floating accent */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
