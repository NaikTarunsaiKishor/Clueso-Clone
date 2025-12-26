import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BookOpen, Video, FileText, Download, 
  ArrowRight, Sparkles, Play, ExternalLink,
  Newspaper, HelpCircle, GraduationCap, Users
} from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and API references",
      link: "/docs",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video walkthroughs",
      link: "/tutorials",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: HelpCircle,
      title: "Help Center",
      description: "FAQs and troubleshooting guides",
      link: "/help",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with other Clueso users",
      link: "/community",
      color: "from-orange-500 to-red-500",
    },
  ];

  const featuredArticles = [
    {
      category: "Getting Started",
      title: "How to Create Your First Video in 5 Minutes",
      description: "A beginner's guide to using Clueso's AI-powered video creation tools.",
      readTime: "5 min read",
      image: null,
    },
    {
      category: "Best Practices",
      title: "10 Tips for Creating Engaging Product Demos",
      description: "Learn the secrets to creating product demos that convert.",
      readTime: "8 min read",
      image: null,
    },
    {
      category: "Feature Guide",
      title: "Mastering AI Voiceovers for Professional Results",
      description: "Get the most out of Clueso's AI voiceover capabilities.",
      readTime: "6 min read",
      image: null,
    },
  ];

  const webinars = [
    {
      title: "Scaling Customer Education with AI",
      date: "Dec 28, 2024",
      time: "2:00 PM EST",
      speaker: "Sarah Johnson",
      role: "VP of Customer Success",
    },
    {
      title: "Building a Video-First Documentation Strategy",
      date: "Jan 4, 2025",
      time: "11:00 AM EST",
      speaker: "Michael Chen",
      role: "Product Manager",
    },
  ];

  const templates = [
    { name: "Product Demo Template", downloads: "2.4K" },
    { name: "Onboarding Video Template", downloads: "1.8K" },
    { name: "Feature Announcement Template", downloads: "1.2K" },
    { name: "Tutorial Series Template", downloads: "956" },
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
              <span className="text-sm font-medium text-foreground">Resources & Learning</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Everything you need to{" "}
              <span className="text-gradient">succeed</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive library of guides, tutorials, and best practices to master video content creation.
            </p>
          </div>

          {/* Resource Categories */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {resourceCategories.map((category) => (
              <Link
                key={category.title}
                to={category.link}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </Link>
            ))}
          </div>

          {/* Featured Articles */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground">Featured Articles</h2>
              <Link to="/blog" className="text-primary font-medium text-sm flex items-center gap-1 hover:underline">
                View all
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredArticles.map((article) => (
                <article
                  key={article.title}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:shadow-card"
                >
                  <div className="aspect-video bg-gradient-to-br from-secondary to-muted" />
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary">{article.category}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {article.description}
                    </p>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upcoming Webinars */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Upcoming Webinars</h2>
              </div>
              <div className="space-y-4">
                {webinars.map((webinar) => (
                  <div
                    key={webinar.title}
                    className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-1">{webinar.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {webinar.speaker} · {webinar.role}
                        </p>
                        <p className="text-xs text-primary mt-2">
                          {webinar.date} at {webinar.time}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Register
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/webinars" className="text-primary font-medium text-sm flex items-center gap-1 mt-6 hover:underline">
                View all webinars
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Templates */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Download className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Popular Templates</h2>
              </div>
              <div className="space-y-3">
                {templates.map((template) => (
                  <div
                    key={template.name}
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {template.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        {template.downloads} downloads
                      </span>
                      <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/templates" className="text-primary font-medium text-sm flex items-center gap-1 mt-6 hover:underline">
                Browse all templates
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-2xl mx-auto mt-24 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our support team is here to help. Reach out anytime.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Contact Support
                </Button>
              </Link>
              <Link to="/community">
                <Button variant="outline" size="lg">
                  Join Community
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

export default Resources;
