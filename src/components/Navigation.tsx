import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "소개" },
  { href: "#ministry", label: "사역" },
  { href: "#worship", label: "찬양" },
  { href: "#book", label: "저서" },
  { href: "#contact", label: "연결" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2.5">
          <img src="/favicon.jpg" alt="박민기" className="w-12 h-12 rounded-full object-cover" />
          <span className={`font-serif text-xl font-bold transition-colors duration-300 ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}>
            박민기
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans text-base font-medium tracking-wide transition-colors duration-300 hover:text-accent ${
                scrolled ? "text-foreground" : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden transition-colors duration-300 ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          aria-label="메뉴 열기"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-sans text-base text-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
