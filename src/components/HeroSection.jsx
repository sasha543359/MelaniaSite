import { ArrowDown, Sparkles } from "lucide-react";
import { siteData } from "../data/mock";

export const HeroSection = () => {
  const { hero } = siteData;

  const scrollToServices = () => {
    const el = document.querySelector("#servicii-overview");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="acasa"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Mobile background photo */}
      <div className="absolute inset-0 md:hidden pointer-events-none">
        <img
          src="/images/bg-mobile-hero.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top opacity-[0.30]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/70 to-[#09090b]/40" />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-[10%] w-[500px] h-[500px] bg-[#c9a55c]/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-32 left-[10%] w-[400px] h-[400px] bg-[#c9a55c]/[0.03] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#1e1e24]/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#1e1e24]/25" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#1e1e24]/15" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1e1e24] bg-[#131316]/60 backdrop-blur-sm mb-8 sm:mb-10 animate-fade-in">
          <Sparkles size={13} className="text-[#c9a55c]" />
          <span className="text-[11px] sm:text-xs text-[#a1a1aa] tracking-[0.1em] uppercase font-medium">
            {hero.subtitle}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-[#f4f4f5] mb-6 sm:mb-8 leading-[1.08] tracking-tight animate-slide-up">
          {hero.name}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-10 sm:mb-14 leading-relaxed animate-slide-up-delay">
          {hero.tagline}
        </p>

        <button
          onClick={scrollToServices}
          className="group inline-flex items-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 bg-[#c9a55c] text-[#09090b] font-semibold text-sm sm:text-base rounded-full hover:bg-[#ddb96e] transition-colors duration-300 hover:shadow-[0_8px_30px_rgba(201,165,92,0.25)] animate-slide-up-delay-2"
        >
          Descoperă serviciile
          <ArrowDown
            size={18}
            className="group-hover:translate-y-0.5 transition-transform duration-300"
          />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:flex">
        <div className="w-6 h-10 rounded-full border-2 border-[#252530] flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 rounded-full bg-[#c9a55c] animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
};
