import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPinIcon, RocketIcon, GlobeIcon, CalendarIcon } from "lucide-react";

export const PadDetails = ({
  pad,
}: {
  pad: Launchpad<"populated"> | Landpad<"populated">;
}) => {
  const isLandpad = "landingAttempts" in pad;

  const attempts = isLandpad ? pad.landingAttempts : pad.launchAttempts;
  const successes = isLandpad ? pad.landingSuccesses : pad.launchSuccesses;
  const rate = attempts > 0 ? ((successes / attempts) * 100).toFixed(2) : 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href={`/explore/${isLandpad ? "landpads" : "launchpads"}`}
        className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
      >
        &larr; Back to Landpads
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <div className="relative h-64 lg:h-96">
            <Image
              src={pad.images.large[0]}
              alt={pad.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h1 className="text-3xl font-bold text-white">{pad.name}</h1>
              <p className="text-xl text-gray-300">{pad.fullName}</p>
            </div>
          </div>
          <CardContent className="mt-4">
            <div className="flex items-center space-x-2 mb-4">
              <Badge
                variant={pad.status === "active" ? "default" : "secondary"}
              >
                {pad.status.charAt(0).toUpperCase() + pad.status.slice(1)}
              </Badge>
              {isLandpad && <Badge variant="outline">{pad.type}</Badge>}
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {pad.details}
            </p>

            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-5 w-5 text-gray-500" />
              <span>
                {pad.locality}, {pad.region}
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
                <p>Attempts: {attempts || 0}</p>
                <p>Successes: {successes || 0}</p>
                <p>Success Rate: {attempts > 0 ? rate : 0}%</p>
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
                {pad.launches.length > 0 ? (
                  pad.launches.slice(0, 5).map((launch, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      <Link href={`/explore/launches/${launch.name}`}>
                        {launch.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-600 dark:text-gray-400">
                    No launches
                  </li>
                )}
              </ul>
            </CardContent>
          </Card>
          {isLandpad ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GlobeIcon className="h-5 w-5" />
                  <span>More Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={pad.wikipedia}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wikipedia Page
                  </a>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <RocketIcon className="h-5 w-5" />
                  <span>Rockets</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {pad.rockets.length > 0 ? (
                    pad.rockets.map((rocket, index) => (
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
          )}
        </div>
      </div>
    </div>
  );
};
