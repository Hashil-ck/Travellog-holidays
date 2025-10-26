"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plane, ArrowRight, Star, MapPin, Globe, Sparkles } from "lucide-react";
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
    <section className="relative min-h-screen bg-background overflow-hidden pt-24">
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
              <stop
                offset="0%"
                stopColor="var(--color-primary)"
                stopOpacity="0.1"
              />
              <stop
                offset="100%"
                stopColor="var(--color-primary)"
                stopOpacity="0"
              />
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
                <div className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                  Explore the World
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <h1 className="text-6xl lg:text-7xl font-bold text-foreground leading-tight font-[Protest Revolution, sans-serif]">
                  <span className="inline-block">Creativity</span>
                  <br />
                  <span className="inline-block">Without the</span>
                  <br />
                  <span className="inline-block">Pretentiousness</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <h2
                  ref={subtitleRef}
                  className="text-5xl lg:text-6xl font-bold text-foreground"
                >
                  Ideas So Good They Should Be Illegal
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.8}>
                <p
                  ref={descRef}
                  className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
                >
                  Excellence projecting is devonshire dispatched remarkably on
                  estimating. Side in so life past. Continue indulged speaking
                  the was out horrible for domestic.
                </p>
              </ScrollReveal>

              {/* Stats */}
              <div
                ref={statsRef}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-border"
              >
                <div className="stat-item">
                  <div className="text-4xl font-bold text-primary">$10M+</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Spend in travel
                  </p>
                </div>
                <div className="stat-item">
                  <div className="text-4xl font-bold text-primary">1st</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Travel partner
                  </p>
                </div>
                <div className="stat-item">
                  <div className="text-4xl font-bold text-primary">10+</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Passionate partners
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - User Cards */}
          <div className="hidden lg:block space-y-8">
            <ScrollReveal direction="left" delay={1}>
              <div className="bg-card rounded-2xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">
                      We have 20k+
                    </p>
                    <p className="text-muted-foreground">clients world wide</p>
                  </div>
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background" />
                    <div className="w-10 h-10 rounded-full bg-primary/30 border-2 border-background" />
                    <div className="w-10 h-10 rounded-full bg-primary/40 border-2 border-background" />
                    <button className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center border-2 border-background font-bold">
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
