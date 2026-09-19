"use client";

import React from "react";

interface WireframeGlobeProps {
  className?: string;
  accentColor?: string;
}

export function WireframeGlobe({
  className = "",
  accentColor = "#00FF9D",
}: WireframeGlobeProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Ambient Back Glow */}
      <div className="absolute inset-0 rounded-full bg-[#00FF9D]/5 blur-xl pointer-events-none scale-75" />

      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-[#00FF9D]/40"
      >
        {/* Outer Circular Boundary */}
        <circle
          cx="120"
          cy="120"
          r="96"
          stroke={accentColor}
          strokeWidth="1"
          strokeDasharray="3 3"
          strokeOpacity="0.35"
        />
        <circle
          cx="120"
          cy="120"
          r="92"
          stroke={accentColor}
          strokeWidth="0.75"
          strokeOpacity="0.2"
        />

        {/* Equatorial and Latitude Ellipses */}
        <ellipse
          cx="120"
          cy="120"
          rx="92"
          ry="18"
          stroke={accentColor}
          strokeWidth="0.8"
          strokeOpacity="0.45"
        />
        <ellipse
          cx="120"
          cy="120"
          rx="86"
          ry="44"
          stroke={accentColor}
          strokeWidth="0.8"
          strokeOpacity="0.35"
        />
        <ellipse
          cx="120"
          cy="120"
          rx="72"
          ry="68"
          stroke={accentColor}
          strokeWidth="0.8"
          strokeOpacity="0.3"
        />

        {/* Longitudinal Ellipses */}
        <ellipse
          cx="120"
          cy="120"
          rx="18"
          ry="92"
          stroke={accentColor}
          strokeWidth="0.8"
          strokeOpacity="0.45"
        />
        <ellipse
          cx="120"
          cy="120"
          rx="44"
          ry="86"
          stroke={accentColor}
          strokeWidth="0.8"
          strokeOpacity="0.35"
        />
        <ellipse
          cx="120"
          cy="120"
          rx="68"
          ry="72"
          stroke={accentColor}
          strokeWidth="0.8"
          strokeOpacity="0.3"
        />

        {/* Central Crosshairs & Radar Reticle */}
        <line
          x1="120"
          y1="14"
          x2="120"
          y2="226"
          stroke={accentColor}
          strokeWidth="0.5"
          strokeOpacity="0.3"
        />
        <line
          x1="14"
          y1="120"
          x2="226"
          y2="120"
          stroke={accentColor}
          strokeWidth="0.5"
          strokeOpacity="0.3"
        />
        <circle
          cx="120"
          cy="120"
          r="16"
          stroke={accentColor}
          strokeWidth="0.8"
          strokeOpacity="0.7"
        />
        <circle cx="120" cy="120" r="2.5" fill={accentColor} fillOpacity="0.9" />

        {/* Dotted Grid Node Points (Global Coordinates) */}
        <circle cx="120" cy="28" r="2" fill={accentColor} fillOpacity="0.8" />
        <circle cx="120" cy="212" r="2" fill={accentColor} fillOpacity="0.8" />
        <circle cx="28" cy="120" r="2" fill={accentColor} fillOpacity="0.8" />
        <circle cx="212" cy="120" r="2" fill={accentColor} fillOpacity="0.8" />
        <circle cx="164" cy="76" r="1.5" fill={accentColor} fillOpacity="0.7" />
        <circle cx="76" cy="164" r="1.5" fill={accentColor} fillOpacity="0.7" />
        <circle cx="164" cy="164" r="1.5" fill={accentColor} fillOpacity="0.7" />
        <circle cx="76" cy="76" r="1.5" fill={accentColor} fillOpacity="0.7" />

        {/* Targeting Corners (Technical HUD Motif) */}
        <path
          d="M 60 40 L 40 40 L 40 60"
          stroke={accentColor}
          strokeWidth="1"
          strokeOpacity="0.6"
        />
        <path
          d="M 180 40 L 200 40 L 200 60"
          stroke={accentColor}
          strokeWidth="1"
          strokeOpacity="0.6"
        />
        <path
          d="M 40 180 L 40 200 L 60 200"
          stroke={accentColor}
          strokeWidth="1"
          strokeOpacity="0.6"
        />
        <path
          d="M 200 180 L 200 200 L 180 200"
          stroke={accentColor}
          strokeWidth="1"
          strokeOpacity="0.6"
        />
      </svg>
    </div>
  );
}
