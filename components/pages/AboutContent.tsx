import { Contact } from "@/components/sections/Contact";
import { renderPunkTitle, renderPunkHeading } from "@/lib/punk-typography";
import { LenisProvider } from "@/components/LenisProvider";
import Image from "next/image";
import { RichText } from "@/lib/content-render";

export function AboutContent({ content: c }: { content: Record<string, string> }) {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header className="container section-pad text-center">
        {renderPunkTitle(c.header_title)}
        <p className="text-md text-left text-white sm:w-1/2 mx-auto leading-5">
          {c.header_subtitle}
        </p>
      </header>
      <LenisProvider />

      {/* Hero Section */}
      <section className="container section-pad">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-lg h-[400px]">
            <Image
              src="/portrait.jpeg"
              alt="Professional portrait of shop owner inside of Ecclection store"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <div className="space-y-6 bg-black/30 p-4">
            {renderPunkHeading(c.welcome_heading, "text-2xl md:text-3xl")}
            <p className="text-white text-md leading-relaxed">{c.welcome_paragraph_1}</p>
            <div className="text-white leading-relaxed">
              <RichText value={c.welcome_paragraph_2} />
            </div>
          </div>
        </div>
      </section>

      <section className="container section-pad mx-auto">
        {renderPunkHeading(c.what_i_do_heading, "text-2xl md:text-3xl text-center mb-6")}
        <div className="text-white text-md sm:w-1/2 mx-auto">
          <RichText value={c.what_i_do_paragraph} />
        </div>
      </section>

      {/* Content Section */}
      <section className="container section-pad">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3 flex justify-center">
            <div className="w-32 h-32 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://peanuttyxx.wordpress.com/wp-content/uploads/2025/10/img_4131.jpeg"
                alt="Woman standing in front of Ecclection storefront"
                className="w-72 h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="md:col-span-6 space-y-6 text-md">
            {renderPunkHeading(c.philosophy_heading, "text-xl")}
            <p className="text-white leading-relaxed text-md">{c.philosophy_paragraph_1}</p>
            <p className="text-white leading-relaxed text-md">{c.philosophy_paragraph_2}</p>
            <p className="text-white p-8 text-xl tracking-wide bold leading-10">
              {c.philosophy_paragraph_3}
            </p>
          </div>

          <div className="md:col-span-3 flex justify-center">
            <div className="relative w-full h-auto aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/herofigure.png"
                alt="Woman standing in front of Ecclection storefront"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 25vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <section className="container section-pad h-auto">
          <div className="text-center mb-12">{renderPunkTitle(c.offer_title, "text-3xl md:text-4xl")}</div>
          <div className="grid grid-cols-1 sm:h-100 h-auto md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-card/100 relative overflow-hidden flex flex-col justify-end">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/3pics/vintage.jpeg)" }}
              />
              <div className="relative z-10">
                {renderPunkHeading(c.offer_card_1_heading, "text-lg")}
                <p className="text-white bg-black/50 p-3 rounded">{c.offer_card_1_description}</p>
              </div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/100 relative overflow-hidden flex flex-col justify-end">
              <div
                className="absolute inset-0 bg-cover bg-top"
                style={{ backgroundImage: "url(/3pics/DSC02214.jpeg.jpg)" }}
              />
              <div className="relative z-10">
                {renderPunkHeading(c.offer_card_2_heading, "text-lg")}
                <p className="text-white bg-black/50 p-3 rounded">{c.offer_card_2_description}</p>
              </div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/100 relative overflow-hidden flex flex-col justify-end">
              <div
                className="absolute inset-0 bg-cover bg-top"
                style={{ backgroundImage: "url(/3pics/DSC02204.jpeg.jpg)" }}
              />
              <div className="relative z-10">
                {renderPunkHeading(c.offer_card_3_heading, "text-lg")}
                <p className="text-white bg-black/50 p-3 rounded">{c.offer_card_3_description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Big Elves Section */}
        {renderPunkHeading(c.big_elves_section_heading, "text-2xl md:text-3xl text-center mb-6")}

        <div className="text-left mt-12 p-8 bg-card/30 backdrop-blur-sm rounded-lg border-2 border-cyan-600">
          <h2 className="mb-8 text-2xl md:text-3xl font-brand text-center mt-12">
            {c.big_elves_mission_title}
          </h2>
          <img
            className="rounded-lg shadow-2xlw-full h-auto mx-auto mb-6"
            src="/bigelves.jpeg"
            alt="Julie and Elise dressed as elves bringing gifts and goodies"
          />
          <h3 className="text-xl font-bold font-brand mb-3 text-center">
            {c.big_elves_mission_subtitle}
          </h3>
          <div className="text-white sm:w-1/2 mx-auto leading-6">
            <RichText value={c.big_elves_mission_paragraph} />
          </div>

          <h3 className="text-xl mt-4 font-bold font-brand text-white mb-3 text-center">
            {c.big_elves_help_title}
          </h3>
          <p className="text-white sm:w-1/2 mx-auto leading-6">{c.big_elves_help_paragraph}</p>

          <p className="text-white my-6 sm:w-1/2 mx-auto leading-6 text-left">
            <strong>{c.big_elves_closing_statement}</strong>
          </p>

          <p className="text-xl text-center mx-auto text-white font-brand leading-relaxed my-4">
            {c.big_elves_fb_intro}
          </p>
          <div className="text-center">
            <a
              href="https://www.facebook.com/profile.php?id=61563313948330"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center inline-block mx-auto mt-8 px-8 py-4 bg-cyan-600 text-black font-brand text-lg rounded-lg border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              {c.big_elves_fb_button_label}
            </a>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}