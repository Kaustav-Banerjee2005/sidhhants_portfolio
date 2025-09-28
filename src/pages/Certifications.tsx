import { Award, Calendar, ExternalLink, Building } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "COMMUNICATION SKILL DEVELOPMENT",
      issuer: "Christ University, Bangalore",
      issueDate: "May 2025",
      credentialId: "",
      skills: ["Communication"],
      category: "Communication"
    },
    {
      title: "E-Business",
      issuer: "NPTEL",
      issueDate: "May 2025",
      credentialId: "NPTEL25MG19S54570335",
      skills: ["E-Business"],
      category: "Business"
    },
    {
      title: "Trading with Data Science",
      issuer: "Booming Bulls Academy™",
      issueDate: "Apr 2025",
      credentialId: "",
      skills: ["Trading", "Data science trading"],
      category: "Finance"
    },
    {
      title: "CSS (Basic) Certificate",
      issuer: "HackerRank",
      issueDate: "Mar 2025",
      credentialId: "FB4B214OB341",
      skills: ["CSS"],
      category: "Programming"
    },
    {
      title: "SEBI - Investor Certification Examination",
      issuer: "National Institute of Securities Markets (NISM)",
      issueDate: "Mar 2025",
      expiryDate: "Mar 2027",
      credentialId: "NISM20250001707777",
      skills: ["Investment", "Securities"],
      category: "Finance"
    },
    {
      title: "Advanced Algorithmic Trading and Portfolio Management",
      issuer: "NPTEL",
      issueDate: "Sep 2024",
      credentialId: "",
      skills: ["Machine Learning", "Artificial Intelligence (AI)", "Algorithmic Trading", "Portfolio Management"],
      category: "Finance"
    },
    {
      title: "Python Certificate",
      issuer: "HackerRank",
      issueDate: "Jun 2024",
      credentialId: "37CEB11707B3",
      skills: ["Python (Programming Language)"],
      category: "Programming"
    },
    {
      title: "SQL (Advanced) Certificate",
      issuer: "HackerRank",
      issueDate: "Jun 2024",
      credentialId: "D132554F8667",
      skills: ["SQL"],
      category: "Programming"
    },
    {
      title: "Software Engineer Intern Certificate",
      issuer: "HackerRank",
      issueDate: "Jun 2024",
      credentialId: "13CC7705B6E0",
      skills: ["Software Development", "Data Science", "Data Analysis"],
      category: "Programming"
    },
    {
      title: "Analyzing and Visualizing Data in Looker",
      issuer: "Google",
      issueDate: "May 2024",
      credentialId: "9009310",
      skills: ["looker"],
      category: "Data Analytics"
    },
    {
      title: "BRIDGE COURSE FOR DIFFERENTIAL CALCULUS",
      issuer: "Christ University, Bangalore",
      issueDate: "May 2024",
      credentialId: "",
      skills: ["Mathematics"],
      category: "Mathematics"
    },
    {
      title: "Developing Data Models with LookML",
      issuer: "Google",
      issueDate: "May 2024",
      credentialId: "9112135",
      skills: ["LookML", "looker"],
      category: "Data Analytics"
    },
    {
      title: "FINANCIAL LITERACY",
      issuer: "Christ University, Bangalore",
      issueDate: "May 2024",
      credentialId: "",
      skills: ["Finance"],
      category: "Finance"
    },
    {
      title: "PRINCIPLES OF PROGRAMMING",
      issuer: "Christ University, Bangalore",
      issueDate: "May 2024",
      credentialId: "",
      skills: ["Programming"],
      category: "Programming"
    },
    {
      title: "Scholar @ Ashoka's YSP Summer Programme",
      issuer: "Ashoka University",
      issueDate: "Jul 2022",
      credentialId: "",
      skills: ["Artificial Intelligence (AI)", "Future of Work"],
      category: "AI/Research"
    },
    {
      title: "Certificate of Completion",
      issuer: "HCL GUVI",
      issueDate: "Apr 2021",
      credentialId: "6f2lk40016E5Y5ZP82",
      skills: ["Programming"],
      category: "Programming"
    }
  ];

  const categories = ["All", "Programming", "Data Analytics", "Finance", "Business", "Communication", "Mathematics", "AI/Research"];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Certifications</span> & Achievements
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive collection of professional certifications and academic achievements
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{certifications.length}</div>
            <div className="text-sm text-muted-foreground">Total Certifications</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              {certifications.filter(cert => cert.category === "Programming").length}
            </div>
            <div className="text-sm text-muted-foreground">Programming</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {certifications.filter(cert => cert.category === "Data Analytics").length}
            </div>
            <div className="text-sm text-muted-foreground">Data Analytics</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              {certifications.filter(cert => cert.category === "Finance").length}
            </div>
            <div className="text-sm text-muted-foreground">Finance</div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 border border-primary/20 rounded-lg">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      cert.category === "Programming" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                      cert.category === "Data Analytics" ? "bg-green-500/10 text-green-400 border border-green-500/20" :
                      cert.category === "Finance" ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20" :
                      cert.category === "Business" ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" :
                      cert.category === "Communication" ? "bg-pink-500/10 text-pink-400 border border-pink-500/20" :
                      cert.category === "Mathematics" ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" :
                      "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    }`}>
                      {cert.category}
                    </span>
                  </div>
                </div>
                {cert.credentialId && (
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{cert.title}</h3>
              
              <div className="flex items-center gap-2 mb-3">
                <Building className="w-4 h-4 text-muted-foreground" />
                <p className="text-primary font-medium text-sm">{cert.issuer}</p>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Issued {cert.issueDate}
                  {cert.expiryDate && ` • Expires ${cert.expiryDate}`}
                </p>
              </div>

              {cert.credentialId && (
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground">
                    Credential ID: <span className="font-mono">{cert.credentialId}</span>
                  </p>
                </div>
              )}

              <div className="space-y-2">
                <h4 className="text-xs font-medium text-foreground">Skills:</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-muted border border-border rounded text-xs text-muted-foreground">
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
  );
};

export default Certifications;