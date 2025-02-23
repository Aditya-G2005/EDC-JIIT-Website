import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Membership() {
  return (
    <section id="join" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Become a Member</h2>
        <p className="text-gray-400 mb-8 text-lg">
          Join our vibrant community of entrepreneurs and innovators.
        </p>

        <Button
          asChild
          size="lg"
          className="rounded-full text-lg px-8 hover:scale-105 transition-transform"
        >
          <Link href="https://forms.gle/biNCWjo8FHhw2dTi6" target="_blank">
            Sign Up Now
          </Link>
        </Button>

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <span className="block text-3xl font-bold text-primary mb-2">
              500+
            </span>
            <span className="text-gray-400">Members</span>
          </div>
          <div className="text-center">
            <span className="block text-3xl font-bold text-primary mb-2">
              50+
            </span>
            <span className="text-gray-400">Events Hosted</span>
          </div>
          <div className="text-center">
            <span className="block text-3xl font-bold text-primary mb-2">
              20+
            </span>
            <span className="text-gray-400">Startups Incubated</span>
          </div>
        </div>
      </div>
    </section>
  );
}
