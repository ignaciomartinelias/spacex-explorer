import {
  Rocket,
  Users,
  Radar,
  Calendar,
  MapPin,
  Ship,
  Building,
  Car,
  Satellite,
  LucideProps,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export const categories: {
  name: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  href: string;
}[] = [
  { name: "Crew", Icon: Users, href: "/explore/crew" },
  {
    name: "Landpads",
    Icon: Radar,
    href: "/explore/landpads",
  },
  {
    name: "Launches",
    Icon: Calendar,
    href: "/explore/launches",
  },
  {
    name: "Launchpads",
    Icon: MapPin,
    href: "/explore/launchpads",
  },
  {
    name: "Rockets",
    Icon: Rocket,
    href: "/explore/rockets",
  },
  {
    name: "Ships",
    Icon: Ship,
    href: "/explore/ships",
  },
  {
    name: "Company",
    Icon: Building,
    href: "/explore/company",
  },
  {
    name: "Roadster",
    Icon: Car,
    href: "/explore/roadster",
  },
  {
    name: "Starlink",
    Icon: Satellite,
    href: "/explore/starlink",
  },
];
