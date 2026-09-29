import { Code, Database, TrendingUp, PieChart, Users, Brush, Rocket } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Go-to-Market & Business Operations",
      icon: Rocket,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10 border-orange-500/20",
      skills: [
        { name: "Go-to-Market Strategy", level: 85 },
        { name: "Business Operations", level: 85 },
        { name: "Supply-side Growth", level: 80 },
        { name: "Investor Relations", level: 75 },
        { name: "Stakeholder Management", level: 82 },
        { name: "Early-stage Operations", level: 80 },
        { name: "Positioning & Messaging", level: 78 },
        { name: "B2B Sales", level: 76 }
      ]
    },
    {
      title: "Data Science & Analytics",
      icon: Database,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10 border-blue-500/20",
      skills: [
        { name: "Python (Programming Language)", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Data Analysis", level: 88 },
        { name: "Data Science", level: 82 },
        { name: "Data Visualization", level: 85 },
        { name: "LookML", level: 75 },
        { name: "Looker", level: 80 },
        { name: "Machine Learning", level: 70 },
        { name: "Artificial Intelligence (AI)", level: 68 }
      ]
    },
    {
      title: "Programming & Development",
      icon: Code,
      color: "text-green-400",
      bgColor: "bg-green-500/10 border-green-500/20",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 88 },
        { name: "Web Development", level: 85 },
        { name: "Software Development", level: 75 },
        { name: "GitHub", level: 80 },
        { name: "WordPress", level: 70 }
      ]
    },
    {
      title: "Finance & Trading",
      icon: TrendingUp,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10 border-yellow-500/20",
      skills: [
        { name: "Trading", level: 80 },
        { name: "Data Science Trading", level: 75 },
        { name: "Algorithmic Trading", level: 70 },
        { name: "Portfolio Management", level: 72 },
        { name: "Specialized Investment Funds (SIF)", level: 70 },
        { name: "Wealth Management", level: 68 },
        { name: "CFA Programme", level: 60 },
        { name: "Future of Work", level: 65 }
      ]
    },
    {
      title: "Business & Marketing",
      icon: PieChart,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10 border-purple-500/20",
      skills: [
        { name: "Digital Marketing", level: 90 },
        { name: "Marketing", level: 88 },
        { name: "Sales Operations", level: 80 },
        { name: "New Business Development", level: 85 },
        { name: "Business Negotiation", level: 75 },
        { name: "Customer Satisfaction (CSAT)", level: 80 },
        { name: "Edtech", level: 70 },
        { name: "Education", level: 75 }
      ]
    },
    {
      title: "Design & Media",
      icon: Brush,
      color: "text-pink-400",
      bgColor: "bg-pink-500/10 border-pink-500/20",
      skills: [
        { name: "Graphic Design", level: 90 },
        { name: "Canva", level: 85 },
        { name: "CorelDRAW", level: 80 },
        { name: "Video Editing", level: 82 }
      ]
    },
    {
      title: "Leadership & Communication",
      icon: Users,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10 border-cyan-500/20",
      skills: [
        { name: "Team Leadership", level: 85 },
        { name: "Event Management", level: 88 },
        { name: "Communication", level: 90 },
        { name: "Computer Science", level: 75 }
      ]
    }
  ];

  const getSkillLevel = (level: number) => {
    if (level >= 85) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 65) return "Intermediate";
    return "Beginner";
  };

  const getSkillColor = (level: number) => {
    if (level >= 85) return "text-green-400";
    if (level >= 75) return "text-blue-400";
    if (level >= 65) return "text-yellow-400";
    return "text-orange-400";
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and professional competencies
          </p>
        </div>

        {/* Skills Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {skillCategories.reduce((total, category) => total + category.skills.length, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Total Skills</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              {skillCategories.reduce((total, category) => 
                total + category.skills.filter(skill => skill.level >= 85).length, 0
              )}
            </div>
            <div className="text-sm text-muted-foreground">Expert Level</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{skillCategories.length}</div>
            <div className="text-sm text-muted-foreground">Skill Categories</div>
          </div>
        </div>

        {/* Skills Categories */}
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 ${category.bgColor} border rounded-lg`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                <div className="flex-1 h-px bg-border" />
                <span className="text-sm text-muted-foreground">
                  {category.skills.length} skills
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className={`text-sm font-medium ${getSkillColor(skill.level)}`}>
                        {getSkillLevel(skill.level)}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                            skill.level >= 85 ? "bg-gradient-to-r from-green-400 to-green-500" :
                            skill.level >= 75 ? "bg-gradient-to-r from-blue-400 to-blue-500" :
                            skill.level >= 65 ? "bg-gradient-to-r from-yellow-400 to-yellow-500" :
                            "bg-gradient-to-r from-orange-400 to-orange-500"
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Level Legend */}
        <div className="mt-12 bg-card border border-border rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-center">Proficiency Levels</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-500 rounded-full" />
              <span className="text-sm text-muted-foreground">Expert (85%+)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full" />
              <span className="text-sm text-muted-foreground">Advanced (75-84%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full" />
              <span className="text-sm text-muted-foreground">Intermediate (65-74%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full" />
              <span className="text-sm text-muted-foreground">Beginner (Below 65%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;