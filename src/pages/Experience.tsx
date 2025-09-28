import { Calendar, MapPin, Building, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Printify",
      type: "Internship",
      period: "May 2024 - Jul 2024 · 3 mos",
      location: "Riga, Latvia · Remote",
      description: "As a member of the Supply Analytics team at Printify, I started by using Looker and LookML to enhance supply chain operations through data-driven insights. I then focused on analyzing positive CSAT feedback, further supporting the company's mission to empower businesses with print-on-demand solutions.",
      skills: ["LookML", "Data Visualization", "SQL", "Looker", "Python (Programming Language)", "GitHub", "Customer Satisfaction (CSAT)"],
      current: false
    },
    {
      title: "Head of Information Technology",
      company: "Xpertnbs",
      type: "Self-employed",
      period: "Sep 2020 - Mar 2024 · 3 yrs 7 mos",
      location: "India",
      description: "As the chief overseer of Sales, Events, and Marketing in our family enterprise, I orchestrated strategies to elevate our brand and engage customers. Through meticulous planning and dynamic execution, I ensured our business thrived amidst ever-evolving market landscapes.",
      skills: ["Marketing", "Sales Operations"],
      current: false
    },
    {
      title: "Web Developer",
      company: "Booming Bulls Academy™",
      type: "Internship",
      period: "Apr 2022 - Jun 2022 · 3 mos",
      location: "India · Remote",
      description: "Developed and maintained web applications, focusing on user experience and responsive design.",
      skills: ["Web Development", "JavaScript", "HTML", "CSS"],
      current: false
    },
    {
      title: "Marketing Internship",
      company: "GoodSpace",
      type: "Internship",
      period: "Sep 2021 - Sep 2021 · 1 mo",
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
      description: "It was a paid internship; where social media creatives, posters, brochures, tees designing, etc was my task.",
      skills: ["Graphic Design", "Social Media Design"],
      current: false
    },
    {
      title: "Summer Internship",
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
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey through data analytics, entrepreneurship, and digital innovation
          </p>
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
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
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
                  <h4 className="text-sm font-medium text-foreground">Skills:</h4>
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