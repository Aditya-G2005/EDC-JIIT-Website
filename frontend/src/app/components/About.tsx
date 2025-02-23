import { Lightbulb, Users, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const highlights = [
    {
      icon: Lightbulb,
      title: "Innovate",
      description:
        "Turn your ideas into reality with our resources and guidance.",
    },
    {
      icon: Users,
      title: "Collaborate",
      description: "Join a vibrant community of like-minded individuals.",
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Take your startup to the next level with our support.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          About EDC JIIT
        </h2>

        <div className="max-w-3xl mx-auto text-gray-300 space-y-6 mb-16">
          <p>
            The <strong>Entrepreneurship Development Club (EDC) JIIT</strong> is
            a new and dynamic initiative aimed at fostering an entrepreneurial
            mindset among students. We believe that{" "}
            <strong>innovation, leadership, and problem-solving</strong> are the
            keys to shaping the future, and EDC serves as a launchpad for
            aspiring entrepreneurs, creators, and change-makers.
          </p>
          <p>
            At EDC, we provide a <strong>collaborative ecosystem</strong> where
            students can ideate, innovate, and transform their ideas into
            reality. Through{" "}
            <strong>
              workshops, networking events, pitch competitions, and mentorship
              programs
            </strong>
            , we empower students with the skills, resources, and confidence to
            build impactful startups and ventures.
          </p>
          <p>
            Whether you&apos;re an <strong>aspiring entrepreneur</strong>, a
            <strong>tech enthusiast</strong>, or simply curious about the
            startup culture, EDC JIIT welcomes you to be a part of this exciting
            journey. Together, let&apos;s{" "}
            <strong>build, innovate, and disrupt!</strong> 🚀
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <Card
              key={item.title}
              className="bg-gray-800/50 border-gray-700 transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
