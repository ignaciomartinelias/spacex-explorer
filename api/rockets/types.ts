type Dimensions = {
  meters: number | null;
  feet: number | null;
};

type Mass = {
  kg: number;
  lb: number;
};

type Thrust = {
  kN: number;
  lbf: number;
};

type FirstStage = {
  thrustSeaLevel: Thrust;
  thrustVacuum: Thrust;
  reusable: boolean;
  engines: number;
  fuelAmountTons: number;
  burnTimeSec: number | null;
};

type Payloads = {
  compositeFairing: {
    height: Dimensions;
    diameter: Dimensions;
  };
  option1: string;
};

type SecondStage = {
  thrust: Thrust;
  payloads: Payloads;
  reusable: boolean;
  engines: number;
  fuelAmountTons: number;
  burnTimeSec: number | null;
};

type ISP = {
  seaLevel: number;
  vacuum: number;
};

type Engines = {
  isp: ISP;
  thrustSeaLevel: Thrust;
  thrustVacuum: Thrust;
  number: number;
  type: string;
  version: string;
  layout: string | null;
  engineLossMax: number | null;
  propellant1: string;
  propellant2: string;
  thrustToWeight: number;
};

type LandingLegs = {
  number: number;
  material: string | null;
};

type PayloadWeight = {
  id: string;
  name: string;
  kg: number;
  lb: number;
};

type Rocket = {
  height: Dimensions;
  diameter: Dimensions;
  mass: Mass;
  firstStage: FirstStage;
  secondStage: SecondStage;
  engines: Engines;
  landingLegs: LandingLegs;
  payloadWeights: PayloadWeight[];
  flickrImages: string[];
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  costPerLaunch: number;
  successRatePct: number;
  firstFlight: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  id: string;
};

type FetchRocketsResponse = Rocket[];
