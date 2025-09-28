import { GraduationCap, Briefcase, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            📊 Data Analyst & Entrepreneur 🚀
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Main Bio */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">My Journey</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Greetings! I'm Siddhant Chopra, a passionate individual for leveraging data to drive meaningful insights and business growth. With a background in digital marketing and design, I've recently transitioned my focus towards the dynamic world of data analysis.
                </p>
                <p>
                  My journey began 5 years ago when I recognized the power of harnessing data to create value and empower others. This realization led me to establish <span className="text-primary font-medium">WeThinkDIGI</span>, a marketing agency dedicated to liberating individuals through strategic digital initiatives. Alongside, I initiated <span className="text-accent font-medium">EDU TECH BOOM</span>, an edtech venture aimed at equipping aspiring talents with essential computer skills, fostering independence and entrepreneurial spirit.
                </p>
                <p>
                  As I delved deeper into the realm of data, I embarked on a transformative educational journey, currently pursuing a <span className="text-primary font-medium">B.Sc. in Data Science & Mathematics at Christ University, Bangalore</span>. Concurrently, I'm gaining hands-on experience as a <span className="text-accent font-medium">Data Analyst Intern at Printify</span>, where I'm honing my skills in Python, SQL, and LookML (Looker).
                </p>
                <p>
                  I firmly believe that a successful future lies in our ability to harness the power of data effectively with a clear vision and a relentless drive for excellence.
                </p>
                <p className="text-foreground font-medium">
                  Let's connect and explore how we can leverage data to unlock new opportunities and drive innovation together. Feel free to reach out—I'm always eager to collaborate and exchange ideas.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-foreground">B.Sc. Data Science & Mathematics</p>
                  <p className="text-muted-foreground">Christ University, Bangalore</p>
                  <p className="text-xs text-muted-foreground">Current</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-accent" />
                Current Role
              </h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-medium text-foreground">Data Analyst Intern</p>
                  <p className="text-muted-foreground">Printify</p>
                  <p className="text-xs text-muted-foreground">May 2024 - Present</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Ventures
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-foreground">WeThinkDIGI</p>
                  <p className="text-muted-foreground">Founder & CEO</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">EDU TECH BOOM</p>
                  <p className="text-muted-foreground">Co-Founder & COO</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-accent" />
                Interests
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-primary">Data Science</span>
                <span className="px-2 py-1 bg-accent/10 border border-accent/20 rounded text-accent">Entrepreneurship</span>
                <span className="px-2 py-1 bg-muted border border-border rounded text-muted-foreground">AI/ML</span>
                <span className="px-2 py-1 bg-muted border border-border rounded text-muted-foreground">Trading</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;