import { TiltCard } from "@/app/components/TiltCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const RocketCard = ({ rocket }: { rocket: Rocket }) => {
  return (
    <Card className="overflow-hidden p-8 md:flex">
      <div className="md:w-2/5 w-full">
        <TiltCard className="w-full p-2 sm:p-10 lg:w-1/2 xl:w-auto lg:p-4">
          <Image
            src={rocket.flickrImages[0]}
            alt={rocket.name}
            width={400}
            height={300}
            className="rounded-lg"
          />
        </TiltCard>
      </div>
      <div className="md:w-3/5 p-6 flex flex-col justify-between">
        <div>
          <CardHeader className="p-0 mb-4 flex flex-row items-center justify-between">
            <CardTitle className="text-2xl">{rocket.name}</CardTitle>
            <Badge
              variant={rocket.active ? "default" : "secondary"}
              className="mr-2"
            >
              {rocket.active ? "Active" : "Inactive"}
            </Badge>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-gray-600 dark:text-gray-300">
              {rocket.description}
            </p>
          </CardContent>
        </div>
        <CardFooter className="p-0 mt-4 flex justify-end items-end">
          <Button asChild>
            <Link href={`/rockets/${rocket.id}`}>View Details</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};
