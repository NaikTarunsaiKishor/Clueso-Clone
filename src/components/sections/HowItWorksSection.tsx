import { useState } from "react";
import { MonitorPlay, Wand2, Download, ArrowRight, Play, CheckCircle2, Upload, Share2, FileVideo } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const HowItWorksSection = () => {
  const { toast } = useToast();
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: "01",
      icon: MonitorPlay,
      title: "Record Your Screen",
      description: "Use our Chrome extension or upload any screen recording. No fancy equipment or preparation needed.",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Chrome extension",
        "Screen + webcam",
        "Upload existing",
        "No setup required"
      ],
      action: "Install Extension"
    },
    {
      number: "02",
      icon: Wand2,
      title: "AI Works Its Magic",
      description: "Our AI removes filler words, adds voiceover, creates captions, and generates documentation automatically.",
      color: "from-primary to-pink-400",
      features: [
        "Auto-edit video",
        "Add voiceover",
        "Generate captions",
        "Create docs"
      ],
      action: "See AI in Action"
    },
    {
      number: "03",
      icon: Download,
      title: "Export & Share",
      description: "Download your polished video, share documentation, or embed anywhere. It's that simple.",
      color: "from-green-500 to-emerald-500",
      features: [
        "MP4 & GIF export",
        "Embed anywhere",
        "Share links",
        "API access"
      ],
      action: "View Export Options"
    },
  ];

  const handleStepAction = (stepTitle: string, action: string) => {
    toast({
      title: stepTitle,
      description: `${action} - Feature demo loading...`,
    });
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-dark text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">Simple 3-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Three simple steps to transform your raw recordings into professional content. No video editing skills required.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative group"
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-16 left-full w-full items-center justify-center z-10 px-2">
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-primary-foreground/20 to-transparent" />
                    <ArrowRight className="w-5 h-5 text-primary-foreground/30 mx-2" />
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent to-primary-foreground/20" />
                  </div>
                )}

                {/* Card */}
                <div className={`h-full bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                  activeStep === index 
                    ? 'border-primary/50 bg-primary-foreground/10' 
                    : 'border-primary-foreground/10 hover:border-primary-foreground/20 hover:bg-primary-foreground/10'
                }`}>
                  {/* Number */}
                  <div className="text-7xl font-black text-primary-foreground/10 mb-4 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-primary-foreground/70 leading-relaxed mb-6">{step.description}</p>

                  {/* Features list */}
                  <div className="space-y-2 mb-6">
                    {step.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-primary-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action button */}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium"
                    onClick={() => handleStepAction(step.title, step.action)}
                  >
                    {step.action}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/signup">
            <Button variant="hero" size="xl" className="group">
              Start Creating for Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="text-sm text-primary-foreground/50 mt-4">No credit card required · Free 14-day trial</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;