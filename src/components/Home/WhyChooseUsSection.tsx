"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Star,
  CheckCircle,
  Users,
  Clock,
  DollarSign,
  Shield,
  Heart,
  Award,
  Crown,
  Sparkles,
  Globe,
  Compass,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Crown,
      title: "BESPOKE LUXURY",
      subtitle: "Tailor-Made Excellence",
      description:
        "Every journey is meticulously crafted to exceed your expectations. We create personalized luxury experiences that reflect your unique vision and desires.",
      color: "luxury-gold",
      gradient: "from-luxury-gold to-accent-500",
    },
    {
      icon: Globe,
      title: "GLOBAL EXPERTISE",
      subtitle: "Worldwide Connections",
      description:
        "Our extensive network of luxury partners and local experts ensures access to the most exclusive experiences and hidden gems around the world.",
      color: "fashion-sapphire",
      gradient: "from-fashion-sapphire to-fashion-emerald",
    },
    {
      icon: Shield,
      title: "ELITE PROTECTION",
      subtitle: "Comprehensive Security",
      description:
        "Premium travel insurance, 24/7 emergency support, and comprehensive safety measures ensure your peace of mind throughout your journey.",
      color: "fashion-emerald",
      gradient: "from-fashion-emerald to-fashion-sapphire",
    },
    {
      icon: Users,
      title: "PERSONAL CONCIERGE",
      subtitle: "Dedicated Service",
      description:
        "Your personal travel concierge handles every detail, from reservations to special requests, ensuring a seamless and stress-free experience.",
      color: "fashion-rose",
      gradient: "from-fashion-rose to-fashion-coral",
    },
    {
      icon: Award,
      title: "AWARD-WINNING",
      subtitle: "Recognized Excellence",
      description:
        "Multiple industry awards and recognition from luxury travel publications validate our commitment to delivering exceptional experiences.",
      color: "fashion-coral",
      gradient: "from-fashion-coral to-fashion-amethyst",
    },
    {
      icon: Heart,
      title: "PASSIONATE SERVICE",
      subtitle: "Genuine Care",
      description:
        "Our team's genuine passion for travel and commitment to excellence ensures that every interaction exceeds your expectations.",
      color: "fashion-amethyst",
      gradient: "from-fashion-amethyst to-fashion-rose",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Elite Travelers Served", icon: Users },
    { number: "150+", label: "Exclusive Destinations", icon: Globe },
    { number: "24/7", label: "Concierge Support", icon: Clock },
    { number: "98%", label: "Client Satisfaction", icon: Star },
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

      // Stats animation
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );

      // Features animation
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );

      // Counter animation for stats
      stats.forEach((stat, index) => {
        const element = document.querySelector(`.stat-number-${index}`);
        if (element) {
          gsap.fromTo(
            element,
            { textContent: 0 },
            {
              textContent: stat.number.replace(/[^\d]/g, ""),
              duration: 2,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: element,
                start: "top 80%",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-luxury bg-whychoose-gradient relative overflow-hidden"
    >
      {/* Pattern Background */}
      <div className="absolute inset-0 pattern-mesh opacity-10 z-0"></div>

      {/* Luxury Background Elements with Parallax */}
      <div className="absolute inset-0 opacity-15 z-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary-500/30 to-transparent rounded-full blur-3xl parallax-medium"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-accent-600/20 to-transparent rounded-full blur-3xl parallax-fast"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary-600/20 to-accent-700/10 rounded-full blur-3xl parallax-slow"></div>
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            ref={titleRef}
            className="text-5xl md:text-7xl font-display font-black text-luxury-white mb-8 leading-none"
          >
            <span className="block text-shadow-glow">WHY CHOOSE</span>
            <span className="block text-luxury-gradient text-shadow-luxury">
              WONDERLOG
            </span>
          </h2>
          <p className="text-xl text-luxury-white/70 max-w-3xl mx-auto font-luxury font-light leading-relaxed">
            Experience the difference of{" "}
            <span className="text-primary-400 font-medium">
              true luxury travel
            </span>
            with our unparalleled commitment to excellence and personalized
            service.
          </p>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item text-center glass-luxury p-6 card-3d hover:scale-105 transition-all duration-700"
            >
              <div
                className={`p-4 rounded-2xl bg-gradient-to-br ${features[index % features.length].gradient} mb-4 w-fit mx-auto`}
              >
                <stat.icon className="h-8 w-8 text-luxury-white" />
              </div>
              <div
                className={`stat-number-${index} text-3xl md:text-4xl font-display font-black text-luxury-white mb-2`}
              >
                {stat.number}
              </div>
              <p className="text-sm font-luxury font-semibold text-primary-400 tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group glass-luxury p-8 card-3d hover:scale-105 transition-all duration-700"
            >
              {/* Icon */}
              <div
                className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 w-fit group-hover:scale-110 transition-transform duration-500`}
              >
                <feature.icon className="h-8 w-8 text-luxury-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-luxury-white mb-2 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-luxury font-semibold text-primary-400 tracking-wider uppercase">
                    {feature.subtitle}
                  </p>
                </div>

                <p className="text-luxury-white/70 font-luxury font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="glass-luxury p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-display font-bold text-luxury-white mb-4">
              Ready to Experience Luxury Travel?
            </h3>
            <p className="text-luxury-white/70 font-luxury font-light mb-8 max-w-2xl mx-auto">
              Let us craft your next extraordinary journey with our bespoke
              travel services and unparalleled attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-luxury text-lg px-12 py-5 group shimmer"
              >
                <span className="flex items-center">
                  START YOUR JOURNEY
                  <Sparkles className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-500" />
                </span>
              </a>
              <a
                href="/packages"
                className="btn-secondary-luxury text-lg px-12 py-5 group"
              >
                <span className="flex items-center">
                  EXPLORE PACKAGES
                  <Compass className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-500" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
