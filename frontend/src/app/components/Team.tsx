import Image from "next/image";
import Link from "next/link";
import { TiSocialLinkedin } from "react-icons/ti";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Aditya Gupta",
    role: "Chief Visionary Officer",
    image: "/team/aditya-gupta.png",
    linkedin: "https://www.linkedin.com/in/aditya-gupta-32b255311/",
  },
  {
    name: "Santhil Kherwal",
    role: "Head of Innovation",
    image: "/team/santhil-kherwal.jpeg",
    linkedin: "https://www.linkedin.com/in/santhilkherwal/",
  },
  {
    name: "Harsh Mittal",
    role: "Sece",
    image: "/team/harsh-mittal.jpeg",
    linkedin: "https://www.linkedin.com/in/harshm1/",
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Our Team
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="bg-gradient-to-br from-gray-800 to-gray-700 border-gray-700 overflow-hidden transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square relative bg-black">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary mb-4">{member.role}</p>
                <div className="flex justify-center gap-4">
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <TiSocialLinkedin />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
