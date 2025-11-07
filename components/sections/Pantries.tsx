"use client";

import { usePantries } from "@/data/foodPantry";

export default function PantriesSection({
  csvUrl = "/foodPantries.csv",
}: {
  csvUrl?: string;
  title?: string;
}) {
  const { data, loading, error, byNeighborhood } = usePantries(csvUrl);

  if (loading) return <p>Loading food pantries…</p>;
  if (error) return <p>Error loading resources: {error}</p>;
  if (!data || data.length === 0) return <p>No resources available.</p>;

  return (
    <section className="container m--10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {Object.entries(byNeighborhood).map(([neighborhood, pantries]) => (
          <div key={neighborhood}>
            <h3 className="text-2xl font-brand text-cyan-500 mb-4">
              {neighborhood}
            </h3>

            <ul className="space-y-4">
              {pantries.map((p, idx) => (
                <li
                  key={neighborhood + idx}
                  className="p-6 rounded-lg bg-cyan-500 border-2 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
                >
                  <p className="font-brand text-lg">{p.organization}</p>

                  {p.address && (
                    <p className="text-lg text-gray-700">📍 {p.address}</p>
                  )}

                  {p.hours && (
                    <p className="text-lg text-gray-700">⏰ Hours: {p.hours}</p>
                  )}

                  {p.type && (
                    <p className="text-lg text-gray-700">🏷️ Type: {p.type}</p>
                  )}

                  {p.website && (
                    <p className="text-lg text-blue-600 underline">
                      <a
                        href={p.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit website
                      </a>
                    </p>
                  )}

                  {p.volunteer && (
                    <p className="text-lg text-gray-700">
                      🤝 Volunteer: {p.volunteer}
                    </p>
                  )}

                  {p.notes && (
                    <p className="text-lg text-gray-700">📝 {p.notes}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
