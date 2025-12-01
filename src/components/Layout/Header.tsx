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
          ? "glass-luxury backdrop-blur-xl border-b border-primary-500/20"
          : "bg-transparent"
      }`}
    >
      <nav className="relative z-10 px-5">
        <div className="flex items-center justify-center h-20 lg:h-24">
          <div
            className={`w-full max-w-5xl mx-auto flex items-center justify-between px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_12px_30px_rgba(2,6,23,0.5),inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-500`}
          >
            {/* Luxury Logo */}
            <Link href="/" className="flex items-center space-x-3 group pl-3">
              <div className="flex flex-col">
                <Image
                  src={logo.src}
                  alt="Wonderlog Holidays"
                  width={200}
                  height={200}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-luxury font-semibold text-sm tracking-wider transition-all duration-500 group ${
                    pathname === item.href
                      ? "text-primary-400"
                      : isScrolled
                        ? "text-luxury-white hover:text-primary-400"
                        : "text-luxury-white/80 hover:text-primary-400"
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-500 group-hover:w-full"></span>
                  {pathname === item.href && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary-400"></span>
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center pl-4">
              <Link
                href="/contact"
                className="btn-luxury text-sm px-6 py-2 group shimmer rounded-full"
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
              className={`lg:hidden p-3 rounded-full transition-all duration-500 ${
                isScrolled
                  ? "text-luxury-white hover:bg-primary-500/10"
                  : "text-luxury-white/80 hover:bg-primary-500/10"
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu lg:hidden mx-auto max-w-md mt-4 p-6 rounded-full bg-white/6 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgba(2,6,23,0.35)]">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-luxury font-semibold text-sm tracking-wider transition-all duration-500 ${
                    pathname === item.href
                      ? "text-primary-400"
                      : "text-luxury-white hover:text-primary-400"
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
