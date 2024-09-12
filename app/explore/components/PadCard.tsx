import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPinIcon, RocketIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const PadCard = ({ pad }: { pad: Landpad | Launchpad }) => {
  return (
    <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={pad.images.large[0]}
          alt={pad.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex space-x-2">
          <Badge variant={pad.status === "active" ? "default" : "secondary"}>
            {pad.status.charAt(0).toUpperCase() + pad.status.slice(1)}
          </Badge>
          {"type" in pad && <Badge variant="outline">{pad.type}</Badge>}
        </div>
      </div>
      <CardContent className="flex-grow p-4">
        <h2 className="text-xl font-semibold mb-2">{pad.name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {pad.fullName}
        </p>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
          <MapPinIcon className="h-4 w-4 mr-1" />
          <span>
            {pad.locality}, {pad.region}
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
          <RocketIcon className="h-4 w-4 mr-1" />
          {"launchSuccesses" in pad ? (
            <span>
              {pad.launchSuccesses}/{pad.launchAttempts} successful launches
            </span>
          ) : (
            <span>
              Landings: {pad.landingSuccesses}/{pad.landingAttempts}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Button asChild className="w-full" variant="outline">
          <Link
            href={`/explore/${"type" in pad ? "landpads" : "launchpads"}/${
              pad.name
            }`}
          >
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
