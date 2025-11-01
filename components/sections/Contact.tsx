// components/sections/Contact.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ContactCard {
  title: string;
  text: string;
}

interface ContactProps {
  heading?: string;
  cards?: ContactCard[];
  className?: string;
}

export function Contact({
  heading = "Come Find Us!",
  cards = [],
  className = ""
}: ContactProps) {
  function renderPunkHeading(text: string, size: string = "text-3xl md:text-4xl") {
    const words = text.trim().split(/\s+/);
    const angles = [-4, -2, 0, 2, 4, -3, 1, -1, 3];
    return (
      <h2 className={`${size} font-bold font-brand mb-4 text-center`}>
        {words.map((word, idx) => {
          const angle = angles[idx % angles.length];
          return (
            <span
              key={`h-${idx}`}
              className="inline-block mr-2 md:mr-3 px-2 md:px-3 py-1 md:py-2 bg-cyan-600 text-black rounded-[3px] border-2 border-black shadow-[3px_3px_0_0_#000]"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              {word}
            </span>
          );
        })}
      </h2>
    );
  }

  return (
    <section className={`container section-pad ${className}`}>
      <div className="text-center mb-12">
        {renderPunkHeading(heading)}
        <p className="text-lg text-white max-w-2xl mx-auto">
          Ready to explore art, join our community, or showcase your work? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <Card className="p-8 bg-cyan-600 border-2 border-black shadow-[6px_6px_0_0_#000]">
          <h3 className="text-2xl font-semibold text-black font-brand mb-6">Contact Information</h3>
          <p className="mb-6 text-black">Feel free to reach out to us through any of the following methods. We're here to assist you with any inquiries, collaborations, or opportunities to showcase your art at Ecclection. Text and email us, it is our preferred method of communication.</p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-black font-brand">Phone</p>
                <a href="sms:+1773951799" className="text-black hover:text-gray-700 transition-colors">
                  +1 (773) 951-7992
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-black font-brand">Email</p>
                <a href="mailto:EcclectionChicago@gmail.com" className="text-black hover:text-gray-700 transition-colors">
                  EcclectionChicago@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mt-1">
                <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-black font-brand">Address</p>
                <p className="text-black">6059 W. Irving Park Road, Chicago, IL 60634</p>
              </div>
            </div>
            
          </div>
        </Card>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4041.277172725385!2d-87.78129698744421!3d41.95284047111365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcbaefc6b5d6f%3A0xb8883b1b82dc506e!2sEcclection!5e1!3m2!1ses!2sus!4v1760900284271!5m2!1ses!2sus" width="600" height="450" style={{border:0, width: '100%', height: '100%', borderRadius: '10px', boxShadow: '6px 6px 0 0 #000'}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  );
}

