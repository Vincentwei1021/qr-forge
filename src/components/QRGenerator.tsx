"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import QRCode from "qrcode";
import { Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function QRGenerator() {
  const [text, setText] = useState("https://example.com");
  const [format, setFormat] = useState<"png" | "svg">("png");
  const [width, setWidth] = useState(300);
  const [margin, setMargin] = useState(4);
  const [darkColor, setDarkColor] = useState("#000000");
  const [lightColor, setLightColor] = useState("#ffffff");
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [qrSvg, setQrSvg] = useState<string>("");
  const [error, setError] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const generateQR = useCallback(async () => {
    if (!text.trim()) {
      setError("Please enter a URL or text");
      setQrDataUrl("");
      setQrSvg("");
      return;
    }
    setError("");
    try {
      if (format === "svg") {
        const svg = await QRCode.toString(text, {
          type: "svg",
          width,
          margin,
          color: { dark: darkColor, light: lightColor },
        });
        setQrSvg(svg);
        setQrDataUrl("");
      } else {
        const url = await QRCode.toDataURL(text, {
          width,
          margin,
          color: { dark: darkColor, light: lightColor },
        });
        setQrDataUrl(url);
        setQrSvg("");
      }
    } catch {
      setError("Failed to generate QR code. Check your input.");
    }
  }, [text, format, width, margin, darkColor, lightColor]);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(generateQR, 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [generateQR]);

  const handleDownload = () => {
    if (format === "svg" && qrSvg) {
      const blob = new Blob([qrSvg], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "qr-forge.svg";
      a.click();
      URL.revokeObjectURL(url);
    } else if (qrDataUrl) {
      const a = document.createElement("a");
      a.href = qrDataUrl;
      a.download = "qr-forge.png";
      a.click();
    }
  };

  return (
    <section id="generator" className="px-4 py-12 sm:px-6 sm:py-16">
      <h2 className="sr-only">QR Code Generator Tool</h2>
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
        {/* Controls */}
        <Card>
          <CardContent className="space-y-6 p-6">
            {/* Text input */}
            <div className="space-y-2">
              <Label htmlFor="qr-text">URL or Text</Label>
              <Input
                id="qr-text"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="https://example.com"
              />
            </div>

            {/* Format toggle */}
            <div className="space-y-2">
              <Label>Format</Label>
              <Tabs value={format} onValueChange={(v) => setFormat(v as "png" | "svg")}>
                <TabsList className="w-full">
                  <TabsTrigger value="png" className="flex-1">PNG</TabsTrigger>
                  <TabsTrigger value="svg" className="flex-1">SVG</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Colors */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dark-color">Foreground</Label>
                <div className="flex items-center gap-2">
                  <input
                    id="dark-color"
                    type="color"
                    value={darkColor}
                    onChange={(e) => setDarkColor(e.target.value)}
                    className="h-9 w-9 cursor-pointer rounded-md border border-input bg-transparent"
                  />
                  <span className="text-sm text-muted-foreground">{darkColor}</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="light-color">Background</Label>
                <div className="flex items-center gap-2">
                  <input
                    id="light-color"
                    type="color"
                    value={lightColor}
                    onChange={(e) => setLightColor(e.target.value)}
                    className="h-9 w-9 cursor-pointer rounded-md border border-input bg-transparent"
                  />
                  <span className="text-sm text-muted-foreground">{lightColor}</span>
                </div>
              </div>
            </div>

            {/* Size slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="qr-size">Size</Label>
                <span className="text-sm text-muted-foreground">{width}px</span>
              </div>
              <Slider
                id="qr-size"
                min={100}
                max={1000}
                step={50}
                value={[width]}
                onValueChange={(v) => setWidth(Array.isArray(v) ? v[0] : v)}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>100px</span>
                <span>1000px</span>
              </div>
            </div>

            {/* Margin slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="qr-margin">Margin</Label>
                <span className="text-sm text-muted-foreground">{margin}</span>
              </div>
              <Slider
                id="qr-margin"
                min={0}
                max={20}
                value={[margin]}
                onValueChange={(v) => setMargin(Array.isArray(v) ? v[0] : v)}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0</span>
                <span>20</span>
              </div>
            </div>

            {/* Download button */}
            <Button
              size="lg"
              className="w-full active:scale-[0.98] transition-all"
              onClick={handleDownload}
              disabled={!qrDataUrl && !qrSvg}
            >
              <Download className="mr-2 h-4 w-4" />
              Download {format.toUpperCase()}
            </Button>
          </CardContent>
        </Card>

        {/* Preview */}
        <div className="flex flex-col items-center justify-center">
          <Card className="flex min-h-[320px] w-full items-center justify-center p-6">
            {error ? (
              <p className="text-sm text-destructive">{error}</p>
            ) : format === "svg" && qrSvg ? (
              <div
                dangerouslySetInnerHTML={{ __html: qrSvg }}
                className="flex items-center justify-center [&>svg]:max-h-[280px] [&>svg]:max-w-full"
              />
            ) : qrDataUrl ? (
              <img src={qrDataUrl} alt="Generated QR Code preview" className="max-h-[280px] max-w-full" />
            ) : (
              <p className="text-sm text-muted-foreground">Your QR code will appear here</p>
            )}
          </Card>
          <canvas ref={canvasRef} className="hidden" />
        </div>
      </div>

      {/* Batch generation teaser */}
      <Card className="mx-auto mt-12 max-w-5xl">
        <CardContent className="p-6 text-center">
          <Badge variant="secondary" className="mb-2">Coming Soon</Badge>
          <h3 className="text-base font-semibold text-foreground">Batch QR Code Generation</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Generate hundreds of QR codes at once from a CSV file. Upload, customize, and download a ZIP.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
