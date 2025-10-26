"use client";

import { MessageCircle } from "lucide-react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const WhatsAppButton = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      // Initial animation
      gsap.fromTo(
        buttonRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, delay: 1, ease: "back.out(1.7)" }
      );

      // Floating animation
      gsap.to(buttonRef.current, {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in planning a trip with Wonderlog Holidays. Could you please provide me with more information about your travel packages?"
    );
    const whatsappUrl = `https://wa.me/918089631604?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <a
      ref={buttonRef}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />

      {/* Pulse effect */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us on WhatsApp
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
