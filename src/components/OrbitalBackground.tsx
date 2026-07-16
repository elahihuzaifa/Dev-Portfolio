"use client";

import { useEffect, useState } from "react";

export default function OrbitalBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
            <path
              d="M 4 0 L 0 0 0 4"
              fill="none"
              stroke="rgba(16, 185, 129, 0.1)"
              strokeWidth="0.1"
            />
          </pattern>
          <radialGradient id="glow1">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.3)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
          </radialGradient>
          <radialGradient id="glow2">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.3)" />
            <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
          </radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
        <circle
          cx={mousePosition.x}
          cy={mousePosition.y}
          r="20"
          fill="url(#glow1)"
        />
        <circle
          cx={100 - mousePosition.x}
          cy={100 - mousePosition.y}
          r="15"
          fill="url(#glow2)"
        />
      </svg>
    </div>
  );
}
