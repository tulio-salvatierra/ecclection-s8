// components/sections/UnderConstruction.tsx
import { SOCIAL_URLS } from "@/lib/constants";

export function UnderConstruction() {
  function renderPunkTitle(text: string) {
    const words = text.trim().split(/\s+/);
    const angles = [-6, -3, 0, 3, 6, -4, 2, -2, 4];
    return (
      <h1 className="text-4xl md:text-6xl font-bold font-brand mb-6 text-center">
        {words.map((word, idx) => {
          const angle = angles[idx % angles.length];
          return (
            <span
              key={`w-${idx}`}
              className="inline-block mr-2 md:mr-3 px-2 md:px-3 py-1 md:py-2 bg-cyan-600 text-black rounded-[3px] border-2 border-black shadow-[3px_3px_0_0_#000]"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              {word}
            </span>
          );
        })}
      </h1>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container section-pad">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Under Construction Header */}
          {renderPunkTitle("Under Construction")}
          
          <p className="text-xl md:text-2xl text-white font-brand">
            We're building something special! 🎨
          </p>

          {/* Store Info Card */}
          <div className="bg-cyan-600 p-8 rounded-lg border-2 border-black shadow-[6px_6px_0_0_#000] max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-black font-brand mb-6">Visit Us Today!</h2>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-black mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-bold text-black font-brand">Address</p>
                  <p className="text-black">6059 W. Irving Park Road</p>
                  <p className="text-black">Chicago, IL 60634</p>
                  <p className="text-black text-sm">(West end of Portage Park)</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-bold text-black font-brand">Phone</p>
                  <a href={SOCIAL_URLS.phone} className="text-black hover:text-gray-700 font-brand">
                    +1 (773) 951-7992
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-bold text-black font-brand">Email</p>
                  <a href={`mailto:${SOCIAL_URLS.email}`} className="text-black hover:text-gray-700 font-brand">
                    {SOCIAL_URLS.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 pt-6 border-t-2 border-black">
              <p className="font-bold text-black font-brand mb-3">Follow Us</p>
              <div className="flex justify-center gap-4">
                <a
                  href={SOCIAL_URLS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black text-cyan-600 rounded font-brand text-sm hover:bg-gray-800 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={SOCIAL_URLS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black text-cyan-600 rounded font-brand text-sm hover:bg-gray-800 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={SOCIAL_URLS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black text-cyan-600 rounded font-brand text-sm hover:bg-gray-800 transition-colors"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <p className="text-lg text-white">
              We're a vibrant local shop featuring vintage treasures, handmade art, and locally crafted finds.
            </p>
            <a
              href="https://maps.app.goo.gl/ZMgVyGzAmNvomLMcA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-cyan-600 text-black font-brand text-lg rounded-lg border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

