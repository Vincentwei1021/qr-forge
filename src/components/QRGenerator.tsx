"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import QRCode from "qrcode";

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
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
        {/* Controls */}
        <div className="space-y-6">
          {/* Text input */}
          <div>
            <label htmlFor="qr-text" className="mb-1.5 block text-sm font-medium text-gray-700">
              URL or Text
            </label>
            <input
              id="qr-text"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="https://example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          {/* Format toggle */}
          <div>
            <span className="mb-1.5 block text-sm font-medium text-gray-700">Format</span>
            <div className="flex rounded-lg border border-gray-300 p-0.5">
              {(["png", "svg"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFormat(f)}
                  className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-all ${
                    format === f
                      ? "bg-indigo-500 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {f.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="dark-color" className="mb-1.5 block text-sm font-medium text-gray-700">
                Foreground
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="dark-color"
                  type="color"
                  value={darkColor}
                  onChange={(e) => setDarkColor(e.target.value)}
                  className="h-10 w-10 cursor-pointer rounded border border-gray-300"
                />
                <span className="text-sm text-gray-500">{darkColor}</span>
              </div>
            </div>
            <div>
              <label htmlFor="light-color" className="mb-1.5 block text-sm font-medium text-gray-700">
                Background
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="light-color"
                  type="color"
                  value={lightColor}
                  onChange={(e) => setLightColor(e.target.value)}
                  className="h-10 w-10 cursor-pointer rounded border border-gray-300"
                />
                <span className="text-sm text-gray-500">{lightColor}</span>
              </div>
            </div>
          </div>

          {/* Size slider */}
          <div>
            <label htmlFor="qr-size" className="mb-1.5 block text-sm font-medium text-gray-700">
              Size: {width}px
            </label>
            <input
              id="qr-size"
              type="range"
              min={100}
              max={1000}
              step={50}
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="w-full accent-indigo-500"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>100px</span>
              <span>1000px</span>
            </div>
          </div>

          {/* Margin slider */}
          <div>
            <label htmlFor="qr-margin" className="mb-1.5 block text-sm font-medium text-gray-700">
              Margin: {margin}
            </label>
            <input
              id="qr-margin"
              type="range"
              min={0}
              max={20}
              value={margin}
              onChange={(e) => setMargin(Number(e.target.value))}
              className="w-full accent-indigo-500"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>0</span>
              <span>20</span>
            </div>
          </div>

          {/* Download button */}
          <button
            onClick={handleDownload}
            disabled={!qrDataUrl && !qrSvg}
            className="w-full rounded-lg bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Download {format.toUpperCase()}
          </button>
        </div>

        {/* Preview */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex min-h-[320px] w-full items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-6">
            {error ? (
              <p className="text-sm text-red-500">{error}</p>
            ) : format === "svg" && qrSvg ? (
              <div
                dangerouslySetInnerHTML={{ __html: qrSvg }}
                className="flex items-center justify-center [&>svg]:max-h-[280px] [&>svg]:max-w-full"
              />
            ) : qrDataUrl ? (
              <img src={qrDataUrl} alt="Generated QR Code" className="max-h-[280px] max-w-full" />
            ) : (
              <p className="text-sm text-gray-400">Your QR code will appear here</p>
            )}
          </div>
          <canvas ref={canvasRef} className="hidden" />
        </div>
      </div>

      {/* Batch generation teaser */}
      <div className="mx-auto mt-12 max-w-5xl rounded-xl border border-indigo-100 bg-indigo-50/50 p-6 text-center">
        <div className="mb-2 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
          Coming Soon
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Batch QR Code Generation</h3>
        <p className="mt-1 text-sm text-gray-600">
          Generate hundreds of QR codes at once from a CSV file. Upload, customize, and download a ZIP.
        </p>
      </div>
    </section>
  );
}
