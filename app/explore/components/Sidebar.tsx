import Link from "next/link";
import { Home, Rocket, Package, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { categories } from "../consts";
import { SidebarLink } from "./SidebarLink";

export const Sidebar = ({ isMobile = false }: { isMobile?: boolean }) => (
  <div className="flex h-full max-h-screen flex-col gap-2">
    <div className="flex h-14 items-center border-b border-border px-4 lg:h-[60px] lg:px-6">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Rocket className="h-6 w-6" />
        <span className="">SpaceX Explorer</span>
      </Link>
    </div>
    <div className="flex-1">
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        <SidebarLink
          isMobile={isMobile}
          href="/explore"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Home className="h-4 w-4" />
          Home
        </SidebarLink>
        <SidebarLink
          isMobile={isMobile}
          href="/favorites"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Star className="h-4 w-4" />
          Favorites
        </SidebarLink>

        <Accordion type="single" collapsible defaultValue="categories">
          <AccordionItem value="categories">
            <AccordionTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:no-underline">
              <div className="flex items-center gap-3">
                <Package className="h-4 w-4" />
                <span>Categories</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-2 space-y-1">
                {categories.map(({ name, href, Icon }) => (
                  <SidebarLink
                    isMobile={isMobile}
                    key={name}
                    href={href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 pl-10 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                    {name}
                  </SidebarLink>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </nav>
    </div>
    <div className="mt-auto p-4 hidden md:block">
      <Card className="bg-card">
        <CardHeader className="p-4">
          <CardTitle>Explore More</CardTitle>
          <CardDescription>
            Dive deeper into SpaceX missions and technology.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
          <Button size="sm" variant="secondary" className="w-full" asChild>
            <Link href="/explore">Learn More</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  </div>
);
