"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Shield, Star, Users } from "lucide-react"

interface Value {
  title: string
  description: string
  icon: string
}

interface AboutValuesProps {
  values: Value[]
}

export default function AboutValues({ values }: AboutValuesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return <Award className="h-8 w-8 text-gold" />
      case "Heart":
        return <Heart className="h-8 w-8 text-gold" />
      case "Shield":
        return <Shield className="h-8 w-8 text-gold" />
      case "Star":
        return <Star className="h-8 w-8 text-gold" />
      case "Users":
        return <Users className="h-8 w-8 text-gold" />
      default:
        return <Star className="h-8 w-8 text-gold" />
    }
  }

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 gold-border pb-4 inline-block">Our Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These core principles guide everything we do and define our commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-gold">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-gold/10 rounded-full">{getIcon(value.icon)}</div>
                  <h3 className="text-xl font-serif font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
