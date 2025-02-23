"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Image from "next/image";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast.success("Thank you for reaching out! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col md:flex-row justify-around items-center"
    >
      <div className="flex flex-col items-center md:items-end justify-end w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Connect With Us
        </h2>

        <Image
          src={"/assets/char-hello.png"}
          alt={""}
          width={300}
          height={400}
        />
      </div>

      <div className="container mx-auto px-4">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
          <div>
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="bg-gray-800/50 border-gray-700 text-white"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="bg-gray-800/50 border-gray-700 text-white"
            />
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="bg-gray-800/50 border-gray-700 text-white min-h-[150px]"
            />
          </div>
          <Button type="submit" className="w-full rounded-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
