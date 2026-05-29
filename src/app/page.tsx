import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Stats from "@/components/Stats";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Solutions from "@/components/Solutions";
import AIFeatures from "@/components/AIFeatures";
import Testimonial from "@/components/Testimonial";
import TrustBar from "@/components/TrustBar";
import Team from "@/components/Team";
import CTABand from "@/components/CTABand";
import Contact from "@/components/Contact";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Clients />
      <Stats />
      <About />
      <HowItWorks />
      <Solutions />
      <AIFeatures />
      <Testimonial />
      <TrustBar />
      <Team />
      <CTABand />
      <Contact />
      <Subscribe />
      <Footer />
    </main>
  );
}
