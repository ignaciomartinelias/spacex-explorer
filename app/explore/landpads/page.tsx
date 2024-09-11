"use client";

import { useLandpadsQuery } from "@/api/landpads/queries";
import { LandpadCard } from "./components/LandpadCard";

export default function LandpadsPage() {
  const { data } = useLandpadsQuery();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">SpaceX Landpads</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.map((landpad) => (
          <LandpadCard key={landpad.id} landpad={landpad} />
        ))}
      </div>
    </div>
  );
}
