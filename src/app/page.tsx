import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import CTABand from "@/components/CTABand";
import AIFeatures from "@/components/AIFeatures";
import Testimonial from "@/components/Testimonial";
import TrustBar from "@/components/TrustBar";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Clients />
      <About />
      <Solutions />
      <CTABand />
      <AIFeatures />
      <Testimonial />
      <TrustBar />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
