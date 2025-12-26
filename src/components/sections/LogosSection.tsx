import { useEffect, useRef } from "react";

const LogosSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const logos = [
    { name: "Personio", color: "from-blue-600 to-blue-500" },
    { name: "Duda", color: "from-purple-600 to-purple-500" },
    { name: "Keyfactor", color: "from-emerald-600 to-emerald-500" },
    { name: "GlobalP", color: "from-orange-600 to-orange-500" },
    { name: "Planview", color: "from-pink-600 to-pink-500" },
    { name: "Trainual", color: "from-cyan-600 to-cyan-500" },
    { name: "Stripe", color: "from-indigo-600 to-indigo-500" },
    { name: "Notion", color: "from-slate-700 to-slate-600" },
    { name: "Figma", color: "from-violet-600 to-violet-500" },
    { name: "Linear", color: "from-blue-700 to-blue-600" },
  ];

  return (
    <section className="py-16 lg:py-20 border-y border-border bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-10">
          Trusted by product teams at <span className="text-foreground font-semibold">500+</span> leading companies
        </p>
        
        {/* Infinite scroll container */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            className="flex items-center gap-12 animate-scroll"
            style={{
              animation: 'scroll 30s linear infinite',
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className={`flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r ${logo.color} opacity-20 hover:opacity-100 transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                  <span className="font-bold text-white text-lg whitespace-nowrap tracking-tight">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mt-12 pt-10 border-t border-border/50">
          {[
            { value: "10K+", label: "Active teams" },
            { value: "500K+", label: "Videos created" },
            { value: "4.9/5", label: "User rating" },
            { value: "99.9%", label: "Uptime" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group cursor-default">
              <div className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default LogosSection;