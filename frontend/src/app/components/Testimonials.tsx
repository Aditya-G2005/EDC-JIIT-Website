import Image from "next/image";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    content:
      "EDC JIIT has been instrumental in my entrepreneurial journey. The mentorship and resources provided helped me transform my idea into a successful startup. The community here is incredibly supportive!",
    author: "Rahul Sharma",
    role: "Founder, TechStart | Alumni",
    image: "/customer/rahul-sharma.jpeg",
  },
  {
    content:
      "The events organized by EDC are top-notch! From workshops to pitch competitions, everything is designed to help us grow. I've learned more here than I could have imagined.",
    author: "Priya Patel",
    role: "Final Year Student",
    image: "/customer/priya-patel.jpeg",
  },
  {
    content:
      "The mentors at EDC JIIT are incredibly knowledgeable and always willing to help. Their guidance has been crucial in helping me navigate the challenges of building my startup.",
    author: "Arun Kumar",
    role: "Current Member",
    image: "/customer/arun-kumar.jpeg",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          What Our Members Say
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-700 border-gray-700 transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-gray-300 mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
