"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface Award {
  name: string
  year: number
  organization: string
  description: string
  image: string
}

interface AboutAwardsProps {
  awards: Award[]
}

export default function AboutAwards({ awards }: AboutAwardsProps) {
  return (
    <section className="py-16 bg-navy text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 gold-border pb-4 inline-block text-gold">
            Awards & Recognition
          </h2>
          <p className="max-w-2xl mx-auto opacity-90">
            Our commitment to excellence has been recognized by leading organizations in the hospitality industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-navy-light border-gold/10 hover:border-gold/30 transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="relative h-16 w-16 mr-4">
                      <Image src={award.image || "/placeholder.svg"} alt={award.name} fill className="object-contain" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-bold text-gold">{award.name}</h3>
                      <p className="text-sm opacity-80">
                        {award.organization}, {award.year}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm opacity-90 mt-auto">{award.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
