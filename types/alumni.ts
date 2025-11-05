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
    id: "2019-20",
    name: "2019-20",
    description: "",
    icon: "",
    members: [
      {
        id: 1,
        name: "Jash Shah",
        position: "Founder,Team Lead",
        image: "/pictures/alumni/Jash_Shah.jpg",
        description: "Keep building!",
        linkedin: "https://www.linkedin.com/in/jash-shah-2b790146"
      },
      {
        id: 2,
        name: "Aashish Kumar",
        position: "Co-founder, Levitation Head",
        image: "/pictures/alumni/Aashish_Kumar.jpg",
        description: "Any idea can snowball into something much bigger than you ever imagined",
        linkedin: "https://www.linkedin.com/in/aashish-kumar-703915174"
      },
      {
        id: 3,
        name: "Preyaan Gupta",
        position: "Co-founder / Technical Head",
        image: "/pictures/alumni/Preyaan_Gupta.jpg",
        description: "Surreal to see the size of the community. Super proud of the members who have taken this project forward.",
        linkedin: "https://www.linkedin.com/in/preyaangupta/"
      },
      {
        id: 4,
        name: "Swetank Awasthi",
        position: "Co-founder and Structures Head",
        image: "/pictures/alumni/Swetank_Awasthi.jpg",
        description: "LoopMIT began as a bold idea—to bring futuristic transport closer to reality through student-led innovation.",
        linkedin: "https://www.linkedin.com/in/swetank-awasthi-b7a17624a"
      },
      {
        id: 5,
        name: "Karan Kapoor",
        position: "Co-founder, Vehicle Dynamics Lead",
        image: "/pictures/alumni/Karan_Kapoor.jpeg",
        description: "I believe this is one of the most exciting emerging technologies to work on. The skills developed are highly transferable.",
        linkedin: "https://www.linkedin.com/in/karan-kapoor-25b3ab145"
      },
      
    ]
  },

  {
    id: "2020-21",
    name: "2020-21",
    description: "Design and development of rocket engines and propulsion systems",
    icon: "🚀",
    members: [
      {
        id: 6,
        name: "Nikhil Gupta",
        position: "Electronics Subsystem Head",
        image: "/pictures/alumni/Nikhil_Gupta.jpg",
        description: "Keep forging ahead. I'm glad small setbacks never deterred the team and you guys did amazing!",
        linkedin: "https://www.linkedin.com/in/nikhil-gupta2/"
      },
      {
        id: 7,
        name: "Tejas Gajjala",
        position: "Propulsion Head",
        image: "/pictures/alumni/Tejas_Gajjala.jpg",
        description: "Your hands-on engineering, teamwork, and deep research are the real wins. Keep learning, keep building, keep loopin'.",
        linkedin: "https://www.linkedin.com/in/tejas-gajjala/"
      }
    ]
  },
  {
    id: "2021-23",
    name: "2021-23",
    description: "",
    icon: "",
    members: [
      {
        id: 8,
        name: "Abhishek Prakash",
        position: "Technical Head",
        image: "/pictures/alumni/Abhishek_Prakash.jpg",
        description: "You guys are doing absolutely amazing! Keep up the good work. Make sure you guide the juniors very well.",
        linkedin: "https://www.linkedin.com/in/abhishek-prakash-99744b199"
      },
      {
        id: 9,
        name: "Pugazhendhi Priyan",
        position: "Mechanical Head",
        image: "/pictures/alumni/Pugazhendhi_Priyan.jpeg",
        description: "To the heart and brilliance of LoopMIT, our collective pursuit of the extraordinary defines us. #keeploopin",
        linkedin: "https://www.linkedin.com/in/pugazhendhipriyan"
      },
      {
        id: 10,
        name: "Amrit R",
        position: "Team Leader",
        image: "/pictures/alumni/Amrit_R.jpg",
        description: "I'm so happy to see the team has finally started actively participating in competitions and excelling in them.",
        linkedin: "https://www.linkedin.com/in/amrit-r-h1410"
      },
      
    ]
  },
  {
    id: "2023-24",
    name: "2023-24",
    description: "Parachute systems and recovery mechanism design",
    icon: "🪂",
    members: [
      {
        id: 11,
        name: "Sougata Maji",
        position: "Technical Head",
        image: "/pictures/alumni/SOUGATA_MAJI.jpg",
        description: "It has been a great honour to serve this team. I'm incredibly proud of my juniors who have carried forward the legacy with consistency and dedication, helping us win our first prize.",
        linkedin: "https://www.linkedin.com/in/sougata-maji-15171a239"
      },
      {
        id: 12,
        name: "Sahil Sinha",
        position: "Electrical Head",
        image: "/pictures/alumni/Sahil_Sinha.jpg",
        description: "We're the future.... Believe in yourself.",
        linkedin: "https://www.linkedin.com/in/sahil-sinha-75b140236/"
      },
      {
        id: 13,
        name: "Shlok Singh Ahluwalia",
        position: "Team Manager",
        image: "/pictures/alumni/Shlok_Singh_Ahluwalia.jpg",
        description: "WORK.",
        linkedin: "https://www.linkedin.com/in/shlok-singh-ahluwalia-a1b56b225/"
      },
      {
        id: 14,
        name: "HimaNandhan Alla",
        position: "Mechanical Head",
        image: "/pictures/alumni/HimaNandhan_Alla.jpg",
        description: "Mahendra janatics.",
        linkedin: "https://www.linkedin.com/in/himanandhan-alla-b7a17624a"
      },
      {
        id: 15,
        name: "Rahul Sethia",
        position: "Levitation and Propulsion Head",
        image: "/pictures/alumni/Rahul_Sethia.jpg",
        description: "Being a part of this incredible journey has been one of the most rewarding experiences of my college life.",
        linkedin: "https://www.linkedin.com/in/rahul-sethia-b7a17624a"
      },

    ]
  },
  
];