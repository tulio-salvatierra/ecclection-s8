"use client";

import { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";

export type PantryRow = {
  Neighborhood?: string;
  "Organization Name"?: string;
  Hours?: string;
  Type?: string;
  Serves?: string;
  Website?: string;
  Address?: string;
  "Phone Number "?: string; // note the trailing space in the header
  Services?: string;
  "Donate Link"?: string;
  "Volunteer Link"?: string;
  Notes?: string;
};

export type Pantry = {
  neighborhood: string;
  organization?: string;
  hours?: string;
  type?: string;
  serves?: string;
  website?: string;
  address?: string;
  phone?: string;
  services?: string;
  donate?: string;
  volunteer?: string;
  notes?: string;
};

function normalizeCell(v: unknown): string | undefined {
  if (v == null) return undefined;
  const s = String(v).replace(/\uFEFF/g, "").trim(); // strip BOM/whitespace
  return s.length ? s : undefined;
}

function normalizeRow(row: PantryRow): Pantry {
  return {
    neighborhood: normalizeCell(row.Neighborhood) ?? "Other",
    organization: normalizeCell(row["Organization Name"]),
    hours: normalizeCell(row.Hours),
    type: normalizeCell(row.Type),
    serves: normalizeCell(row.Serves),
    website: normalizeCell(row.Website),
    address: normalizeCell(row.Address),
    // header in CSV is "Phone Number " (with a trailing space)
    phone: normalizeCell(row["Phone Number "]),
    services: normalizeCell(row.Services),
    donate: normalizeCell(row["Donate Link"]),
    volunteer: normalizeCell(row["Volunteer Link"]),
    notes: normalizeCell(row.Notes),
  };
}

function groupByNeighborhood(pantries: Pantry[]) {
  const map: Record<string, Pantry[]> = {};
  for (const p of pantries) {
    const key = p.neighborhood || "Other";
    if (!map[key]) map[key] = [];
    map[key].push(p);
  }
  // sort neighborhoods and organizations for nice UI
  const sorted: Record<string, Pantry[]> = {};
  for (const n of Object.keys(map).sort((a, b) => a.localeCompare(b))) {
    sorted[n] = map[n].sort((a, b) =>
      (a.organization ?? "").localeCompare(b.organization ?? "")
    );
  }
  return sorted;
}

export function usePantries(csvUrl = "/foodPantries.csv") {
  const [data, setData] = useState<Pantry[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(csvUrl, { cache: "no-store" })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch CSV: ${res.status} ${csvUrl}`);
        }
        const text = await res.text();
        const parsed = Papa.parse<PantryRow>(text, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: false,
        });
        if (parsed.errors?.length) {
          // surface the first parse error for quick diagnosis
          const e = parsed.errors[0];
          console.warn("[CSV parse error]", e);
        }
        const rows = (parsed.data || []).map(normalizeRow);
        if (!cancelled) setData(rows);
      })
      .catch((e: unknown) => {
        if (!cancelled) setError(e instanceof Error ? e.message : String(e));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [csvUrl]);

  const byNeighborhood = useMemo(
    () => (data ? groupByNeighborhood(data) : {}),
    [data]
  );

  return { data: data ?? [], byNeighborhood, loading, error };
}