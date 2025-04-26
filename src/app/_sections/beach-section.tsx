import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface BeachSectionProps {
  data: {
    title: string
    description: string
    image: string
    cta: string
  }
}

export default function BeachSection({ data }: BeachSectionProps) {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Card className="border-none overflow-hidden order-2 md:order-1">
            <CardContent className="p-0">
              <Image
                src={data.image || "/placeholder.svg"}
                alt="Swimming Pool"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
            <p className="text-muted-foreground mb-6">{data.description}</p>
            <Button className="bg-gold hover:bg-gold/90 text-black rounded-none">{data.cta}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
