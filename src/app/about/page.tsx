"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Target, Award, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
        ".about-content",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: contentRef.current,
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
            About <span className="text-gradient">Wonderlog Holidays</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted travel partner creating unforgettable journeys across
            the world
          </p>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="max-w-4xl mx-auto">
          <div className="about-content bg-white rounded-xl p-8 md:p-12 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Wonderlog Holidays was born from a simple yet powerful vision: to
              make travel accessible, memorable, and transformative for
              everyone. Founded by passionate travelers who understand the magic
              of discovering new places, we've grown into a trusted partner for
              thousands of adventurers worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our journey began with a belief that every trip should be more
              than just a vacation – it should be an experience that enriches
              your life, broadens your perspective, and creates memories that
              last a lifetime. This philosophy drives everything we do, from
              crafting personalized itineraries to providing 24/7 support during
              your travels.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we're proud to have helped over 1000 travelers explore 50+
              destinations across the globe, each journey carefully designed to
              exceed expectations and create lasting connections with the world
              around us.
            </p>
          </div>

          {/* Values */}
          <div className="about-content grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted travel partner, creating unforgettable
                journeys that connect people with cultures, nature, and unique
                experiences across the world.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Heart className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                At Wonderlog Holidays, our mission is to design seamless,
                personalized, and affordable travel experiences. We aim to
                inspire travelers with innovative itineraries, deliver
                exceptional service with a personal touch, and ensure every
                journey becomes a cherished memory.
              </p>
            </div>
          </div>

          {/* Team Values */}
          <div className="about-content bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Sets Us Apart
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Personalized Service
                </h3>
                <p className="text-sm text-gray-600">
                  Every trip is tailored to your unique preferences and
                  interests.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Expert Knowledge
                </h3>
                <p className="text-sm text-gray-600">
                  Years of experience and insider knowledge of destinations
                  worldwide.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Passionate Team
                </h3>
                <p className="text-sm text-gray-600">
                  Travel enthusiasts who genuinely care about your experience.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Quality Focus
                </h3>
                <p className="text-sm text-gray-600">
                  Committed to delivering exceptional value and memorable
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
