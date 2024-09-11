"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TiltCard } from "./TiltCard";

export const AboutSection = () => (
  <section id="about" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
        <div className="space-y-6 lg:w-1/2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-400">
            The SpaceX Vision
          </h2>
          <p className="text-gray-200 md:text-lg">
            Founded in 2002 by Elon Musk, SpaceX has revolutionized the
            aerospace industry. With a mission to make life multi-planetary,
            SpaceX designs, manufactures, and launches the world&lsquo;s most
            advanced rockets and spacecraft.
          </p>
          <p className="text-gray-200 md:text-lg">
            From reducing space transportation costs to establishing a
            self-sustaining city on Mars, SpaceX continues to push the
            boundaries of what&lsquo;s possible in space exploration.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link
              href="https://www.spacex.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Official SpaceX Website
            </Link>
          </Button>
        </div>

        <TiltCard className="w-full p-2 sm:p-10 lg:w-1/2 xl:w-auto lg:p-4">
          <Image
            src="/vision2.jpg"
            alt="SpaceX Rocket Launch"
            width={800}
            height={600}
            className="rounded-lg"
          />
        </TiltCard>
      </div>
    </div>
  </section>
);
