import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      quote: "Clueso has been a game-changer for supporting our front-line and office workers. Its intuitive interface and powerful AI let us quickly deliver clear, targeted content, dramatically boosting our productivity.",
      author: "Daniel Wood",
      role: "Director of Learning and Development",
      company: "Global Partners LP",
      avatar: "DW",
      rating: 5,
      videosSaved: "40+ hours/month",
      companyLogo: "🏢"
    },
    {
      quote: "With Clueso, we created and launched 8 training courses for Duda's new editor in just one quarter—something we never thought was possible given the resources we had.",
      author: "Cyrus Dorosti",
      role: "VP of Customer Success",
      company: "Duda",
      avatar: "CD",
      rating: 5,
      videosSaved: "8 courses in 3 months",
      companyLogo: "🎨"
    },
    {
      quote: "Clueso has helped us transform our video production, letting our expert video producers focus their time and opening up high-quality video production across our team.",
      author: "Adam Avramescu",
      role: "VP - Scaled Customer Experience",
      company: "Personio",
      avatar: "AA",
      rating: 5,
      videosSaved: "10x faster production",
      companyLogo: "👥"
    },
    {
      quote: "We've seen dramatic improvements in our training video production time. What used to take days now takes hours, and the quality is consistently professional.",
      author: "Sarah Chen",
      role: "Head of Customer Education",
      company: "Keyfactor",
      avatar: "SC",
      rating: 5,
      videosSaved: "75% time savings",
      companyLogo: "🔐"
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-primary/5 via-transparent to-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/10 mb-6 shadow-sm">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold text-foreground">4.9/5 from 1,000+ reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            You're in <span className="text-gradient">good company</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From start-ups to enterprises, teams of all sizes trust Clueso to transform their video production.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 lg:p-12 border border-border shadow-elevated hover:shadow-card-hover transition-shadow">
            {/* Quote Icon */}
            <div className="absolute -top-5 -left-5 w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow">
              <Quote className="w-7 h-7 text-primary-foreground" />
            </div>

            {/* Company badge */}
            <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-sm font-medium">
              <span>{testimonials[activeIndex].companyLogo}</span>
              <span className="text-muted-foreground">{testimonials[activeIndex].company}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Verified Review
              </span>
            </div>

            {/* Quote */}
            <blockquote className="text-xl lg:text-2xl text-foreground font-medium leading-relaxed mb-8 min-h-[120px]">
              "{testimonials[activeIndex].quote}"
            </blockquote>

            {/* Author & Stats */}
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-lg shadow-glow">
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>

              {/* Impact metric */}
              <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                <div className="text-xs text-primary font-medium uppercase tracking-wider">Impact</div>
                <div className="text-lg font-bold text-foreground">{testimonials[activeIndex].videosSaved}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleAutoPlay}
                className="rounded-full h-10 w-10 hover:bg-secondary"
              >
                {isAutoPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4 ml-0.5" />
                )}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full h-10 w-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full h-10 w-10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Dots & Progress */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-10 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
          {[
            { value: "10,000+", label: "Teams worldwide", icon: "🌍" },
            { value: "500K+", label: "Videos created", icon: "🎬" },
            { value: "30+", label: "Languages supported", icon: "🗣️" },
            { value: "4.9/5", label: "Customer rating", icon: "⭐" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 cursor-default group">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;