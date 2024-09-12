"use client";

import { useState } from "react";
import { LaunchCard } from "./LaunchCard";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const LaunchesWrapper = ({ launches }: { launches: Launch[] }) => {
  const [count, setCount] = useState(9);

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setCount((prev) => prev + 9);
    }
  }, [isInView, setCount]);

  const filteredLaunches = launches.slice(0, count);
  const hasNextPage = launches.length > count;
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredLaunches.map((launch) => (
        <LaunchCard key={launch.id} launch={launch} />
      ))}
      {hasNextPage && <div ref={ref} />}
    </div>
  );
};
