import React from "react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

const Domains = () => {
  const domains = [
    {
      title: "AWS",
      description: "This will be some random text that will be showcased here later after thoughtful consideration",
      buttonText: "View More",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      title: "Cyber Security",
      description: "This will be some random text that will be showcased here later after thoughtful consideration",
      buttonText: "Know More →",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V18H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z" />
        </svg>
      )
    },
    {
      title: "Networking",
      description: "This will be some random text that will be showcased here later after thoughtful consideration",
      buttonText: "Know More →",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,3A2,2 0 0,1 19,5V15A2,2 0 0,1 17,17H13V19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H7C5.89,17 5,16.1 5,15V5A2,2 0 0,1 7,3H17Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our <span className="text-orange-500">Domains</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                  {domain.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{domain.title}</h3>
                <p className="text-gray-400 mb-6">{domain.description}</p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  {domain.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
