type Launchpad<T extends "simple" | "populated" = "simple"> = {
  images: {
    large: string[];
  };
  name: string;
  fullName: string;
  locality: string;
  region: string;
  latitude: number;
  longitude: number;
  launchAttempts: number;
  launchSuccesses: number;
  rockets: Pick<Rocket, T extends "populated" ? "name" : "id">[];
  timezone: string;
  launches: Pick<Launch, T extends "populated" ? "name" : "id">[];
  status: string;
  details: string;
  id: string;
};

type FetchLaunchpadResponse = QueryResponse<Launchpad<"populated">>;

type FetchLaunchpadsResponse = QueryResponse<Launchpad>;
