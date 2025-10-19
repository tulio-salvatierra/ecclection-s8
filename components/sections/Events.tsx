// components/sections/Events.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  category: string;
  price?: string;
}

interface EventsProps {
  title?: string;
  events?: Event[];
  className?: string;
}

export function Events({ 
  title = "Upcoming Events",
  events = [
    {
      id: "1",
      title: "Community Art Workshop",
      date: "2024-02-15",
      time: "6:00 PM - 8:00 PM",
      location: "Ecclection Studio",
      description: "Join us for a hands-on art workshop where local artists will guide you through creating your own masterpiece.",
      category: "Workshop",
      price: "Free"
    },
    {
      id: "2",
      title: "Local Artists Exhibition",
      date: "2024-02-20",
      time: "7:00 PM - 10:00 PM",
      location: "Gallery Space",
      description: "Discover amazing works from our talented local artists. Opening night with live music and refreshments.",
      category: "Exhibition",
      price: "$15"
    },
    {
      id: "3",
      title: "Art & Wine Night",
      date: "2024-02-25",
      time: "7:30 PM - 9:30 PM",
      location: "Ecclection Lounge",
      description: "Unwind with wine and create art in a relaxed, social atmosphere. Perfect for beginners and experienced artists alike.",
      category: "Social",
      price: "$25"
    }
  ],
  className = "" 
}: EventsProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  console.log(events);

  return (
    <section className={`container section-pad ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-brand mb-4">
        Bi‑Monthly Artist &amp; Community Appreciation Night
        </h2>
        <p className="text-lg text-white max-w-2xl mx-auto">
        Every other month, <strong>Ecclection</strong> in <strong>Portage Park, Chicago</strong> hosts an evening celebrating 
          <strong> local artists</strong>, creativity, and neighborhood connection. Meet featured makers, enjoy demos, and connect with 
          neighbors in a welcoming space that supports diversity and inclusion.
            </p>
            <p className="text-white text-center mt-8 max-w-3xl mx-auto">
            Stay connected with <strong>Ecclection</strong>! Follow us on social media for event updates, featured artists, and behind‑the‑scenes moments from our <strong>Portage Park</strong> community.  
            <br />
            <a href="https://www.instagram.com/ecclectionchicago" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-300">
              Instagram
            </a>{" "}
            |{" "}
            <a href="https://www.facebook.com/ecclectionchicago" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-300">
              Facebook
            </a>{" "}
            |{" "}
            <a href="https://www.tiktok.com/@ecclectionchicago" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-300">
              TikTok
            </a>
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <li className="bg-cyan-600 border-2 border-black shadow-[6px_6px_0_0_#000] p-4 text-center text-black font-brand">
              Celebrate Local Artists
            </li>
            <li className="bg-cyan-600 border-2 border-black shadow-[6px_6px_0_0_#000] p-4 text-center text-black font-brand">
              Build Community Connections
            </li>
            <li className="bg-cyan-600 border-2 border-black shadow-[6px_6px_0_0_#000] p-4 text-center text-black font-brand">
              Visit Us: 6059 W. Irving Park Rd, Chicago
            </li>
          </ul>
         
      </div>      
    </section>
  );
}
