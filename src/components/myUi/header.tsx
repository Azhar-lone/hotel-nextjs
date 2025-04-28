"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ModeToggle } from "@/components/myUi/mode-toggle";
import { LanguageSelector } from "@/components/myUi/language-selector";
import { useLanguage } from "@/components/myUi/language-provider";
import { cn } from "@/lib/utils";
import Slider from "./Slider";
import {
  HammerIcon,
  BookTextIcon,
  PhoneIcon,
  Grid2x2Check,
  NetworkIcon,
} from "lucide-react"; // import your icons

const NavItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Rooms",
    href: "/rooms",
  },
  {
    text: "Dining",
    href: "/dining",
  },
  {
    text: "Spa",
    href: "/spa",
  },
  {
    text: "More",
    href: "#",
    listItems: [
      { text: "Facilities", href: "/facilities", Icon: Grid2x2Check },
      { text: "Events", href: "/events", Icon: HammerIcon },
      { text: "Gallery", href: "/gallery", Icon: BookTextIcon },
      { text: "About", href: "/about", Icon: NetworkIcon },
      { text: "Contact", href: "/contact-us", Icon: PhoneIcon },
    ],
  },
];

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowHeader(true); // Scrolling up
      } else {
        setShowHeader(false); // Scrolling down
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "container mx-auto bg-background z-50 sticky top-0 px-4 py-4 flex justify-between items-center transition-transform duration-300",
        showHeader ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="flex items-center gap-4">
        <Link href="/" className="text-gold font-serif font-bold text-2xl">
          LUXURY
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {NavItems.map((item) => (
          <div key={item.href} className="relative group">
            <Link
              href={item.href}
              className={cn(
                "font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold hover:after:w-full after:transition-all",
                pathname === item.href ? "text-primary" : "text-foreground"
              )}
            >
              {item.text}
            </Link>

            {/* Dropdown for listItems */}
            {item.listItems && (
              <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-background shadow-lg rounded-md mt-2 py-2 min-w-[150px]">
                {item.listItems.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="px-4 py-2 hover:bg-muted flex items-center gap-2"
                  >
                    <child.Icon className="h-4 w-4" />
                    {child.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Right section */}
      <div className="flex items-center gap-2">
        <LanguageSelector />
        <ModeToggle />

        {/* Mobile Slider */}
        <Slider side="right" className="flex flex-col gap-4 items-center py-10">
          {NavItems.map((item) => (
            <div key={item.href} className="flex flex-col items-center">
              <Link
                href={item.href}
                className={cn(
                  "text-lg font-medium",
                  pathname === item.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                {item.text}
              </Link>

              {/* Mobile Dropdown for More */}
              {item.listItems && (
                <div className="flex flex-col gap-2 mt-2">
                  {item.listItems.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {child.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </header>
  );
}
