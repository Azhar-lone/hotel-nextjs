"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqItems } from "@/lib/data"
import { motion } from "framer-motion"

export default function FaqSection() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const handleAccordionChange = (value: string) => {
    setExpandedItems((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]))
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 gold-border pb-4 inline-block">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our hotel and services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple" value={expandedItems} className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-gold/10 rounded-md overflow-hidden bg-card shadow-sm"
                >
                  <AccordionTrigger
                    onClick={() => handleAccordionChange(`item-${index}`)}
                    className="px-6 py-4 hover:bg-muted/50 transition-colors font-medium text-left"
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
