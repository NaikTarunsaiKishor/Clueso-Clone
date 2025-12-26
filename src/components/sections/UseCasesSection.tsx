import { useState } from "react";
import { GraduationCap, Megaphone, Users, Headphones, Video, BookOpen, ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const UseCasesSection = () => {
  const { toast } = useToast();
  const [activeCase, setActiveCase] = useState<string | null>(null);

  const useCases = [
    {
      icon: GraduationCap,
      title: "Customer Education",
      description: "Create engaging training content that helps customers get the most out of your product.",
      color: "from-blue-500 to-cyan-500",
      link: "/customers",
      stats: "45% faster onboarding",
      features: ["Product tutorials", "Feature walkthroughs", "Best practices guides"]
    },
    {
      icon: Megaphone,
      title: "Product Marketing",
      description: "Produce polished product demos and feature announcements that convert visitors to users.",
      color: "from-purple-500 to-pink-500",
      link: "/customers",
      stats: "3x more engagement",
      features: ["Launch videos", "Demo recordings", "Social content"]
    },
    {
      icon: Users,
      title: "Sales Enablement",
      description: "Equip your sales team with professional demo videos that close deals faster.",
      color: "from-orange-500 to-red-500",
      link: "/customers",
      stats: "25% higher close rate",
      features: ["Custom demos", "Proposal videos", "ROI presentations"]
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Build a library of how-to videos that reduce support tickets and improve satisfaction.",
      color: "from-green-500 to-emerald-500",
      link: "/customers",
      stats: "60% fewer tickets",
      features: ["Troubleshooting guides", "FAQ videos", "Help articles"]
    },
    {
      icon: Video,
      title: "Internal Training",
      description: "Onboard new employees faster with professional internal documentation and videos.",
      color: "from-yellow-500 to-orange-500",
      link: "/customers",
      stats: "50% faster onboarding",
      features: ["Onboarding flows", "Process docs", "Team updates"]
    },
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Turn complex processes into clear, searchable video documentation for your team.",
      color: "from-pink-500 to-rose-500",
      link: "/customers",
      stats: "80% self-service rate",
      features: ["Searchable library", "Categories", "Version control"]
    },
  ];

  const handleCaseClick = (title: string) => {
    toast({
      title: `${title}`,
      description: "Opening case study and examples...",
    });
  };

  const handleWatchDemo = (title: string) => {
    toast({
      title: `${title} Demo`,
      description: "Loading video demo...",
    });
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-subtle" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/10 mb-6 shadow-sm">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Use Cases</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built for every <span className="text-gradient">team</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From customer education to sales enablement, Clueso powers video content across your entire organization.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className={`group bg-card rounded-2xl p-6 border transition-all duration-300 cursor-pointer hover-lift ${
                activeCase === useCase.title 
                  ? 'border-primary/40 shadow-card-hover' 
                  : 'border-border hover:border-primary/30'
              }`}
              onMouseEnter={() => setActiveCase(useCase.title)}
              onMouseLeave={() => setActiveCase(null)}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                  <useCase.icon className="w-7 h-7 text-white" />
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {useCase.stats}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground mb-5">
                {useCase.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-5">
                {useCase.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Link 
                  to={useCase.link}
                  onClick={() => handleCaseClick(useCase.title)}
                  className="flex items-center text-primary font-medium text-sm hover:underline"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={() => handleWatchDemo(useCase.title)}
                  className="flex items-center text-muted-foreground hover:text-foreground font-medium text-sm transition-colors"
                >
                  <Play className="w-4 h-4 mr-1" />
                  Watch demo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/customers">
            <Button variant="hero" size="lg" className="group">
              See Customer Stories
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;