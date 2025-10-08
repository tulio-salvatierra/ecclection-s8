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

  return (
    <section className={`container section-pad ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join us for exciting art events, workshops, and exhibitions throughout the year.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            {event.image && (
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-6xl opacity-50">🎨</div>
              </div>
            )}
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <Badge variant="secondary" className="text-xs">
                  {event.category}
                </Badge>
                {event.price && (
                  <span className="text-sm font-semibold text-primary">
                    {event.price}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {event.title}
              </h3>

              <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(event.date)}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {event.time}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
              </div>

              <p className="text-muted-foreground mb-4 line-clamp-3">
                {event.description}
              </p>

              <Button className="w-full" variant="outline">
                Learn More
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          View All Events
        </Button>
      </div>
    </section>
  );
}
