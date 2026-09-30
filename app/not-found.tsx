import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-canvas text-content-primary flex items-center justify-center p-6 text-center transition-colors">
      <div className="max-w-lg space-y-6">
        <div className="font-mono text-xs tracking-[0.25em] text-gold-dark dark:text-gold-light uppercase font-bold">
          {"// ERROR 404: ROUTE_NOT_FOUND"}
        </div>
        <h1 className="font-sans font-black text-3xl sm:text-4xl text-zinc-900 dark:text-white uppercase tracking-tight">
          Page Not Found
          <span className="block text-2xl sm:text-3xl font-serif text-gold-dark dark:text-gold-light mt-1 font-normal">
            الصفحة غير موجودة
          </span>
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-sans">
          The requested system route does not exist or has been moved.
          <br />
          المسار المطلوب غير متوفر أو تم نقله ضمن المعمارية البرمجية للموقع.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link href="/en">
            <Button variant="primary" size="md">
              Return Home (English) →
            </Button>
          </Link>
          <Link href="/ar">
            <Button variant="secondary" size="md">
              العودة للرئيسية (عربي) ←
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
