import { Calendar, MapPin, Building, Rocket, BadgeCheck } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Founding GTM & Business Operations",
      company: "Tynari",
      type: "Full-time",
      period: "Aug 2026 - Present",
      location: "Hyderabad, Telangana, India",
      description:
        "Founding member of the GTM & Business Operations team at Tynari, an AI-powered print-on-demand platform that lets creators turn an audience into a product business without holding inventory. I work across go-to-market, supply-side growth, investor relations and the everyday machinery that makes an early-stage company run.",
      skills: ["Go-to-Market Strategy", "Supply-side Growth", "Investor Relations", "Business Operations", "Print-on-Demand", "AI"],
      current: true
    },
    {
      title: "Analyst Trainee - Design & Research",
      company: "SIF360",
      type: "Internship",
      period: "Jul 2026 - Aug 2026",
      location: "India",
      description:
        "Joined the SIF360 team as Analyst Trainee - Design & Research, supporting research and design work on a platform built around Specialized Investment Funds (SIF), and coordinating execution of the SIF360 Bharat Summit 2026, powered by Nuvama Wealth Mutual Fund.",
      skills: ["Research", "Design", "Specialized Investment Funds (SIF)", "Event Coordination", "Wealth Management"],
      current: false
    },
    {
      title: "Head of Business Development",
      company: "Koncept Prints",
      type: "Family Business",
      period: "Jun 2026 - Present",
      location: "Delhi, India",
      description:
        "Leading business development for a family-owned commercial offset printing business founded in 1955. Work spans vendor registration and onboarding with large corporations, B2B outreach across EMS, publishing, healthcare, FMCG and retail, and positioning the business for larger, more demanding print requirements.",
      skills: ["Business Development", "B2B Sales", "Vendor Management", "Commercial Printing", "Procurement", "Supply Chain"],
      current: false
    },
    {
      title: "Growth Intern",
      company: "RAZE (RazeHQ)",
      type: "Internship",
      period: "Jan 2026 - Apr 2026",
      location: "India",
      description:
        "Joined as the first team member for two new verticals: Giftbox by RazeHQ, focused on structured B2B corporate gifting, and Lukout, a society-first prebooking commerce model. Worked across growth, early-stage operations and positioning - translating business objectives into acquisition strategy, campaign structuring and measurable engagement.",
      skills: ["Growth", "Early-stage Operations", "Positioning", "B2B Corporate Gifting", "Campaign Management", "Acquisition Strategy"],
      current: false
    },
    {
      title: "Data Analyst Intern",
      company: "Printify",
      type: "Internship",
      period: "May 2024 - Jul 2024 · 3 mos",
      location: "Riga, Latvia · Remote",
      description:
        "As a member of the Supply Analytics team at Printify, I started by using Looker and LookML to enhance supply chain operations through data-driven insights. I then focused on analyzing positive CSAT feedback, further supporting the company's mission to empower businesses with print-on-demand solutions.",
      skills: ["LookML", "Data Visualization", "SQL", "Looker", "Python (Programming Language)", "GitHub", "Customer Satisfaction (CSAT)"],
      current: false
    },
    {
      title: "Head of Information Technology",
      company: "Xpertnbs",
      type: "Self-employed",
      period: "Sep 2020 - Mar 2024 · 3 yrs 7 mos",
      location: "India",
      description:
        "As the chief overseer of Sales, Events, and Marketing in our family enterprise, I orchestrated strategies to elevate our brand and engage customers. Through meticulous planning and dynamic execution, I ensured our business thrived amidst ever-evolving market landscapes.",
      skills: ["Marketing", "Sales Operations"],
      current: false
    },
    {
      title: "Web Developer Intern",
      company: "Booming Bulls Academy™",
      type: "Internship",
      period: "Apr 2022 - Jun 2022 · 3 mos",
      location: "India · Remote",
      description: "Developed and maintained web applications, focusing on user experience and responsive design.",
      skills: ["Web Development", "JavaScript", "HTML", "CSS"],
      current: false
    },
    {
      title: "Marketing Intern",
      company: "GoodSpace",
      type: "Internship",
      period: "Sep 2021 · 1 mo",
      location: "India · Remote",
      description: "Gained experience in digital marketing strategies and campaign management.",
      skills: ["Digital Marketing", "Marketing"],
      current: false
    },
    {
      title: "Graphic Design Intern",
      company: "digiBOOM India",
      type: "Internship",
      period: "Jul 2021 - Aug 2021 · 2 mos",
      location: "India",
      description: "A paid internship where social media creatives, posters, brochures and tee designing were my core tasks.",
      skills: ["Graphic Design", "Social Media Design"],
      current: false
    },
    {
      title: "Summer Intern",
      company: "Vedatya Institute",
      type: "Internship",
      period: "May 2021 - Jun 2021 · 2 mos",
      location: "Gurugram, Haryana, India",
      description: "Completed a comprehensive summer internship program focusing on practical learning and skill development.",
      skills: ["Research", "Communication"],
      current: false
    }
  ];

  const ventures = [
    {
      title: "Founder & CEO",
      company: "WeThinkDIGI",
      period: "2020 - Present",
      description: "Marketing agency dedicated to liberating individuals through strategic digital initiatives.",
      skills: ["Digital Marketing", "Video Editing", "New Business Development", "Graphic Design"]
    },
    {
      title: "Co-Founder & COO",
      company: "EDU TECH BOOM",
      period: "2021 - Present",
      description: "Edtech venture aimed at equipping aspiring talents with essential computer skills, fostering independence and entrepreneurial spirit.",
      skills: ["Edtech", "Web Development", "Education"]
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Four years and counting across data analytics, growth, business development and
            entrepreneurship - from a print-on-demand internship in Europe to founding GTM roles
            in Indian startups.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">4 yrs+</div>
            <div className="text-sm text-muted-foreground">Total Experience</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">{experiences.length}</div>
            <div className="text-sm text-muted-foreground">Roles & Internships</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{ventures.length}</div>
            <div className="text-sm text-muted-foreground">Ventures Founded</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">2027</div>
            <div className="text-sm text-muted-foreground">M.Sc. Target · Germany</div>
          </div>
        </div>

        {/* Current Role Highlight */}
        <div className="mb-16 bg-card border border-primary/30 rounded-2xl p-8 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-foreground">
                  Founding GTM &amp; Business Operations
                </h2>
                <span className="px-2 py-1 bg-accent/10 border border-accent/20 rounded text-xs text-accent">
                  Current
                </span>
              </div>
              <p className="text-primary font-medium mb-3">Tynari · Aug 2026 - Present · Hyderabad, India</p>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                Tynari is an AI-powered print-on-demand platform built to close the operations gap
                for Indian creators - turning an audience into a real product business in hours,
                with no inventory risk. As a founding member of the GTM &amp; Business Operations
                team, I work across go-to-market, supply-side growth, investor relations and
                business operations.
              </p>
            </div>
          </div>
        </div>

        {/* Ventures Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Building className="w-8 h-8 text-primary" />
            Entrepreneurial Ventures
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ventures.map((venture, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{venture.title}</h3>
                    <p className="text-primary font-medium">{venture.company}</p>
                    <p className="text-sm text-muted-foreground">{venture.period}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{venture.description}</p>
                <div className="flex flex-wrap gap-2">
                  {venture.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-xs text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-accent" />
            Professional Timeline
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      {exp.current && (
                        <span className="px-2 py-1 bg-accent/10 border border-accent/20 rounded text-xs text-accent">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-medium">{exp.company} · {exp.type}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                    <BadgeCheck className="w-4 h-4 text-accent" />
                    Skills:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-muted border border-border rounded-full text-xs text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
