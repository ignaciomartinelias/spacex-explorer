"use client";

import { Badge } from "@/components/ui/badge";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Rocket } from "lucide-react";
import { format } from "date-fns";
import { useRocketsQuery } from "@/apis/rockets/queries";

import Image from "next/image";
import { useLaunchpadsQuery } from "@/apis/launchpads/queries";

type Props = { launch: Launch };

export const LaunchCard = ({ launch }: Props) => {
  const { data: rockets } = useRocketsQuery();
  const { data: launchpads } = useLaunchpadsQuery();

  const rocket = rockets?.find((rocket) => rocket.id === launch.rocket);
  const launchpad = launchpads?.find((lp) => lp.id === launch.launchpad);

  return (
    <Card key={launch.id} className="flex flex-col">
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
            <span className="text-sm">{rocket?.name}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{launchpad?.name}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">
              {format(new Date(launch.dateUtc), "MMMM d, yyyy")}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
