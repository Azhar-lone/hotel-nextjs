"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/myUi/language-provider";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
  showScrollIndicator?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  description,
  image,
  ctaText,
  ctaLink = "/rooms",
  className,
  showScrollIndicator = true,
}: HeroSectionProps) {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!sectionRef.current) return;
      const scrollPosition = window.scrollY;
      const parallaxElement = sectionRef.current.querySelector(
        ".parallax-bg"
      ) as HTMLElement;
      if (parallaxElement) {
        parallaxElement.style.transform = `translateY(${
          scrollPosition * 0.4
        }px)`;
      }
    };

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn("hero-section overflow-hidden", className)}
    >
      <div className="parallax-bg absolute inset-0">
        <Image
          src={image || "/placeholder.svg"}
          alt="Luxury Hotel"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="hero-content container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title && (
            <h1 className="text-4xl md:text-6xl font-bold mb-2">{title}</h1>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle && (
            <h2 className="text-5xl md:text-7xl font-bold text-gold mb-4">
              {subtitle}
            </h2>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {subtitle === "LUXURY" && (
            <h3 className="text-3xl md:text-5xl font-bold mb-8">HOTELS</h3>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {description && (
            <p className="max-w-md mx-auto mb-8 text-lg">{description}</p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {ctaText && (
            <Button asChild className="btn-luxury">
              <a href={ctaLink}>{ctaText}</a>
            </Button>
          )}
        </motion.div>
      </div>

      {showScrollIndicator && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gold transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
          >
            <span className="text-navy-dark">↓</span>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
