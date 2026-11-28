"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  shape?: "circle" | "square";
  status?: "online" | "offline" | "busy" | "away";
  statusPosition?: "bottom-right" | "top-right" | "bottom-left" | "top-left";
}

export function Avatar({
  className,
  src,
  alt,
  name,
  size = "md",
  shape = "circle",
  status,
  statusPosition = "bottom-right",
  ...props
}: AvatarProps) {
  const sizeStyles = {
    xs: "h-6 w-6 text-[10px]",
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
    xl: "h-16 w-16 text-lg",
    "2xl": "h-24 w-24 text-xl",
  };

  const statusSizeStyles = {
    xs: "h-1.5 w-1.5",
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3 w-3",
    xl: "h-4 w-4",
    "2xl": "h-5 w-5",
  };

  const shapeStyles = shape === "circle" ? "rounded-full" : "rounded-xl";

  const statusColors = {
    online: "bg-status-success",
    offline: "bg-text-dim",
    busy: "bg-status-error",
    away: "bg-status-warning",
  };

  const statusPositionStyles = {
    "bottom-right": "bottom-0 right-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "top-left": "top-0 left-0",
  };

  // Generate initials from name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Generate consistent color from name
  const getColorFromName = (name: string) => {
    const colors = [
      "bg-gradient-to-br from-gold to-gold-hover",
      "bg-gradient-to-br from-status-success to-emerald-600",
      "bg-gradient-to-br from-status-info to-blue-600",
      "bg-gradient-to-br from-status-warning to-amber-600",
      "bg-gradient-to-br from-violet-500 to-purple-600",
      "bg-gradient-to-br from-rose-500 to-pink-600",
      "bg-gradient-to-br from-cyan-500 to-teal-600",
      "bg-gradient-to-br from-indigo-500 to-blue-600",
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const initials = name ? getInitials(name) : "?";
  const bgColor = name ? getColorFromName(name) : "bg-surface-interactive";

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center font-medium text-surface-elevated select-none overflow-hidden",
        "bg-surface-interactive",
        sizeStyles[size],
        shapeStyles,
        className
      )}
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt={alt || name || "Avatar"}
          fill
          className="h-full w-full object-cover"
          loading="lazy"
          sizes="64px"
        />
      ) : (
        <div
          className={cn("h-full w-full flex items-center justify-center", bgColor)}
          aria-hidden="true"
        >
          {initials}
        </div>
      )}
      {status && (
        <span
          className={cn(
            "absolute border-2 border-surface-elevated rounded-full",
            statusColors[status],
            statusSizeStyles[size],
            statusPositionStyles[statusPosition]
          )}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
}

// Avatar Group - for stacked avatars
export interface AvatarGroupProps {
  avatars: Array<AvatarProps & { id: string }>;
  max?: number;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  shape?: "circle" | "square";
  className?: string;
}

export function AvatarGroup({ avatars, max = 5, size = "md", shape = "circle", className }: AvatarGroupProps) {
  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  const sizeStyles = {
    xs: "-ml-1",
    sm: "-ml-1.5",
    md: "-ml-2",
    lg: "-ml-2.5",
    xl: "-ml-3",
    "2xl": "-ml-4",
  };

  return (
    <div className={cn("flex items-center", className)} role="group" aria-label={`${avatars.length} people`}>
      <div className="flex" role="list">
        {visibleAvatars.map((avatar, index) => (
          <div key={avatar.id} className={cn(sizeStyles[size], index === 0 && "ml-0")} role="listitem">
            <Avatar {...avatar} size={size} shape={shape} />
          </div>
        ))}
        {remainingCount > 0 && (
          <div
            className={cn(
              sizeStyles[size],
              "flex items-center justify-center",
              "bg-surface-interactive text-text-muted font-medium",
              shape === "circle" ? "rounded-full" : "rounded-xl"
            )}
            role="listitem"
          >
            +{remainingCount}
          </div>
        )}
      </div>
    </div>
  );
}