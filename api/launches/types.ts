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

type Launch = {
  fairings: Fairings | null;
  links: Links;
  staticFireDateUtc: string | null;
  staticFireDateUnix: number | null;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: Failure[];
  details: string | null;
  crew: string[];
  ships: string[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
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

type Pagination = {
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
};

type QueryLaunchesResponse = {
  docs: Launch[];
} & Pagination;
