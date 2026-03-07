import { NextRequest, NextResponse } from "next/server";
import QRCode from "qrcode";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text, format = "png", width = 300, margin = 4, darkColor = "#000000", lightColor = "#ffffff" } = body;

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "text is required" }, { status: 400 });
    }

    const clampedWidth = Math.min(1000, Math.max(100, Number(width) || 300));
    const clampedMargin = Math.min(20, Math.max(0, Number(margin) || 4));

    // Try Agent Toolbox API first
    const apiKey = process.env.TOOLBOX_API_KEY;
    if (apiKey) {
      try {
        const TOOLBOX_URL = process.env.TOOLBOX_API_URL || "http://localhost:3100";
        const res = await fetch(`${TOOLBOX_URL}/v1/qr`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({ text, format, width: clampedWidth, margin: clampedMargin, darkColor, lightColor }),
          signal: AbortSignal.timeout(5000),
        });
        if (res.ok) {
          const data = await res.json();
          return NextResponse.json(data);
        }
      } catch {
        // Fallback to local generation
      }
    }

    // Local fallback with qrcode package
    if (format === "svg") {
      const svg = await QRCode.toString(text, {
        type: "svg",
        width: clampedWidth,
        margin: clampedMargin,
        color: { dark: darkColor, light: lightColor },
      });
      return NextResponse.json({ success: true, data: { format: "svg", content: svg } });
    }

    const dataUrl = await QRCode.toDataURL(text, {
      width: clampedWidth,
      margin: clampedMargin,
      color: { dark: darkColor, light: lightColor },
    });
    return NextResponse.json({ success: true, data: { format: "png", content: dataUrl } });
  } catch {
    return NextResponse.json({ error: "QR generation failed" }, { status: 500 });
  }
}
