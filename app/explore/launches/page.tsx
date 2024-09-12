import { LaunchCard } from "./components/LaunchCard";
import { fetchLaunches } from "@/apis/launches/api";

export default async function LaunchesPage() {
  const launches = await fetchLaunches();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">SpaceX Launches</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {launches.map((launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        ))}
      </div>
    </div>
  );
}
