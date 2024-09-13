type Ship<T extends "single" | "populated" = "single"> = {
  lastAisUpdate: string | null;
  legacyId: string | null;
  model: string | null;
  type: string;
  roles: string[];
  imo: number | null;
  mmsi: number | null;
  abs: number | null;
  class: number | null;
  massKg: number | null;
  massLbs: number | null;
  yearBuilt: number | null;
  homePort: string;
  status: string | null;
  speedKn: number | null;
  courseDeg: number | null;
  latitude: number | null;
  longitude: number | null;
  link: string | null;
  image: string | null;
  name: string;
  active: boolean;
  launches: T extends "single"
    ? string[]
    : Pick<Launch, "name" | "dateUtc" | "success">[];
  id: string;
};

type FetchShipsResponse = QueryResponse<Ship>;

type FetchShipResponse = QueryResponse<Ship<"populated">>;
