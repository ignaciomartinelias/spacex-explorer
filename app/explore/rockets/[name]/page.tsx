import Link from "next/link";
import { notFound } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchRocket } from "@/apis/rockets/api";
import { ImageCarousel } from "../../components/ImageCarousel";

export default async function RocketDetailsPage({
  params,
}: {
  params: { name: string };
}) {
  const rocket = await fetchRocket({ name: decodeURIComponent(params.name) });

  if (!rocket) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/explore/rockets"
        className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
      >
        &larr; Back to Rockets
      </Link>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <Card className="mb-8">
            <CardContent className="p-6">
              <ImageCarousel images={rocket.flickrImages} name={rocket.name} />
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{rocket.name}</h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    {rocket.company}
                  </p>
                </div>
                <Badge variant={rocket.active ? "default" : "secondary"}>
                  {rocket.active ? "Active" : "Inactive"}
                </Badge>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {rocket.description}
              </p>
            </CardContent>
          </Card>

          <Tabs defaultValue="specs" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="stages">Stages</TabsTrigger>
              <TabsTrigger value="payloads">Payloads</TabsTrigger>
            </TabsList>
            <TabsContent value="specs">
              <Card>
                <CardHeader>
                  <CardTitle>Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Height
                      </p>
                      <p className="font-semibold">
                        {rocket.height.meters}m / {rocket.height.feet}ft
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Diameter
                      </p>
                      <p className="font-semibold">
                        {rocket.diameter.meters}m / {rocket.diameter.feet}ft
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Mass
                      </p>
                      <p className="font-semibold">
                        {rocket.mass.kg.toLocaleString()}kg /{" "}
                        {rocket.mass.lb.toLocaleString()}lb
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Engines
                      </p>
                      <p className="font-semibold">
                        {rocket.engines.number} x {rocket.engines.type}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="stages">
              <Card>
                <CardHeader>
                  <CardTitle>Stages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">First Stage</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Engines
                          </p>
                          <p className="font-semibold">
                            {rocket.firstStage.engines}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Fuel Amount
                          </p>
                          <p className="font-semibold">
                            {rocket.firstStage.fuelAmountTons} tons
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Burn Time
                          </p>
                          <p className="font-semibold">
                            {rocket.firstStage.burnTimeSec} sec
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Reusable
                          </p>
                          <p className="font-semibold">
                            {rocket.firstStage.reusable ? "Yes" : "No"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Second Stage</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Engines
                          </p>
                          <p className="font-semibold">
                            {rocket.secondStage.engines}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Fuel Amount
                          </p>
                          <p className="font-semibold">
                            {rocket.secondStage.fuelAmountTons} tons
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Burn Time
                          </p>
                          <p className="font-semibold">
                            {rocket.secondStage.burnTimeSec} sec
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Reusable
                          </p>
                          <p className="font-semibold">
                            {rocket.secondStage.reusable ? "Yes" : "No"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="payloads">
              <Card>
                <CardHeader>
                  <CardTitle>Payload Weights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {rocket.payloadWeights.map((payload) => (
                      <div key={payload.id}>
                        <h3 className="font-semibold mb-2">{payload.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {payload.kg.toLocaleString()}kg /{" "}
                          {payload.lb.toLocaleString()}lb
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:w-1/3">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Quick Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    First Flight
                  </p>
                  <p className="font-semibold">{rocket.firstFlight}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Country
                  </p>
                  <p className="font-semibold">{rocket.country}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Success Rate
                  </p>
                  <p className="font-semibold">{rocket.successRatePct}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Cost per Launch
                  </p>
                  <p className="font-semibold">
                    ${rocket.costPerLaunch.toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Engine Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Type
                  </p>
                  <p className="font-semibold capitalize">
                    {rocket.engines.type}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Version
                  </p>
                  <p className="font-semibold capitalize">
                    {rocket.engines.version || "N/A"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Layout
                  </p>
                  <p className="font-semibold capitalize">
                    {rocket.engines.layout || "N/A"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button asChild variant="outline">
              <a
                href={rocket.wikipedia}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Wikipedia
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
