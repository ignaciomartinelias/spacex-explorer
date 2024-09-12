import { RocketCard } from "./components/RocketCard";
import { fetchRockets } from "@/apis/rockets/api";

export default async function RocketsPage() {
  const rockets = await fetchRockets();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">SpaceX Rockets</h1>
      <div className="space-y-6">
        {rockets.map((rocket) => (
          <RocketCard key={rocket.id} rocket={rocket} />
        ))}
      </div>
    </div>
  );
}
