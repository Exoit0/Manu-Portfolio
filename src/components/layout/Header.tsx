"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "ABOUT", link: "#about" },
    { name: "EXPERIENCE", link: "#experience" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  useEffect(() => {
    const heroSection = document.getElementById("hero");

    const handleScroll = () => {
      if (!heroSection) return;
      const heroBottom = heroSection.offsetHeight;
      setIsScrolled(window.scrollY >= heroBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar className="fixed top-0 z-50 font-poppins">
      {/* Desktop Navigation */}
      <NavBody visible={isScrolled}>
<a
  href="#hero"
  onClick={() => scrollToSection("#hero")}
  className="relative z-20 mr-4 flex items-center px-2 py-1 text-sm font-semibold gradient-text tracking-tight"
>
  MRN
</a>


        <div className="hidden lg:flex space-x-3">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.link);
                setIsMobileMenuOpen(false);
              }}
              className="relative px-2 py-1 text-xs text-neutral-700 dark:text-neutral-300 tracking-tight hover:text-accent transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav visible={isScrolled}>
        <MobileNavHeader>
          <a
            href="#hero"
            onClick={() => scrollToSection("#hero")}
            className="relative z-20 mr-4 flex items-center px-2 py-1 text-sm font-semibold gradient-text tracking-tight"
          >
            <span className="text-sm font-bold">MRN</span>
          </a>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => {
                scrollToSection(item.link);
                setIsMobileMenuOpen(false);
              }}
              className="block px-3 py-2 text-xs text-neutral-700 dark:text-neutral-300 tracking-tight hover:text-accent transition-colors"
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
