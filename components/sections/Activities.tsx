import { Button } from "@/components/ui/button";

export function StoreActivities() {
  const activities = [
    {
      title: "DIY Customization Nights for Kids",
      day: "Second Saturday",
      time: "6PM - 9PM",
      description:
        "Bring your thrifted finds and customize them with our patches, studs, and sewing supplies.",
    },
    {
      title: "Arter Box — Trade Without Currency",
      day: "Daily",
      time: "All Day",
      description:
        "Bring something interesting, unusual, or fashion-forward and swap it for something equally weird and wonderful. Currency? Never heard of her.",
    },
    {
      title: "Wheel of Good Fortune",
      day: "Surprise Pop‑Ups",
      time: "Random Times",
      description:
        "Spin the wheel for discounts, freebies, and mysterious prizes. Warning: fortunes may include glitter, joy, or both.",
    },
    {
      title: "Find Waldo Discounts",
      day: "Random Days",
      time: "Whenever Waldo Appears",
      description:
        "Spot Waldo hiding somewhere in the shop or on our Instagram stories and get surprise discounts or freebies. Happy hunting!",
    },
    {
      title: "Donation Drop — Diamonds Welcome",
      day: "Always",
      time: "Store Hours",
      description:
        "We take clothing, art supplies, décor, and… obviously gold coins and diamonds. Jokes aside, your donations help our sustainability mission.",
    },
  ];

  return (
    <section className="bg-muted/30 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-brand text-cyan-500 text-4xl md:text-5xl mb-4">
            More Than a Store
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            We're a community hub for family, artists, and neighbours. Join us
            for events that celebrate culture, community, diversity inclusion,
            enviromentalism and a good time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-background p-4 rounded-md shadow-2xltext-black border-2 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-brand text-xl font-bold text-foreground">
                  {activity.title}
                </h3>
                <div className=" mt-2 flex-shrink-0 ml-4">
                  <img src="/spider.png" alt="Check" />
                </div>
              </div>
              <div className="flex gap-4 mb-3 text-sm">
                <span className="text-accent font-bold">{activity.day}</span>
                <span className="text-muted-foreground">{activity.time}</span>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center  border-cyan-500 pt-8">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-base md:text-lg px-8 py-6 font-brand tracking-wide border-2 border-black shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
          >
            COME VISIT TODAY!
          </Button>
        </div>
      </div>
    </section>
  );
}
