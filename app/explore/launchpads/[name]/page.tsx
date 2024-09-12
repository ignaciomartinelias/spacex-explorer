import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPinIcon, RocketIcon, GlobeIcon, CalendarIcon } from "lucide-react";
import { fetchLaunchpad } from "@/apis/launchpads/api";
import { notFound } from "next/navigation";

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

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/explore/launchpads"
        className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
      >
        &larr; Back to Launchpads
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <div className="relative h-64 lg:h-96">
            <Image
              src={launchpad.images.large[0]}
              alt={launchpad.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h1 className="text-3xl font-bold text-white">
                {launchpad.name}
              </h1>
              <p className="text-xl text-gray-300">{launchpad.fullName}</p>
            </div>
          </div>
          <CardContent className="mt-4">
            <div className="flex items-center space-x-2 mb-4">
              <Badge
                variant={
                  launchpad.status === "active" ? "default" : "secondary"
                }
              >
                {launchpad.status.charAt(0).toUpperCase() +
                  launchpad.status.slice(1)}
              </Badge>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {launchpad.details}
            </p>

            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-5 w-5 text-gray-500" />
              <span>
                {launchpad.locality}, {launchpad.region}
              </span>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <RocketIcon className="h-5 w-5" />
                <span>Landing Statistics</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>Attempts: {launchpad.launchAttempts}</p>
                <p>Successes: {launchpad.launchSuccesses}</p>
                <p>
                  Success Rate:{" "}
                  {(
                    (launchpad.launchSuccesses / launchpad.launchAttempts) *
                    100
                  ).toFixed(2)}
                  %
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5" />
                <span>Recent Launches</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                {launchpad.launches.slice(0, 5).map((launch, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    <Link href={`/explore/launches/${launch.name}`}>
                      {launch.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <RocketIcon className="h-5 w-5" />
                <span>Rockets</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                {launchpad.rockets.length > 0 ? (
                  launchpad.rockets.map((rocket, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      <Link href={`/explore/rockets/${rocket.name}`}>
                        {rocket.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-600 dark:text-gray-400">
                    No rockets
                  </li>
                )}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
