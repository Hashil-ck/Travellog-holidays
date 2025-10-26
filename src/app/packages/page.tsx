"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Calendar,
  Users,
  Star,
  ArrowRight,
  Plane,
  Filter,
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function PackagesPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const packages = [
    {
      id: 1,
      title: "Thailand Paradise Package",
      destination: "Thailand",
      duration: "7 Days / 6 Nights",
      price: 45000,
      originalPrice: 55000,
      image: "/api/placeholder/400/300",
      description:
        "Experience the best of Thailand with this comprehensive package covering Bangkok, Phuket, and Chiang Mai.",
      highlights: [
        "Bangkok City Tour",
        "Phuket Beach Stay",
        "Chiang Mai Temples",
        "Floating Market",
      ],
      isInternational: true,
      rating: 4.8,
      reviews: 156,
      bestTime: "Nov - Mar",
      groupSize: "2-8 People",
    },
    {
      id: 2,
      title: "Kashmir Heaven Package",
      destination: "Kashmir",
      duration: "6 Days / 5 Nights",
      price: 35000,
      originalPrice: 42000,
      image: "/api/placeholder/400/300",
      description:
        "Discover the paradise on earth with this amazing Kashmir package covering Srinagar, Gulmarg, and Pahalgam.",
      highlights: [
        "Srinagar Houseboat",
        "Gulmarg Gondola",
        "Pahalgam Valley",
        "Sonamarg",
      ],
      isInternational: false,
      rating: 4.9,
      reviews: 203,
      bestTime: "Apr - Oct",
      groupSize: "2-6 People",
    },
    {
      id: 3,
      title: "Dubai Luxury Package",
      destination: "Dubai",
      duration: "5 Days / 4 Nights",
      price: 65000,
      originalPrice: 75000,
      image: "/api/placeholder/400/300",
      description:
        "Experience luxury and modernity in Dubai with this premium package including desert safari and city tours.",
      highlights: [
        "Burj Khalifa",
        "Desert Safari",
        "Palm Jumeirah",
        "Dubai Mall",
      ],
      isInternational: true,
      rating: 4.7,
      reviews: 89,
      bestTime: "Nov - Mar",
      groupSize: "2-4 People",
    },
    {
      id: 4,
      title: "Kerala Backwaters Package",
      destination: "Kerala",
      duration: "8 Days / 7 Nights",
      price: 28000,
      originalPrice: 35000,
      image: "/api/placeholder/400/300",
      description:
        "Relax and rejuvenate in God's own country with this comprehensive Kerala package.",
      highlights: [
        "Munnar Tea Gardens",
        "Alleppey Backwaters",
        "Kochi Heritage",
        "Thekkady Wildlife",
      ],
      isInternational: false,
      rating: 4.8,
      reviews: 178,
      bestTime: "Oct - Mar",
      groupSize: "2-8 People",
    },
    {
      id: 5,
      title: "Japan Cultural Package",
      destination: "Japan",
      duration: "10 Days / 9 Nights",
      price: 120000,
      originalPrice: 140000,
      image: "/api/placeholder/400/300",
      description:
        "Immerse yourself in Japanese culture with this comprehensive package covering Tokyo, Kyoto, and Osaka.",
      highlights: [
        "Tokyo City Tour",
        "Kyoto Temples",
        "Mount Fuji",
        "Osaka Castle",
      ],
      isInternational: true,
      rating: 4.9,
      reviews: 67,
      bestTime: "Mar - May, Sep - Nov",
      groupSize: "2-6 People",
    },
    {
      id: 6,
      title: "Rajasthan Royal Package",
      destination: "Rajasthan",
      duration: "9 Days / 8 Nights",
      price: 42000,
      originalPrice: 50000,
      image: "/api/placeholder/400/300",
      description:
        "Experience the royal heritage of Rajasthan with this regal package covering major cities and palaces.",
      highlights: [
        "Jaipur Pink City",
        "Udaipur Lake City",
        "Jodhpur Blue City",
        "Jaisalmer Desert",
      ],
      isInternational: false,
      rating: 4.7,
      reviews: 134,
      bestTime: "Oct - Mar",
      groupSize: "2-8 People",
    },
  ];

  const filteredPackages =
    selectedFilter === "all"
      ? packages
      : packages.filter((pkg) =>
          selectedFilter === "international"
            ? pkg.isInternational
            : !pkg.isInternational
        );

  useEffect(() => {
    const ctx = gsap.context(() => {
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
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".package-card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Re-animate cards when filter changes
  useEffect(() => {
    gsap.fromTo(
      ".package-card",
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.05,
      }
    );
  }, [selectedFilter]);

  return (
    <section ref={sectionRef} className="pt-32 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif"
          >
            Travel <span className="text-gradient">Packages</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated travel packages designed to provide
            you with unforgettable experiences at the best value.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedFilter === "all"
                  ? "bg-primary-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-primary-500"
              }`}
            >
              <Filter className="h-4 w-4" />
              All Packages
            </button>
            <button
              onClick={() => setSelectedFilter("international")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedFilter === "international"
                  ? "bg-primary-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-primary-500"
              }`}
            >
              <Plane className="h-4 w-4" />
              International
            </button>
            <button
              onClick={() => setSelectedFilter("domestic")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedFilter === "domestic"
                  ? "bg-primary-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-primary-500"
              }`}
            >
              <MapPin className="h-4 w-4" />
              Domestic
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="package-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-white opacity-50" />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      pkg.isInternational
                        ? "bg-blue-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {pkg.isInternational ? "International" : "Domestic"}
                  </div>
                </div>

                {/* Discount Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                    {Math.round(
                      ((pkg.originalPrice - pkg.price) / pkg.originalPrice) *
                        100
                    )}
                    % OFF
                  </div>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center">
                    <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                    <span className="text-xs font-medium text-gray-700">
                      {pkg.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {pkg.title}
                </h3>

                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {pkg.destination}
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {pkg.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Highlights:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {pkg.highlights.slice(0, 2).map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                    {pkg.highlights.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                        +{pkg.highlights.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Package Details */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    {pkg.groupSize}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-primary-500">
                      ₹{pkg.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500 line-through">
                      ₹{pkg.originalPrice.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">per person</div>
                    <div className="text-xs text-gray-500">{pkg.bestTime}</div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group/btn"
                >
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Package?</h2>
            <p className="text-xl mb-8 opacity-90">
              We can create a personalized travel package tailored to your
              specific needs and preferences.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-500 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
