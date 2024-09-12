import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const RocketCard = ({ rocket }: { rocket: Rocket }) => {
  return (
    <Card key={rocket.id} className="overflow-hidden">
      <div className="md:flex">
        <div className="md:w-2/5 md:p-6">
          <div className="md:h-full md:w-full relative aspect-[3/2] md:aspect-auto">
            <Image
              src={rocket.flickrImages[0]}
              alt={rocket.name}
              layout="fill"
              objectFit="cover"
              className="md:rounded-lg"
            />
          </div>
        </div>
        <div className="md:w-3/5 p-6">
          <div className="flex flex-col mb-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold mb-2">{rocket.name}</h2>
              <Badge variant={rocket.active ? "default" : "secondary"}>
                {rocket.active ? "Active" : "Inactive"}
              </Badge>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {rocket.description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                First Flight
              </p>
              <p className="font-semibold">{rocket.firstFlight}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Success Rate
              </p>
              <p className="font-semibold">{rocket.successRatePct}%</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Cost per Launch
              </p>
              <p className="font-semibold">
                ${rocket.costPerLaunch.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Stages</p>
              <p className="font-semibold">{rocket.stages}</p>
            </div>
          </div>
          <div className="flex justify-end">
            <Button asChild className="w-full md:w-auto">
              <Link href={`/explore/rockets/${rocket.name}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
