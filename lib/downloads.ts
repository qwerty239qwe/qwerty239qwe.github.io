import data from "@/content/_downloads.json";

export const totalDownloads: number = data.total ?? 0;

/** Round down to the nearest 1,000 and append a "+" for display. */
export function formatDownloads(n: number = totalDownloads): string {
  if (n < 1000) return `${n}+`;
  const rounded = Math.floor(n / 1000) * 1000;
  return `${rounded.toLocaleString("en-US")}+`;
}
