import { FileText, Settings, GraduationCap } from "lucide-react";
import { siteData } from "../data/mock";

const iconMap = {
  FileText,
  Settings,
  GraduationCap,
};

export const ServicesOverview = () => {
  const { servicesOverview } = siteData;

  return (
    <section id="servicii-overview" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e1e24] to-transparent" />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <span className="text-[#c9a55c] text-xs uppercase tracking-[0.2em] font-semibold mb-4 block">
            Ce oferim
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4f4f5] mb-5 sm:mb-6 leading-tight">
            {servicesOverview.title}
          </h2>
          <p className="text-[#8a8a94] leading-relaxed text-base sm:text-lg">
            {servicesOverview.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {servicesOverview.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={index}
                className="group p-8 lg:p-10 rounded-2xl border border-[#1e1e24] bg-[#0f0f12]/60 backdrop-blur-sm hover:border-[#c9a55c]/25 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#c9a55c]/[0.08] flex items-center justify-center mb-7 group-hover:bg-[#c9a55c]/[0.15] transition-colors duration-500">
                  <Icon size={24} className="text-[#c9a55c]" />
                </div>
                <h3 className="text-xl font-semibold text-[#f4f4f5] mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#8a8a94] leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
