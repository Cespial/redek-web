import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Clients from "@/components/Clients";
import Stats from "@/components/Stats";
import About from "@/components/About";
import ODRFlow from "@/components/ODRFlow";
import PlatformShowcase from "@/components/PlatformShowcase";
import Solutions from "@/components/Solutions";
import AIFeatures from "@/components/AIFeatures";
import Testimonial from "@/components/Testimonial";
import TrustBar from "@/components/TrustBar";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import Contact from "@/components/Contact";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Clients />
      <Stats />
      <About />
      <ODRFlow />
      <PlatformShowcase />
      <Solutions />
      <AIFeatures />
      <Testimonial />
      <TrustBar />
      <Team />
      <FAQ />
      <CTABand />
      <Contact />
      <Subscribe />
      <Footer />
    </main>
  );
}
