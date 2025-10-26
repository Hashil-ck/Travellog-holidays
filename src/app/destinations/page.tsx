"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Plane, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function DestinationsPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [activeTab, setActiveTab] = useState("international");

  const internationalDestinations = [
    {
      name: "Malaysia",
      description:
        "Tropical paradise with diverse culture, stunning beaches, and modern cities",
      highlights: ["Kuala Lumpur", "Langkawi", "Penang", "Borneo"],
      bestTime: "March - October",
      duration: "5-7 days",
    },
    {
      name: "Thailand",
      description:
        "Land of smiles with golden temples, pristine beaches, and vibrant street life",
      highlights: ["Bangkok", "Phuket", "Chiang Mai", "Krabi"],
      bestTime: "November - March",
      duration: "7-10 days",
    },
    {
      name: "Singapore",
      description:
        "Modern city-state with rich heritage, world-class attractions, and culinary delights",
      highlights: ["Marina Bay", "Sentosa", "Chinatown", "Gardens by the Bay"],
      bestTime: "Year Round",
      duration: "3-5 days",
    },
    {
      name: "Bali",
      description:
        "Island of gods with stunning beaches, ancient temples, and lush rice terraces",
      highlights: ["Ubud", "Seminyak", "Uluwatu", "Nusa Penida"],
      bestTime: "April - October",
      duration: "5-7 days",
    },
    {
      name: "Vietnam",
      description:
        "Rich history and breathtaking landscapes from north to south",
      highlights: ["Hanoi", "Ho Chi Minh City", "Halong Bay", "Hoi An"],
      bestTime: "October - April",
      duration: "10-14 days",
    },
    {
      name: "Maldives",
      description:
        "Crystal clear waters, luxury resorts, and pristine white sand beaches",
      highlights: ["Male", "Maafushi", "Thulusdhoo", "Dhiffushi"],
      bestTime: "November - April",
      duration: "5-7 days",
    },
    {
      name: "Dubai",
      description:
        "Ultra-modern city in the desert with world-class shopping and attractions",
      highlights: [
        "Burj Khalifa",
        "Palm Jumeirah",
        "Dubai Mall",
        "Desert Safari",
      ],
      bestTime: "November - March",
      duration: "4-6 days",
    },
    {
      name: "Japan",
      description:
        "Perfect blend of ancient tradition and cutting-edge innovation",
      highlights: ["Tokyo", "Kyoto", "Osaka", "Mount Fuji"],
      bestTime: "March - May, September - November",
      duration: "10-14 days",
    },
    {
      name: "Europe",
      description:
        "Historic cities, diverse cultures, and stunning architecture",
      highlights: ["Paris", "Rome", "Barcelona", "Amsterdam"],
      bestTime: "April - October",
      duration: "10-21 days",
    },
    {
      name: "USA",
      description: "From coast to coast adventures in the land of opportunity",
      highlights: ["New York", "Los Angeles", "Las Vegas", "San Francisco"],
      bestTime: "April - October",
      duration: "10-21 days",
    },
    {
      name: "Turkey",
      description:
        "Where East meets West with rich history and stunning landscapes",
      highlights: ["Istanbul", "Cappadocia", "Antalya", "Pamukkale"],
      bestTime: "April - October",
      duration: "7-10 days",
    },
    {
      name: "Egypt",
      description: "Ancient wonders and modern marvels along the Nile",
      highlights: ["Cairo", "Luxor", "Aswan", "Red Sea"],
      bestTime: "October - April",
      duration: "7-10 days",
    },
  ];

  const domesticDestinations = [
    {
      name: "Kashmir",
      description:
        "Paradise on earth with snow-capped mountains, pristine lakes, and beautiful valleys",
      highlights: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"],
      bestTime: "April - October",
      duration: "5-7 days",
    },
    {
      name: "Delhi - Agra",
      description: "Historic capital and the magnificent Taj Mahal",
      highlights: ["Red Fort", "Taj Mahal", "Qutub Minar", "India Gate"],
      bestTime: "October - March",
      duration: "3-4 days",
    },
    {
      name: "Manali",
      description:
        "Himalayan hill station and adventure hub with stunning mountain views",
      highlights: [
        "Rohtang Pass",
        "Solang Valley",
        "Old Manali",
        "Hadimba Temple",
      ],
      bestTime: "March - June, October - December",
      duration: "4-5 days",
    },
    {
      name: "Rajasthan",
      description:
        "Royal heritage and desert landscapes with magnificent palaces and forts",
      highlights: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
      bestTime: "October - March",
      duration: "7-10 days",
    },
    {
      name: "Goa",
      description:
        "Beaches, parties, and Portuguese heritage on the west coast",
      highlights: ["Baga Beach", "Old Goa", "Dudhsagar Falls", "Anjuna Beach"],
      bestTime: "November - March",
      duration: "4-6 days",
    },
    {
      name: "Kerala",
      description: "Backwaters, beaches, and Ayurveda in God's own country",
      highlights: ["Munnar", "Alleppey", "Kochi", "Thekkady"],
      bestTime: "October - March",
      duration: "6-8 days",
    },
    {
      name: "Maharashtra",
      description: "Mumbai, Pune, and diverse landscapes from beaches to hills",
      highlights: ["Mumbai", "Pune", "Lonavala", "Mahabaleshwar"],
      bestTime: "October - March",
      duration: "4-6 days",
    },
    {
      name: "Meghalaya",
      description:
        "Living root bridges, waterfalls, and pristine natural beauty",
      highlights: ["Cherrapunji", "Shillong", "Mawlynnong", "Dawki"],
      bestTime: "October - May",
      duration: "5-7 days",
    },
    {
      name: "Sikkim",
      description: "Himalayan beauty and Buddhist culture in the northeast",
      highlights: ["Gangtok", "Pelling", "Lachung", "Yumthang Valley"],
      bestTime: "March - June, September - December",
      duration: "6-8 days",
    },
    {
      name: "Punjab",
      description: "Golden temples, vibrant culture, and delicious cuisine",
      highlights: ["Amritsar", "Golden Temple", "Wagah Border", "Chandigarh"],
      bestTime: "October - March",
      duration: "3-4 days",
    },
  ];

  const currentDestinations =
    activeTab === "international"
      ? internationalDestinations
      : domesticDestinations;

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
        ".destination-card",
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

  // Re-animate cards when tab changes
  useEffect(() => {
    gsap.fromTo(
      ".destination-card",
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
  }, [activeTab]);

  return (
    <section ref={sectionRef} className="pt-32 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif"
          >
            Our <span className="text-gradient">Destinations</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From exotic international destinations to breathtaking domestic
            locations, discover the world with our carefully curated travel
            experiences.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab("international")}
              className={`px-8 py-4 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === "international"
                  ? "bg-primary-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-primary-500"
              }`}
            >
              <Plane className="h-5 w-5" />
              International Destinations
            </button>
            <button
              onClick={() => setActiveTab("domestic")}
              className={`px-8 py-4 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === "domestic"
                  ? "bg-primary-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-primary-500"
              }`}
            >
              <MapPin className="h-5 w-5" />
              Domestic Destinations
            </button>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentDestinations.map((destination, index) => (
            <div
              key={index}
              className="destination-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-white opacity-50" />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Plane className="h-4 w-4 text-primary-500" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-medium text-primary-600">
                      {destination.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {destination.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Key Highlights:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {destination.highlights
                      .slice(0, 3)
                      .map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    {destination.highlights.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                        +{destination.highlights.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Best Time */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 mr-1" />
                    Best: {destination.bestTime}
                  </div>
                </div>

                <Link
                  href="/packages"
                  className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors duration-300 group/link"
                >
                  Explore Packages
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let us help you plan the perfect trip to your dream destination.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-500 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
