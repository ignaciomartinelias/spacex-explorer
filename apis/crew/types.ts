type CrewMember = {
  name: string;
  agency: string;
  image: string;
  wikipedia: string;
  launches: string[];
  status: string;
  id: string;
};

type FetchCrewMembersResponse = QueryResponse<CrewMember>;
