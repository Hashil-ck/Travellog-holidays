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
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Globe,
      title: "International & Domestic Tour Packages",
      description:
        "Comprehensive travel packages designed to showcase the best of both international destinations and domestic gems. From exotic international adventures to breathtaking domestic landscapes.",
      features: [
        "Custom Itineraries tailored to your preferences",
        "Group Tours for social travelers",
        "Solo Travel packages for independent explorers",
        "Family Packages with kid-friendly activities",
        "Luxury and budget-friendly options",
        "Multi-city and single destination tours",
      ],
      highlights: ["50+ Destinations", "Custom Planning", "24/7 Support"],
    },
    {
      icon: FileText,
      title: "Global Visa Services",
      description:
        "Expert visa assistance for all countries with high success rates and personalized guidance. We handle the complex paperwork so you can focus on planning your adventure.",
      features: [
        "Tourist Visas for leisure travel",
        "Business Visas for corporate trips",
        "Student Visas for educational purposes",
        "Transit Visas for connecting flights",
        "Multiple entry and single entry visas",
        "Express processing for urgent travel",
      ],
      highlights: ["High Success Rate", "Expert Guidance", "Fast Processing"],
    },
    {
      icon: Ticket,
      title: "Flight & Transportation Tickets",
      description:
        "Best deals on domestic and international flights, trains, buses, and other transportation options. We secure the most competitive rates for your travel needs.",
      features: [
        "International and domestic flight booking",
        "Train reservations and passes",
        "Bus tickets for local transport",
        "Car rentals and transfers",
        "Cruise bookings and packages",
        "Multi-city flight arrangements",
      ],
      highlights: ["Best Prices", "Multiple Airlines", "Instant Confirmation"],
    },
    {
      icon: Mountain,
      title: "Pilgrimage Tours",
      description:
        "Sacred journeys to religious destinations with comfortable accommodations and spiritual guidance. Experience the divine in the most beautiful and sacred places.",
      features: [
        "Hindu Pilgrimages to temples and holy sites",
        "Islamic Tours to Mecca and Medina",
        "Christian Pilgrimages to holy lands",
        "Buddhist Journeys to sacred monasteries",
        "Sikh Pilgrimages to gurudwaras",
        "Multi-faith spiritual experiences",
      ],
      highlights: [
        "Spiritual Guidance",
        "Comfortable Stay",
        "Cultural Immersion",
      ],
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description:
        "Comprehensive travel insurance coverage to protect your journey and give you peace of mind. Travel with confidence knowing you're covered for any eventuality.",
      features: [
        "Medical coverage for health emergencies",
        "Trip cancellation and interruption protection",
        "Baggage and personal effects coverage",
        "Emergency assistance and evacuation",
        "Adventure sports coverage",
        "Pre-existing condition coverage",
      ],
      highlights: ["24/7 Support", "Comprehensive Coverage", "Quick Claims"],
    },
    {
      icon: CheckCircle,
      title: "Document Attestation",
      description:
        "Professional document attestation services for educational and personal documents. We ensure your documents are properly authenticated for international use.",
      features: [
        "Educational document attestation",
        "Personal document authentication",
        "Commercial document verification",
        "Legal document attestation",
        "Embassy and consulate services",
        "Apostille services for Hague Convention countries",
      ],
      highlights: ["Expert Service", "Fast Processing", "Reliable Results"],
    },
  ];

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
        ".service-card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-32 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif"
          >
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive travel solutions designed to make your journey
            seamless, memorable, and hassle-free from start to finish.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="space-y-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="service-card bg-white rounded-xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Icon and Title */}
                  <div className="lg:col-span-1">
                    <div className="w-20 h-20 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="h-10 w-10 text-primary-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="lg:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      What We Offer:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to discuss your travel needs and get a personalized
            quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-primary-500 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Custom Quote
            </Link>
            <a
              href="tel:+918089631604"
              className="flex items-center bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </a>
            <a
              href="mailto:wonderlogholidays@gmail.com"
              className="flex items-center bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
