// components/Sponsors.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cover } from "./cover";
interface Sponsor {
  id: number;
  name: string;
  logo: string;
  url: string;
}

const Sponsors: React.FC = () => {
  const sponsors: Sponsor[] = [
    {
      id: 1,
      name: "Bossard",
      logo: "/pictures/sponsor_pics/bossard.png",
      url: "https://www.bossard.com/in-en/",
    },
    {
      id: 2,
      name: "SmartLink",
      logo: "/pictures/sponsor_pics/smartlink.png",
      url: "https://www.smartlinkstech.com/",
    },
    {
      id: 3,
      name: "SolidWorks",
      logo: "/pictures/sponsor_pics/solidworks.png",
      url: "https://www.solidworks.com/",
    },
    {
      id: 4,
      name: "SimScale",
      logo: "/pictures/sponsor_pics/simscale.png",
      url: "https://www.simscale.com/",
    },
    {
      id: 5,
      name: "Janatics",
      logo: "/pictures/sponsor_pics/janatics.png",
      url: "https://www.janatics.com/",
    },
    {
      id: 6,
      name: "ANSYS",
      logo: "/pictures/sponsor_pics/ansys logo.png",
      url: "https://www.ansys.com/en-in",
    },
    {
      id: 7,
      name: "Altium",
      logo: "/pictures/sponsor_pics/altium.png",
      url: "https://www.altium.com/",
    },
    {
      id: 8,
      name: "CADFEM",
      logo: "/pictures/sponsor_pics/cadfem.png",
      url: "https://www.cadfem.net/en/home.html",
    },
    {
      id: 9,
      name: "Ev Battery solutions",
      logo: "/pictures/sponsor_pics/ev battery.jpeg",
      url: "https://www.emworks.com/",
    },
    {
      id: 10,
      name: "Honeycomb",
      logo: "/pictures/sponsor_pics/honeycomb.png",
      url: "https://honeycombindia.com/",
    },
    {
      id: 11,
      name: "Dev components",
      logo: "/pictures/sponsor_pics/dev components.jpeg",
      url: "https://honeycombindia.com/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="sponsors" className="py-20 bg-transparent">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <Cover>Our Sponsors</Cover>
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Fueling innovation together with our valued sponsors
          </p>
          
        </motion.div>

        {/* Sponsors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8"
        >
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              variants={itemVariants}
              className="group"
            >
              <a
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-transparent rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative w-full h-20">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    fill
                    className="object-contain transition-all duration-300"
                  />
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;