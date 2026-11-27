import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log web vitals in development
    if (process.env.NODE_ENV === "development") {
      console.log("[Web Vitals API]", body);
    }
    
    // In production, you could:
    // 1. Send to Vercel Analytics / Speed Insights
    // 2. Send to custom analytics (PostHog, Mixpanel, etc.)
    // 3. Store in database for dashboards
    // 4. Send to monitoring service (Datadog, New Relic, etc.)
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Web Vitals API] Error:", error);
    return NextResponse.json({ success: false, error: "Invalid payload" }, { status: 400 });
  }
}