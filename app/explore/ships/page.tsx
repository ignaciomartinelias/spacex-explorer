import { fetchShips } from "@/apis/ships/api";
import { ShipCard } from "./components/ShipCard";

export default async function ShipsPage() {
  const ships = await fetchShips();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">SpaceX Ships</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ships.map((ship) => (
          <ShipCard key={ship.id} ship={ship} />
        ))}
      </div>
    </div>
  );
}
