"use client";
import { useEffect, useRef } from "react";
import DestinationsSection from "../components/Home/DestinationsSection";
import HeroSection from "../components/Home/HeroSection";
import ServicesSection from "../components/Home/ServicesSection";
import WhyChooseUsSection from "../components/Home/WhyChooseUsSection";
import gsap from "gsap";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);
  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <DestinationsSection />
      <WhyChooseUsSection />
    </div>
  );
}
