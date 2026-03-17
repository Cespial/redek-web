import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import AIFeatures from "@/components/AIFeatures";
import Platform from "@/components/Platform";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <AIFeatures />
      <Platform />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
