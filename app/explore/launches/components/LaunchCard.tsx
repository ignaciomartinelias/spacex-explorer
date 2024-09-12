import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, MapPin, Rocket } from "lucide-react";
import { format } from "date-fns";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const LaunchCard = ({ launch }: { launch: Launch }) => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold line-clamp-1">
            {launch.name}
          </CardTitle>
          <Badge
            variant={
              launch.success
                ? "default"
                : launch.upcoming
                ? "secondary"
                : "destructive"
            }
          >
            {launch.success
              ? "Success"
              : launch.upcoming
              ? "Upcoming"
              : "Failed"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="aspect-video relative mb-4">
          <Image
            src={launch.links.patch.small || "/SpaceX.png"}
            alt={`${launch.name} mission patch`}
            className="w-full h-full object-contain"
            width={256}
            height={256}
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <Rocket className="h-4 w-4 mr-2" />
            <span className="text-sm">{launch.rocket.name}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{launch.launchpad.name}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">
              {format(new Date(launch.dateUtc), "MMMM d, yyyy")}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/explore/launches/${launch.name}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
