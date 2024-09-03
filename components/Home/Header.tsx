"use client";

import { RocketIcon } from "lucide-react";
import Link from "next/link";

export const Header = () => (
  <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm bg-black/30 fixed w-full top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <Link className="flex items-center justify-center" href="#">
        <RocketIcon className="h-8 w-8 mr-2 text-blue-500" />
        <span className="font-bold text-xl">SpaceX Explorer</span>
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link
          className="text-sm font-medium hover:text-blue-400 transition-colors"
          href="#features"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:text-blue-400 transition-colors"
          href="#about"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:text-blue-400 transition-colors"
          href="/explore"
        >
          Explore Data
        </Link>
      </nav>
    </div>
  </header>
);
