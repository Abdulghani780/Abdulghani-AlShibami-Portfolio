"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  count?: number;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  variant?: "line" | "enclosed" | "soft";
  fullWidth?: boolean;
  orientation?: "horizontal" | "vertical";
  className?: string;
  children?: React.ReactNode;
}

export function Tabs({
  tabs,
  activeTab,
  onChange,
  variant = "line",
  fullWidth = false,
  orientation = "horizontal",
  className,
  children,
}: TabsProps) {
  const variantStyles = {
    line: "border-b border-border",
    enclosed: "bg-surface-interactive rounded-xl p-1",
    soft: "bg-transparent",
  };

  const tabStyles = {
    line: (active: boolean) =>
      cn(
        "relative px-4 py-3 text-body font-medium transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
        active
          ? "text-gold"
          : "text-text-secondary hover:text-text-primary",
        !active && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-transparent after:transition-colors hover:after:bg-gold/30"
      ),
    enclosed: (active: boolean) =>
      cn(
        "px-4 py-2.5 text-body font-medium rounded-lg transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
        active
          ? "bg-surface-elevated text-gold shadow-sm"
          : "text-text-secondary hover:text-text-primary"
      ),
    soft: (active: boolean) =>
      cn(
        "px-4 py-3 text-body font-medium transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
        active
          ? "text-gold bg-gold-subtle"
          : "text-text-secondary hover:text-text-primary hover:bg-surface-interactive"
      ),
  };

  const indicatorStyles = {
    line: "absolute bottom-0 h-px bg-gold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
    enclosed: "",
    soft: "",
  };

  return (
    <div className={cn("w-full", className)} role="tablist" aria-orientation={orientation}>
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "flex-row" : "flex-col",
          fullWidth && "w-full",
          variantStyles[variant]
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            disabled={tab.disabled}
            onClick={() => !tab.disabled && onChange(tab.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                if (!tab.disabled) onChange(tab.id);
              }
            }}
            className={cn(
              "flex items-center gap-2 whitespace-nowrap",
              fullWidth && "flex-1 justify-center",
              tabStyles[variant](activeTab === tab.id),
              tab.disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            {tab.icon && <span className="flex-shrink-0" aria-hidden="true">{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={cn(
                  "px-1.5 py-0.5 text-caption rounded-full",
                  activeTab === tab.id
                    ? "bg-gold/20 text-gold"
                    : "bg-surface-interactive text-text-muted"
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}

        {variant === "line" && (
          <span
            className={cn(indicatorStyles.line, "pointer-events-none")}
            style={
              tabs.findIndex((t) => t.id === activeTab) >= 0
                ? {
                    width: `${100 / tabs.length}%`,
                    transform: `translateX(${tabs.findIndex((t) => t.id === activeTab) * (100 / tabs.length)}%)`,
                  }
                : { width: 0 }
            }
          />
        )}
      </div>

      {children && (
        <div className="mt-4" role="tabpanel">
          {children}
        </div>
      )}
    </div>
  );
}

// Compound component for tabs with panels
export interface TabsWithPanelsProps {
  children: React.ReactNode;
  defaultActiveTab?: string;
  onChange?: (tabId: string) => void;
  variant?: "line" | "enclosed" | "soft";
  fullWidth?: boolean;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function TabsWithPanels({
  children,
  defaultActiveTab,
  onChange,
  variant = "line",
  fullWidth = false,
  orientation = "horizontal",
  className,
}: TabsWithPanelsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultActiveTab || "");

  // Extract tab list and panels from children
  const childArray = React.Children.toArray(children);
  const tabListChild = childArray.find(
    (child) => React.isValidElement(child) && child.type === TabList
  ) as React.ReactElement<TabListProps> | undefined;
  
  const tabPanelsChild = childArray.find(
    (child) => React.isValidElement(child) && child.type === TabPanels
  ) as React.ReactElement<TabPanelsProps> | undefined;

  if (!tabListChild || !tabPanelsChild) {
    throw new Error("TabsWithPanels requires TabList and TabPanels as children");
  }

  const tabItems = React.Children.toArray(tabListChild.props.children).map((child, index) => {
    if (!React.isValidElement(child) || child.type !== Tab) return null;
    const tabChild = child as React.ReactElement<TabProps>;
    const id = tabChild.props.id || `tab-${index}`;
    return { id, ...tabChild.props };
  }).filter(Boolean) as TabItem[];

  if (!activeTab && tabItems.length > 0) {
    setActiveTab(tabItems[0].id);
  }

  return (
    <Tabs
      tabs={tabItems}
      activeTab={activeTab}
      onChange={(id) => {
        setActiveTab(id);
        onChange?.(id);
      }}
      variant={variant}
      fullWidth={fullWidth}
      orientation={orientation}
      className={className}
    >
      {React.Children.map(tabPanelsChild.props.children, (child, index) => {
        if (!React.isValidElement(child) || child.type !== TabPanel) return null;
        return React.cloneElement(child as React.ReactElement<TabPanelProps>, {
          hidden: activeTab !== tabItems[index]?.id,
        });
      })}
    </Tabs>
  );
}

interface TabListProps {
  children: React.ReactNode;
}

export function TabList({ children }: TabListProps) {
  return <div role="tablist">{children}</div>;
}

interface TabProps {
  id?: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  count?: number;
  children?: React.ReactNode;
}

export function Tab({ children, ...props }: TabProps) {
  return <div {...props}>{children}</div>;
}

interface TabPanelsProps {
  children: React.ReactNode;
}

export function TabPanels({ children }: TabPanelsProps) {
  return <div>{children}</div>;
}

interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  hidden?: boolean;
  children: React.ReactNode;
}

export function TabPanel({ hidden, children, ...props }: TabPanelProps) {
  return hidden ? null : <div {...props}>{children}</div>;
}