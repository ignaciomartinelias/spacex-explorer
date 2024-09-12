type Launchpad = {
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
  rockets: string[];
  timezone: string;
  launches: string[];
  status: string;
  details: string;
  id: string;
};

type FetchLaunchpadsResponse = Launchpad[];
