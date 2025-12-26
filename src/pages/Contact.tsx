import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Sparkles, Mail, MessageSquare, Phone, MapPin, 
  ArrowRight, Clock, Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email us",
      description: "We'll respond within 24 hours",
      contact: "hello@clueso.io",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageSquare,
      title: "Live chat",
      description: "Available Mon-Fri, 9am-6pm EST",
      contact: "Start a conversation",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Phone,
      title: "Call us",
      description: "For enterprise inquiries",
      contact: "+1 (555) 123-4567",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 400",
      region: "CA 94105, USA",
    },
    {
      city: "London",
      address: "45 Broadwick Street",
      region: "W1F 9QP, UK",
    },
    {
      city: "Singapore",
      address: "1 Raffles Place, #20-61",
      region: "048616, Singapore",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-primary/10 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Get in Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              We'd love to <span className="text-gradient">hear from you</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about Clueso? Our team is here to help you succeed.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="bg-card rounded-2xl p-6 border border-border text-center hover:border-primary/30 transition-colors cursor-pointer group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                <span className="text-primary font-medium text-sm">{method.contact}</span>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-2">Send us a message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <Send className="w-5 h-5 ml-1" />}
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Response Time */}
              <div className="bg-secondary/50 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Quick Response</h3>
                    <p className="text-sm text-muted-foreground">Average response time: 4 hours</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Our support team is available Monday through Friday, 9am to 6pm EST. 
                  Enterprise customers have access to 24/7 priority support.
                </p>
              </div>

              {/* Offices */}
              <div>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Our Offices
                </h3>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="bg-card rounded-xl p-4 border border-border"
                    >
                      <h4 className="font-medium text-foreground mb-1">{office.city}</h4>
                      <p className="text-sm text-muted-foreground">
                        {office.address}
                        <br />
                        {office.region}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-gradient-to-br from-primary/10 to-accent rounded-2xl p-6 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Looking for quick answers?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check out our FAQ and help center for instant solutions to common questions.
                </p>
                <Button variant="hero-outline" size="sm" asChild>
                  <a href="/help">
                    Visit Help Center
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
