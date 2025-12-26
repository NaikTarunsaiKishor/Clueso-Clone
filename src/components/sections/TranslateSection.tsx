import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, ArrowRight, Volume2, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TranslateSection = () => {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  const languages = [
    { name: "English", flag: "🇺🇸", code: "en", sample: "Hello, welcome to our product tour." },
    { name: "Spanish", flag: "🇪🇸", code: "es", sample: "Hola, bienvenido a nuestro tour del producto." },
    { name: "German", flag: "🇩🇪", code: "de", sample: "Hallo, willkommen zu unserer Produkttour." },
    { name: "Japanese", flag: "🇯🇵", code: "ja", sample: "こんにちは、製品ツアーへようこそ。" },
    { name: "Hindi", flag: "🇮🇳", code: "hi", sample: "नमस्ते, हमारे उत्पाद दौरे में आपका स्वागत है।" },
    { name: "Arabic", flag: "🇸🇦", code: "ar", sample: "مرحبًا، أهلاً بك في جولة منتجنا." },
    { name: "French", flag: "🇫🇷", code: "fr", sample: "Bonjour, bienvenue dans notre visite du produit." },
    { name: "Portuguese", flag: "🇧🇷", code: "pt", sample: "Olá, bem-vindo ao tour do nosso produto." },
    { name: "Chinese", flag: "🇨🇳", code: "zh", sample: "您好，欢迎参加我们的产品导览。" },
    { name: "Korean", flag: "🇰🇷", code: "ko", sample: "안녕하세요, 제품 투어에 오신 것을 환영합니다." },
    { name: "Italian", flag: "🇮🇹", code: "it", sample: "Ciao, benvenuto nel nostro tour del prodotto." },
    { name: "Dutch", flag: "🇳🇱", code: "nl", sample: "Hallo, welkom bij onze productrondleiding." },
  ];

  const handleLanguageClick = (lang: typeof languages[0]) => {
    setSelectedLanguage(lang.code);
    toast({
      title: `${lang.name} Selected`,
      description: lang.sample,
    });
  };

  const handlePlaySample = (langCode: string, langName: string) => {
    setIsPlaying(langCode);
    toast({
      title: `Playing ${langName} Sample`,
      description: "AI voiceover preview playing...",
    });
    setTimeout(() => setIsPlaying(null), 2000);
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-t from-accent/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/10 mb-6 shadow-sm">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">30+ Languages Supported</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Hola. Hallo.<br />
              <span className="text-gradient">こんにちは. नमस्ते.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Make the world your audience. Translate your voiceover, captions, and documentation in one click. Reach global markets without the hassle of manual translation.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "AI Translation", desc: "Instant, accurate" },
                { label: "Voice Cloning", desc: "Same voice, any language" },
                { label: "Auto Captions", desc: "Synced to video" },
                { label: "Doc Translation", desc: "SOPs in any language" },
              ].map((feature) => (
                <div key={feature.label} className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground text-sm">{feature.label}</div>
                    <div className="text-xs text-muted-foreground">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/signup">
              <Button variant="hero" size="lg" className="group">
                Make Your First Video
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right - Language Cards */}
          <div className="relative">
            <div className="grid grid-cols-4 gap-3">
              {languages.map((lang, index) => (
                <div
                  key={lang.name}
                  onClick={() => handleLanguageClick(lang)}
                  className={`bg-card rounded-xl p-4 border transition-all duration-300 text-center group cursor-pointer hover-lift ${
                    selectedLanguage === lang.code 
                      ? 'border-primary shadow-card ring-2 ring-primary/20' 
                      : 'border-border hover:border-primary/30'
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="text-3xl mb-2 block group-hover:scale-125 transition-transform duration-300">
                    {lang.flag}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium block mb-2">
                    {lang.name}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlaySample(lang.code, lang.name);
                    }}
                    className={`w-6 h-6 rounded-full flex items-center justify-center mx-auto transition-all ${
                      isPlaying === lang.code 
                        ? 'bg-primary text-primary-foreground animate-pulse' 
                        : 'bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary'
                    }`}
                  >
                    <Volume2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>

            {/* More Languages Badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-hero text-primary-foreground text-sm font-bold px-5 py-2.5 rounded-full shadow-glow animate-bounce-gentle">
              +18 more
            </div>

            {/* Preview card */}
            {selectedLanguage && (
              <div className="absolute -bottom-20 left-0 right-0 bg-card rounded-xl p-4 border border-primary/30 shadow-card animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground">
                      {languages.find(l => l.code === selectedLanguage)?.sample}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      AI-generated translation preview
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TranslateSection;