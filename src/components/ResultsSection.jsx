import { useEffect, useRef, useState } from "react";
import { siteData } from "../data/mock";

const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );
    const current = ref.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#c9a55c] tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export const ResultsSection = () => {
  const { results } = siteData;

  return (
    <section className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0c0c0f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e1e24] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e1e24] to-transparent" />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c9a55c]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-[#c9a55c] text-xs uppercase tracking-[0.2em] font-semibold mb-4 block">
            Impact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4f4f5] mb-4">
            Rezultate
          </h2>
          <p className="text-[#8a8a94] text-base sm:text-lg max-w-xl mx-auto">
            Cifre care reflectă impactul real al muncii noastre
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {results.stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-5 sm:p-8 lg:p-10 rounded-2xl border border-[#1e1e24] bg-[#111114]/60 backdrop-blur-sm"
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-[#8a8a94] mt-3 sm:mt-4 text-xs sm:text-sm uppercase tracking-[0.12em] sm:tracking-[0.15em] font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
