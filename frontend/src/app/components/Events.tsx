"use client";

import * as React from "react";
import {
  Clock,
  MapPin,
  Users,
  Trophy,
  Handshake,
  LaptopIcon as LaptopCode,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const eventCategories = [
  { id: "all", label: "All Events" },
  { id: "workshop", label: "Workshops", icon: LaptopCode },
  { id: "competition", label: "Competitions", icon: Trophy },
  { id: "networking", label: "Networking", icon: Handshake },
];

const events = [
  {
    id: 1,
    category: "workshop",
    title: "Startup Bootcamp 2025",
    description:
      "An intensive workshop covering everything from ideation to pitch deck creation. Learn from successful founders and industry experts.",
    date: { month: "FEB", day: "27" },
    location: "SR 05",
    time: "10:00 AM - 4:00 PM",
    capacity: "50 Seats",
    status: "Registration Open",
    featured: false,
  },
  {
    id: 2,
    category: "competition",
    title: "Innovation Challenge 2024",
    description:
      "Showcase your groundbreaking ideas and compete for prizes worth ₹50,000. Get a chance to pitch to top investors and incubators.",
    date: { month: "Coming", day: "Soon" },
    location: "To be Notified",
    time: "To be Notified",
    capacity: "100 Teams",
    status: "Coming Soon",
    featured: true,
  },
  {
    id: 3,
    category: "networking",
    title: "Founder's Connect",
    description:
      "An exclusive evening of networking with successful entrepreneurs, investors, and industry experts. Build valuable connections for your startup journey.",
    date: { month: "Coming", day: "Soon" },
    location: "To be Notified",
    time: "To be Notified",
    capacity: "Limited Seats",
    status: "Coming Soon",
    featured: false,
  },
];

export function Events() {
  const [activeCategory, setActiveCategory] = React.useState("all");

  const filteredEvents = events.filter(
    (event) => activeCategory === "all" || event.category === activeCategory
  );

  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Featured Events
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {eventCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon && <category.icon className="w-4 h-4 mr-2" />}
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <Card
              key={event.id}
              className={`bg-gray-800/50 border-gray-700 overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                event.featured ? "relative" : ""
              }`}
            >
              {event.featured && (
                <div className="absolute top-5 right-0 bg-primary text-white px-8 py-1 rotate-45 translate-x-8">
                  Featured
                </div>
              )}
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-center">
                    <span className="block text-sm font-semibold">
                      {event.date.month}
                    </span>
                    <span className="block text-2xl font-bold">
                      {event.date.day}
                    </span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    {event.status}
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{event.description}</p>
                  </div>

                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.capacity}</span>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button className="flex-1 rounded-full">
                      {event.status === "Registration Open"
                        ? "Register Now"
                        : "Notify Me"}
                    </Button>
                    <Button variant="outline" className="flex-1 rounded-full">
                      Learn More
                    </Button>
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
