import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const CrewMemberCard = ({ crewMember }: { crewMember: CrewMember }) => {
  return (
    <Card
      key={crewMember.id}
      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-[2/3] relative">
        <Image
          src={crewMember.image}
          alt={crewMember.name}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h2 className="text-xl font-semibold mb-1">{crewMember.name}</h2>
        <p className="text-sm mb-2">{crewMember.agency}</p>
        <div className="flex justify-between items-center">
          <Badge
            variant={crewMember.status === "active" ? "default" : "secondary"}
            className="mb-2"
          >
            {crewMember.status.charAt(0).toUpperCase() +
              crewMember.status.slice(1)}
          </Badge>
          <span className="text-sm">
            Launches: {crewMember.launches.length}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
