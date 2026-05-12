"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { CardModeToggle } from "./CardModeToggle";

const blogLinkVisible = process.env.NEXT_PUBLIC_BLOG_ENABLED === "true";

const links = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Work" },
  { href: "/#publications", label: "Publications" },
  { href: "/#repos", label: "Repos" },
  ...(blogLinkVisible ? [{ href: "/blog", label: "Blog" }] : []),
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="font-semibold tracking-tight">
          Yu-Te Lin
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-muted hover:text-foreground transition"
            >
              {l.label}
            </Link>
          ))}
          <CardModeToggle />
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <CardModeToggle />
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border"
          >
            <span aria-hidden>{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border">
          <ul className="mx-auto max-w-3xl px-4 py-2 sm:px-6 flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-muted hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
