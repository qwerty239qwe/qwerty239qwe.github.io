"use client";

import { createContext, useContext, useMemo, useState } from "react";

type Ctx = {
  hovered: Set<string>;
  setHovered: (ids: string[]) => void;
  clearHovered: () => void;
};

const HoverCtx = createContext<Ctx | null>(null);

export function HoverHighlightProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hovered, setHoveredSet] = useState<Set<string>>(new Set());

  const value = useMemo<Ctx>(
    () => ({
      hovered,
      setHovered: (ids) => setHoveredSet(new Set(ids)),
      clearHovered: () => setHoveredSet(new Set()),
    }),
    [hovered]
  );

  return <HoverCtx.Provider value={value}>{children}</HoverCtx.Provider>;
}

export function useHoverHighlight() {
  const ctx = useContext(HoverCtx);
  if (!ctx) {
    return {
      hovered: new Set<string>(),
      setHovered: () => {},
      clearHovered: () => {},
    } satisfies Ctx;
  }
  return ctx;
}
