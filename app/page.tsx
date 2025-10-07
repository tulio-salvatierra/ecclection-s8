import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Calendar, Users, Palette } from "lucide-react"

export default function EcclectionWireframe() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Always Visible Contact */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Palette className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary font-[var(--font-playfair)]">Ecclection</h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#artists" className="text-foreground hover:text-primary transition-colors">
                Artists
              </a>
              <a href="#events" className="text-foreground hover:text-primary transition-colors">
                Events
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>

            {/* Always Visible Contact Info */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="hidden lg:flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(555) 123-ARTS</span>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Visit Us
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden bg-muted">
            <img
              src="/vibrant-art-gallery-interior-with-local-artwork-di.jpg"
              alt="Ecclection shop interior showcasing local art"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-white text-center">
                <h2 className="text-5xl font-bold mb-4 font-[var(--font-playfair)] text-balance">
                  Welcome to Ecclection
                </h2>
                <p className="text-xl mb-6 text-pretty">
                  Where local art meets community spirit – come discover something uniquely you!
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Don't be shy — stop by!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section id="artists" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-[var(--font-playfair)] text-primary">Meet Our Local Artists</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the incredible talent in our community – each piece tells a story, each artist brings magic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((artist) => (
              <Card key={artist} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="h-48 bg-muted rounded-t-lg overflow-hidden">
                    <img
                      src={`/local-artist-.jpg?height=200&width=300&query=local artist ${artist} artwork display colorful creative`}
                      alt={`Artist ${artist} featured work`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">Artist Name {artist}</CardTitle>
                  <CardDescription className="text-sm">
                    "Creating magic with [medium] – inspired by our community's vibrant energy"
                  </CardDescription>
                  <Badge variant="secondary" className="mt-2">
                    Featured This Month
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Events Section */}
      <section id="events" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-[var(--font-playfair)] text-primary">Community Happenings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Join us for workshops, art walks, and creative collaborations that bring our community together
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Art Walk Friday",
                date: "Every Friday 6-9pm",
                desc: "Stroll through local galleries and meet artists",
              },
              {
                title: "Pottery Workshop",
                date: "Sat, March 15",
                desc: "Get your hands dirty with clay and creativity",
              },
              {
                title: "Community Mural",
                date: "Ongoing Project",
                desc: "Add your mark to our collaborative wall art",
              },
              { title: "Artist Spotlight", date: "First Thursday", desc: "Monthly feature of a local creative talent" },
              { title: "Kids Art Camp", date: "Summer Sessions", desc: "Nurturing the next generation of artists" },
              { title: "Open Mic Night", date: "Last Saturday", desc: "Share your poetry, music, or spoken word" },
            ].map((event, index) => (
              <Card key={index} className="border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-5 w-5 text-secondary" />
                    <Badge variant="outline">{event.date}</Badge>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{event.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unified About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-[var(--font-playfair)] text-primary">Our Story & Mission</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Ecclection isn't just a shop – it's a celebration of the incredible artistic talent that lives right
                  here in our community. We believe that art should be accessible, authentic, and absolutely everywhere.
                </p>
                <p>
                  Founded with a passion for supporting local creators, we've become a gathering place where artists
                  connect, visitors discover something special, and community bonds grow stronger through shared
                  creativity.
                </p>
                <p className="text-primary font-semibold">
                  Every piece in our collection has a story. Every artist brings something unique. Every visitor leaves
                  with a little more inspiration.
                </p>
              </div>

              <div className="mt-8 flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-secondary" />
                  <span className="font-semibold">50+ Local Artists</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Palette className="h-5 w-5 text-secondary" />
                  <span className="font-semibold">Community Focused</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-64 bg-muted rounded-lg overflow-hidden">
                <img
                  src="/shop-owner-smiling-in-art-gallery-surrounded-by-co.jpg"
                  alt="Shop owner in Ecclection surrounded by local art"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-muted rounded-lg overflow-hidden">
                  <img
                    src="/community-art-workshop-people-creating-together.jpg"
                    alt="Community workshop in action"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-32 bg-muted rounded-lg overflow-hidden">
                  <img
                    src="/eclectic-art-display-colorful-creative-local-piece.jpg"
                    alt="Eclectic art display"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-[var(--font-playfair)] text-primary">Come Find Us!</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ready to explore? We'd love to meet you and share the magic of local art
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Visit Our Shop</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  123 Creative Street
                  <br />
                  Arts District
                  <br />
                  Your City, ST 12345
                </p>
                <p className="mt-2 text-sm font-semibold">Open Tue-Sun, 10am-7pm</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Give Us a Ring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">(555) 123-ARTS</p>
                <p className="text-muted-foreground mt-2">
                  Questions about events?
                  <br />
                  Want to showcase your art?
                  <br />
                  Just want to chat? Call us!
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Drop Us a Line</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">hello@ecclection.com</p>
                <p className="text-muted-foreground mt-2">
                  Artist inquiries welcome
                  <br />
                  Event collaborations
                  <br />
                  General questions & love notes
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Plan Your Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Palette className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-primary font-[var(--font-playfair)]">Ecclection</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Celebrating local art and fostering community connections through creativity.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#artists" className="hover:text-primary transition-colors">
                    Featured Artists
                  </a>
                </li>
                <li>
                  <a href="#events" className="hover:text-primary transition-colors">
                    Upcoming Events
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">
                    Visit Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Artist Applications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Workshop Schedule
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Volunteer Opportunities
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Newsletter Signup
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Follow our creative journey</p>
                <div className="flex space-x-4 mt-3">
                  <Badge variant="outline">Instagram</Badge>
                  <Badge variant="outline">Facebook</Badge>
                </div>
                <p className="mt-3 text-xs">Share your Ecclection finds with #EcclectionFinds</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Ecclection. Made with ❤️ for our creative community.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
