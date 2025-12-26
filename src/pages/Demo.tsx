import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { 
  Sparkles, Play, Calendar, Clock, Users, 
  CheckCircle, ArrowRight, Building2, Mail, User
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Demo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Demo request submitted!",
        description: "We'll be in touch within 24 hours to schedule your demo.",
      });
      setFormData({ name: "", email: "", company: "", teamSize: "", message: "" });
    }, 1500);
  };

  const benefits = [
    "See Clueso in action with your own content",
    "Get personalized recommendations for your use case",
    "Learn how top teams are using Clueso",
    "Q&A with our product experts",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-primary/10 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Live Demo</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                See Clueso in <span className="text-gradient">action</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Join a personalized demo with our product experts. We'll show you how Clueso can transform your video production workflow.
              </p>

              {/* Video Preview */}
              <div className="relative rounded-2xl overflow-hidden mb-10 bg-gradient-to-br from-secondary to-muted aspect-video group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-foreground/80 text-background rounded-lg p-3">
                  <p className="font-medium text-sm">Watch: Clueso Platform Overview</p>
                  <p className="text-background/70 text-xs">3 min · Product Demo</p>
                </div>
              </div>

              {/* Benefits */}
              <h3 className="font-semibold text-foreground mb-4">What you'll learn:</h3>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-secondary/50 rounded-xl">
                <div className="text-center">
                  <Calendar className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-sm font-medium text-foreground">30 min</p>
                  <p className="text-xs text-muted-foreground">Demo length</p>
                </div>
                <div className="text-center">
                  <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-sm font-medium text-foreground">24 hrs</p>
                  <p className="text-xs text-muted-foreground">Response time</p>
                </div>
                <div className="text-center">
                  <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-sm font-medium text-foreground">1-on-1</p>
                  <p className="text-xs text-muted-foreground">Personal demo</p>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Request a demo
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form and we'll be in touch shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="company"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teamSize">Team size</Label>
                  <select
                    id="teamSize"
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  >
                    <option value="">Select team size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">What are you looking to achieve?</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your video content needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  className="w-full"
                  size="lg"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Request Demo"}
                  {!loading && <ArrowRight className="w-5 h-5 ml-1" />}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-6">
                By submitting, you agree to our{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;
