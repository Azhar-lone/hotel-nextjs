"use client";

import type React from "react";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Mail, Send } from "lucide-react";
import { hotelData } from "@/lib/data";
import { useLanguage } from "@/components/myUi/language-provider";
import { toast } from "sonner";

export default function Footer() {
  const { t } = useLanguage();

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast("Invalid email", {
        description: "Please enter a valid email address.",
      });
      return;
    }

    toast("Subscription successful!", {
      description: "Thank you for subscribing to our newsletter.",
    });

    e.currentTarget.reset();
  };

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 relative">
      <div className="pattern-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-gold font-serif font-bold text-2xl mb-6">
              LUXURY
            </h3>
            <p className="text-sm opacity-90">{hotelData.address}</p>
            <p className="text-sm opacity-90">{hotelData.phone}</p>
            <p className="text-sm opacity-90">{hotelData.email}</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-xl mb-6 gold-border pb-2">
              About
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="opacity-90 hover:opacity-100 hover:text-gold transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gold inline-block mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="opacity-90 hover:opacity-100 hover:text-gold transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gold inline-block mr-2"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="opacity-90 hover:opacity-100 hover:text-gold transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gold inline-block mr-2"></span>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="opacity-90 hover:opacity-100 hover:text-gold transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gold inline-block mr-2"></span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-xl mb-6 gold-border pb-2">
              Rooms
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/rooms/single"
                  className="opacity-90 hover:opacity-100 hover:text-gold transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gold inline-block mr-2"></span>
                  Single Room
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms/double"
                  className="opacity-90 hover:opacity-100 hover:text-gold transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gold inline-block mr-2"></span>
                  Double Room
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms/twin"
                  className="opacity-90 hover:opacity-100 hover:text-gold transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gold inline-block mr-2"></span>
                  Twin Room
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms/suite"
                  className="opacity-90 hover:opacity-100 hover:text-gold transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gold inline-block mr-2"></span>
                  Luxury Suite
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-xl mb-6 gold-border pb-2">
              Newsletter
            </h4>
            <p className="text-sm opacity-90 mb-4">
              Subscribe to our newsletter for special deals and updates
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <div className="flex">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    className="bg-navy text-white rounded-none pl-10 h-10 border-gold/50 focus:border-gold"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-gold hover:bg-gold-dark text-navy-dark rounded-none h-10 px-4"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>

            <div className="flex space-x-4 mt-6">
              <Link
                href={hotelData.socialMedia.facebook}
                className="text-white hover:text-gold transition-colors bg-navy-light p-2 rounded-full"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href={hotelData.socialMedia.twitter}
                className="text-white hover:text-gold transition-colors bg-navy-light p-2 rounded-full"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href={hotelData.socialMedia.instagram}
                className="text-white hover:text-gold transition-colors bg-navy-light p-2 rounded-full"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <Separator className="bg-border/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>
            &copy; {new Date().getFullYear()} Luxury Hotels. All rights
            reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/sitemap" className="hover:text-gold transition-colors">
              Sitemap
            </Link>
            <Link
              href="/accessibility"
              className="hover:text-gold transition-colors"
            >
              Accessibility
            </Link>
            <Link href="/careers" className="hover:text-gold transition-colors">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
