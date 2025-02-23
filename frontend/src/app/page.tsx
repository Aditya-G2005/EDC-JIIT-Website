import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Events } from "./components/Events";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { Membership } from "./components/Membership";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Hero />
      <About />
      <Events />
      <Team />
      <Testimonials />
      <Membership />
      <Contact />
      <Footer />
    </main>
  );
}
