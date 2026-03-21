"use client";
import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message.trim(), email: email.trim() || undefined, url: window.location.href, timestamp: new Date().toISOString() }),
      });
      if (res.ok) {
        setStatus("success");
        setTimeout(() => { setOpen(false); setStatus("idle"); setMessage(""); setEmail(""); }, 2000);
      } else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Send feedback"
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        {open ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
      </button>

      {open && (
        <Card className="fixed bottom-20 right-5 z-50 w-80 animate-fade-in shadow-xl">
          <CardContent className="p-5">
            {status === "success" ? (
              <div className="py-4 text-center">
                <p className="font-semibold text-foreground">Thanks!</p>
                <p className="mt-1 text-sm text-muted-foreground">We&apos;ll review your feedback.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="mb-3 text-sm font-semibold text-foreground">Send Feedback</h3>
                <Textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="What's on your mind?"
                  rows={3}
                  required
                  className="resize-none"
                />
                <Input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email (optional, for replies)"
                  className="mt-2"
                />
                {status === "error" && <p className="mt-2 text-xs text-destructive">Something went wrong. Try again.</p>}
                <button
                  type="submit"
                  disabled={status === "loading" || !message.trim()}
                  className="mt-3 w-full rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-brand-foreground transition-colors hover:brightness-110 disabled:pointer-events-none disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send Feedback"}
                </button>
              </form>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
}
