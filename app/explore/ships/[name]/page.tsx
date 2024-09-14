import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Anchor,
  MapPin,
  Calendar,
  Compass,
  CalendarIcon,
  RocketIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { fetchShip } from "@/apis/ships/api";
import { Separator } from "@/components/ui/separator";

export default async function ShipDetailsPage({
  params,
}: {
  params: { name: string };
}) {
  const ship = await fetchShip({ name: decodeURIComponent(params.name) });

  if (!ship) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/explore/ships"
        className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
      >
        &larr; Back to Ships
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col mb-4">
                <div className="flex md:items-center justify-between flex-col md:flex-row">
                  <h1 className="text-2xl font-bold mb-2">{ship.name}</h1>
                  <Badge
                    variant={ship.active ? "default" : "secondary"}
                    className="w-fit"
                  >
                    {ship.active ? "Active" : "Inactive"}
                  </Badge>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 hidden md:block">
                  {ship.type}
                </p>
              </div>
              <div className="aspect-video relative mb-6">
                <Image
                  src={ship.image || "/spacex-logo.png"}
                  alt={ship.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <Separator className="my-4 md:hidden" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <span>{ship.homePort}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <span>Built in {ship.yearBuilt || "N/A"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Compass className="h-5 w-5 text-gray-500" />
                  <span>
                    Last AIS Update:{" "}
                    {ship.lastAisUpdate
                      ? format(new Date(ship.lastAisUpdate), "PPP")
                      : "N/A"}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Anchor className="h-5 w-5 text-gray-500" />
                  <span>{ship.roles.join(", ")}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="specs">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="status">Current Status</TabsTrigger>
            </TabsList>
            <TabsContent value="specs">
              <Card>
                <CardHeader>
                  <CardTitle>Ship Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Model
                      </p>
                      <p className="font-semibold">{ship.model || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        IMO
                      </p>
                      <p className="font-semibold">{ship.imo || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        MMSI
                      </p>
                      <p className="font-semibold">{ship.mmsi || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ABS
                      </p>
                      <p className="font-semibold">{ship.abs || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Class
                      </p>
                      <p className="font-semibold">{ship.class || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Mass
                      </p>
                      <p className="font-semibold">
                        {ship.massKg
                          ? `${ship.massKg.toLocaleString()} kg / ${ship.massLbs?.toLocaleString()} lbs`
                          : "N/A"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="status">
              <Card>
                <CardHeader>
                  <CardTitle>Current Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Status
                      </p>
                      <p className="font-semibold">{ship.status || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Speed
                      </p>
                      <p className="font-semibold">
                        {ship.speedKn ? `${ship.speedKn} knots` : "N/A"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Course
                      </p>
                      <p className="font-semibold">
                        {ship.courseDeg ? `${ship.courseDeg}°` : "N/A"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Latitude
                      </p>
                      <p className="font-semibold">{ship.latitude || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Longitude
                      </p>
                      <p className="font-semibold">{ship.longitude || "N/A"}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5" />
                <span>Associated Launches</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {ship.launches.length > 0 ? (
                <div className="space-y-3">
                  {ship.launches
                    .slice(ship.launches.length - 5)
                    .reverse()
                    .map((launch, index) => (
                      <Link
                        key={index}
                        href={`/explore/launches/${launch.name}`}
                      >
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

          {ship.link && (
            <Card>
              <CardHeader>
                <CardTitle>External Link</CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a href={ship.link} target="_blank" rel="noopener noreferrer">
                    View on Marine Traffic
                  </a>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
