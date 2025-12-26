import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote, ArrowRight, Sparkles } from "lucide-react";

const Customers = () => {
  const featuredCustomers = [
    {
      company: "Global Partners LP",
      industry: "Energy & Retail",
      quote: "Clueso has been a game-changer for supporting our front-line and office workers. Its intuitive interface and powerful AI let us quickly deliver clear, targeted content, dramatically boosting our productivity.",
      author: "Daniel Wood",
      role: "Director of Learning and Development",
      avatar: "DW",
      results: ["80% faster content creation", "50% reduction in support tickets"],
    },
    {
      company: "Duda",
      industry: "Website Builder",
      quote: "With Clueso, we created and launched 8 training courses for Duda's new editor in just one quarter—something we never thought was possible given the resources we had.",
      author: "Cyrus Dorosti",
      role: "VP of Customer Success",
      avatar: "CD",
      results: ["8 courses in one quarter", "Dynamic video updates"],
    },
    {
      company: "Personio",
      industry: "HR Software",
      quote: "Clueso has helped us transform our video production, letting our expert video producers focus their time and opening up high-quality video production across our team.",
      author: "Adam Avramescu",
      role: "VP - Scaled Customer Experience",
      avatar: "AA",
      results: ["Democratized video production", "Faster time to market"],
    },
    {
      company: "Keyfactor",
      industry: "Cybersecurity",
      quote: "We've seen dramatic improvements in our training video production time. What used to take days now takes hours, and the quality is consistently professional.",
      author: "Sarah Chen",
      role: "Head of Customer Education",
      avatar: "SC",
      results: ["90% time savings", "Consistent quality"],
    },
  ];

  const stats = [
    { value: "10,000+", label: "Teams worldwide" },
    { value: "500K+", label: "Videos created" },
    { value: "98%", label: "Customer satisfaction" },
    { value: "4.9/5", label: "Average rating" },
  ];

  const logos = [
    "Personio", "Duda", "Keyfactor", "GlobalP", "Planview", 
    "Trainual", "Intercom", "Gainsight", "ChurnZero", "Catalyst"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-primary/10 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Customer Stories</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              You're in <span className="text-gradient">good company</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From startups to enterprises, thousands of teams trust Clueso to transform their video production and documentation workflows.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Logo Cloud */}
          <div className="mb-24">
            <p className="text-center text-sm font-medium text-muted-foreground mb-10">
              Trusted by leading companies worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {logos.map((logo) => (
                <div
                  key={logo}
                  className="opacity-50 hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <div className="h-8 bg-foreground/20 rounded flex items-center justify-center px-4">
                    <span className="font-semibold text-foreground/60 text-sm">{logo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Stories */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Customer Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredCustomers.map((customer) => (
                <div
                  key={customer.company}
                  className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors"
                >
                  {/* Company & Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-bold text-foreground">{customer.company}</h3>
                      <span className="text-sm text-muted-foreground">{customer.industry}</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                    <p className="text-foreground leading-relaxed pl-6">
                      "{customer.quote}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {customer.avatar}
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">{customer.author}</div>
                      <div className="text-xs text-muted-foreground">{customer.role}</div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="flex flex-wrap gap-2">
                    {customer.results.map((result) => (
                      <span
                        key={result}
                        className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-2xl mx-auto mt-24 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Join these amazing teams
            </h2>
            <p className="text-muted-foreground mb-8">
              Start your free trial today and see why thousands of teams love Clueso.
            </p>
            <Link to="/signup">
              <Button variant="hero" size="lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Customers;
