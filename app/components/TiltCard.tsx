"use client";

import React, { FC, MouseEventHandler, PropsWithChildren, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

type Props = PropsWithChildren<{
  className?: string;
}>;

export const TiltCard: FC<Props> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove: MouseEventHandler = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className={cn(
        "grid place-items-center rounded-lg p-2 bg-gradient-to-br from-indigo-300/10 to-violet-300/10",
        className
      )}
    >
      <div
        className="md:relative overflow-hidden rounded-lg p-0.5 shadow-lg shadow-white/5"
        style={{
          transform: "translateZ(50px)",
        }}
      >
        <div className="hidden md:block absolute bg-gradient-conic from-transparent from-80% via-blue-500/50 via-95% to-blue-600/100 to-100% origin-center w-[200%] h-[200%] -z-10 -left-1/2 -top-1/2 animate-spin-slow" />
        {children}
      </div>
    </motion.div>
  );
};
