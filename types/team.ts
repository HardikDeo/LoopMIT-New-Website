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
        description: "Team Lead at LoopMIT with an aeronautical engineering background, passionate about cutting-edge transportation technologies. I have hands-on knowledge of the pod’s levitation and propulsion systems while also overseeing the team’s workflow from a broader perspective, ensuring seamless collaboration and progress across technical and non-technical aspects.",
        linkedin: "https://www.linkedin.com/in/dhairya-berry-6758ab252?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      },
      {
        id: 2,
        name: "Daniel George Konat",
        position: "Team Manager",
        image: "/pictures/Member_pics/daniel.jpg",
        description: "As the Team Manager, I help oversee overall coordination, task delegation, and communication across all subsystems and college faculty. My role is to ensure smooth collaboration, timely progress, and alignment between the technical and management teams to achieve our competition and development goals efficiently.",
        linkedin: "https://www.linkedin.com/in/daniel-george-konat"
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
        description: "I’m part of the Electronics subsystem, working on designing and integrating core electronic systems for the pod. My focus is on developing efficient circuit architectures, sensor interfacing, and fault detection modules to ensure reliable and high-performance operation of the pod.",
        linkedin: "https://www.linkedin.com/in/b-satvik-prabhu-282456288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        id: 4,
        name: "Shreyas Chaudhary",
        position: "Electrical Head",
        image: "/pictures/Member_pics/shreyas.jpg",
        description: "As the Electrical Head at LoopMIT, I lead the design and development of high-voltage electrical systems and the powertrain for our hyperloop pod. My work focuses on creating efficient, safe, and high-performance electrical architectures — from circuit design to battery pack manufacturing — driving the core of our pod’s propulsion and power systems.",
        linkedin: "https://www.linkedin.com/in/shreyas-chaudhary-643963292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      },
      {
        id: 5,
        name: "Aaron Mathew George",
        position: "Data And Acquisition Head",
        image: "/pictures/Member_pics/aaron.jpg",
        description: "/",
        linkedin: "/"
      },
      {
        id: 6,
        name: "Pratham Mutalikdesai",
        position: "Mechanical Head",
        image: "/pictures/Member_pics/pratham.jpg",
        description: "/",
        linkedin: "/"
      },
      {
        id: 7,
        name: "Edwin Sajith Ainikkal",
        position: "Research Head",
        image: "/pictures/Member_pics/edwin.jpg",
        description: "I’m the Research Head, responsible for leading the team’s research initiatives and ensuring our innovations are documented through papers and patents.",
        linkedin: "https://www.linkedin.com/in/edwinainikkal"
      },
      {
        id: 8,
        name: "Prabhanjana P",
        position: "PR And Outreach Head",
        image: "/pictures/Member_pics/Prabhanjana_P.jpg",
        description: "I’m a senior member of Levitation and Propulsion subsystem and Head of PR and Outreach Subsystem, focusing on building E-Powertrain spdcifically Linear Induction Motors and getting sponsorships for the team. My goal is to make the most efficient Linear Induction Motor and guide the juniors as to how to go about it.",
        linkedin: "https://www.linkedin.com/in/prabhanjana-p"
      },
      {
        id: 24,
        name: "Prabhav Rajeev Nambiar",
        position: "Technical Head",
        image: "/pictures/Member_pics/prabhav.jpg",
        description: "/",
        linkedin: "/"
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
        position: "Senior Team Member",
        image: "/pictures/Member_pics/default.webp",
        description: "/",
        linkedin: "/"
      },
      {
        id: 10,
        name: "Prathamesh Khade",
        position: "Team Member",
        image: "/pictures/Member_pics/default.webp",
        description: "/",
        linkedin: "/"
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
        name: "Ananya Sahani",
        position: "Senior Team Member",
        image: "/pictures/Member_pics/default.webp",
        description: "I’m part of the Electrical, Electronics, and Coding subsystem, focusing on building the Graphical User Interface (GUI) for the pod. My goal is to create an intuitive and visually engaging interface that makes monitoring and controlling the pod effortless",
        linkedin: "https://www.linkedin.com/in/ananya-sahani-1413b9355/"
      },
      {
        id: 12,
        name: "Joyjeet Adhikary",
        position: "Team Member",
        image: "/pictures/Member_pics/default.webp",
        description: "Part of the Electrical, Electronics & Coding subsystem, I work with embedded systems and do electronics stuff.",
        linkedin: "https://www.linkedin.com/in/joyjeet-adhikary-058b99321"
      },
      {
        id: 13,
        name: "Vaishnavi Yerramsetty",
        position: "Team Member",
        image: "/pictures/Member_pics/default.webp",
        description: "I’m part of the Electrical, Electronics & Coding subsystem, where I work on PCB design and ESP32-based embedded systems to enable real-time control, communication, and data monitoring for the pod.",
        linkedin: "https://www.linkedin.com/in/vaishnavi-yerramsetty-956165322"
      },
      {
        id: 14,
        name: "Saujas J",
        position: "Team Member",
        image: "/pictures/Member_pics/default.webp",
        description: "I am part of the Electrical, Electronics, and Coding subsystem, focusing on sensor integration using ESP-32. I am also working on acquisition and analysis of real-time data from the pod as well as battery recharging via energy harvesting.",
        linkedin: "https://www.linkedin.com/in/saujas-j-a22790355"
      },
      {
        id: 15,
        name: "Mihir Jyothis R",
        position: "Team Member",
        image: "/pictures/Member_pics/default.webp",
        description: "Contributed to the design of the high-voltage electrical circuit for the Hyperloop pod at Loop MIT; currently working on battery pack optimization and energy-efficient pod transportation systems.",
        linkedin: "https://www.linkedin.com/in/mihir-jyothis-59bb37395"
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
        description: "Part of the mechanical subsystem.I work on aerodynamics, simulations and manufacturing",
        linkedin: "https://www.linkedin.com/in/aakash-sai-natarajan-a9a1b8214/"
      },
      {
        id: 17,
        name: "Sonali Saini",
        position: "Team member",
        image: "/pictures/Member_pics/default.webp",
        description: "I’m part of the Mechanical subsystem, focusing on the design, analysis, and integration of key mechanical components of the pod. My goal is to ensure structural stability, efficiency, and ease of assembly while contributing to the overall performance and reliability of the system.",
        linkedin: "https://www.linkedin.com/in/sonali-saini-256707331"
      },
      {
        id: 18,
        name: "Sidhant",
        position: "Team Member",
        image: "/pictures/Member_pics/default.webp",
        description: "/",
        linkedin: "/"
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
        description: "Member of Research Subsystem,focused on working with website development and regenerative braking.",
        linkedin: "https://www.linkedin.com/in/hardik-deo-b077a6344/"
      },
      {
        id: 20,
        name: "Sreekar Gopal",
        position: "Senior Team Member",
        image: "/pictures/Member_pics/default.webp",
        description: "Member Of Research Subsystem, My research is focused on power electronics and advanced control systems, with a particular emphasis on Model Predictive Control (MPC). I also support the team's objectives by documenting our findings and co-authoring technical research papers.",
        linkedin: "https://www.linkedin.com/in/sreekar-gopal-tamvada/"
      },
      {
        id: 21,
        name: "Hemesh Kukreja",
        position: "Senior Team Member",
        image: "/pictures/Member_pics/default.webp",
        description: "I’m part of the Research subsystem at LoopMIT, where I analyze the core technical concepts behind Hyperloop while also evaluating its business and economic feasibility. I focus on bridging theoretical innovation with practical scalability, ensuring the system is not only technologically sound but also sustainable and market-ready.",
        linkedin: "https://www.linkedin.com/in/hemesh-kukreja-1381401b7"
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
        description: "/",
        linkedin: "/"
      },
      {
        id: 23,
        name: " Mudit",
        position: "Senior Team Member",
        image: "/pictures/Member_pics/default.webp",
        description: "/",
        linkedin: "/"
      },
    ]
  }
];