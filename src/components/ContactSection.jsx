import { useState } from "react";
import { Mail, Phone, Send, MessageCircle, Linkedin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { siteData } from "../data/mock";
import { toast } from "sonner";

export const ContactSection = () => {
  const { contactSubjects, social } = siteData;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissions = JSON.parse(
      localStorage.getItem("contactSubmissions") || "[]"
    );
    submissions.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));
    toast.success("Mesajul a fost trimis cu succes!");
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
  };

  const inputClasses =
    "w-full px-4 py-3.5 bg-[#0f0f12] border border-[#1e1e24] rounded-xl text-[#f4f4f5] placeholder:text-[#4a4a54] focus:outline-none focus:border-[#c9a55c]/40 transition-colors duration-300 text-[15px]";

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: social.email,
      href: `mailto:${social.email}`,
    },
    {
      icon: Phone,
      label: "Telefon",
      value: social.phone,
      href: `tel:${social.phone}`,
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      value: "@Melanya_Lefter",
      href: social.telegram,
      external: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Melania Lefter",
      href: social.linkedin,
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e1e24] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form - wider column */}
          <div className="lg:col-span-3">
            <span className="text-[#c9a55c] text-xs uppercase tracking-[0.2em] font-semibold mb-4 block">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4f4f5] mb-8 sm:mb-10 leading-tight">
              Contactează-ne
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm text-[#a1a1aa] mb-2.5 block font-medium">
                  Nume
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Numele dumneavoastră"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-[#a1a1aa] mb-2.5 block font-medium">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="+40 7XX XXX XXX"
                  />
                </div>
                <div>
                  <label className="text-sm text-[#a1a1aa] mb-2.5 block font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="email@exemplu.ro"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-[#a1a1aa] mb-2.5 block font-medium">
                  Subiect
                </label>
                <Select
                  value={formData.subject}
                  onValueChange={(val) =>
                    setFormData({ ...formData, subject: val })
                  }
                >
                  <SelectTrigger className="w-full h-auto px-4 py-3.5 bg-[#0f0f12] border-[#1e1e24] rounded-xl text-[#f4f4f5] text-[15px] focus:ring-0 focus:ring-offset-0 focus:border-[#c9a55c]/40 data-[placeholder]:text-[#4a4a54]">
                    <SelectValue placeholder="Selectați subiectul" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#131316] border-[#1e1e24] rounded-xl">
                    {contactSubjects.map((subject) => (
                      <SelectItem
                        key={subject}
                        value={subject}
                        className="text-[#f4f4f5] focus:bg-[#1e1e24] focus:text-[#f4f4f5] rounded-lg cursor-pointer"
                      >
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm text-[#a1a1aa] mb-2.5 block font-medium">
                  Mesaj
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  placeholder="Scrieți mesajul dumneavoastră..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#c9a55c] text-[#09090b] font-semibold rounded-xl hover:bg-[#ddb96e] transition-colors duration-300 hover:shadow-[0_8px_30px_rgba(201,165,92,0.2)] text-[15px]"
              >
                <Send size={17} />
                Trimite
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28 space-y-8 lg:pt-[88px]">
              <div>
                <h3 className="text-lg font-semibold text-[#f4f4f5] mb-6">
                  Informații de contact
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 p-4 rounded-xl border border-[#1e1e24] bg-[#0f0f12]/40 hover:border-[#c9a55c]/20 hover:bg-[#0f0f12]/60 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#c9a55c]/[0.08] flex items-center justify-center group-hover:bg-[#c9a55c]/[0.15] transition-colors duration-300">
                          <Icon size={17} className="text-[#c9a55c]" />
                        </div>
                        <div>
                          <p className="text-xs text-[#5a5a64] font-medium">
                            {link.label}
                          </p>
                          <p className="text-[#e4e4e7] text-sm">
                            {link.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
