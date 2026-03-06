export default function PantriesSection() {
  return (
    <section className="container m--10">
      <div className="grid grid-cols-1 sm:w-1/2 mx-auto gap-6">
        <article className="p-6 rounded-lg text-left bg-cyan-600/10 border-2 border-black shadow-[6px_6px_0_0_#000]">
          <h3 className="text-2xl font-brand text-cyan-600 mb-4">
            Find Food Pantries Across Chicago
          </h3>
          <p className="text-lg text-cyan-600 font-brand leading-relaxed mb-6">
            We Got You Illinois provides an interactive map to help you find
            free groceries and meal programs near you. You can filter by
            location and schedule to quickly find food pantries that are open
            when you need them.
          </p>
          <a
            href="https://wegotyouillinois.org/find-food/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto self-center inline-block px-4 py-2 bg-cyan-500 text-black font-brand text-lg rounded-lg border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Open Food Pantry Finder
          </a>
        </article>
      </div>
    </section>
  );
}
