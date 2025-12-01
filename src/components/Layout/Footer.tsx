"use client";

import Link from "next/link";
import {
  Plane,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Sparkles,
  Crown,
  Globe,
} from "lucide-react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  const services = [
    "Bespoke Journeys",
    "Elite Visa Services",
    "Private Aviation",
    "Adventure Luxury",
    "Concierge Protection",
    "Cultural Immersion",
  ];

  const internationalDestinations = [
    "Maldives",
    "Switzerland",
    "Japan",
    "France",
    "Dubai",
    "Italy",
    "Thailand",
    "Singapore",
    "Bali",
    "Vietnam",
    "Hong Kong",
    "China",
    "Turkey",
    "UK",
    "USA",
    "Australia",
  ];

  const domesticDestinations = [
    "Goa",
    "Rajasthan",
    "Kerala",
    "Himachal Pradesh",
    "Kashmir",
    "Tamil Nadu",
    "Karnataka",
    "Maharashtra",
    "Punjab",
    "Meghalaya",
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-luxury-black border-t border-luxury-gold/20"
    >
      <div className="container-luxury section-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-primary-500/10">
                <Plane className="h-8 w-8 text-primary-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-black text-luxury-white tracking-wider">
                  WONDERLOG
                </span>
                <span className="text-sm font-luxury font-semibold text-primary-400 tracking-[0.2em] -mt-1">
                  HOLIDAYS
                </span>
              </div>
            </div>
            <p className="text-luxury-white/70 font-luxury font-light leading-relaxed text-sm">
              Crafting extraordinary journeys that transcend the ordinary.
              <span className="text-primary-400 font-medium">
                {" "}
                Luxury travel redefined
              </span>{" "}
              through bespoke experiences that connect you with the world's most
              captivating destinations.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-primary-500/10 text-primary-500 hover:bg-primary-500 hover:text-luxury-white transition-all duration-500 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary-500/10 text-primary-500 hover:bg-primary-500 hover:text-luxury-white transition-all duration-500 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary-500/10 text-primary-500 hover:bg-primary-500 hover:text-luxury-white transition-all duration-500 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary-500/10 text-primary-500 hover:bg-primary-500 hover:text-luxury-white transition-all duration-500 hover:scale-110"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-display font-bold text-luxury-white tracking-wide flex items-center gap-2">
              <Crown className="h-5 w-5 text-primary-500" />
              LUXURY SERVICES
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-luxury-white/70 hover:text-primary-400 transition-colors duration-500 text-sm font-luxury font-light tracking-wide"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* International Destinations */}
          <div className="space-y-6">
            <h3 className="text-lg font-display font-bold text-luxury-white tracking-wide flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary-500" />
              INTERNATIONAL
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {internationalDestinations
                .slice(0, 8)
                .map((destination, index) => (
                  <Link
                    key={index}
                    href="/destinations"
                    className="text-luxury-white/70 hover:text-primary-400 transition-colors duration-500 text-sm font-luxury font-light tracking-wide"
                  >
                    {destination}
                  </Link>
                ))}
            </div>
            <Link
              href="/destinations"
              className="text-primary-400 hover:text-luxury-white transition-colors duration-500 text-sm font-luxury font-semibold tracking-wider uppercase flex items-center gap-2"
            >
              View All Destinations
              <Sparkles className="h-4 w-4" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-display font-bold text-luxury-white tracking-wide flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary-500" />
              CONTACT US
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-primary-500/10">
                  <Phone className="h-4 w-4 text-primary-500" />
                </div>
                <a
                  href="tel:+918089631604"
                  className="text-luxury-white/70 hover:text-primary-400 transition-colors duration-500 text-sm font-luxury font-light"
                >
                  +91 8089631604
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-primary-500/10">
                  <Mail className="h-4 w-4 text-primary-500" />
                </div>
                <a
                  href="mailto:wonderlogholidays@gmail.com"
                  className="text-luxury-white/70 hover:text-primary-400 transition-colors duration-500 text-sm font-luxury font-light"
                >
                  wonderlogholidays@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-full bg-primary-500/10 mt-1">
                  <MapPin className="h-4 w-4 text-primary-500" />
                </div>
                <span className="text-luxury-white/70 text-sm font-luxury font-light">
                  Your Trusted Luxury Travel Partner
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-500/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-luxury-white/50 text-sm font-luxury font-light">
              © 2024 Wonderlog Holidays. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <Link
                href="/privacy"
                className="text-luxury-white/50 hover:text-primary-400 transition-colors duration-500 text-sm font-luxury font-light tracking-wide"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-luxury-white/50 hover:text-primary-400 transition-colors duration-500 text-sm font-luxury font-light tracking-wide"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
