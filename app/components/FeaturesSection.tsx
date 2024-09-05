"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RocketIcon, SatelliteIcon, ShipIcon } from "lucide-react";

export const FeaturesSection = () => (
  <section id="features" className="w-full py-6 md:py-12 lg:py-16">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 md:mb-12 text-blue-400">
        Unveiling the SpaceX Frontier
      </h2>
      <p className="text-lg mx-auto text-center text-gray-400 mb-8 md:mb-12 w-full lg:w-1/2">
        Explore the pioneering innovations of SpaceX—from groundbreaking rocket
        launches to global satellite networks and maritime recovery operations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <RocketIcon className="h-12 w-12 mb-4 text-blue-500" />
            <CardTitle className="text-xl font-bold">
              Launches & Rockets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Dive into the heart of SpaceX operations. Explore past and
              upcoming launches, and unravel the engineering marvels behind
              Falcon 9, Falcon Heavy, and Starship.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <SatelliteIcon className="h-12 w-12 mb-4 text-blue-500" />
            <CardTitle className="text-xl font-bold">
              Starlink & Satellites
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Witness the revolution in global connectivity. Track Starlink
              satellites and discover how SpaceX is weaving a network to connect
              the world.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <ShipIcon className="h-12 w-12 mb-4 text-blue-500" />
            <CardTitle className="text-xl font-bold">
              Ships & Recovery
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Sail the high seas with SpaceX&apos;s fleet. From drone ships to
              recovery vessels, learn about the crucial role these ships play in
              SpaceX&apos;s reusability mission.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);
