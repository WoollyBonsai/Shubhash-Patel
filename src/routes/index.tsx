import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Portfolio } from "@/components/Portfolio";
import { BootLoader } from "@/components/BootLoader";
import { CursorTrail } from "@/components/CursorTrail";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shubhansh Patel — Kernel-Space Dreamer · Linux & Systems Portfolio" },
      { name: "description", content: "Portfolio of Shubhansh Patel — Linux power user, kernel tinkerer, and CSE student building low-level tools, device bridges, and autonomous AI agents." },
      { property: "og:title", content: "Shubhansh Patel — Portfolio" },
      { property: "og:description", content: "Linux · Kernel · Rust · C · Android NDK · Agentic AI." },
    ],
  }),
  component: Index,
});

function Index() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    // Default to dark theme on first visit
    if (!localStorage.getItem("theme")) {
      document.documentElement.classList.add("dark");
    } else if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <>
      {!booted && <BootLoader onDone={() => setBooted(true)} />}
      {booted && <CursorTrail />}
      <Portfolio />
    </>
  );
}
