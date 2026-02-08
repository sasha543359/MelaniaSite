import { siteData } from "../data/mock";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-[#1e1e24]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
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

          <nav className="flex flex-wrap items-center justify-center gap-8">
            {siteData.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm text-[#5a5a64] hover:text-[#c9a55c] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <p className="text-sm text-[#5a5a64]">
            &copy; {currentYear} Melania Lefter
          </p>
        </div>
      </div>
    </footer>
  );
};
