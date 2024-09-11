"use client";

import { useLaunchesQuery } from "@/api/launches/queries";

import { LaunchCard } from "./components/LaunchCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LaunchesPage() {
  const { data } = useLaunchesQuery();
  const [currentCount, setCurrentCount] = useState(10);

  const paginatedData = data?.slice(0, currentCount);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">SpaceX Launches</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paginatedData?.map((launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Button
          onClick={() => setCurrentCount((prev) => prev + 10)}
          className="mt-4"
        >
          Load More
        </Button>
      </div>
    </div>
  );
}
