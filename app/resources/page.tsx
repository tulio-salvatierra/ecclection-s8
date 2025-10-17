import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

const resources = [
  {
    title: "National Alliance on Mental Illness",
    category: "Mental Health",
    description:
      "NAMI provides advocacy, education, support and public awareness so that all individuals and families affected by mental illness can build better lives.",
    link: "https://www.nami.org",
  },
  {
    title: "Feeding America",
    category: "Food Security",
    description:
      "A nationwide network of food banks, food pantries and local meal programs that work together to end hunger in America.",
    link: "https://www.feedingamerica.org",
  },
  {
    title: "National Domestic Violence Hotline",
    category: "Safety & Support",
    description:
      "24/7 confidential support for anyone experiencing domestic violence, seeking resources or information, or questioning unhealthy aspects of their relationship.",
    link: "https://www.thehotline.org",
  },
  {
    title: "Substance Abuse and Mental Health Services",
    category: "Mental Health",
    description:
      "SAMHSA provides free, confidential support and treatment referral for individuals facing mental health and substance use disorders.",
    link: "https://www.samhsa.gov",
  },
  {
    title: "National Coalition for the Homeless",
    category: "Housing",
    description:
      "Working to prevent and end homelessness while ensuring the immediate needs of those experiencing homelessness are met.",
    link: "https://nationalhomeless.org",
  },
  {
    title: "211 Helpline",
    category: "General Support",
    description:
      "A free, confidential service that connects people with local resources for food, housing, employment, healthcare, and crisis support.",
    link: "https://www.211.org",
  },
  {
    title: "Crisis Text Line",
    category: "Crisis Support",
    description:
      "Free, 24/7 support for those in crisis. Text HOME to 741741 to connect with a trained Crisis Counselor.",
    link: "https://www.crisistextline.org",
  },
  {
    title: "United Way",
    category: "Community Services",
    description: "Mobilizing communities to improve lives through education, income stability, and health initiatives.",
    link: "https://www.unitedway.org",
  },
]

export default function CommunityResourcesPage() {
  function renderPunkTitle(text: string, size: string = "text-3xl md:text-4xl") {
    const words = text.trim().split(/\s+/);
    const angles = [-6, -3, 0, 3, 6, -4, 2, -2, 4];
    return (
      <h1 className={`${size} font-bold font-brand mb-4 text-center`}>
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

  function renderPunkHeading(text: string, size: string = "text-xl") {
    const words = text.trim().split(/\s+/);
    const angles = [-4, -2, 0, 2, 4, -3, 1, -1, 3];
    return (
      <h2 className={`${size} font-semibold font-brand mb-3`}>
        {words.map((word, idx) => {
          const angle = angles[idx % angles.length];
          return (
            <span
              key={`h-${idx}`}
              className="inline-block mr-1 md:mr-2 px-1 md:px-2 py-1 bg-cyan-600 text-black rounded-[2px] border border-black shadow-[2px_2px_0_0_#000]"
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
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="container section-pad text-center">
        <p className="text-sm tracking-wide uppercase text-cyan-400 mb-4">Support & Resources</p>
        {renderPunkTitle("Community Resources", "text-4xl md:text-5xl")}
        <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
          We believe in supporting our community. Below you'll find a curated list of trusted organizations and
          resources dedicated to helping individuals and families navigate challenging times.
        </p>
      </section>

      {/* Resources Grid */}
      <section className="container section-pad">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <article
                key={index}
                className="p-6 rounded-lg bg-cyan-600 border border-black hover:border-cyan-400 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs tracking-wide uppercase text-black font-brand">{resource.category}</span>
                  <ExternalLink className="w-4 h-4 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h2 className="text-xl font-semibold text-black font-brand mb-4">{resource.title}</h2>

                <p className="text-black leading-relaxed mb-6">{resource.description}</p>

                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-brand text-black hover:text-gray-700 transition-colors group/link"
                >
                  Visit Resource
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </article>
            ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container section-pad text-center">
        <div className="max-w-4xl mx-auto">
          {renderPunkHeading("Need Immediate Help?", "text-2xl md:text-3xl")}
          <p className="text-lg text-white mb-8 leading-relaxed">
            If you or someone you know is in crisis, please reach out for help immediately. You are not alone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:988"
              className="px-8 py-4 border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-black transition-colors text-sm font-brand tracking-wide uppercase rounded-lg"
            >
              Call 988 - Suicide & Crisis Lifeline
            </a>
            <a
              href="sms:741741&body=HOME"
              className="px-8 py-4 bg-cyan-600 text-black hover:bg-cyan-500 transition-colors text-sm font-brand tracking-wide uppercase rounded-lg"
            >
              Text HOME to 741741
            </a>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="container section-pad">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-brand text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  )
}
