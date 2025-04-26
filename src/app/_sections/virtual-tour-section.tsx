"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { virtualTourData } from "@/lib/data"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

export default function VirtualTourSection() {
  return (
    <section className="py-16 bg-navy text-white relative overflow-hidden">
      <div className="pattern-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 gold-border pb-4 inline-block text-gold">
            {virtualTourData.title}
          </h2>
          <p className="max-w-2xl mx-auto opacity-90">{virtualTourData.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {virtualTourData.tourPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="bg-navy-light border-gold/10 h-full overflow-hidden group">
                <CardContent className="p-0 relative">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={point.image || "/placeholder.svg"}
                      alt={point.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        className="rounded-full bg-gold/90 hover:bg-gold text-navy-dark h-12 w-12 flex items-center justify-center"
                        aria-label={`View ${point.title} virtual tour`}
                      >
                        <Play className="h-5 w-5 ml-0.5" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif font-bold text-lg mb-2 text-gold">{point.title}</h3>
                    <p className="text-sm opacity-90">{point.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-luxury">Explore Full Virtual Tour</Button>
        </div>
      </div>
    </section>
  )
}
