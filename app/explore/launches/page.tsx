"use client";

import { useLaunchesInfiniteQuery } from "@/api/launches/queries";
import { LaunchCard } from "./components/LaunchCard";

export default function LaunchesPage() {
  const { data, fetchNextPage } = useLaunchesInfiniteQuery();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">SpaceX Launches</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.pages.map((page, pageIndex) =>
          page.docs.map((launch, launchIndex) => (
            <LaunchCard
              key={launch.id}
              launch={launch}
              isLast={
                pageIndex === data.pages.length - 1 &&
                launchIndex === page.docs.length - 1
              }
              fetchNextPage={fetchNextPage}
            />
          ))
        )}
      </div>
    </div>
  );
}
