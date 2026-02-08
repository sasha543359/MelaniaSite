import { FileText, FolderOpen, Settings, BookOpen } from "lucide-react";
import { siteData } from "../data/mock";

const iconMap = {
  FileText,
  FolderOpen,
  Settings,
  BookOpen,
};

export const ServicesSection = () => {
  const { detailedServices } = siteData;

  return (
    <section id="servicii" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e1e24] to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#c9a55c]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-[#c9a55c] text-xs uppercase tracking-[0.2em] font-semibold mb-4 block">
            Ce oferim
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4f4f5] mb-4">
            Servicii
          </h2>
          <p className="text-[#8a8a94] text-lg max-w-2xl mx-auto">
            Soluții complete în managementul de proiect pentru organizații
            publice și private
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {detailedServices.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={index}
                className="group relative p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#1e1e24] bg-[#0f0f12]/50 backdrop-blur-sm overflow-hidden hover:border-[#c9a55c]/25 transition-all duration-500"
              >
                {/* Decorative corner glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#c9a55c]/[0.04] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#c9a55c]/[0.08] flex items-center justify-center group-hover:bg-[#c9a55c]/[0.15] transition-colors duration-500">
                      <Icon size={22} className="text-[#c9a55c]" />
                    </div>
                    <span className="text-[#c9a55c]/60 text-sm font-bold tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#f4f4f5] mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[#8a8a94] leading-relaxed text-[15px]">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
