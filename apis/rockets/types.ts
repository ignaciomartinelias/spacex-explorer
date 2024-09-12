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

type Stage = {
  thrustSeaLevel?: Thrust; // Present in first_stage, not in second_stage
  thrustVacuum: Thrust;
  reusable: boolean;
  engines: number;
  fuelAmountTons: number;
  burnTimeSec: number | null; // Present but sometimes null
  payloads?: {
    compositeFairing: {
      height: Dimensions;
      diameter: Dimensions;
    };
    option1: string;
  } | null; // Sometimes present, sometimes missing
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
  layout: string | null; // Present but sometimes null
  engineLossMax: number | null; // Sometimes present, sometimes null
  propellant1: string;
  propellant2: string;
  thrustToWeight: number;
};

type LandingLegs = {
  number: number;
  material: string | null; // Sometimes present, sometimes null
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
  firstStage: Stage;
  secondStage: Stage;
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

type FetchRocketsResponse = QueryResponse<Rocket>;

type FetchRocketResponse = QueryResponse<Rocket>;
