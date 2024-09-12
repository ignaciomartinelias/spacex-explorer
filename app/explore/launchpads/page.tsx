import { fetchLaunchpads } from "@/apis/launchpads/api";
import { LaunchpadCard } from "./components/LaunchpadCard";

export default async function LaunchpadsPage() {
  const launchpads = await fetchLaunchpads();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">SpaceX Launchpads</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {launchpads.map((launchpad) => (
          <LaunchpadCard key={launchpad.id} launchpad={launchpad} />
        ))}
      </div>
    </div>
  );
}
