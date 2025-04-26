"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  quote: string
  author: string
  rating: number
  index?: number
}

export function TestimonialCard({ quote, author, rating, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="border-none shadow-md hover:shadow-gold transition-all duration-300 h-full">
        <CardContent className="flex flex-col items-center p-8 h-full">
          <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6">
            <span className="text-gold text-2xl font-serif">"</span>
          </div>
          <p className="text-center mb-6 italic">{quote}</p>
          <div className="mt-auto">
            <p className="font-medium mb-2 text-center">{author}</p>
            <div className="flex gap-1 text-gold justify-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn("h-4 w-4", i < rating ? "fill-gold" : "fill-muted stroke-muted-foreground")}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
