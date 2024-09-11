"use client";

import { useCrewQuery } from "@/api/crew/queries";
import { CrewMemberCard } from "./components/CrewMemberCard";

export default function CrewPage() {
  const { data } = useCrewQuery();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        SpaceX Crew Members
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data?.map((crewMember) => (
          <CrewMemberCard key={crewMember.id} crewMember={crewMember} />
        ))}
      </div>
    </div>
  );
}
