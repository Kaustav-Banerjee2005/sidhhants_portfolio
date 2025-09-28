import { Heart, Calendar, MapPin, Users, Award } from "lucide-react";

const Volunteers = () => {
  const volunteerExperiences = [
    {
      title: "School Level Student Council Member (SSC)",
      organization: "Christ University, Bangalore",
      period: "Aug 2023 - Jul 2024 · 1 yr",
      location: "Bangalore",
      description: "Active member of the student council, contributing to student affairs and university initiatives.",
      category: "Student Leadership",
      impact: "Student Council Leadership"
    },
    {
      title: "Sub Head of Media & Design at Datamaze 2024-25",
      organization: "Christ University, Bangalore",
      period: "Sep 2024 · 1 mo",
      location: "Bangalore",
      description: "Led media and design operations for Datamaze, a major science and technology event.",
      category: "Event Management",
      impact: "Science and Technology Event"
    },
    {
      title: "Core Com. Member, StaDa - Media Vertical",
      organization: "Christ University, Bangalore",
      period: "Oct 2024 - Present · 1 yr",
      location: "Bangalore",
      description: "Core committee member focusing on media operations and communications.",
      category: "Media & Communications",
      impact: "Ongoing Leadership Role"
    },
    {
      title: "Head of Logistics at Blossoms 2024-25",
      organization: "Christ University, Bangalore",
      period: "Nov 2024 - Jan 2025 · 3 mos",
      location: "Bangalore",
      description: "Managed logistics operations for the annual Blossoms event.",
      category: "Event Management",
      impact: "Large Scale Event Coordination"
    },
    {
      title: "Event Lead, AD-Venture at Inflectra'25 (STADA)",
      organization: "Christ University, Bangalore",
      period: "Feb 2025 - Mar 2025 · 2 mos",
      location: "Bangalore",
      description: "Led the AD-Venture event as part of Inflectra'25 under STADA.",
      category: "Event Leadership",
      impact: "Event Leadership Excellence"
    },
    {
      title: "Volunteer, Marketing & Design at Inflectra'25 (STADA)",
      organization: "Christ University, Bangalore",
      period: "Feb 2025 - Mar 2025 · 2 mos",
      location: "Bangalore",
      description: "Contributed to marketing and design efforts for Inflectra'25.",
      category: "Marketing & Design",
      impact: "Creative Contributions"
    },
    {
      title: "Broadcaster @ Khaitan Radio",
      organization: "Khaitan Public School",
      period: "Aug 2021 - Aug 2022 · 1 yr 1 mo",
      location: "School",
      description: "Managed social media creatives, logo design and YouTube channel management.",
      category: "Media Production",
      impact: "Digital Media Management"
    },
    {
      title: "Representative of Social Affairs @ The Khaitan Dispatch",
      organization: "Khaitan Public School",
      period: "Jul 2021 - Jul 2022 · 1 yr 1 mo",
      location: "School",
      description: "Worked as Rep. of Social Affairs at THE KHAITAN DISPATCH, a student-led monthly newspaper initiative. Managed all creatives and social media standings.",
      category: "Media & Communications",
      impact: "Student Journalism Leadership"
    },
    {
      title: "ICT Captain",
      organization: "Khaitan Public School",
      period: "May 2021 - Apr 2022 · 1 yr",
      location: "School",
      description: "Led information and communication technology initiatives in school.",
      category: "Technology Leadership",
      impact: "ICT Innovation Leadership"
    },
    {
      title: "Program Head @ Khaitan Internship Programme",
      organization: "Khaitan Public School",
      period: "Jul 2021 - Mar 2022 · 9 mos",
      location: "School",
      description: "Headed the internship program for students, facilitating professional development opportunities.",
      category: "Program Management",
      impact: "Student Development Program"
    },
    {
      title: "Head Of Graphic Designers @ Khaitan Meraki",
      organization: "Khaitan Public School",
      period: "Dec 2021 - Jan 2022 · 2 mos",
      location: "School",
      description: "Led the graphic design team for Khaitan Meraki cultural event.",
      category: "Creative Leadership",
      impact: "Cultural Event Design Leadership"
    },
    {
      title: "Graphic Designer @KhaitanMUN",
      organization: "Khaitan Public School",
      period: "Jul 2021 - Aug 2021 · 2 mos",
      location: "School",
      description: "Worked as graphic designer in International Press for KhaitanMUN.",
      category: "Design & Media",
      impact: "International Press Contribution"
    },
    {
      title: "Graphic Designer @The Khaitan Dispatch",
      organization: "Khaitan Public School",
      period: "Sep 2020 - Jun 2021 · 10 mos",
      location: "School",
      description: "Worked as Graphic Designer for THE KHAITAN DISPATCH, student-led monthly newspaper initiative.",
      category: "Design & Media",
      impact: "Student Publication Design"
    },
    {
      title: "Delegate @KhaitanMUN",
      organization: "Khaitan Public School",
      period: "Jun 2020 - Jul 2020 · 2 mos",
      location: "School",
      description: "Participated as Pfizer delegate in the World Health Organisation Crisis Committee.",
      category: "Model UN",
      impact: "International Diplomacy Simulation"
    },
    {
      title: "Social Media & Designing Head",
      organization: "TED Conferences",
      period: "Jul 2021 - Dec 2021 · 6 mos",
      location: "School",
      description: "Social media & designing head for TedxKhaitanPublicSchool.",
      category: "Event Leadership",
      impact: "TEDx Event Leadership"
    },
    {
      title: "Undersecretary",
      organization: "Pathos Model UN (MUN)",
      period: "Jun 2021 - Sep 2021 · 4 mos",
      location: "Virtual",
      description: "USG Designing for the PATHØS MUN V.3.Ø",
      category: "Model UN",
      impact: "International MUN Leadership"
    }
  ];

  const categories = ["All", "Student Leadership", "Event Management", "Media & Communications", "Creative Leadership", "Technology Leadership"];
  const organizations = ["Christ University", "Khaitan Public School", "TED Conferences", "Pathos Model UN"];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Community <span className="gradient-text">Involvement</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Contributing to communities through leadership, creativity, and service
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{volunteerExperiences.length}</div>
            <div className="text-sm text-muted-foreground">Total Positions</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              {volunteerExperiences.filter(exp => exp.organization.includes("Christ University")).length}
            </div>
            <div className="text-sm text-muted-foreground">University Roles</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {volunteerExperiences.filter(exp => exp.category.includes("Leadership")).length}
            </div>
            <div className="text-sm text-muted-foreground">Leadership Positions</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Years of Service</div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {volunteerExperiences.map((exp, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-primary/10 border border-primary/20 rounded-lg mt-1">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.organization}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.category.includes("Leadership") ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                        exp.category.includes("Event") ? "bg-green-500/10 text-green-400 border border-green-500/20" :
                        exp.category.includes("Media") ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" :
                        exp.category.includes("Creative") ? "bg-pink-500/10 text-pink-400 border border-pink-500/20" :
                        exp.category.includes("Technology") ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" :
                        "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                      }`}>
                        {exp.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
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
              
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-accent font-medium">Impact: {exp.impact}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Community Impact</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Through various leadership roles and volunteer positions, I've contributed to student development, 
              event management, creative projects, and community building across multiple organizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteers;