import { fetchLandpad } from "@/apis/landpads/api";
import { notFound } from "next/navigation";
import { PadDetails } from "../../components/PadDetails";

export default async function LandpadPage({
  params,
}: {
  params: { name: string };
}) {
  const landpad = await fetchLandpad({ name: decodeURIComponent(params.name) });

  if (!landpad) {
    notFound();
  }

  return <PadDetails pad={landpad} />;
}
