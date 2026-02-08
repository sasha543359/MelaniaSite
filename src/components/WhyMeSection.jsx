import { Award, Target, Handshake, Layers } from "lucide-react";
import { siteData } from "../data/mock";

const iconMap = {
  Award,
  Target,
  Handshake,
  Layers,
};

export const WhyMeSection = () => {
  const { whyMe } = siteData;

  return (
    <section className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e1e24] to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left column */}
          <div>
            <span className="text-[#c9a55c] text-xs uppercase tracking-[0.2em] font-semibold mb-4 block">
              Experiență
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4f4f5] mb-5 sm:mb-6 leading-tight">
              {whyMe.title}
            </h2>
            <p className="text-[#8a8a94] leading-relaxed text-base sm:text-lg mb-8">
              {whyMe.description}
            </p>

            {/* Laptop photo */}
            {whyMe.image && (
              <div className="hidden lg:block overflow-hidden rounded-2xl border border-[#1e1e24]">
                <img
                  src={whyMe.image}
                  alt="Melania Lefter - la lucru"
                  className="w-full h-auto object-cover object-[center_30%] aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            )}
          </div>

          {/* Right column - feature cards */}
          <div className="space-y-4 sm:space-y-5">
            {whyMe.features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={index}
                  className="group p-5 sm:p-6 lg:p-7 rounded-2xl border border-[#1e1e24] bg-[#0f0f12]/40 hover:bg-[#0f0f12]/70 hover:border-[#c9a55c]/20 transition-all duration-500"
                >
                  <div className="flex gap-4 sm:gap-5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#c9a55c]/[0.08] flex items-center justify-center shrink-0 group-hover:bg-[#c9a55c]/[0.15] transition-colors duration-500">
                      <Icon size={20} className="text-[#c9a55c]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-[#f4f4f5] mb-1.5 sm:mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-[#8a8a94] leading-relaxed text-sm sm:text-[15px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
