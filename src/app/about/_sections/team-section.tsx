"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

interface TeamMember {
  name: string
  position: string
  image: string
  bio: string
  socialMedia: {
    linkedin?: string
    twitter?: string
    instagram?: string
    facebook?: string
  }
}

interface AboutTeamProps {
  team: TeamMember[]
}

export default function AboutTeam({ team }: AboutTeamProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 gold-border pb-4 inline-block">
            Our Leadership Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated professionals who ensure your stay exceeds expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-gold overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold">{member.name}</h3>
                    <p className="text-gold mb-3">{member.position}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>

                    <div className="flex space-x-3">
                      {member.socialMedia.linkedin && (
                        <a
                          href={member.socialMedia.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-gold transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {member.socialMedia.twitter && (
                        <a
                          href={member.socialMedia.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-gold transition-colors"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                      {member.socialMedia.instagram && (
                        <a
                          href={member.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-gold transition-colors"
                        >
                          <Instagram className="h-5 w-5" />
                        </a>
                      )}
                      {member.socialMedia.facebook && (
                        <a
                          href={member.socialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-gold transition-colors"
                        >
                          <Facebook className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
