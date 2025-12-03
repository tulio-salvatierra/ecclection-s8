import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FlyersBento } from "@/components/sections/BentoFlyers";
import PantriesSection from "@/components/sections/Pantries";
import type { Metadata } from "next";
import { LenisProvider } from "@/components/LenisProvider";

export const metadata: Metadata = {
  title: "Community Resources",
  description:
    "Access essential community resources including mental health support, food security, housing assistance, crisis support, and more. Ecclection is committed to supporting our community in Portage Park, Chicago.",
  openGraph: {
    title: "Community Resources | Ecclection",
    description:
      "Essential community resources for mental health, food security, housing, crisis support, and more in Chicago.",
    url: "/resources",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Community Resources at Ecclection",
      },
    ],
  },
  alternates: {
    canonical: "/resources",
  },
};

const localOrganizations = [
  {
    id: 1,
    title: "Portage Cragin Counseling center",
    category: "Mental Health",
    description:
      "Provides affordable mental health services including individual, famAt the Portage Cragin Counseling Center, you will find addiction treatment and mental health services under one roof. We offer crisis services and adolescent services as well as support groups. Our goal is to get you into treatment quickly to start your healing journey.",
    link: "https://www.lssi.org/locations/portage-cragin-counseling-center/",
  },
  {
    id: 2,
    title: "SHIFT Behavioral Health",
    category: "Food Security",
    description:
      "Our team is reimagining mental health care to be more accessible, proactive, and reflective of the real experiences of young people and families. Whether you’re dealing with a crisis or simply need someone to talk to, we offer same-day, in-person support in a setting that’s intentionally designed to feel comfortable and relaxed.",
    link: "https://www.shftbh.com/",
  },
];

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
    description:
      "Mobilizing communities to improve lives through education, income stability, and health initiatives.",
    link: "https://www.unitedway.org",
  },
];

export default function CommunityResourcesPage() {
  function renderPunkTitle(
    text: string,
    size: string = "text-3xl md:text-4xl"
  ) {
    const words = text.trim().split(/\s+/);
    const angles = [-6, -3, 0, 3, 6, -4, 2, -2, 4];
    return (
      <h1 className={`${size} font-bold font-brand mb-8 text-center`}>
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
      <h2 className={`${size} font-semibold font-brand mb-8`}>
        {words.map((word, idx) => {
          const angle = angles[idx % angles.length];
          return (
            <span
              key={`h-${idx}`}
              className="inline-block mr-1 md:mr-2 px-1 md:px-2 py-1 bg-cyan-500 text-white rounded-[2px] border border-black shadow-[2px_2px_0_0_#000]"
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
      <LenisProvider />
      {/* Header Section */}
      <section className="container section-pad text-left">
        {renderPunkTitle("Community Resources", "text-4xl md:text-5xl")}
        <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
          We believe in supporting our community. Below you'll find a curated
          list of trusted organizations and resources dedicated to helping
          individuals and families navigate challenging times.
        </p>
        <br />
        <p className="text-lg text-left text-white max-w-3xl mx-auto leading-relaxed">
          We are giving away whistles for free!, just stop by and pick one up!
          While supplies last.
        </p>
      </section>

      <section>
        <div className="container">
          <FlyersBento />
        </div>
      </section>
      {/* Local Organizations Section */}
      <section className="container section-pad text-center">
        {renderPunkHeading(
          "Local Support Organizations",
          "text-2xl md:text-3xl"
        )}
        <p className="text-lg text-white max-w-3xl mx-auto text-left leading-relaxed mb-8">
          In addition to national resources, here are some local organizations
          in Portage Park that provide essential services to our community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {localOrganizations.map((org) => (
            <article
              key={org.id}
              className="p-6 rounded-lg bg-cyan-500 border-2 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs tracking-wide uppercase text-black font-brand">
                  {org.category}
                </span>
                <ExternalLink className="w-4 h-4 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h2 className="text-xl font-semibold text-black font-brand mb-4">
                {org.title}
              </h2>
              <p className="text-black text-lg leading-relaxed mb-6">
                {org.description}
              </p>
              <a
                href={org.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg font-brand text-black hover:text-gray-700 transition-colors group/link"
              >
                Visit Organization
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="container section-pad text-center">
          {renderPunkHeading("Helpful Resources", "text-2xl md:text-3xl")}
          <p className="text-lg text-white max-w-3xl mx-auto text-left leading-relaxed mb-8">
            Explore the following organizations that provide vital services in
            mental health, food security, housing, and crisis support organized
            by neighborhood.
          </p>
          <PantriesSection />
        </div>
      </section>

      {/* Resources Grid */}
      <section className="container section-pad">
        {renderPunkHeading(
          "Food, Housing & More",
          "text-center text-white mb-8 text-2xl md:text-3xl"
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <article
              key={index}
              className="p-6 rounded-lg bg-cyan-500 border-2 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs tracking-wide uppercase text-black font-brand">
                  {resource.category}
                </span>
                <ExternalLink className="w-4 h-4 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h2 className="text-xl font-semibold text-black font-brand mb-4">
                {resource.title}
              </h2>

              <p className="text-black text-lg leading-relaxed mb-6">
                {resource.description}
              </p>

              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg font-brand text-black hover:text-gray-700 transition-colors group/link"
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
            If you or someone you know is in crisis, please reach out for help
            immediately. You are not alone.
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
  );
}
