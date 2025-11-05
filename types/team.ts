// types/team.ts
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  description: string;
  linkedin: string;
}

export interface Subsystem {
  id: string;
  name: string;
  description: string;
  icon: string;
  members: TeamMember[];
}

export const subsystems: Subsystem[] = [
  {
    id: "Head",
    name: "The Board",
    description: "Responsible for all electronic systems, PCB design, and circuit development",
    icon: "⚡",
    members: [
      {
        id: 1,
        name: "Dhairya Kumar Berry",
        position: "Team Leader",
        image: "/pictures/Member_pics/dhairya.jpg",
        description: "Expert in embedded systems and PCB design. Manages all electronic subsystems including power distribution and sensor integration.",
        linkedin: "/"
      },
      {
        id: 2,
        name: "Daniel Konat",
        position: "Team Manager",
        image: "/pictures/Member_pics/daniel.jpg",
        description: "Specialized in circuit design and signal processing. Designs and tests all custom PCBs for the system.",
        linkedin: "https://linkedin.com/in/davidkim"
      },
      
    ]
  },

  {
    id: "subsystem heads",
    name: "",
    description: "Design and development of rocket engines and propulsion systems",
    icon: "🚀",
    members: [
      {
        id: 3,
        name: "B Satvik Prabhu",
        position: "Electronics Head",
        image: "/pictures/Member_pics/satvik.jpg",
        description: "Leading the propulsion team with expertise in rocket engine design and combustion systems.",
        linkedin: "https://linkedin.com/in/sarahjohnson"
      },
      {
        id: 4,
        name: "Shreyas Chaudhary",
        position: "Electrical Head",
        image: "/pictures/Member_pics/shreyas.jpg",
        description: "Specialized in fluid dynamics and propulsion system optimization.",
        linkedin: "https://linkedin.com/in/michaelchen"
      },
      {
        id: 5,
        name: "Aaron Mathew George",
        position: "Data And Acquisition Head",
        image: "/pictures/Member_pics/aaron.jpg",
        description: "Specialized in fluid dynamics and propulsion system optimization.",
        linkedin: "https://linkedin.com/in/michaelchen"
      },
      {
        id: 6,
        name: "Pratham Mutalikdesai",
        position: "Mechanical Head",
        image: "/pictures/Member_pics/pratham.jpg",
        description: "Specialized in fluid dynamics and propulsion system optimization.",
        linkedin: "https://linkedin.com/in/michaelchen"
      },
      {
        id: 7,
        name: "Edwin Ainnikal",
        position: "Research Head",
        image: "/pictures/Member_pics/edwin.jpg",
        description: "Specialized in fluid dynamics and propulsion system optimization.",
        linkedin: "https://linkedin.com/in/michaelchen"
      },
      {
        id: 8,
        name: "Prabhanjana P",
        position: "PR And Outreach Head",
        image: "/pictures/Member_pics/Prabhanjana_P.jpg",
        description: "Specialized in fluid dynamics and propulsion system optimization.",
        linkedin: "https://linkedin.com/in/michaelchen"
      },
      {
        id: 24,
        name: "Prabhav Rajeev Nambiar",
        position: "Technical Head",
        image: "/pictures/Member_pics/prabhav.jpg",
        description: "Specialized in fluid dynamics and propulsion system optimization.",
        linkedin: "https://linkedin.com/in/michaelchen"
      },
      
    ]
  },
  {
    id: "Levitation And Propulsion",
    name: "Levitation And Propulsion",
    description: "Design and development of rocket engines and propulsion systems",
    icon: "🚀",
    members: [
      {
        id: 9,
        name: "Rounak Pradhan",
        position: "Levitation And Propulsion",
        image: "/pictures/Member_pics/default.webp",
        description: "Leading the propulsion team with expertise in rocket engine design and combustion systems.",
        linkedin: "https://linkedin.com/in/sarahjohnson"
      },
      {
        id: 10,
        name: "Prathamesh Khade",
        position: "Propulsion Engineer",
        image: "/pictures/Member_pics/default.webp",
        description: "Specialized in fluid dynamics and propulsion system optimization.",
        linkedin: "https://linkedin.com/in/michaelchen"
      }
    ]
  },
  {
    id: "Electronics",
    name: "Electronics,Electrical And Coding",
    description: "Airframe design, structural analysis, and composite materials",
    icon: "🏗️",
    members: [
      {
        id: 11,
        name: "Ananya",
        position: "Electronics",
        image: "/pictures/Member_pics/default.webp",
        description: "Expert in composite materials and structural analysis. Oversees all structural design and testing.",
        linkedin: "https://linkedin.com/in/alexandrapark"
      },
      {
        id: 12,
        name: "Joyjeet Adhikary",
        position: "Electronics",
        image: "/pictures/Member_pics/default.webp",
        description: "Specialized in 3D modeling and finite element analysis for structural components.",
        linkedin: "https://linkedin.com/in/jameswilson"
      },
      {
        id: 13,
        name: "Vaishnavi",
        position: "Electronics",
        image: "/pictures/Member_pics/default.webp",
        description: "Specialized in 3D modeling and finite element analysis for structural components.",
        linkedin: "https://linkedin.com/in/jameswilson"
      },
      {
        id: 14,
        name: "Soujas",
        position: "Electronics",
        image: "/pictures/Member_pics/default.webp",
        description: "Specialized in 3D modeling and finite element analysis for structural components.",
        linkedin: "https://linkedin.com/in/jameswilson"
      },
      {
        id: 15,
        name: "Mihir",
        position: "Electronics",
        image: "/pictures/Member_pics/default.webp",
        description: "Specialized in 3D modeling and finite element analysis for structural components.",
        linkedin: "https://linkedin.com/in/jameswilson"
      }
    ]
  },
  {
    id: "Mechanical",
    name: "Mechanical",
    description: "Parachute systems and recovery mechanism design",
    icon: "🪂",
    members: [
      {
        id: 16,
        name: "Aakash Sai Natarajan",
        position: "Senior Team Member",
        image: "/pictures/Member_pics/default.webp",
        description: "Expert in parachute systems and recovery mechanics. Ensures safe recovery of all components.",
        linkedin: "https://linkedin.com/in/lisathompson"
      },
      {
        id: 17,
        name: "Sonali Saini",
        position: "Team member",
        image: "/pictures/Member_pics/default.webp",
        description: "Expert in parachute systems and recovery mechanics. Ensures safe recovery of all components.",
        linkedin: "https://linkedin.com/in/lisathompson"
      },
      {
        id: 18,
        name: "Sidhant",
        position: "Team Member",
        image: "/pictures/Member_pics/default.webp",
        description: "Expert in parachute systems and recovery mechanics. Ensures safe recovery of all components.",
        linkedin: "https://linkedin.com/in/lisathompson"
      },

    ]
  },
  {
    id: "Research",
    name: "Research",
    description: "Flight software, data processing, and simulation development",
    icon: "💻",
    members: [
      {
        id: 19,
        name: "Hardik Deo",
        position: "Senior Team Member",
        image: "/pictures/Member_pics/default.webp",
        description: "Develops flight software and data processing systems. Manages all software development pipelines.",
        linkedin: "https://linkedin.com/in/ryanpatel"
      },
      {
        id: 20,
        name: "Sreekar",
        position: "Senior Team Member",
        image: "/pictures/Member_pics/default.webp",
        description: "Works on machine learning algorithms for data analysis and system optimization.",
        linkedin: "https://linkedin.com/in/sophiachen"
      },
      {
        id: 21,
        name: "Hemesh Kukreja",
        position: "Mechanical Head",
        image: "/pictures/Member_pics/default.webp",
        description: "Expert in parachute systems and recovery mechanics. Ensures safe recovery of all components.",
        linkedin: "https://linkedin.com/in/lisathompson"
      },
    ]
  },
  {
    id: "Management",
    name: "Management",
    description: "Flight software, data processing, and simulation development",
    icon: "💻",
    members: [
      {
        id: 22,
        name: "Maitreya",
        position: "Senior Team Member",
        image: "/pictures/Member_pics/default.webp",
        description: "Develops flight software and data processing systems. Manages all software development pipelines.",
        linkedin: "https://linkedin.com/in/ryanpatel"
      },
      {
        id: 23,
        name: " Mudit",
        position: "Senior Team Member",
        image: "/pictures/Member_pics/default.webp",
        description: "Works on machine learning algorithms for data analysis and system optimization.",
        linkedin: "https://linkedin.com/in/sophiachen"
      },
    ]
  }
];