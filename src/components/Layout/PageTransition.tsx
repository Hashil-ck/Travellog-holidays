"use client";

import { useRef, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useTransition } from "../../context/TransitionContext";

type PageTransitionProps = {
  children: ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const { isAnimating } = useTransition();
  const pageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Handle page enter animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial page load animation
      const tl = gsap.timeline();

      if (overlayRef.current) {
        tl.fromTo(
          overlayRef.current,
          { scaleY: 1, transformOrigin: "top" },
          { scaleY: 0, duration: 0.8, ease: "power3.inOut", delay: 0.2 }
        );
      }

      if (pageRef.current) {
        tl.fromTo(
          pageRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        );
      }
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <div className="page-transition-container relative">
      {/* Overlay for transition effect */}
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-screen bg-primary z-50 transform-gpu"
        style={{ transformOrigin: "bottom" }}
      />

      {/* Page content */}
      <div
        ref={pageRef}
        className={`page-content ${isAnimating ? "pointer-events-none" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
