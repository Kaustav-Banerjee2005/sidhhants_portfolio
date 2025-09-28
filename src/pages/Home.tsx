import profileImage from "@/assets/siddhant-profile.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-primary text-lg font-medium tracking-wide">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hello, I am{" "}
                <span className="gradient-text">
                  Siddhant Chopra
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Data Analyst & Entrepreneur passionate about leveraging data to drive meaningful insights and business growth.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                <span className="text-primary font-medium">Data Analytics</span>
              </div>
              <div className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg">
                <span className="text-accent font-medium">Entrepreneurship</span>
              </div>
              <div className="px-4 py-2 bg-muted border border-border rounded-lg">
                <span className="text-muted-foreground font-medium">Digital Marketing</span>
              </div>
            </div>

            <div className="flex gap-6 pt-4">
              <a 
                href="/contact" 
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
              <a 
                href="/experience" 
                className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-card transition-all duration-300"
              >
                View Experience
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative z-10 animate-float">
              <div className="w-80 h-96 lg:w-96 lg:h-[500px] relative">
                <img
                  src={profileImage}
                  alt="Siddhant Chopra"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  style={{ filter: 'drop-shadow(0 25px 50px rgba(59, 130, 246, 0.15))' }}
                />
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl -z-10 blur-sm transform scale-105" />
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-conic from-primary/5 via-accent/5 to-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;