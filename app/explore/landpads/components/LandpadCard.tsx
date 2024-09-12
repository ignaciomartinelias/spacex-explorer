import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPinIcon, RocketIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const LandpadCard = ({ landpad }: { landpad: Landpad }) => {
  return (
    <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={landpad.images.large[0]}
          alt={landpad.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex space-x-2">
          <Badge
            variant={landpad.status === "active" ? "default" : "secondary"}
          >
            {landpad.status.charAt(0).toUpperCase() + landpad.status.slice(1)}
          </Badge>
          <Badge variant="outline">{landpad.type}</Badge>
        </div>
      </div>
      <CardContent className="flex-grow p-4">
        <h2 className="text-xl font-semibold mb-2">{landpad.name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {landpad.fullName}
        </p>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
          <MapPinIcon className="h-4 w-4 mr-1" />
          <span>
            {landpad.locality}, {landpad.region}
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
          <RocketIcon className="h-4 w-4 mr-1" />
          <span>
            Landings: {landpad.landingSuccesses}/{landpad.landingAttempts}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-gray-50 dark:bg-gray-800">
        <Button asChild className="w-full">
          <Link href={`/explore/landpads/${landpad.name}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
