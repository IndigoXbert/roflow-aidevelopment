import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoCarousel from "@/components/VideoCarousel";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import ActionCards from "@/components/ActionCards";
import FAQ from "@/components/FAQ";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoCarousel />
      <ActionCards />
      <Features />
      <Pricing />
      <FAQ />
      <FooterCTA />
      <Footer />
    </>
  );
}
