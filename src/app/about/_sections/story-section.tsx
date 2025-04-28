"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface AboutStoryProps {
  story: {
    title: string
    subtitle: string
    content: string[]
    foundedYear: number
    image: string
  }
}

export default function AboutStory({ story }: AboutStoryProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{story.title}</h2>
            <p className="text-xl text-gold mb-6 font-serif">{story.subtitle}</p>

            <div className="space-y-4">
              {story.content.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 inline-block">
              <div className="text-4xl font-serif font-bold text-gold">{story.foundedYear}</div>
              <div className="text-sm uppercase tracking-wider">Year Founded</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <Image src={story.image || "/placeholder.svg"} alt="Our Hotel Story" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
