"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { specialOffers } from "@/lib/data"
import { motion, useInView } from "framer-motion"

export default function SpecialOffersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-16 bg-muted relative">
      <div className="pattern-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 gold-border pb-4 inline-block">
            Special Offers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take advantage of our exclusive deals and packages to make your stay even more special.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {specialOffers.map((offer) => (
            <motion.div key={offer.id} variants={item}>
              <Card className="h-full overflow-hidden border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-gold">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={offer.image || "/placeholder.svg"}
                    alt={offer.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  {offer.discount && (
                    <Badge className="absolute top-4 right-4 bg-gold text-navy-dark font-medium">
                      Save {offer.discount}
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="font-serif">{offer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{offer.description}</p>
                  <div className="mt-4 text-sm">
                    <p className="flex justify-between">
                      <span className="font-medium">Promo Code:</span>
                      <span className="font-mono bg-muted px-2 py-1 rounded">{offer.code}</span>
                    </p>
                    <p className="flex justify-between mt-2">
                      <span className="font-medium">Valid Until:</span>
                      <span>{new Date(offer.validUntil).toLocaleDateString()}</span>
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full btn-luxury">Book This Offer</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
