"use client";

export default function DisclaimerSection() {
  return (
    <section className="w-full h-auto py-12 border-t-2 border-b-2 border-black bg-black/30 backdrop-blur-2xl">
      <div className="sm:w-1/2 mx-auto p-8 rounded-lg shadow bg-cyan-500">
        <h2 className="font-brand text-2xl mb-3 text-black">
          About our artwork & AI
        </h2>

        <p className="text-sm md:text-base text-black mb-3">
          Ecclection proudly supports REAL, local artists. Our murals, photo
          ops, visuals, web design & all the fun creative stuff are made by
          humans in our community — never machines.
        </p>

        <p className="text-sm md:text-base text-gray-800 mb-3">
          We may use AI here and there for tiny idea sparks, but we do{" "}
          <strong>not</strong> use AI for final artwork. People first — always.
        </p>

        <p className="text-sm md:text-base text-gray-800 mb-6">
          By browsing our site, you’re supporting human-made art, local creators
          & the beautifully imperfect magic only real people make.
        </p>
      </div>
    </section>
  );
}
