import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 overflow-hidden">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`absolute bg-gradient-to-br from-primary to-primary/80 rounded-full opacity-10 animate-float`}
              style={{
                width: `${300 - i * 50}px`,
                height: `${300 - i * 50}px`,
                top: i === 1 ? "-150px" : i === 2 ? "50%" : "auto",
                right: i === 1 ? "-150px" : i === 3 ? "10%" : "auto",
                left: i === 2 ? "-100px" : "auto",
                bottom: i === 2 ? "-100px" : "auto",
                animationDelay: `${(i - 1) * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-16 pt-20 flex justify-center items-center pb-5">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white space-y-2">
              <span className="block opacity-0 animate-fadeInUp">
                Empowering
              </span>
              <span className="block opacity-0 animate-fadeInUp-delay-1">
                Visionaries,
              </span>
              <span className="block opacity-0 animate-fadeInUp-delay-2">
                Building the Future
              </span>
            </h1>

            <p className="block opacity-0 animate-fadeInUp-delay-2 mt-6 text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Join JIIT&apos;s premier entrepreneurship club and transform your
              innovative ideas into successful ventures.
            </p>

            <div className="block opacity-0 animate-fadeInUp-delay-3">
              <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto lg:mx-0">
                {[
                  { number: "500+", label: "Active Members" },
                  { number: "50+", label: "Events Hosted" },
                  { number: "20+", label: "Startups Launched" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <span className="block text-3xl font-bold text-primary">
                      {stat.number}
                    </span>
                    <span className="text-sm text-gray-400">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="block opacity-0 animate-fadeInUp-delay-4">
              <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center lg:justify-start">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="#join">Join Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                >
                  <Link href="#events">Upcoming Events</Link>
                </Button>
              </div>
            </div>
          </div>

          <Card className="lg:col-span-2 bg-gray-800/50 backdrop-blur border-gray-700">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-white">Next Event</h3>
                <Badge
                  variant="secondary"
                  className="bg-green-500/10 text-green-500"
                >
                  Registration Open
                </Badge>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-center">
                    <span className="block text-sm font-semibold">FEB</span>
                    <span className="block text-2xl font-bold">27</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Startup Bootcamp 2025
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">
                      Learn the essentials of building a successful startup from
                      industry experts.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>SR05</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>10:00 AM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>February 27, 2025</span>
                  </div>
                </div>

                <Button className="w-full rounded-full">
                  Register Now
                  <span className="text-xs ml-2 opacity-75">
                    Only 10 seats left
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
