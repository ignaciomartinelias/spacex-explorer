import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Users,
  Rocket,
  Globe,
  DollarSign,
  Building2,
} from "lucide-react";
import { fetchCompanyInfo } from "@/apis/company/api";
import { Separator } from "@/components/ui/separator";

export default async function CompanyPage() {
  const companyInfo = await fetchCompanyInfo();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        {companyInfo.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Company Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {companyInfo.summary}
            </p>
            <Separator className="md:hidden my-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Building2 className="h-5 w-5 mr-2 text-gray-500" />
                <span>Founded: {companyInfo.founded}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-gray-500" />
                <span>Employees: {companyInfo.employees.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <Rocket className="h-5 w-5 mr-2 text-gray-500" />
                <span>Vehicles: {companyInfo.vehicles}</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-gray-500" />
                <span>Launch Sites: {companyInfo.launchSites}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Headquarters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start mb-4">
              <MapPin className="h-5 w-5 mr-2 mt-1 text-gray-500" />
              <div>
                <p>{companyInfo.headquarters.address}</p>
                <p>
                  {companyInfo.headquarters.city},{" "}
                  {companyInfo.headquarters.state}
                </p>
              </div>
            </div>
            <div className="aspect-video relative">
              <Image
                src="/spacex-headquarters.jpg"
                alt="SpaceX Headquarters Map"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Leadership</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">CEO & CTO:</span>{" "}
                {companyInfo.ceo}
              </li>
              <li>
                <span className="font-semibold">COO:</span> {companyInfo.coo}
              </li>
              <li>
                <span className="font-semibold">CTO Propulsion:</span>{" "}
                {companyInfo.ctoPropulsion}
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Company Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span>Test Sites:</span>
              <Badge>{companyInfo.testSites}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Valuation:</span>
              <Badge variant="secondary">
                <DollarSign className="h-4 w-4 mr-1" />
                {(companyInfo.valuation / 1e9).toFixed(1)}B
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Social Media</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button asChild variant="outline" className="w-full">
              <a
                href={companyInfo.links.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Website
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <a
                href={companyInfo.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                SpaceX Twitter
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <a
                href={companyInfo.links.flickr}
                target="_blank"
                rel="noopener noreferrer"
              >
                SpaceX Flickr
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <a
                href={companyInfo.links.elonTwitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                Elon Musk Twitter
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-center text-xl md:text-base md:text-left">
            About the Founder
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center md:items-start space-x-4">
          <Image
            src="/elon.webp"
            alt={companyInfo.founder}
            width={100}
            height={100}
            className="hidden md:block rounded-full"
          />
          <Image
            src="/elon.webp"
            alt={companyInfo.founder}
            width={200}
            height={200}
            className="md:hidden rounded-full"
          />
          <Separator className="md:hidden my-4" />
          <div>
            <h3 className="text-xl font-semibold mb-2">
              {companyInfo.founder}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {companyInfo.founder} founded SpaceX in {companyInfo.founded} with
              the goal of revolutionizing space technology and enabling human
              life on other planets. Under his leadership, SpaceX has become a
              pioneer in reusable rocket technology and space exploration.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
