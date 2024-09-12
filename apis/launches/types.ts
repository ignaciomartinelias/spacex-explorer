type Dragon = {
  waterLanding: boolean | null;
  landLanding: boolean | null;
};

type Payload = {
  dragon: Dragon | null;
  name: string;
  type: string;
  customers: string[];
  nationalities: string[];
  manufacturers: string[];
  massKg: number | null;
  massLbs: number | null;
  orbit: string | null;
  regime: string | null;
  lifespanYears: number | null;
};

type Fairings = {
  reused: boolean | null;
  recoveryAttempt: boolean | null;
  recovered: boolean | null;
  ships: string[];
};

type Patch = {
  small: string | null;
  large: string | null;
};

type Reddit = {
  campaign: string | null;
  launch: string | null;
  media: string | null;
  recovery: string | null;
};

type Flickr = {
  small: string[];
  original: string[];
};

type Links = {
  patch: Patch;
  reddit: Reddit;
  flickr: Flickr;
  presskit: string | null;
  webcast: string | null;
  youtubeId: string | null;
  article: string | null;
  wikipedia: string | null;
};

type Failure = {
  time: number;
  altitude: number | null;
  reason: string;
};

type Core = {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landingAttempt: boolean;
  landingSuccess: boolean | null;
  landingType: string | null;
  landpad: string | null;
};

type Launch<T extends "simple" | "populated" = "simple"> = {
  fairings: Fairings | null;
  links: Links;
  staticFireDateUtc: string | null;
  staticFireDateUnix: number | null;
  net: boolean;
  window: number;
  rocket: Pick<
    Rocket,
    T extends "simple" ? "name" : "name" | "type" | "company" | "successRatePct"
  >;
  success: boolean;
  failures: Failure[];
  details: string | null;
  crew: string[];
  ships: string[];
  capsules: string[];
  payloads: T extends "simple" ? string[] : Payload[];
  launchpad: Pick<
    Launchpad,
    T extends "simple"
      ? "name"
      : "name" | "locality" | "region" | "launchAttempts" | "launchSuccesses"
  >;
  flightNumber: number;
  name: string;
  dateUtc: string;
  dateUnix: number;
  dateLocal: string;
  datePrecision: string;
  upcoming: boolean;
  cores: Core[];
  autoUpdate: boolean;
  tbd: boolean;
  launchLibraryId: string | null;
  id: string;
};

type FetchLaunchResponse = QueryResponse<Launch<"populated">>;
type FetchLaunchesResponse = QueryResponse<Launch>;
