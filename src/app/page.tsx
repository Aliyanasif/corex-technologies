import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Trusted from "@/components/home/Trusted";
import About from "@/components/home/About";
import ProductEcosystem from "@/components/home/ProductEcosystem";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import Industries from "@/components/home/Industries";
import Technology from "@/components/home/Technology";
import CTA from "@/components/home/CTA";
import Reveal from "@/components/shared/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Reveal><Trusted /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><ProductEcosystem /></Reveal>
        <Reveal><FeaturedProduct /></Reveal>
        <Reveal><Industries /></Reveal>
        <Reveal><Technology /></Reveal>
        <Reveal><CTA /></Reveal>
      </main>

      <Footer />
    </>
  );
}