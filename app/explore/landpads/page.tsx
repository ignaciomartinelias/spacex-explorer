import { LandpadCard } from "./components/LandpadCard";
import { fetchLandpads } from "@/apis/landpads/api";

export default async function LandpadsPage() {
  const landpads = await fetchLandpads();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">SpaceX Landpads</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {landpads.map((landpad) => (
          <LandpadCard key={landpad.id} landpad={landpad} />
        ))}
      </div>
    </div>
  );
}
