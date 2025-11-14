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

            <ul className="space-y-4 overflow-hidden">
              {pantries.map((p, idx) => (
                <li
                  key={neighborhood + idx}
                  className="p-6 rounded-lg bg-cyan-500 border-2 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
                >
                  <p className="font-brand text-lg">{p.organization}</p>

                  {p.address && (
                    <p className="sm:text-lg text-xs text-gray-700">📍 {p.address}</p>
                  )}

                  {p.hours && (
                    <p className="sm:text-lg text-xs text-gray-700">⏰ Hours: {p.hours}</p>
                  )}

                  {p.type && (
                    <p className="sm:text-lg text-xs text-gray-700">🏷️ Type: {p.type}</p>
                  )}

                  {p.website && (
                    <p className="sm:text-lg text-xs text-blue-600 underline">
                      <button
                        onClick={() => window.open(p.website, '_blank')}
                        className="inline-block my-4 px-4 py-2 bg-cyan-600 text-black font-brand text-lg rounded-lg border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"

                      >
                        Visit website
                      </button>
                    </p>
                  )}

                  {p.volunteer && (
                    <p className="sm:text-lg text-xs text-gray-700">
                      🤝 Volunteer: {p.volunteer}
                    </p>
                  )}

                  {p.notes && (
                    <p className="sm:text-lg text-xs text-gray-700">📝 {p.notes}</p>
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
