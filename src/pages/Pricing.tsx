import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, Sparkles, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small teams getting started.",
      price: annual ? 29 : 39,
      period: "per month",
      features: [
        { name: "5 video exports/month", included: true },
        { name: "720p video quality", included: true },
        { name: "Basic AI voiceover", included: true },
        { name: "Auto-captions", included: true },
        { name: "5 language translations", included: true },
        { name: "Email support", included: true },
        { name: "Custom branding", included: false },
        { name: "Team collaboration", included: false },
        { name: "API access", included: false },
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      description: "For growing teams that need more power and flexibility.",
      price: annual ? 79 : 99,
      period: "per month",
      features: [
        { name: "Unlimited video exports", included: true },
        { name: "4K video quality", included: true },
        { name: "Premium AI voiceover", included: true },
        { name: "Auto-captions", included: true },
        { name: "30+ language translations", included: true },
        { name: "Priority support", included: true },
        { name: "Custom branding", included: true },
        { name: "Team collaboration (5 seats)", included: true },
        { name: "API access", included: false },
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced security needs.",
      price: null,
      period: "Custom pricing",
      features: [
        { name: "Unlimited everything", included: true },
        { name: "4K+ video quality", included: true },
        { name: "Custom AI voice cloning", included: true },
        { name: "Auto-captions", included: true },
        { name: "All languages", included: true },
        { name: "Dedicated support", included: true },
        { name: "White-label branding", included: true },
        { name: "Unlimited seats", included: true },
        { name: "Full API access", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          {/* Header */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-primary/10 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Simple, transparent pricing</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Choose your <span className="text-gradient">plan</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Start free and scale as you grow. All plans include a 14-day free trial.
              </p>

              {/* Toggle */}
              <div className="flex items-center justify-center gap-4 mt-10">
                <span className={`text-sm font-medium ${!annual ? "text-foreground" : "text-muted-foreground"}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setAnnual(!annual)}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    annual ? "bg-primary" : "bg-muted"
                  }`}
                >
                  <div
                    className={`absolute top-1 w-5 h-5 rounded-full bg-background transition-transform ${
                      annual ? "translate-x-8" : "translate-x-1"
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium ${annual ? "text-foreground" : "text-muted-foreground"}`}>
                  Annual
                </span>
                {annual && (
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                    Save 25%
                  </span>
                )}
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-card rounded-2xl p-8 border ${
                    plan.popular
                      ? "border-primary shadow-glow"
                      : "border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-hero text-primary-foreground text-sm font-medium">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  <div className="mb-6">
                    {plan.price !== null ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                        <span className="text-muted-foreground">/{plan.period}</span>
                      </div>
                    ) : (
                      <div className="text-2xl font-bold text-foreground">{plan.period}</div>
                    )}
                  </div>

                  <Link to={plan.price ? "/signup" : "/contact"}>
                    <Button
                      variant={plan.popular ? "hero" : "outline"}
                      className="w-full mb-8"
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </Link>

                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature.name} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/50 shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? "text-foreground" : "text-muted-foreground/50"
                          }`}
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* FAQ Teaser */}
            <div className="max-w-2xl mx-auto mt-20 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Have questions?
              </h2>
              <p className="text-muted-foreground mb-6">
                Check out our FAQ or contact our sales team for more information.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link to="/faq">
                  <Button variant="outline">View FAQ</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="hero">Contact Sales</Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Pricing;
