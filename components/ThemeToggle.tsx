"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-foreground/5 transition"
    >
      <span aria-hidden className="text-base">
        {mounted ? (dark ? "☀" : "☾") : " "}
      </span>
    </button>
  );
}
