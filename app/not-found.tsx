import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-canvas flex items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <div className="font-mono text-xs tracking-[0.25em] text-gold uppercase">
          {"// ERROR 404: STATE_MACHINE_FAULT"}
        </div>
        <h1 className="font-serif text-5xl font-normal text-content-primary">
          Page Not Found
        </h1>
        <p className="text-content-secondary text-sm leading-relaxed">
          The requested system route does not exist or has been relocated within the architecture cluster.
        </p>
        <div className="pt-4">
          <Link href="/en">
            <Button variant="primary" size="md">
              Return to Safe Cluster Root →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
