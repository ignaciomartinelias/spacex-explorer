import {
  Rocket,
  Box,
  Users,
  Flame,
  Radar,
  Calendar,
  MapPin,
  Package,
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
  {
    name: "Capsules",
    Icon: Box,
    href: "/explore/capsules",
  },
  {
    name: "Cores",
    Icon: Rocket,
    href: "/explore/cores",
  },
  { name: "Crew", Icon: Users, href: "/explore/crew" },
  {
    name: "Dragons",
    Icon: Flame,
    href: "/explore/dragons",
  },
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
    name: "Payloads",
    Icon: Package,
    href: "/explore/payloads",
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
