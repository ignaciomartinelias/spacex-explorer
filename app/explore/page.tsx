import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const featuredLaunches = [
  { name: "Starlink 4-15", date: "2023-05-14", rocket: "Falcon 9" },
  { name: "CRS-27", date: "2023-06-05", rocket: "Falcon 9" },
  { name: "Transporter-8", date: "2023-06-12", rocket: "Falcon 9" },
];

const lastFavorites = [
  { name: "Falcon Heavy", type: "Rocket" },
  { name: "Cape Canaveral", type: "Launchpad" },
];

export default function ExplorePage() {
  return (
    <>
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-semibold md:text-3xl">
          Welcome to SpaceX Data Explorer
        </h1>
      </div>
      <Card className="mb-8 bg-card">
        <CardHeader>
          <CardTitle>About This Project</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            The SpaceX Data Explorer is an open-source project that leverages
            the SpaceX API to provide a comprehensive and user-friendly
            interface for exploring various aspects of SpaceX&apos;s operations
            and achievements. Our goal is to make SpaceX data more accessible
            and engaging for space enthusiasts, researchers, and curious minds
            alike.
          </p>
          <p className="mt-4">
            Using this application, you can delve into detailed information
            about SpaceX&apos;s capsules, cores, crew members, dragons, launch
            sites, missions, rockets, and much more. We&apos;ve designed an
            intuitive interface that allows you to easily navigate through
            different categories of data and discover the fascinating world of
            space exploration.
          </p>
        </CardContent>
      </Card>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Featured Launches</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {featuredLaunches.map((launch, index) => (
                <li key={index} className="flex flex-col">
                  <span className="font-semibold">{launch.name}</span>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{launch.date}</span>
                    <span>{launch.rocket}</span>
                  </div>
                </li>
              ))}
            </ul>
            <Button className="w-full mt-4" variant="outline" asChild>
              <Link href="/explore/launches">View All Launches</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span>Total Launches</span>
                <span className="text-2xl font-bold text-primary">180+</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Successful Landings</span>
                <span className="text-2xl font-bold text-primary">100+</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Reused Boosters</span>
                <span className="text-2xl font-bold text-primary">70+</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-border">
              <div className="text-sm text-muted-foreground">
                Launch Success Rate
              </div>
              <div className="mt-2 h-4 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{ width: "98%" }}
                ></div>
              </div>
              <div className="mt-1 text-right text-sm font-medium">98%</div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Your Recent Favorites</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {lastFavorites.map((favorite, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="font-semibold">{favorite.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {favorite.type}
                  </span>
                </li>
              ))}
            </ul>
            <Button className="w-full mt-4" variant="outline">
              View All Favorites
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
