import { fetchLaunches } from "@/apis/launches/api";
import { LaunchesWrapper } from "./components/LaunchesWrapper";

export default async function LaunchesPage() {
  const launches = await fetchLaunches();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">SpaceX Launches</h1>
      <LaunchesWrapper launches={launches} />
    </div>
  );
}
