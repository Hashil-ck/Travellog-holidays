"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, MouseEvent } from "react";
import { useTransition } from "../../context/TransitionContext";
// import { useTransition } from "@/context/TransitionContext";

type TransitionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function TransitionLink({
  href,
  children,
  className = "",
  onClick,
}: TransitionLinkProps) {
  const router = useRouter();
  const { exitAnimation } = useTransition();

  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (onClick) {
      onClick();
    }

    // Run exit animation before navigation
    await exitAnimation();

    // Navigate to the new page
    router.push(href);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
