"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Plane, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import Image from "next/image";
import logo from "../../Images/logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        ".mobile-menu",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3 }
      );
    }
  }, [isMenuOpen]);

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
    { href: "/destinations", label: "DESTINATIONS" },
    { href: "/packages", label: "PACKAGES" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-luxury backdrop-blur-xl border-b border-luxury-gold/20"
          : "bg-transparent"
      }`}
    >
      <nav className="relative z-10 px-5 ">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Luxury Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex flex-col">
              <Image
                src={logo.src}
                alt="Wonderlog Holidays"
                width={200}
                height={200}
                //  className="h-8 w-8"
              />
              {/* <span className="text-xl lg:text-2xl font-display font-black text-luxury-white tracking-wider">
                WONDERLOG
              </span>
              <span className="text-xs lg:text-sm font-luxury font-semibold text-luxury-gold tracking-[0.2em] -mt-1">
                HOLIDAYS
              </span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-luxury font-semibold text-sm tracking-wider transition-all duration-500 group ${
                  pathname === item.href
                    ? "text-luxury-gold"
                    : isScrolled
                      ? "text-luxury-white hover:text-luxury-gold"
                      : "text-luxury-white/80 hover:text-luxury-gold"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-500 group-hover:w-full"></span>
                {pathname === item.href && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-luxury-gold"></span>
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-luxury text-sm px-8 py-3 group shimmer"
            >
              <span className="flex items-center">
                BESPOKE
                <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-500" />
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-3 rounded-lg transition-all duration-500 ${
              isScrolled
                ? "text-luxury-white hover:bg-luxury-gold/10"
                : "text-luxury-white/80 hover:bg-luxury-gold/10"
            }`}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu lg:hidden glass-luxury backdrop-blur-xl border border-luxury-gold/20 rounded-2xl mt-4 p-6">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-luxury font-semibold text-sm tracking-wider transition-all duration-500 ${
                    pathname === item.href
                      ? "text-luxury-gold"
                      : "text-luxury-white hover:text-luxury-gold"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-luxury w-full text-center mt-4 shimmer"
              >
                <span className="flex items-center justify-center">
                  BESPOKE CONSULTATION
                  <Sparkles className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
