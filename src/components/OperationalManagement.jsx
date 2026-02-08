import { siteData } from "../data/mock";

export const OperationalManagement = () => {
  const { operationalManagement } = siteData;

  return (
    <section className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e1e24] to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <span className="text-[#c9a55c] text-xs uppercase tracking-[0.2em] font-semibold mb-4 block">
            Proces
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4f4f5] mb-5 sm:mb-6 leading-tight">
            {operationalManagement.title}
          </h2>
          <p className="text-[#8a8a94] leading-relaxed text-base sm:text-lg">
            {operationalManagement.description}
          </p>
        </div>

        <div className="relative">
          {/* Vertical connection line */}
          <div className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-[#c9a55c]/60 via-[#c9a55c]/30 to-transparent hidden md:block" />

          <div className="space-y-6 sm:space-y-8">
            {operationalManagement.steps.map((step, index) => (
              <div
                key={index}
                className="group flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-start"
              >
                {/* Step number */}
                <div className="relative shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0f0f12] border border-[#1e1e24] flex items-center justify-center group-hover:border-[#c9a55c]/40 transition-all duration-500 z-10">
                  <span className="text-[#c9a55c] font-bold text-lg tracking-wide">
                    {step.number}
                  </span>
                  <div className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-[#c9a55c] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Step content */}
                <div className="flex-1 p-5 sm:p-6 lg:p-8 rounded-2xl border border-[#1e1e24] bg-[#0f0f12]/40 group-hover:bg-[#0f0f12]/70 group-hover:border-[#c9a55c]/15 transition-all duration-500">
                  <h3 className="text-xl font-semibold text-[#f4f4f5] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#8a8a94] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
