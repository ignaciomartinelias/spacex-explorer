type Headquarters = {
  address: string;
  city: string;
  state: string;
};

type CompanyLinks = {
  website: string;
  flickr: string;
  twitter: string;
  elonTwitter: string;
};

type Company = {
  headquarters: Headquarters;
  links: CompanyLinks;
  name: string;
  founder: string;
  founded: number;
  employees: number;
  vehicles: number;
  launchSites: number;
  testSites: number;
  ceo: string;
  cto: string;
  coo: string;
  ctoPropulsion: string;
  valuation: number;
  summary: string;
  id: string;
};

type FetchCompanyResponse = Company;
