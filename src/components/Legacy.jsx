import React from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"

const Legacy = () => {
  const legacyEvents = [
    { title: "TYPOVERSE 2.0", image: "/images/1.jpg" },
    { title: "TYPOVERSE 1.0", image: "/images/2.jpg" },
    { title: "TYPOVERSE 3.0", image: "/images/3.jpg" },
    { title: "TYPOVERSE 4.0", image: "/images/4.jpg" },
    { title: "TYPOVERSE 5.0", image: "/images/5.jpg" },
    { title: "TYPOVERSE 6.0", image: "/images/6.jpg" }
  ];

  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our <span className="text-orange-500">Legacy</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {legacyEvents.map((item, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image || "/placeholder.svg"} 
                  alt={item.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-bold">{item.title}</h3>
                  <p className="text-gray-300 text-sm">
                    This will be some random text that will be showcased here later after thoughtful consideration
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
