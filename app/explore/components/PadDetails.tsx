import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPinIcon,
  RocketIcon,
  GlobeIcon,
  CalendarIcon,
  ExternalLinkIcon,
} from "lucide-react";

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
        &larr; Back to {isLandpad ? "Landpads" : "Launchpads"}
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
          <CardContent className="mt-4 flex flex-col">
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

            <div className="flex items-center space-x-2 mt-auto">
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
                <span>{isLandpad ? "Landing" : "Launch"} Statistics</span>
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
              {pad.launches.length > 0 ? (
                <div className="space-y-3">
                  {pad.launches.slice(0, 5).map((launch, index) => (
                    <Link key={index} href={`/explore/launches/${launch.name}`}>
                      <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <RocketIcon className="h-5 w-5 text-gray-500" />
                        <div className="w-full">
                          <p className="font-medium text-sm">{launch.name}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(launch.dateUtc).toLocaleDateString()}
                          </p>
                        </div>
                        <ExternalLinkIcon className="h-4 w-4 ml-auto text-gray-400" />
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  No launches
                </p>
              )}
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
                  <span>Associated Rockets</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {pad.rockets.length > 0 ? (
                  <div className="space-y-3">
                    {pad.rockets.map((rocket, index) => (
                      <Link
                        key={index}
                        href={`/explore/rockets/${rocket.name}`}
                      >
                        <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          <RocketIcon className="h-5 w-5 text-gray-500" />
                          <p className="font-medium text-sm w-full">
                            {rocket.name}
                          </p>
                          <ExternalLinkIcon className="h-4 w-4 ml-auto text-gray-400" />
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    No rockets associated
                  </p>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
