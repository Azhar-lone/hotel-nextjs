import { TestimonialCard } from "@/components/myUi/testimonial-card";

interface TestimonialsSectionProps {
  testimonials: Array<{
    id: number;
    quote: string;
    author: string;
    rating: number;
  }>;
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
