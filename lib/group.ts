// lib/group.ts
import type { Pantry } from "@/data/foodPantry";

export function groupByNeighborhood(items: Pantry[]) {
  return items.reduce<Record<string, Pantry[]>>((acc, p) => {
    const key = (p.neighborhood || "Other").trim();
    (acc[key] ??= []).push(p);
    return acc;
  }, {});
}