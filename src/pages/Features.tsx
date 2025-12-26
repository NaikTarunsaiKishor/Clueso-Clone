import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Play, FileText, Mic, ZoomIn, Type, Palette, 
  Globe, Scissors, ImagePlus, Sparkles, ArrowRight,
  MonitorPlay, Wand2, Download, CheckCircle
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: FileText,
      title: "Perfect Video Scripts",
      description: "AI removes filler words and rewrites your script clearly and concisely, perfectly matching your brand voice. No more awkward pauses or rambling explanations.",
      benefits: ["Removes 'ums' and 'ahs'", "Matches brand voice", "Improves clarity"],
    },
    {
      icon: Mic,
      title: "Lifelike AI Voiceovers",
      description: "Your recorded audio is swapped with AI voiceovers that sound impressively professional and realistic. Choose from dozens of voices and languages.",
      benefits: ["50+ voice options", "Natural intonation", "Multiple languages"],
    },
    {
      icon: ZoomIn,
      title: "Smart Auto-Zooms",
      description: "AI automatically zooms into key actions, highlighting exactly what viewers need to see. Never miss an important click or input again.",
      benefits: ["Click detection", "Smooth transitions", "Focus on actions"],
    },
    {
      icon: Type,
      title: "Beautiful Captions",
      description: "Instantly engage your viewers with eye-catching, AI-generated captions. Fully customizable styles to match your brand.",
      benefits: ["Multiple styles", "99% accuracy", "Brand colors"],
    },
    {
      icon: FileText,
      title: "Auto-Generated SOPs",
      description: "Clear, step-by-step documentation magically created from your videos. Export to PDF, Notion, or your knowledge base.",
      benefits: ["Step-by-step guides", "Multiple formats", "Easy editing"],
    },
    {
      icon: Palette,
      title: "Branded Templates",
      description: "Add custom intros, outros, and branded elements to maintain consistency across all your videos.",
      benefits: ["Custom intros/outros", "Logo overlays", "Color schemes"],
    },
  ];

  const additionalFeatures = [
    { icon: Globe, name: "30+ Languages", description: "Translate content globally" },
    { icon: Scissors, name: "Smart Trimming", description: "Remove dead air automatically" },
    { icon: ImagePlus, name: "Screenshot Editor", description: "Crop, blur, annotate images" },
    { icon: MonitorPlay, name: "Chrome Extension", description: "Record directly in browser" },
    { icon: Wand2, name: "One-Click Polish", description: "Enhance videos instantly" },
    { icon: Download, name: "Multiple Exports", description: "MP4, GIF, PDF, and more" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-primary/10 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Powerful AI Features</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Everything you need to create{" "}
              <span className="text-gradient">amazing videos</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              From AI voiceovers to automatic documentation, Clueso has all the tools you need to transform rough recordings into polished content.
            </p>
            <Link to="/signup">
              <Button variant="hero" size="xl">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>

          {/* Main Features */}
          <div className="max-w-6xl mx-auto mb-24">
            <div className="grid md:grid-cols-2 gap-8">
              {mainFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {feature.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-center gap-1.5 text-sm text-foreground bg-secondary px-3 py-1 rounded-full"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-primary" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Features */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center mb-12">
              And so much more...
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {additionalFeatures.map((feature) => (
                <div
                  key={feature.name}
                  className="bg-card rounded-xl p-4 border border-border text-center hover:border-primary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground text-sm mb-1">{feature.name}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-2xl mx-auto mt-24 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Try Clueso free for 14 days. No credit card required.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/signup">
                <Button variant="hero" size="lg">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
