"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Globe,
  FileText,
  Ticket,
  Mountain,
  Shield,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Crown,
  Compass,
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Globe,
      title: "BESPOKE JOURNEYS",
      subtitle: "International & Domestic Collections",
      description:
        "Curated luxury travel experiences across the globe, meticulously crafted to exceed your expectations and create unforgettable memories.",
      features: [
        "Custom Itineraries",
        "Private Group Experiences",
        "Solo Luxury Travel",
        "Exclusive Family Retreats",
      ],
      color: "fashion-sapphire",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Crown,
      title: "ELITE VISA SERVICES",
      subtitle: "Global Access Simplified",
      description:
        "Premium visa assistance with concierge-level service, ensuring seamless entry to the world's most exclusive destinations.",
      features: [
        "Priority Tourist Visas",
        "Executive Business Visas",
        "Premium Student Visas",
        "VIP Transit Services",
      ],
      color: "fashion-rose",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Ticket,
      title: "PRIVATE AVIATION",
      subtitle: "Luxury Flight Solutions",
      description:
        "Exclusive access to private jets and premium airline partnerships, ensuring your journey begins with unparalleled comfort and style.",
      features: [
        "Private Jet Charter",
        "First Class Bookings",
        "Helicopter Transfers",
        "Luxury Airport Services",
      ],
      color: "fashion-emerald",
      gradient: "from-emerald-500 to-green-500",
    },
    {
      icon: Mountain,
      title: "ADVENTURE LUXURY",
      subtitle: "Expedition & Exploration",
      description:
        "High-end adventure experiences that combine adrenaline with luxury, from mountain peaks to ocean depths in ultimate comfort.",
      features: [
        "Luxury Safari Expeditions",
        "Private Mountain Retreats",
        "Exclusive Island Escapes",
        "VIP Adventure Tours",
      ],
      color: "fashion-amethyst",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      icon: Shield,
      title: "CONCIERGE PROTECTION",
      subtitle: "24/7 Elite Support",
      description:
        "Round-the-clock concierge services and comprehensive travel protection, ensuring your peace of mind throughout your journey.",
      features: [
        "24/7 Concierge Support",
        "Premium Travel Insurance",
        "Emergency Assistance",
        "Personal Travel Manager",
      ],
      color: "luxury-gold",
      gradient: "from-yellow-500 to-amber-500",
    },
    {
      icon: Compass,
      title: "CULTURAL IMMERSION",
      subtitle: "Authentic Experiences",
      description:
        "Deep cultural connections through exclusive access to local traditions, private tours, and authentic experiences unavailable to regular travelers.",
      features: [
        "Private Cultural Tours",
        "Exclusive Local Access",
        "Authentic Dining Experiences",
        "Artisan Workshop Visits",
      ],
      color: "fashion-coral",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );

      // Parallax effect for background
      gsap.to(sectionRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-luxury bg-services-gradient relative overflow-hidden"
    >
      {/* Pattern Background */}
      <div className="absolute inset-0 pattern-grid opacity-10 z-0"></div>

      {/* Luxury Background Elements with Parallax */}
      <div className="absolute inset-0 opacity-15 z-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary-500/30 to-transparent rounded-full blur-3xl parallax-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-accent-600/20 to-transparent rounded-full blur-3xl parallax-fast"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary-600/20 to-accent-700/10 rounded-full blur-3xl parallax-medium"></div>
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            ref={titleRef}
            className="text-5xl md:text-7xl font-display font-black text-luxury-white mb-8 leading-none"
          >
            <span className="block text-shadow-glow">LUXURY</span>
            <span className="block text-luxury-gradient text-shadow-luxury">
              SERVICES
            </span>
          </h2>
          <p className="text-xl text-luxury-white/70 max-w-3xl mx-auto font-luxury font-light leading-relaxed">
            Experience the pinnacle of travel excellence with our curated
            collection of
            <span className="text-primary-400 font-medium">
              {" "}
              bespoke services
            </span>{" "}
            designed to elevate every aspect of your journey.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group glass-luxury p-8 card-3d hover:scale-105 transition-all duration-700"
            >
              {/* Icon */}
              <div
                className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 w-fit group-hover:scale-110 transition-transform duration-500`}
              >
                <service.icon className="h-8 w-8 text-luxury-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-luxury-white mb-2 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-sm font-luxury font-semibold text-primary-400 tracking-wider uppercase">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-luxury-white/70 font-luxury font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((featureIndex, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-primary-400 flex-shrink-0" />
                      <span className="text-sm text-luxury-white/80 font-luxury">
                        {featureIndex}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-luxury-white font-luxury font-semibold text-sm tracking-wider uppercase transition-colors duration-500 group-hover:gap-3"
                  >
                    Discover More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-500" />
                  </Link>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="btn-luxury text-lg px-12 py-5 group shimmer"
          >
            <span className="flex items-center">
              EXPLORE ALL SERVICES
              <Sparkles className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-500" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
