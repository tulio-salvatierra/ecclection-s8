import Image from "next/image";

export function ProductsShowcase() {
  const categories = [
    {
      title: "Featured local artist spots & Lucky Finds",
      description:
        "We showcase a number of well curated pieces and collections, most of them are with us for a long time, only a few rotate which keeps things interesting and exciting for us.",
      image: "/products/odd.jpeg",
      video: "",
    },
    {
      title: "Graphic Tees & Mystery Wear",
      description:
        "Iconic tees, indie prints, tiny-batch makers, and tops that make strangers go 'Where did you get that?'",
      image: "",
      video: "/products/shirts.mp4",
    },
    {
      title: "Goth, Glitter & Glam Oddities",
      description:
        "Dark romance meets playful weird energy — lace, velvet, metal, and magical thrift-world creatures in between",
      image: "/products/goth.jpeg",
      video: "",
    },
    {
      title: "Boots, Platforms & Power Shoes",
      description:
        "Stompers, loafers, creepers, and sky-high platforms. Demonias and Doc Martens included.",
      image: "/products/boots.jpeg",
      video: "",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-brand text-cyan-500 text-4xl md:text-5xl mb-4">
            Curated Treasures & Curious Finds
          </h2>
          <p className="text-white text-lg max-w-2xl text-left mx-auto">
            Every piece has a past — and now it’s ready for its next adventure.{" "}
            <br />
            Step into a closet full of character: re-loved fashion, indie
            makers, vintage misfits, jewelry, mixed media art, crystals, wellness items, home décor, and unexpected gems. Sustainable, quirky,
            inclusive, and always one-of-a-kind — just like the people who shop
            here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border-2 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <div className="aspect-[4/3] relative rounded-sm overflow-hidden">
                {category.video ? (
                  <video
                    src={category.video}
                    className="absolute inset-0 w-full h-full object-cover "
                    autoPlay
                    loop
                    
                  />
                ) : (
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                )}
                
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-70">
                <h3 className="font-brand text-cyan-500 text-2xl font-bold mb-2">
                  {category.title}
                </h3>
                <p className="text-white text-lg">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-cyan-500 italic">
            Psst… new treasures arrive all the time — and disappear fast. Come
            browse, come play, come find your next favorite thing.
          </p>
        </div>
      </div>
    </section>
  );
}
