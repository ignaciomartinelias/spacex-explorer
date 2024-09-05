"use client";

import { useLaunchesInfiniteQuery } from "@/api/launches/queries";
import { NextPageFetcher } from "./components/LaunchesPageFetcher";
import { LaunchCard } from "./components/LaunchCard";

export default function LaunchesPage() {
  const { data, fetchNextPage, hasNextPage } = useLaunchesInfiniteQuery();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">SpaceX Launches</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.pages.map((page) =>
          page.docs.map((launch) => (
            <LaunchCard key={launch.id} launch={launch} />
          ))
        )}
        {hasNextPage && <NextPageFetcher fetchNextPage={fetchNextPage} />}
      </div>
    </div>
  );
}
