"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Plane,
  ArrowRight,
  Star,
  MapPin,
  Globe,
  Sparkles,
  QuoteIcon,
} from "lucide-react";
import TransitionLink from "../Layout/TransitionLink";
import ScrollReveal from "../Layout/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const statsRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate SVG background
    if (svgRef.current) {
      gsap.to(svgRef.current, {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      });
    }

    // Animate title with split text effect
    tl.from(titleRef.current?.querySelectorAll("span"), {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.05,
      ease: "power3.out",
    })
      .from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .from(
        descRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .from(
        statsRef.current?.querySelectorAll(".stat-item"),
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.4"
      );
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-24">
      {/* Pattern Background */}
      <div className="absolute inset-0 pattern-diagonal opacity-15 z-0"></div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-hero-gradient z-0"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-500/15 to-transparent rounded-full blur-3xl parallax-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-accent-500/10 to-transparent rounded-full blur-3xl parallax-fast"></div>
      </div>

      <div className="absolute inset-0 z-0">
        <svg
          ref={svgRef}
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full opacity-0"
        >
          <defs>
            <radialGradient id="Gradient1" cx="50%" cy="50%" r="0.5">
              <animate
                attributeName="fx"
                dur="34s"
                values="0%;3%;0%"
                repeatCount="indefinite"
              />
              <stop offset="0%" stopColor="#52704e" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#52704e" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect
            x="13.744%"
            y="1.18473%"
            width="100%"
            height="100%"
            fill="url(#Gradient1)"
            transform="rotate(334.41 50 50)"
          >
            <animate
              attributeName="x"
              dur="20s"
              values="25%;0%;25%"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              dur="21s"
              values="0%;25%;0%"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="7s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center min-h-[calc(100vh-120px)]">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            <div ref={titleRef} className="space-y-4 overflow-hidden">
              <ScrollReveal direction="down" delay={0.2}>
                <div className="text-sm font-semibold uppercase tracking-widest text-primary-400 mb-4">
                  Explore the World
                </div>
              </ScrollReveal>
              <div className="flex flex-row gap-2">
                <ScrollReveal delay={0.4}>
                  <h1 className="text-6xl lg:text-7xl font-bold text-luxury-white leading-tight ">
                    Build Your Dream Journey With Us
                  </h1>
                </ScrollReveal>
              </div>
            </div>
          </div>
          {/* Right Side - User Cards */}
          <div className="hidden lg:block space-y-8">
            <ScrollReveal direction="left" delay={1}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-primary-500/20">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-luxury-white">
                      We have 20k+
                    </p>
                    <p className="text-luxury-white/70">clients world wide</p>
                  </div>
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary-500/30 border-2 border-black" />
                    <div className="w-10 h-10 rounded-full bg-primary-400/40 border-2 border-black" />
                    <div className="w-10 h-10 rounded-full bg-primary-600/40 border-2 border-black" />
                    <button className="w-10 h-10 rounded-full bg-primary-500 text-luxury-white flex items-center justify-center border-2 border-black font-bold hover:scale-110 transition-transform">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
