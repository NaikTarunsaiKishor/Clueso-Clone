import { useState } from "react";
import { FileText, Mic, ZoomIn, Type, Palette, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const FeaturesSection = () => {
  const { toast } = useToast();
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: FileText,
      title: "Perfect Video Scripts",
      description: "AI removes filler words and rewrites your script clearly and concisely, perfectly matching your brand voice.",
      color: "from-blue-500 to-cyan-500",
      benefits: ["Remove umms & ahhs", "Improve clarity", "Match brand tone"],
      demo: "See script transformation"
    },
    {
      icon: Mic,
      title: "Lifelike AI Voiceovers",
      description: "Your recorded audio is swapped with AI voiceovers that sound impressively professional and realistic.",
      color: "from-purple-500 to-pink-500",
      benefits: ["50+ voice options", "30+ languages", "Natural intonation"],
      demo: "Listen to samples"
    },
    {
      icon: ZoomIn,
      title: "Smart Auto-Zooms",
      description: "AI automatically zooms into key actions, highlighting exactly what viewers need to see.",
      color: "from-orange-500 to-red-500",
      benefits: ["Auto-detect clicks", "Smooth transitions", "Focus areas"],
      demo: "View zoom demo"
    },
    {
      icon: Type,
      title: "Beautiful Captions",
      description: "Instantly engage your viewers with eye-catching, AI-generated captions that boost accessibility.",
      color: "from-green-500 to-emerald-500",
      benefits: ["Auto-sync timing", "Custom styling", "SEO benefits"],
      demo: "Caption preview"
    },
    {
      icon: FileText,
      title: "Auto-Generated SOPs",
      description: "Clear, step-by-step documentation magically created from your videos with screenshots.",
      color: "from-yellow-500 to-orange-500",
      benefits: ["PDF export", "Web publish", "Easy sharing"],
      demo: "See SOP example"
    },
    {
      icon: Palette,
      title: "Branded Templates",
      description: "Add custom intros, outros, and branded elements to maintain consistency across all videos.",
      color: "from-pink-500 to-rose-500",
      benefits: ["Logo placement", "Color schemes", "Transitions"],
      demo: "Browse templates"
    },
  ];

  const handleDemoClick = (featureTitle: string, demoText: string) => {
    toast({
      title: featureTitle,
      description: `Loading ${demoText.toLowerCase()}...`,
    });
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" id="features">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-accent/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/10 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">AI-Powered Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            AI does the heavy-lifting.
            <br />
            <span className="text-gradient">The final touches are all yours.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything is customizable. Transform your rough recordings into professional content with just a few clicks.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative bg-card rounded-2xl p-6 lg:p-8 border transition-all duration-300 hover-lift cursor-pointer ${
                activeFeature === index 
                  ? 'border-primary/40 shadow-card-hover ring-2 ring-primary/10' 
                  : 'border-border hover:border-primary/30'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveFeature(index)}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                {feature.description}
              </p>

              {/* Benefits */}
              <div className="space-y-2 mb-5">
                {feature.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Demo Link */}
              <button 
                onClick={() => handleDemoClick(feature.title, feature.demo)}
                className="flex items-center text-primary font-medium text-sm group/link"
              >
                {feature.demo}
                <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
              </button>

              {/* Active indicator */}
              {activeFeature === index && (
                <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-primary shadow-glow -translate-y-1 translate-x-1" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/features">
            <Button variant="hero" size="lg" className="group">
              Explore All Features
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;