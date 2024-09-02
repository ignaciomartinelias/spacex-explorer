"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const HeroSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Image
        src="/hero-desktop.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
    </div>
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="flex flex-col items-center space-y-4 text-center">
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1 }}
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
            Explore the Universe of{" "}
            <span className="text-blue-500">SpaceX</span> Data
          </h1>
          <p className="mx-auto max-w-[800px] text-gray-200 md:text-xl lg:text-2xl">
            Embark on a journey through space and time. Discover the
            revolutionary world of SpaceX, from groundbreaking launches to
            futuristic technologies.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <Link href="/explore">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Start Exploring
            </Button>
          </Link>
          <Link href="#features">
            <Button
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-blue-600 hover:border-blue-600 hover:text-white"
            >
              Learn More
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);
