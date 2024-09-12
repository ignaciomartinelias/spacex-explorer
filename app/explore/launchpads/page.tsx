"use client";

import { useLaunchpadsQuery } from "@/apis/launchpads/queries";
import { LaunchpadCard } from "./components/LaunchpadCard";

export default function LaunchpadsPage() {
  const { data } = useLaunchpadsQuery();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">SpaceX Launchpads</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((launchpad) => (
          <LaunchpadCard key={launchpad.id} launchpad={launchpad} />
        ))}
      </div>
    </div>
  );
}
