import { fetchLaunchpad } from "@/apis/launchpads/api";
import { notFound } from "next/navigation";
import { PadDetails } from "../../components/PadDetails";

export default async function LaunchpadDetailsPage({
  params,
}: {
  params: { name: string };
}) {
  const launchpad = await fetchLaunchpad({
    name: decodeURIComponent(params.name),
  });

  if (!launchpad) {
    notFound();
  }

  return <PadDetails pad={launchpad} />;
}
