"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { TiltCard } from "../TiltCard";

export const AboutSection = () => (
  <section id="about" className="bg-gray-800 w-full py-12 md:py-24 lg:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
        <div className="space-y-6 md:w-1/2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-400">
            The SpaceX Vision
          </h2>
          <p className="text-gray-200 md:text-lg">
            Founded in 2002 by Elon Musk, SpaceX has revolutionized the
            aerospace industry. With a mission to make life multi-planetary,
            SpaceX designs, manufactures, and launches the world's most advanced
            rockets and spacecraft.
          </p>
          <p className="text-gray-200 md:text-lg">
            From reducing space transportation costs to establishing a
            self-sustaining city on Mars, SpaceX continues to push the
            boundaries of what's possible in space exploration.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-white bg-transparent text-white hover:bg-blue-600 hover:border-blue-600 hover:text-white"
            asChild
          >
            <Link
              href="https://www.spacex.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Official SpaceX Website
            </Link>
          </Button>
        </div>

        <TiltCard />
      </div>
    </div>
  </section>
);
