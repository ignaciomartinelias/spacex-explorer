"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Rocket } from "lucide-react";
import { format } from "date-fns";
import { useRocketsQuery } from "@/api/rockets/queries";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

type Props = { launch: Launch; isLast?: boolean; fetchNextPage?: VoidFunction };

export const LaunchCard = ({ launch, isLast, fetchNextPage }: Props) => {
  const { data } = useRocketsQuery();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isLast && isInView) {
      fetchNextPage?.();
    }
  }, [isLast, isInView, fetchNextPage]);

  return (
    <Card key={launch.id} className="flex flex-col" ref={ref}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">{launch.name}</CardTitle>
          <Badge variant={launch.success ? "default" : "destructive"}>
            {launch.success ? "Success" : "Failed"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="aspect-video relative mb-4">
          <Image
            src={launch.links.patch.small}
            alt={`${launch.name} mission patch`}
            className="w-full h-full object-contain"
            width={256}
            height={256}
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">
              {format(new Date(launch.dateUtc), "MMMM d, yyyy")}
            </span>
          </div>
          <div className="flex items-center">
            <Rocket className="h-4 w-4 mr-2" />
            <span className="text-sm">
              {data?.find((rocket) => rocket.id === launch.rocket)?.name}
            </span>
          </div>
          {launch.details && (
            <p className="text-sm text-muted-foreground line-clamp-3">
              {launch.details}
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a
            href={launch.links.webcast}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a
            href={launch.links.article}
            target="_blank"
            rel="noopener noreferrer"
          >
            Article
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a
            href={launch.links.wikipedia}
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
