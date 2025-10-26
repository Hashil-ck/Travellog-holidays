"use client";

import {
  useRef,
  useEffect,
  ReactNode,
  forwardRef,
  Ref,
  ForwardedRef,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  once?: boolean;
};

const ScrollReveal = forwardRef(
  (
    {
      children,
      className = "",
      delay = 0,
      direction = "up",
      distance = 50,
      once = true,
    }: ScrollRevealProps,
    forwardedRef: ForwardedRef<HTMLDivElement>
  ) => {
    const localRef = useRef<HTMLDivElement>(null);
    const sectionRef = forwardedRef || localRef;

    useEffect(() => {
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      const element =
        forwardedRef && "current" in forwardedRef
          ? forwardedRef.current
          : localRef.current;
      if (!element) return;

      // Set initial state based on direction
      let initialProps = {};
      switch (direction) {
        case "up":
          initialProps = { y: distance, opacity: 0 };
          break;
        case "down":
          initialProps = { y: -distance, opacity: 0 };
          break;
        case "left":
          initialProps = { x: distance, opacity: 0 };
          break;
        case "right":
          initialProps = { x: -distance, opacity: 0 };
          break;
      }

      // Create animation
      const animation = gsap.fromTo(element, initialProps, {
        y: direction === "up" || direction === "down" ? 0 : undefined,
        x: direction === "left" || direction === "right" ? 0 : undefined,
        opacity: 1,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: once
            ? "play none none none"
            : "play reverse play reverse",
        },
      });

      return () => {
        // Clean up animation
        if (animation) animation.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, [delay, direction, distance, once, forwardedRef]);

    return (
      <div ref={sectionRef as Ref<HTMLDivElement>} className={className}>
        {children}
      </div>
    );
  }
);

ScrollReveal.displayName = "ScrollReveal";

export default ScrollReveal;
