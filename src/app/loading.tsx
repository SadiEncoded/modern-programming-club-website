"use client";

import { TerminalLoader } from "@/components/ui/terminal-loader";

export default function LoadingPage() {
  return (
    <div className="fixed inset-0 w-screen h-screen">
      <TerminalLoader />
    </div>
  );
}
