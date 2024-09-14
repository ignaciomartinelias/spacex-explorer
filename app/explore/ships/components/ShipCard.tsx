import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Anchor, Ship as ShipIcon, MapPin, Calendar } from "lucide-react";

export const ShipCard = ({ ship }: { ship: Ship }) => {
  return (
    <Card key={ship.id} className="flex flex-col">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span className="text-lg font-bold truncate">{ship.name}</span>
          <Badge variant={ship.active ? "default" : "secondary"}>
            {ship.active ? "Active" : "Inactive"}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="aspect-video relative mb-4">
          <Image
            src={ship.image || "/spacex-logo.png"}
            alt={ship.name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <ShipIcon className="h-4 w-4 mr-2" />
            <span className="text-sm">{ship.type}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{ship.homePort}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">Built in {ship.yearBuilt || "N/A"}</span>
          </div>
          <div className="flex items-center">
            <Anchor className="h-4 w-4 mr-2" />
            <span className="text-sm">{ship.roles.join(", ")}</span>
          </div>
        </div>
      </CardContent>
      <div className="p-4 mt-auto">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/explore/ships/${ship.name}`}>View Details</Link>
        </Button>
      </div>
    </Card>
  );
};
