import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, ArrowRight, Star, Sparkles, CheckCircle2, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const { toast } = useToast();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const processingSteps = [
    "Analyzing video content...",
    "Removing filler words...",
    "Adding smart zooms...",
    "Generating captions...",
    "Processing complete!"
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % processingSteps.length);
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    toast({
      title: isPlaying ? "Video Paused" : "Video Playing",
      description: isPlaying ? "Click play to resume" : "Processing your video...",
    });
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    toast({
      title: "Fullscreen Mode",
      description: "Opening fullscreen preview...",
    });
  };

  return (
    <section className="relative pt-32 lg:pt-44 pb-20 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-to-b from-primary/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-accent/40 to-transparent rounded-full blur-3xl animate-float-delayed" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent to-accent/50 border border-primary/15 mb-8 animate-fade-in-up shadow-sm hover:shadow-md transition-shadow cursor-default">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-foreground">
              Trusted by 10,000+ teams worldwide
            </span>
            <div className="w-px h-4 bg-border" />
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="text-xs font-medium text-muted-foreground">(4.9)</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 animate-fade-in-up text-balance" style={{ animationDelay: "0.1s" }}>
            Turn Raw Recordings into{" "}
            <span className="text-gradient relative">
              Polished Videos
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up text-balance" style={{ animationDelay: "0.2s" }}>
            Just hit record. Clueso's AI transforms your screen recordings into professional product videos and step-by-step documentation in minutes, not hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/signup">
              <Button variant="hero" size="xl" className="w-full sm:w-auto group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="hero-outline" size="xl" className="w-full sm:w-auto group">
                <Play className="w-5 h-5 mr-2 text-primary group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {[
              "No credit card required",
              "Free 14-day trial",
              "Cancel anytime"
            ].map((text) => (
              <div key={text} className="flex items-center gap-2 group cursor-default">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-foreground transition-colors">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Video/Image */}
        <div className="mt-16 lg:mt-24 max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-elevated border border-border/50 bg-card hover-lift group">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-3.5 bg-secondary/80 border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors cursor-pointer" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-background/80 border border-border/50 text-xs text-muted-foreground">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-medium">app.clueso.io/editor</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={handleMuteToggle}
                  className="p-1.5 rounded-lg hover:bg-background/50 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-muted-foreground" /> : <Volume2 className="w-4 h-4 text-muted-foreground" />}
                </button>
                <button 
                  onClick={handleFullscreen}
                  className="p-1.5 rounded-lg hover:bg-background/50 transition-colors"
                >
                  <Maximize2 className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>
            
            {/* Video Preview Area */}
            <div className="aspect-video bg-gradient-to-br from-secondary via-secondary/50 to-background flex items-center justify-center relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent animate-gradient" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 lg:gap-8 p-6 lg:p-10 w-full max-w-5xl">
                  {/* Before Panel */}
                  <div className="col-span-1 bg-card rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-card border border-border hover:border-primary/20 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Before</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">Raw</span>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="h-2 bg-muted rounded-full animate-pulse" />
                      <div className="h-2 bg-muted rounded-full animate-pulse w-4/5" style={{ animationDelay: "0.1s" }} />
                      <div className="h-2 bg-muted rounded-full animate-pulse w-3/5" style={{ animationDelay: "0.2s" }} />
                    </div>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden group/video">
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                      <button 
                        onClick={handlePlayPause}
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-background/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                      >
                        {isPlaying ? (
                          <Pause className="w-4 h-4 lg:w-5 lg:h-5 text-muted-foreground" />
                        ) : (
                          <Play className="w-4 h-4 lg:w-5 lg:h-5 text-muted-foreground ml-0.5" />
                        )}
                      </button>
                      {/* Timeline */}
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="h-1 bg-background/50 rounded-full overflow-hidden">
                          <div className="h-full bg-muted-foreground/50 rounded-full transition-all duration-100" style={{ width: `${progress}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI Processing */}
                  <div className="col-span-1 flex flex-col items-center justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow-strong animate-pulse-slow">
                        <Sparkles className="w-8 h-8 lg:w-10 lg:h-10 text-primary-foreground" />
                      </div>
                      {/* Orbiting dots */}
                      <div className="absolute inset-0 animate-spin-slow">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-2 h-2 rounded-full bg-primary/60" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-2 h-2 rounded-full bg-primary/40" />
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-2 h-2 rounded-full bg-primary/50" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-2 h-2 rounded-full bg-primary/50" />
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-sm font-bold text-primary">AI Processing</span>
                      <p className="text-xs text-muted-foreground mt-1 animate-pulse">
                        {processingSteps[currentStep]}
                      </p>
                    </div>
                    {/* Progress bar */}
                    <div className="w-full max-w-[120px] mt-3">
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-hero rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                  </div>

                  {/* After Panel */}
                  <div className="col-span-1 bg-card rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-card border border-primary/30 hover:border-primary/50 transition-all duration-300 ring-2 ring-primary/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">After</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">Polished</span>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="h-2 bg-primary/20 rounded-full" />
                      <div className="h-2 bg-primary/15 rounded-full w-4/5" />
                      <div className="h-2 bg-primary/10 rounded-full w-3/5" />
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent to-primary/5 rounded-lg flex items-center justify-center border border-primary/20 relative overflow-hidden group/video">
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                      <button 
                        onClick={handlePlayPause}
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow hover:scale-110 transition-transform"
                      >
                        {isPlaying ? (
                          <Pause className="w-4 h-4 lg:w-5 lg:h-5 text-primary-foreground" />
                        ) : (
                          <Play className="w-4 h-4 lg:w-5 lg:h-5 text-primary-foreground ml-0.5" />
                        )}
                      </button>
                      {/* Timeline */}
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="h-1 bg-primary/20 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full transition-all duration-100" style={{ width: `${progress}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;