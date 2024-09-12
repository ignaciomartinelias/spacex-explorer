import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPinIcon, RocketIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const LaunchpadCard = ({ launchpad }: { launchpad: Launchpad }) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48">
        <Image
          src={launchpad.images.large[0]}
          alt={launchpad.name}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-2 right-2">
          <Badge
            variant={launchpad.status === "active" ? "default" : "secondary"}
          >
            {launchpad.status.charAt(0).toUpperCase() +
              launchpad.status.slice(1)}
          </Badge>
        </div>
      </div>
      <CardContent className="flex-grow p-4">
        <h2 className="text-xl font-semibold mb-2">{launchpad.name}</h2>
        <p
          className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2"
          title={launchpad.fullName}
        >
          {launchpad.fullName}
        </p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <MapPinIcon className="h-4 w-4 mr-1" />
          <span>
            {launchpad.locality}, {launchpad.region}
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <RocketIcon className="h-4 w-4 mr-1" />
          <span>
            {launchpad.launchSuccesses} / {launchpad.launchAttempts} successful
            launches
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-gray-50 dark:bg-gray-800">
        <Button asChild className="w-full">
          <Link href={`/explore/launchpads/${launchpad.name}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
