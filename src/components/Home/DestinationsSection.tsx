"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Plane,
  ArrowRight,
  Star,
  Compass,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const DestinationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("international");

  const internationalDestinations = [
    {
      name: "MALDIVES",
      subtitle: "Paradise Reimagined",
      image: "/api/placeholder/600/400",
      description:
        "Ultimate luxury in overwater villas with crystal-clear waters and pristine beaches.",
      price: "From $2,500/night",
      rating: 5,
      features: [
        "Private Overwater Villa",
        "Personal Butler",
        "Helicopter Transfer",
      ],
      gradient: "from-fashion-sapphire to-fashion-emerald",
    },
    {
      name: "SWITZERLAND",
      subtitle: "Alpine Elegance",
      image: "/api/placeholder/600/400",
      description:
        "Majestic mountains, luxury chalets, and world-class skiing in the heart of the Alps.",
      price: "From $1,800/night",
      rating: 5,
      features: ["Private Chalet", "Ski Concierge", "Mountain Guide"],
      gradient: "from-fashion-emerald to-fashion-sapphire",
    },
    {
      name: "JAPAN",
      subtitle: "Cultural Immersion",
      image: "/api/placeholder/600/400",
      description:
        "Ancient traditions meet modern luxury in the Land of the Rising Sun.",
      price: "From $1,200/night",
      rating: 5,
      features: ["Traditional Ryokan", "Private Guide", "Cultural Experiences"],
      gradient: "from-fashion-rose to-fashion-coral",
    },
    {
      name: "FRANCE",
      subtitle: "Art de Vivre",
      image: "/api/placeholder/600/400",
      description:
        "Experience the French art of living with luxury châteaux and Michelin dining.",
      price: "From $1,500/night",
      rating: 5,
      features: ["Historic Château", "Private Chef", "Wine Tasting"],
      gradient: "from-fashion-coral to-fashion-amethyst",
    },
    {
      name: "DUBAI",
      subtitle: "Desert Opulence",
      image: "/api/placeholder/600/400",
      description:
        "Ultra-modern luxury in the heart of the desert with iconic skyline views.",
      price: "From $2,000/night",
      rating: 5,
      features: [
        "Burj Al Arab Suite",
        "Private Desert Safari",
        "Luxury Shopping",
      ],
      gradient: "from-fashion-amethyst to-fashion-rose",
    },
    {
      name: "ITALY",
      subtitle: "La Dolce Vita",
      image: "/api/placeholder/600/400",
      description:
        "Romance, art, and gastronomy in the most beautiful country in the world.",
      price: "From $1,300/night",
      rating: 5,
      features: ["Historic Villa", "Private Art Tours", "Michelin Dining"],
      gradient: "from-luxury-gold to-accent-500",
    },
  ];

  const domesticDestinations = [
    {
      name: "GOA",
      subtitle: "Tropical Luxury",
      image: "/api/placeholder/600/400",
      description:
        "Beachfront luxury with Portuguese heritage and world-class resorts.",
      price: "From $400/night",
      rating: 5,
      features: ["Beachfront Villa", "Private Beach", "Spa Services"],
      gradient: "from-fashion-sapphire to-fashion-emerald",
    },
    {
      name: "RAJASTHAN",
      subtitle: "Royal Heritage",
      image: "/api/placeholder/600/400",
      description: "Palace hotels and royal experiences in the land of kings.",
      price: "From $300/night",
      rating: 5,
      features: ["Palace Hotel", "Royal Experiences", "Cultural Tours"],
      gradient: "from-fashion-rose to-fashion-coral",
    },
    {
      name: "KERALA",
      subtitle: "Backwater Bliss",
      image: "/api/placeholder/600/400",
      description:
        "Luxury houseboats and Ayurvedic retreats in God's Own Country.",
      price: "From $250/night",
      rating: 5,
      features: ["Luxury Houseboat", "Ayurvedic Spa", "Private Chef"],
      gradient: "from-fashion-emerald to-fashion-sapphire",
    },
    {
      name: "HIMACHAL PRADESH",
      subtitle: "Mountain Majesty",
      image: "/api/placeholder/600/400",
      description:
        "Luxury mountain retreats with breathtaking Himalayan views.",
      price: "From $350/night",
      rating: 5,
      features: ["Mountain Lodge", "Adventure Activities", "Scenic Views"],
      gradient: "from-fashion-coral to-fashion-amethyst",
    },
    {
      name: "KASHMIR",
      subtitle: "Paradise on Earth",
      image: "/api/placeholder/600/400",
      description:
        "Luxury houseboats on Dal Lake with stunning mountain backdrops.",
      price: "From $200/night",
      rating: 5,
      features: ["Houseboat Stay", "Shikara Rides", "Mountain Views"],
      gradient: "from-fashion-amethyst to-fashion-rose",
    },
    {
      name: "TAMIL NADU",
      subtitle: "Temple Heritage",
      image: "/api/placeholder/600/400",
      description:
        "Luxury heritage hotels and cultural experiences in South India.",
      price: "From $180/night",
      rating: 5,
      features: ["Heritage Hotel", "Temple Tours", "Cultural Shows"],
      gradient: "from-luxury-gold to-accent-500",
    },
  ];

  const destinations =
    activeTab === "international"
      ? internationalDestinations
      : domesticDestinations;

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

      // Tabs animation
      gsap.fromTo(
        tabsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tabsRef.current,
            start: "top 80%",
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        ".destination-card",
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
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      className="section-luxury bg-destinations-gradient relative overflow-hidden"
    >
      {/* Pattern Background */}
      <div className="absolute inset-0 pattern-diagonal opacity-15 z-0"></div>

      {/* Luxury Background Elements with Parallax */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-32 right-32 w-96 h-96 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-3xl parallax-fast"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-gradient-to-br from-accent-600/20 to-transparent rounded-full blur-3xl parallax-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary-600/15 to-accent-700/10 rounded-full blur-3xl parallax-medium"></div>
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-5xl md:text-7xl font-display font-black text-luxury-white mb-8 leading-none"
          >
            <span className="block text-shadow-glow">EXCLUSIVE</span>
            <span className="block text-luxury-gradient text-shadow-luxury">
              DESTINATIONS
            </span>
          </h2>
          <p className="text-xl text-luxury-white/70 max-w-3xl mx-auto font-luxury font-light leading-relaxed">
            Discover the world's most{" "}
            <span className="text-primary-400 font-medium">
              exclusive destinations
            </span>
            through our curated collection of luxury experiences and hidden
            gems.
          </p>
        </div>

        {/* Tab Navigation */}
        <div ref={tabsRef} className="flex justify-center mb-16">
          <div className="glass-luxury p-2 rounded-2xl">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("international")}
                className={`px-8 py-4 rounded-xl font-luxury font-semibold text-sm tracking-wider transition-all duration-500 ${
                  activeTab === "international"
                    ? "bg-primary-500 text-luxury-white"
                    : "text-luxury-white/70 hover:text-luxury-white"
                }`}
              >
                INTERNATIONAL
              </button>
              <button
                onClick={() => setActiveTab("domestic")}
                className={`px-8 py-4 rounded-xl font-luxury font-semibold text-sm tracking-wider transition-all duration-500 ${
                  activeTab === "domestic"
                    ? "bg-primary-500 text-luxury-white"
                    : "text-luxury-white/70 hover:text-luxury-white"
                }`}
              >
                DOMESTIC
              </button>
            </div>
          </div>
        </div>

        {/* Destinations Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="destination-card group glass-luxury overflow-hidden card-3d hover:scale-105 transition-all duration-700"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal to-luxury-navy"
                  style={{
                    backgroundImage: `url(${destination.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent"></div>

                {/* Price Tag */}
                <div className="absolute top-4 right-4">
                  <div className="bg-primary-500 text-luxury-white px-3 py-1 rounded-full text-xs font-luxury font-bold tracking-wider">
                    {destination.price}
                  </div>
                </div>

                {/* Rating */}
                <div className="absolute top-4 left-4 flex items-center gap-1">
                  {[...Array(destination.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-primary-400 fill-current"
                    />
                  ))}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-luxury-white mb-1 tracking-wide">
                    {destination.name}
                  </h3>
                  <p className="text-sm font-luxury font-semibold text-primary-400 tracking-wider uppercase">
                    {destination.subtitle}
                  </p>
                </div>

                <p className="text-luxury-white/70 font-luxury font-light leading-relaxed text-sm">
                  {destination.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {destination.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0"></div>
                      <span className="text-xs text-luxury-white/80 font-luxury">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Link
                    href="/destinations"
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-luxury-white font-luxury font-semibold text-sm tracking-wider uppercase transition-colors duration-500 group-hover:gap-3"
                  >
                    Explore Destination
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-500" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="/destinations"
            className="btn-luxury text-lg px-12 py-5 group shimmer"
          >
            <span className="flex items-center">
              DISCOVER ALL DESTINATIONS
              <Compass className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-500" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
