"use client";

import { useRocketsQuery } from "@/apis/rockets/queries";
import { RocketCard } from "./components/RocketCard";

export default function RocketsPage() {
  const { data } = useRocketsQuery();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">SpaceX Rockets</h1>
      <div className="space-y-6">
        {data?.map((rocket) => (
          <RocketCard key={rocket.id} rocket={rocket} />
        ))}
      </div>
    </div>
  );
}
