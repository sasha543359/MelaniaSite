import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteData } from "../data/mock";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#09090b]/90 backdrop-blur-xl border-b border-[#1e1e24]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#acasa"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#acasa");
            }}
            className="text-2xl font-bold tracking-wide text-[#c9a55c] hover:text-[#ddb96e] transition-colors duration-300"
          >
            ML
          </a>

          <div className="hidden md:flex items-center gap-10">
            {siteData.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-[13px] text-[#a1a1aa] hover:text-[#c9a55c] transition-colors duration-300 tracking-[0.15em] uppercase font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#f4f4f5] hover:text-[#c9a55c] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          backgroundColor: "rgba(9, 9, 11, 0.95)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderTop: mobileOpen ? "1px solid #1e1e24" : "none",
        }}
      >
        <div className="px-6 py-6 space-y-5">
          {siteData.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="block text-sm text-[#a1a1aa] hover:text-[#c9a55c] transition-colors duration-300 tracking-[0.15em] uppercase font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
