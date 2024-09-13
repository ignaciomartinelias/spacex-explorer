import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  RocketIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "lucide-react";
import { fetchLaunch } from "@/apis/launches/api";
import { ImageCarousel } from "../../components/ImageCarousel";
import { notFound } from "next/navigation";

export default async function LaunchDetailsPage({
  params,
}: {
  params: { name: string };
}) {
  const launch = await fetchLaunch({ name: decodeURIComponent(params.name) });

  if (!launch) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/explore/launches"
        className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
      >
        &larr; Back to Launches
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col mb-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold mb-2">{launch.name}</h1>
                  <Badge
                    variant={
                      launch.upcoming
                        ? "secondary"
                        : launch.success
                        ? "default"
                        : "destructive"
                    }
                  >
                    {launch.upcoming
                      ? "Upcoming"
                      : launch.success
                      ? "Successful"
                      : "Failed"}
                  </Badge>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Flight Number: {launch.flightNumber}
                </p>
              </div>
              {launch.links.patch.large && (
                <div className="mb-6">
                  <Image
                    src={launch.links.patch.large}
                    alt={`${launch.name} mission patch`}
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
              )}
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {launch.details}
              </p>
              <Separator className="my-4 md:hidden" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-5 w-5 text-gray-500" />
                  <span>{format(new Date(launch.dateUtc), "PPP")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-5 w-5 text-gray-500" />
                  <span>{format(new Date(launch.dateUtc), "p")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPinIcon className="h-5 w-5 text-gray-500" />
                  <Link
                    href={`/explore/launchpads/${launch.launchpad.name}`}
                    className="hover:underline"
                  >
                    {launch.launchpad.name}
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <RocketIcon className="h-5 w-5 text-gray-500" />
                  <Link
                    href={`/explore/rockets/${launch.rocket.name}`}
                    className="hover:underline"
                  >
                    {launch.rocket.name}
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Launch Media</CardTitle>
            </CardHeader>
            <CardContent>
              {launch.links.flickr.original.length > 0 ? (
                <ImageCarousel
                  images={launch.links.flickr.original}
                  name={launch.name}
                />
              ) : (
                <p className="text-gray-500">
                  No images available for this launch.
                </p>
              )}
              {launch.links.youtubeId && (
                <div className="mt-4">
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${launch.links.youtubeId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </CardContent>
          </Card>

          <Tabs defaultValue="cores">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="cores">Cores</TabsTrigger>
              <TabsTrigger value="payloads">Payloads</TabsTrigger>
            </TabsList>
            <TabsContent value="cores">
              <Card>
                <CardHeader>
                  <CardTitle>Core Details</CardTitle>
                </CardHeader>
                <CardContent>
                  {launch.cores.map((core, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <h3 className="font-semibold mb-2">Core {index + 1}</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>Flight Number: {core.flight}</div>
                        <div>Reused: {core.reused ? "Yes" : "No"}</div>
                        <div>
                          Landing Attempt: {core.landingAttempt ? "Yes" : "No"}
                        </div>
                        <div>
                          Landing Success: {core.landingSuccess ? "Yes" : "No"}
                        </div>
                        <div>Landing Type: {core.landingType || "N/A"}</div>
                        <div>
                          Landpad:{" "}
                          {core.landpad ? (
                            <Link
                              href={`/explore/landpads/${core.landpad}`}
                              className="hover:underline"
                            >
                              View Landpad
                            </Link>
                          ) : (
                            "N/A"
                          )}
                        </div>
                      </div>
                      {index < launch.cores.length - 1 && (
                        <Separator className="my-4" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="payloads">
              <Card>
                <CardHeader>
                  <CardTitle>Payload Information</CardTitle>
                </CardHeader>
                <CardContent>
                  {launch.payloads.length > 0 ? (
                    <div className="space-y-6">
                      {launch.payloads.map((payload, index) => (
                        <div key={index} className="space-y-2">
                          <h3 className="font-semibold text-lg">
                            {payload.name}
                          </h3>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>Type: {payload.type}</div>
                            <div>Orbit: {payload.orbit}</div>
                            <div>
                              Mass: {payload.massKg}kg / {payload.massLbs}lbs
                            </div>
                            <div>Regime: {payload.regime}</div>
                            <div>Customers: {payload.customers.join(", ")}</div>
                            <div>
                              Nationalities: {payload.nationalities.join(", ")}
                            </div>
                            <div>
                              Manufacturers: {payload.manufacturers.join(", ")}
                            </div>
                            <div>Lifespan: {payload.lifespanYears} years</div>
                          </div>
                          {payload.dragon && (
                            <div className="mt-2">
                              <h4 className="font-semibold">
                                Dragon Capsule Details
                              </h4>
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  Water Landing:{" "}
                                  {payload.dragon.waterLanding ? "Yes" : "No"}
                                </div>
                                <div>
                                  Land Landing:{" "}
                                  {payload.dragon.landLanding ? "Yes" : "No"}
                                </div>
                              </div>
                            </div>
                          )}
                          {index < launch.payloads.length - 1 && (
                            <Separator className="my-4" />
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">
                      No payload information available.
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Launch Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  {launch.upcoming ? (
                    <ClockIcon className="h-5 w-5 text-blue-500" />
                  ) : launch.success ? (
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircleIcon className="h-5 w-5 text-red-500" />
                  )}
                  <span>
                    {launch.upcoming
                      ? "Upcoming"
                      : launch.success
                      ? "Successful"
                      : "Failed"}
                  </span>
                </div>
                {launch.failures.length > 0 && (
                  <div>
                    <p className="font-semibold mb-2">Failure Reasons</p>
                    <ul className="list-disc list-inside">
                      {launch.failures.map((failure, index) => (
                        <li
                          key={index}
                          className="text-sm text-red-500 list-none first-letter:capitalize"
                        >
                          {failure.reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rocket Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Name:</span>{" "}
                  {launch.rocket.name}
                </p>
                <p>
                  <span className="font-semibold">Type:</span>{" "}
                  {launch.rocket.type}
                </p>
                <p>
                  <span className="font-semibold">Company:</span>{" "}
                  {launch.rocket.company}
                </p>
                <p>
                  <span className="font-semibold">Success Rate:</span>{" "}
                  {launch.rocket.successRatePct}%
                </p>
                <Button asChild variant="outline" className="w-full mt-2">
                  <Link href={`/explore/rockets/${launch.rocket.name}`}>
                    View Rocket Details
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Launchpad Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Name:</span>{" "}
                  {launch.launchpad.name}
                </p>
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  {launch.launchpad.locality}, {launch.launchpad.region}
                </p>
                <p>
                  <span className="font-semibold">Launch Attempts:</span>{" "}
                  {launch.launchpad.launchAttempts}
                </p>
                <p>
                  <span className="font-semibold">Launch Successes:</span>{" "}
                  {launch.launchpad.launchSuccesses}
                </p>
                <Button asChild variant="outline" className="w-full mt-2">
                  <Link href={`/explore/launchpads/${launch.launchpad.name}`}>
                    View Launchpad Details
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>External Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {launch.links.presskit && (
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={launch.links.presskit}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Press Kit
                    </a>
                  </Button>
                )}
                {launch.links.webcast && (
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={launch.links.webcast}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Webcast
                    </a>
                  </Button>
                )}
                {launch.links.article && (
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={launch.links.article}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Article
                    </a>
                  </Button>
                )}
                {launch.links.wikipedia && (
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={launch.links.wikipedia}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wikipedia
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
