type Landpad = {
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
  launches: string[];
  id: string;
};

type FetchLandpadsResponse = Landpad[];
