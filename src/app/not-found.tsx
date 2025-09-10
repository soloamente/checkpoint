"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
      <div className="space-y-4 text-center">
        <h1 className="text-primary text-4xl font-bold">Checkpoint Reached</h1>
        <p className="text-muted-foreground text-lg">
          You&apos;ve reached your checkpoint, but this level doesn&apos;t
          exist.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/" className="btn btn-primary">
          Home
        </Link>
        <Button onClick={() => window.history.back()} variant="outline">
          Back
        </Button>
      </div>
    </main>
  );
}
