import { GraduationCap, Briefcase, Target, Compass, Rocket } from "lucide-react";

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
            📊 Data Analyst &amp; Entrepreneur 🚀
          </p>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
            Analytics · FinTech · E-commerce · Print-on-Demand · Startups ·
            Specialized Investment Funds (SIF) · CFA Aspirant
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
                  Greetings! I'm Siddhant Chopra, a Data Science &amp; Mathematics graduate who
                  uses data to drive meaningful insights and business growth. My background starts
                  in digital marketing and design, and has moved steadily into analytics,
                  go-to-market and business operations.
                </p>
                <p>
                  My journey began five years ago when I recognized the power of harnessing data to
                  create value and empower others. This realization led me to establish{" "}
                  <span className="text-primary font-medium">WeThinkDIGI</span>, a marketing agency
                  dedicated to liberating individuals through strategic digital initiatives.
                  Alongside, I initiated <span className="text-accent font-medium">EDU TECH BOOM</span>,
                  an edtech venture aimed at equipping aspiring talents with essential computer
                  skills, fostering independence and entrepreneurial spirit.
                </p>
                <p>
                  I completed my <span className="text-primary font-medium">B.Sc. in Data Science
                  &amp; Mathematics at Christ University, Bengaluru (2023–2026)</span>, and cut my
                  teeth in industry as a Data Analyst on the Supply Analytics team at{" "}
                  <span className="text-accent font-medium">Printify</span>, working with Python,
                  SQL and LookML (Looker). Since then I've worked across growth, business
                  development and research — at RAZE, at the family printing business Koncept
                  Prints, and on the Specialized Investment Funds platform SIF360.
                </p>
                <p>
                  Today I'm a founding member of the{" "}
                  <span className="text-primary font-medium">GTM &amp; Business Operations team at
                  Tynari</span>, an AI-powered print-on-demand platform — working across
                  go-to-market, supply-side growth, investor relations and the everyday machinery
                  that makes an early-stage company run. Alongside this, I'm a CFA aspirant,
                  preparing for an M.Sc. in Data Science in Germany with a Summer 2027 intake.
                </p>
                <p>
                  I firmly believe that a successful future lies in our ability to harness the power
                  of data effectively with a clear vision and a relentless drive for excellence.
                </p>
                <p className="text-foreground font-medium">
                  Let's connect and explore how we can leverage data to unlock new opportunities and
                  drive innovation together. Feel free to reach out—I'm always eager to collaborate
                  and exchange ideas.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-accent" />
                Current Role
              </h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-medium text-foreground">
                    Founding GTM &amp; Business Operations
                  </p>
                  <p className="text-muted-foreground">Tynari</p>
                  <p className="text-xs text-muted-foreground">Aug 2026 - Present</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-foreground">B.Sc. Data Science &amp; Mathematics</p>
                  <p className="text-muted-foreground">Christ University, Bengaluru</p>
                  <p className="text-xs text-muted-foreground">2023 - 2026</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Khaitan Public School</p>
                  <p className="text-xs text-muted-foreground">2009 - 2023</p>
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
                  <p className="text-muted-foreground">Founder &amp; CEO</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">EDU TECH BOOM</p>
                  <p className="text-muted-foreground">Co-Founder &amp; COO</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Koncept Prints</p>
                  <p className="text-muted-foreground">Business Development</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-accent" />
                Next Chapter
              </h3>
              <div className="space-y-2 text-sm">
                <p className="font-medium text-foreground">M.Sc. Data Science · Germany</p>
                <p className="text-muted-foreground">Targeting Summer 2027 admissions</p>
                <p className="text-xs text-muted-foreground">
                  GRE · IELTS · German language · CFA programme
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-primary" />
                Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-primary">Analytics</span>
                <span className="px-2 py-1 bg-accent/10 border border-accent/20 rounded text-accent">FinTech</span>
                <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-primary">Print-on-Demand</span>
                <span className="px-2 py-1 bg-muted border border-border rounded text-muted-foreground">E-commerce</span>
                <span className="px-2 py-1 bg-muted border border-border rounded text-muted-foreground">Startups</span>
                <span className="px-2 py-1 bg-muted border border-border rounded text-muted-foreground">SIF</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Highlights</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Research Paper", d: "Presented a research paper on AI in education during university." },
              { t: "Interned in Latvia", d: "Remote Data Analyst internship with Printify's Supply Analytics team, Riga." },
              { t: "Media Head · Blossoms'24", d: "Led the media team building the online presence of Blossoms'24, School of Sciences, Christ University." },
              { t: "Graduated 2026", d: "Completed B.Sc. Data Science & Mathematics — near-100% attendance across semesters." },
            ].map((h) => (
              <div key={h.t} className="bg-card border border-border rounded-2xl p-6">
                <p className="font-semibold text-foreground mb-2">{h.t}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent posts */}
        <div>
          <h2 className="text-3xl font-bold mb-8">From LinkedIn</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { date: "Aug 2026", t: "Why we're building Tynari", d: "Many big consumer brands started with an audience asking \"can I buy this on a shirt?\". Tynari closes the operations gap so creators can launch products in hours with zero inventory.", url: "https://www.linkedin.com/posts/siddhant-chopra_tynari-linkedin-activity-7497287942919327744-frdm" },
              { date: "Jul 2026", t: "Next stop: Germany, Summer 2027", d: "Targeting an M.Sc. in Data Science with finance electives, preparing GRE, IELTS and German full-time.", url: "https://www.linkedin.com/posts/siddhant-chopra_germany-mastersingermany-summer2027-activity-7478353178313269248-kVlE" },
              { date: "Jun 2026", t: "My Christ journey ends here", d: "Three years in Bangalore: projects, internships, student council, startup ideas — and where I found my footing.", url: "https://www.linkedin.com/posts/siddhant-chopra_my-christ-journey-ends-here-and-no-this-activity-7475496577349033986-3r9l" },
              { date: "Aug 2025", t: "Third year: the plot twist", d: "Research paper, an internship in Latvia, building an app, trading and edtech dreams — all at once.", url: "https://www.linkedin.com/posts/siddhant-chopra_thirdyear-christuniversity-dataanalytics-activity-7358867218689875969-NCue" },
            ].map((p) => (
              <a key={p.url} href={p.url} target="_blank" rel="noopener noreferrer" className="block bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
                <p className="text-xs text-muted-foreground mb-2">{p.date}</p>
                <p className="font-semibold text-foreground mb-2">{p.t}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.d}</p>
                <span className="text-sm text-primary">Read on LinkedIn →</span>
              </a>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
