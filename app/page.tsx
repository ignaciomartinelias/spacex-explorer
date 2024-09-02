"use client";

import { Header } from "@/components/Home/Header";
import { Footer } from "@/components/Home/Footer";
import { HeroSection } from "@/components/Home/HeroSection";
import { FeaturesSection } from "@/components/Home/FeaturesSection";
import { AboutSection } from "@/components/Home/AboutSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
