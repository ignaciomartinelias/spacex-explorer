type Landpad<T extends "simple" | "populated" = "simple"> = {
  images: {
    large: string[];
  };
  name: string;
  fullName: string;
  status: string;
  type: string;
  locality: string;
  region: string;
  latitude: number;
  longitude: number;
  landingAttempts: number;
  landingSuccesses: number;
  wikipedia: string;
  details: string;
  launches: Pick<Launch, T extends "populated" ? "name" : "id">[];
  id: string;
};

type FetchLandpadResponse = QueryResponse<Landpad<"populated">>;

type FetchLandpadsResponse = QueryResponse<Landpad>;
