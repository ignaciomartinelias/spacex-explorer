"use client";

import { RocketIcon } from "lucide-react";

export const Footer = () => (
  <footer className="w-full bg-gradient-to-b from-gray-800 to-gray-900">
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <RocketIcon className="h-8 w-8 mr-2 text-blue-500" />
        <span className="font-bold text-xl">SpaceX Explorer</span>
      </div>
      <p className="text-sm text-gray-200 mb-4 md:mb-0 text-center md:text-left">
        © 2024 SpaceX Explorer. All rights reserved. Not affiliated with SpaceX.
      </p>
    </div>
  </footer>
);
