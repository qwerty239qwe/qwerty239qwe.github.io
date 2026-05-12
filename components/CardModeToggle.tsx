"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NameCard } from "./NameCard";

export function CardModeToggle() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs hover:border-foreground/40"
        aria-label="Show name card"
      >
        <span aria-hidden>▭</span>
        Name card
      </button>

      {open && mounted &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Name card"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <div className="w-full max-w-sm my-auto">
              <NameCard />
              <div className="mt-4 flex justify-center">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-md border border-white/30 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20"
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
