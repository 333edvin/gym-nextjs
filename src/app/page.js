'use client'

import Hero from "./containers/HeroSection";
import About from "./containers/AboutSection";
import CTA from "./components/Cta";
import Services from "./containers/ServicesSection";
import Gallery from "./containers/GallerySection";
import Testimonials from "./containers/TestimonialsSection";
import Lenis from "@studio-freight/lenis";
import { useState, useEffect } from 'react';
import Preloader from "./components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Show preloader for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3000 milliseconds = 3 seconds

    // Cleanup function
    return () => {
      clearTimeout(timer);
      lenis.destroy(); // Clean up Lenis instance
    };
  }, []);

  return (
    <main>
      {isLoading && <Preloader />}
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      {/* <CTA/> */}
    </main>
  );
}
