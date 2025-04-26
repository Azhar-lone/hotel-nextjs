"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "en" | "fr" | "es" | "de" | "zh"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.facilities": "Facilities",
    "nav.rooms": "Rooms",
    "nav.contact": "Contact Us",
    "cta.book": "BOOK NOW",
    "cta.explore": "EXPLORE",
    "home.welcome": "WELCOME TO",
    "home.luxury": "LUXURY",
    "home.hotels": "HOTELS",
    "home.tagline": "Book your stay and enjoy Luxury redefined at the most affordable rates.",
    // Add more translations as needed
  },
  fr: {
    "nav.home": "Accueil",
    "nav.facilities": "Installations",
    "nav.rooms": "Chambres",
    "nav.contact": "Contactez-nous",
    "cta.book": "RÉSERVER",
    "cta.explore": "EXPLORER",
    "home.welcome": "BIENVENUE À",
    "home.luxury": "LUXE",
    "home.hotels": "HÔTELS",
    "home.tagline": "Réservez votre séjour et profitez du luxe redéfini aux tarifs les plus abordables.",
    // Add more translations as needed
  },
  es: {
    "nav.home": "Inicio",
    "nav.facilities": "Instalaciones",
    "nav.rooms": "Habitaciones",
    "nav.contact": "Contáctenos",
    "cta.book": "RESERVAR",
    "cta.explore": "EXPLORAR",
    "home.welcome": "BIENVENIDO A",
    "home.luxury": "LUJO",
    "home.hotels": "HOTELES",
    "home.tagline": "Reserve su estancia y disfrute del lujo redefinido a las tarifas más asequibles.",
    // Add more translations as needed
  },
  de: {
    "nav.home": "Startseite",
    "nav.facilities": "Einrichtungen",
    "nav.rooms": "Zimmer",
    "nav.contact": "Kontakt",
    "cta.book": "BUCHEN",
    "cta.explore": "ERKUNDEN",
    "home.welcome": "WILLKOMMEN BEI",
    "home.luxury": "LUXUS",
    "home.hotels": "HOTELS",
    "home.tagline": "Buchen Sie Ihren Aufenthalt und genießen Sie neu definierten Luxus zu den günstigsten Preisen.",
    // Add more translations as needed
  },
  zh: {
    "nav.home": "首页",
    "nav.facilities": "设施",
    "nav.rooms": "客房",
    "nav.contact": "联系我们",
    "cta.book": "立即预订",
    "cta.explore": "探索",
    "home.welcome": "欢迎来到",
    "home.luxury": "豪华",
    "home.hotels": "酒店",
    "home.tagline": "预订您的住宿，以最实惠的价格享受重新定义的豪华体验。",
    // Add more translations as needed
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
