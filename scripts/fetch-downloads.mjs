// Build-time fetch of total PyPI downloads via pepy.tech.
// Writes content/_downloads.json. Falls back silently to the existing file
// if the API key is missing or any request fails — the build never breaks.
//
// To enable fresh numbers in CI:
//   1. Get a free API key at https://pepy.tech/ (account page).
//   2. Add it as a repo secret named PEPY_API_KEY.
//   3. Pass it to the build step in .github/workflows/deploy.yml:
//        env: { PEPY_API_KEY: ${{ secrets.PEPY_API_KEY }} }

import { writeFileSync, existsSync, readFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const PACKAGES = ["pipegem", "sctenifoldpy", "biodbs", "ppi-net-builder"];
const OUT = resolve("content/_downloads.json");
const KEY = process.env.PEPY_API_KEY;

function load() {
  if (existsSync(OUT)) {
    try {
      return JSON.parse(readFileSync(OUT, "utf8"));
    } catch {
      return null;
    }
  }
  return null;
}

async function fetchOne(name) {
  const res = await fetch(`https://api.pepy.tech/api/v2/projects/${name}`, {
    headers: { "X-API-Key": KEY },
  });
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
  const data = await res.json();
  return Number(data.total_downloads ?? 0);
}

async function main() {
  const prior = load();
  if (!KEY) {
    console.warn("[downloads] PEPY_API_KEY not set — keeping cached values.");
    if (!prior) writeStub();
    return;
  }
  const perPackage = {};
  let total = 0;
  for (const name of PACKAGES) {
    try {
      const n = await fetchOne(name);
      perPackage[name] = n;
      total += n;
    } catch (err) {
      console.warn(`[downloads] ${name} fetch failed:`, err.message);
      if (prior?.perPackage?.[name]) {
        perPackage[name] = prior.perPackage[name];
        total += prior.perPackage[name];
      }
    }
  }
  const payload = {
    total,
    perPackage,
    fetchedAt: new Date().toISOString(),
  };
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify(payload, null, 2) + "\n");
  console.log(`[downloads] total=${total}`);
}

function writeStub() {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(
    OUT,
    JSON.stringify(
      { total: 32000, perPackage: {}, fetchedAt: null },
      null,
      2
    ) + "\n"
  );
}

main().catch((err) => {
  console.warn("[downloads] unexpected error:", err);
  if (!existsSync(OUT)) writeStub();
});
