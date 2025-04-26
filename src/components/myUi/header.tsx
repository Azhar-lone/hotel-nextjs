"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/myUi/mode-toggle";
import { LanguageSelector } from "@/components/myUi/language-selector";
import { useLanguage } from "@/components/myUi/language-provider";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-gold font-serif font-bold text-2xl transition-transform hover:scale-105"
        >
          LUXURY
        </Link>

        <div className="flex items-center gap-4">
          <LanguageSelector />
          <ModeToggle />

          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className={cn(
                "font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold hover:after:w-full after:transition-all",
                scrolled
                  ? "text-foreground hover:text-gold"
                  : "text-white hover:text-gold"
              )}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/about"
              className={cn(
                "font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold hover:after:w-full after:transition-all",
                scrolled
                  ? "text-foreground hover:text-gold"
                  : "text-white hover:text-gold"
              )}
            >
              About
            </Link>
            <Link
              href="/rooms"
              className={cn(
                "font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold hover:after:w-full after:transition-all",
                scrolled
                  ? "text-foreground hover:text-gold"
                  : "text-white hover:text-gold"
              )}
            >
              {t("nav.rooms")}
            </Link>
            <Link
              href="/facilities"
              className={cn(
                "font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold hover:after:w-full after:transition-all",
                scrolled
                  ? "text-foreground hover:text-gold"
                  : "text-white hover:text-gold"
              )}
            >
              {t("nav.facilities")}
            </Link>
            <Link
              href="/dining"
              className={cn(
                "font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold hover:after:w-full after:transition-all",
                scrolled
                  ? "text-foreground hover:text-gold"
                  : "text-white hover:text-gold"
              )}
            >
              Dining
            </Link>
            <Link
              href="/spa"
              className={cn(
                "font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold hover:after:w-full after:transition-all",
                scrolled
                  ? "text-foreground hover:text-gold"
                  : "text-white hover:text-gold"
              )}
            >
              Spa
            </Link>
            <Link
              href="/events"
              className={cn(
                "font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold hover:after:w-full after:transition-all",
                scrolled
                  ? "text-foreground hover:text-gold"
                  : "text-white hover:text-gold"
              )}
            >
              Events
            </Link>
            <Link
              href="/gallery"
              className={cn(
                "font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold hover:after:w-full after:transition-all",
                scrolled
                  ? "text-foreground hover:text-gold"
                  : "text-white hover:text-gold"
              )}
            >
              Gallery
            </Link>
            <Link
              href="/contact-us"
              className={cn(
                "font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold hover:after:w-full after:transition-all",
                scrolled
                  ? "text-foreground hover:text-gold"
                  : "text-white hover:text-gold"
              )}
            >
              {t("nav.contact")}
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={scrolled ? "text-foreground" : "text-white"}
              >
                <Menu />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-card">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className="text-foreground hover:text-gold transition-colors py-2 border-b border-border"
                >
                  {t("nav.home")}
                </Link>
                <Link
                  href="/about"
                  className="text-foreground hover:text-gold transition-colors py-2 border-b border-border"
                >
                  About
                </Link>
                <Link
                  href="/rooms"
                  className="text-foreground hover:text-gold transition-colors py-2 border-b border-border"
                >
                  {t("nav.rooms")}
                </Link>
                <Link
                  href="/facilities"
                  className="text-foreground hover:text-gold transition-colors py-2 border-b border-border"
                >
                  {t("nav.facilities")}
                </Link>
                <Link
                  href="/dining"
                  className="text-foreground hover:text-gold transition-colors py-2 border-b border-border"
                >
                  Dining
                </Link>
                <Link
                  href="/spa"
                  className="text-foreground hover:text-gold transition-colors py-2 border-b border-border"
                >
                  Spa
                </Link>
                <Link
                  href="/events"
                  className="text-foreground hover:text-gold transition-colors py-2 border-b border-border"
                >
                  Events
                </Link>
                <Link
                  href="/gallery"
                  className="text-foreground hover:text-gold transition-colors py-2 border-b border-border"
                >
                  Gallery
                </Link>
                <Link
                  href="/contact-us"
                  className="text-foreground hover:text-gold transition-colors py-2 border-b border-border"
                >
                  {t("nav.contact")}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
