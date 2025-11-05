"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Cover } from "@/components/ui/cover";
export function AppleCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full  mx-auto items-center">
      <div className="text-center ">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-600 to-neutral-400 bg-clip-text text-transparent">
          <Cover>Achievements</Cover>
        </h1>
        <p className="text-md md:text-lg font-semibold text-neutral-200 font-sans">
          Milestones that define our journey.
        </p>
      </div  >
      <div className="w-full h-full py-20 mx-auto justify-center">
      <Carousel items={cards} /></div>
    </div>
  );
}

const Content = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
            <div className="bg-neutral-800">
          <div
            key={"dummy-content" + index}
            className="bg-neutral-800 text-neutral-200 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-200 ">
              Global Hyperloop Competition 2025                
              </span>{" "}
              The Global Hyperloop Competition (GHC) is a prestigious, student-led international engineering challenge hosted by IIT Madras, India, focused on advancing research and innovation in Hyperloop technology. We emerged as the overall winners of the competition.
            </p>
            <div>
            <img 
              src="/pictures/GHC_images/img_1.JPG"
              
              height="700"
              width="700"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-3xl"
            />
            <img
              src="/pictures/GHC_images/img_2.JPG"
            
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-3xl"
            />
            <img
              src="/pictures/GHC_images/img_3.JPG"
            
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-3xl"
            />
            <img
              src="/pictures/GHC_images/img_4.jpg"
            
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-3xl"
            /></div>
          </div>
          </div>
        );
      })}
    </>
  );
};
const Content2 = () => {
    return (
      <>
        {[...new Array(1).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-400 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-300 dark:text-neutral-200">
                European Hyperloop Week              
                </span>{" "}
                European Hyperloop Week (EHW) is the largest annual student‑led Hyperloop competition and innovation conference in the world, focused on advancing Hyperloop technology. We cleared all the technical and the video rounds.</p>
              <img
                src="/pictures/GHC_images/img_8.jpg"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-3xl"
              />
              
            </div>
          );
        })}
      </>
    );
  };
  const Content3 = () => {
    return (
      <>
        {[...new Array(1).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-400 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-300 dark:text-neutral-200">
                ELEVATE – Team Levitate Hyperloop (GRAVITAS, VIT)              
                </span>{" "}
                ELEVATE was a two-day national-level design and simulation competition conducted by Team Levitate Hyperloop during GRAVITAS at VIT. The event brought together student innovators from across the country to design futuristic Maglev and Hyperloop levitation systems using advanced CAD/CAE tools.

Our team participated in the competition and emerged as the Winners of ELEVATE 2025. The contest involved a 25-minute design presentation followed by a 10-minute Q&A session with the judging panel comprising leading industry experts and academicians.

The event provided valuable exposure to Hyperloop technology, electromagnetic levitation, and advanced transport design, combining technical innovation with real-world engineering challenges.</p>
              <img
                src="/pictures/GHC_images/gravitas_VIT-2.jpg"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-3xl"
              />
              
            </div>
          );
        })}
      </>
    );
  };

const data = [
  {
    category: "Awards",
    title: "Global Hyperloop Competition 2025",
    src: "/pictures/GHC_images/img_3.JPG",
    content: <Content />,
  },
  {
    category: "Qualified",
    title: "European Hyperloop Week 2025",
    src: "/pictures/GHC_images/img_8.jpg",
    content: <Content2 />,

  },
  {
    category: "Awards",
    title: "ELEVATE – Team Levitate Hyperloop (GRAVITAS, VIT)",
    src: "/pictures/GHC_images/gravitas_VIT-2.jpg",
    content: <Content3 />,
    
  },
  
];
