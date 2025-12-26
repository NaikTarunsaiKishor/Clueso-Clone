import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Play, FileText, Languages, Wand2, Sparkles, ArrowRight, Zap, Users, BookOpen, Video } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    { icon: Play, title: "AI Video Editor", description: "Transform screen recordings into polished videos", href: "/features" },
    { icon: FileText, title: "Auto Documentation", description: "Generate step-by-step guides automatically", href: "/features" },
    { icon: Languages, title: "30+ Languages", description: "Translate content with one click", href: "/features" },
    { icon: Wand2, title: "Smart Zooms", description: "AI highlights key actions automatically", href: "/features" },
  ];

  const solutions = [
    { icon: Users, title: "Customer Education", description: "Onboard users faster with video tutorials", href: "/customers" },
    { icon: Video, title: "Product Marketing", description: "Create demos that convert", href: "/customers" },
    { icon: BookOpen, title: "Knowledge Base", description: "Build a video-first help center", href: "/resources" },
    { icon: Zap, title: "Sales Enablement", description: "Close deals with personalized demos", href: "/customers" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (title: string) => {
    toast({
      title: title,
      description: "Navigating to " + title.toLowerCase() + "...",
    });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-sm' 
        : 'bg-background/80 backdrop-blur-xl border-b border-border/50'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow group-hover:shadow-glow-strong transition-shadow">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">Clueso</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Features Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-secondary font-medium">
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[550px] lg:grid-cols-2">
                      {features.map((feature) => (
                        <NavigationMenuLink key={feature.title} asChild>
                          <Link
                            to={feature.href}
                            onClick={() => handleNavClick(feature.title)}
                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary transition-all group"
                          >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                              <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <div className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                                {feature.title}
                                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                              </div>
                              <p className="text-sm text-muted-foreground mt-0.5">
                                {feature.description}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                    <div className="p-4 bg-secondary/50 border-t border-border">
                      <Link to="/features" className="flex items-center justify-between text-sm font-medium text-primary hover:underline">
                        View all features
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Solutions Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-secondary font-medium">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[550px] lg:grid-cols-2">
                      {solutions.map((solution) => (
                        <NavigationMenuLink key={solution.title} asChild>
                          <Link
                            to={solution.href}
                            onClick={() => handleNavClick(solution.title)}
                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary transition-all group"
                          >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                              <solution.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <div className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                                {solution.title}
                                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                              </div>
                              <p className="text-sm text-muted-foreground mt-0.5">
                                {solution.description}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link 
              to="/pricing" 
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive('/pricing') 
                  ? 'text-primary bg-primary/5' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/customers" 
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive('/customers') 
                  ? 'text-primary bg-primary/5' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              Customers
            </Link>
            <Link 
              to="/resources" 
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive('/resources') 
                  ? 'text-primary bg-primary/5' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              Resources
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="font-medium">
                Log in
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="hero" size="default" className="font-semibold">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border animate-fade-in bg-background/95 backdrop-blur-xl">
            <nav className="flex flex-col gap-2">
              <Link
                to="/features"
                className="px-4 py-3 rounded-xl hover:bg-secondary transition-colors text-foreground font-medium flex items-center justify-between"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
                <ChevronDown className="w-4 h-4" />
              </Link>
              <Link
                to="/pricing"
                className="px-4 py-3 rounded-xl hover:bg-secondary transition-colors text-foreground font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/customers"
                className="px-4 py-3 rounded-xl hover:bg-secondary transition-colors text-foreground font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Customers
              </Link>
              <Link
                to="/resources"
                className="px-4 py-3 rounded-xl hover:bg-secondary transition-colors text-foreground font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-border">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full font-medium">
                    Log in
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="hero" className="w-full font-semibold">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;