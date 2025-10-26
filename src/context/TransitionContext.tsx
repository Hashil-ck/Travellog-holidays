"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type TransitionContextType = {
  isAnimating: boolean;
  setIsAnimating: (isAnimating: boolean) => void;
  exitAnimation: () => Promise<void>;
};

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined
);

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const exitAnimation = async () => {
    setIsAnimating(true);
    return new Promise<void>((resolve) => {
      // This timeout simulates the duration of the exit animation
      // The actual animation will be handled by GSAP in the components
      setTimeout(() => {
        setIsAnimating(false);
        resolve();
      }, 800); // Match this with your animation duration
    });
  };

  return (
    <TransitionContext.Provider
      value={{ isAnimating, setIsAnimating, exitAnimation }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
};
