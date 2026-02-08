import { TrendingUp, Lightbulb, Briefcase, Users } from "lucide-react";
import { siteData } from "../data/mock";

const iconMap = {
  TrendingUp,
  Lightbulb,
  Briefcase,
  Users,
};

export const AboutSection = () => {
  const { about } = siteData;

  return (
    <section id="despre" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e1e24] to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Bio */}
        <div className="mb-16 lg:mb-24">
          <span className="text-[#c9a55c] text-xs uppercase tracking-[0.2em] font-semibold mb-4 block">
            Despre mine
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4f4f5] mb-6 sm:mb-8 leading-tight">
            {about.title}
          </h2>
          <p className="text-[#8a8a94] leading-[1.8] text-[15px] sm:text-[16px] max-w-4xl">
            {about.bio}
          </p>
        </div>

        {/* Motivation cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-16 lg:mb-24">
          {about.motivations.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={index}
                className="group flex gap-4 p-4 sm:p-5 rounded-xl border border-[#1e1e24] bg-[#0f0f12]/40 hover:border-[#c9a55c]/20 hover:bg-[#0f0f12]/60 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-[#c9a55c]/[0.08] flex items-center justify-center shrink-0 group-hover:bg-[#c9a55c]/[0.15] transition-colors duration-500">
                  <Icon size={18} className="text-[#c9a55c]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#f4f4f5] mb-1 text-[14px] sm:text-[15px]">
                    {item.title}{" "}
                    {item.subtitle && (
                      <span className="text-[#8a8a94] font-normal">
                        {item.subtitle}
                      </span>
                    )}
                  </h3>
                  <p className="text-[#8a8a94] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* PMP Certification */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md sm:max-w-lg">
            <div className="p-2 sm:p-3 rounded-2xl border border-[#1e1e24] bg-[#0f0f12]/50 backdrop-blur-sm">
              <img
                src={about.certImage}
                alt="PMP Certification - Melania Lefter"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-[#c9a55c] text-[#09090b] text-xs font-bold rounded-full tracking-wider uppercase whitespace-nowrap">
              PMP® Certified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
