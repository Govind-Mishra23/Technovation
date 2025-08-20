import React from "react"
import { Button } from "./ui/button"

const AboutUs = () => {
  return (
    <section className="bg-gray-900 px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-80 flex items-center justify-center">
          {/* First spiral image - main image on the left */}
          <div className="absolute left-24 -top-24 w-60 h-80 z-20">
            <img
              src="/images/about1.png"
              alt="Abstract spiral 1"
              className="w-full h-full object-cover rounded-3xl"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(249, 115, 22, 0.6)) brightness(1.1)'
              }}
            />
          </div>
          
          {/* Second spiral image - overlapping from behind/right */}
          <div className="absolute right-4 top-16 w-60 h-80 z-10">
            <img
              src="/images/about2.jpg"
              alt="Abstract spiral 2"
              className="w-full h-full object-cover rounded-3xl"
              style={{
                filter: 'drop-shadow(0 0 35px rgba(249, 115, 22, 0.5)) brightness(1.05)'
              }}
            />
          </div>
        </div>
        
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-6 tracking-wide">
            ABOUT <span className="text-orange-500">US</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 text-sm max-w-sm">
            The rain began without warning, each drop landing like a small secret whispered against the pavement. Streetlights blinked uncertainly, as if deciding whether to stay awake, and a stray newspaper skittered past like it had somewhere urgent to be. A man in a green coat stood at the corner, staring at the sky as though expecting an answer..................
          </p>
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-l-md font-medium relative"
            style={{
              clipPath: 'polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%)'
            }}
          >
            Know More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
