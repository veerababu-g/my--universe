
import { Project, Education, SkillGroup, Achievement } from './types';

export const PERSONAL_INFO = {
  name: "VEERABABU GIRAJALA",
  email: "girajalaveerababu2@gmail.com",
  phone: "+91-6302533612",
  linkedin: "http://www.linkedin.com/in/veerababu-girajala",
  github: "http://github.com/veerababu-g",
  leetcode: "https://leetcode.com/u/veerababu2/",
  codechef: "https://www.codechef.com/users/wise_plant_28",
  resumeUrl: "https://drive.google.com/file/d/1yj5JG0o-6Jmaj81MbSNhAVqPfbS5s7KV/view?usp=sharing", // Placeholder for actual resume link
  summary: "Final-year Electronics & Communication Engineering student skilled in Full-Stack Development, AI/ML, and Cloud technologies. Experienced in building responsive web applications, REST API integrations, and IoT prototypes. Seeking global Job opportunities to contribute to impactful projects and gain cross-border software engineering experience."
};

export const PROJECTS: Project[] = [
  {
    title: "Book Hub (Goodreads Clone)",
    subtitle: "React.js, Node.js, Bootstrap, REST APIs",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800",
    category: "software",
    description: [
      "Developed a responsive Goodreads-like web app enabling users to log in, explore categorized bookshelves, and track reading progress.",
      "Integrated third-party APIs for real-time book data and implemented secure authentication flows."
    ],
    tags: ["React", "Node.js", "Bootstrap", "Auth"],
    liveUrl: "https://veeraabookhub.ccbp.tech/login",
    githubUrl: "https://veeraabookhub.ccbp.tech/login"
  },
  {
    title: "Smart Farmer AI",
    subtitle: "Voice & Vision Farming Assistant",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=800",
    category: "software",
    description: [
      "AI assistant diagnosing crop diseases from images and providing advice via Gemini STT/TTS.",
      "Features live market insights and soil analysis integration for rural farmers."
    ],
    tags: ["React", "Flask", "Gemini AI", "Computer Vision"],
    liveUrl: "https://smart-ai-farmer.vercel.app/",
    githubUrl: "https://github.com/veerababu-g/SMART-AI-FARMER"
  },
  {
    title: "Sport Court Booking System",
    subtitle: "React.js, Node.js, MongoDB, Express.js",
    image: "https://i.ibb.co/JR2nKNFF/sport.png",
    category: "software",
    description: [
      "Developed a full-stack platform for users to browse, check availability, and book various sports courts (Badminton, Tennis, etc.) in real-time.",
      "Built a comprehensive admin dashboard to manage court listings, operational hours, pricing, and view booking analytics.",
      "Integrated secure user authentication and a responsive UI to ensure a seamless booking experience across mobile and desktop devices."
    ],
    tags: ["React", "Node.js", "MongoDB", "Express", "Full Stack", "Booking System"],
    liveUrl: "https://sport-court-booking-seven.vercel.app/#/",
    githubUrl: "https://github.com/veerababu-g/SPORT-COURT-BOOKING"
  },
  {
    title: "IoT Patient Monitoring",
    subtitle: "ESP32, Pulse Oximeter, Cloud Dashboard",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    category: "embedded",
    description: [
      "Developed a system to monitor heart rate and oxygen levels remotely using ESP32 and specialized sensors.",
      "Implemented a real-time web dashboard for doctors to track patient history and receive emergency alerts."
    ],
    tags: ["ESP32", "C++", "IoT", "MQTT", "Sensors"],
    githubUrl: "https://github.com/veerababu-g/iot-patient-monitor"
  },
  {
    title: "Automated Irrigation System",
    subtitle: "Arduino, Soil Moisture, Solenoid Valve",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800",
    category: "embedded",
    description: [
      "Designed a smart watering system that activates based on soil moisture levels, reducing water waste by 30%.",
      "Features an LCD interface for local monitoring and manual override controls."
    ],
    tags: ["Arduino", "Embedded C", "Hardware Design"],
    githubUrl: "https://github.com/veerababu-g/auto-irrigation"
  },
  {
    title: "Finance System ERP",
    subtitle: "Spring Boot, Java, MySQL, Thymeleaf",
    image: "https://i.ibb.co/ksJkcn6P/Gemini-Generated-Image-ctmosfctmosfctmo.png",
    category: "software",
    description: [
      "Developed a comprehensive Enterprise Resource Planning (ERP) system tailored for financial management, including modules for accounting, invoicing, and expense tracking.",
      "Implemented automated financial reporting features to generate balance sheets, profit and loss statements, and cash flow analysis in real-time."
    ],
    tags: ["Spring Boot", "Java", "MySQL", "Thymeleaf"],
    liveUrl:"https://finance-system-erp.vercel.app/",
    githubUrl: "https://github.com/veerababu-g/-Finance-System-ERP-"
  },
  
];

export const SKILLS: SkillGroup[] = [
  { category: "Languages", items: ["Python", "C", "C++", "JavaScript","Java"] },
  { category: "Frameworks", items: ["React.js", "Node.js", "Express","Flask" ] },
  { category: "AI/ML", items: [ "NumPy", "Pandas"] },
  { category: "Tools", items: ["Git", "AWS"] },
  { category: "Databases", items: [ "MySQL", "MongoDB","Spring Boot"] }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Technology in Electronics & Communication Engineering (ECE)",
    institution: "Lenora College of Engineering",
    location: "East Godavari",
    period: "2023 – 2026",
    gpa: "8.0/10"
  },
  {
    degree: "Diploma in Electronics & Communication Engineering (ECE)",
    institution: "Government Polytechnic College",
    location: "Vijayawada",
    period: "2020 – 2023",
    gpa: "8.4/10"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Programming Foundations with Python",
    organization: "CCBP Academy",
    date: "2024",
    certificateUrl: "https://certificates.ccbp.in/academy/programming-foundations-with-python?id=PSQLKFMOXM"
  },
  {
    title: "React.js Certification",
    organization: "CCBP Academy",
    date: "2025",
    certificateUrl: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/VZDKYOMHEI.png"
  },
  {
    title: "Data Analytics Simulation",
    organization: "Deloitte Australia - Forage",
    date: "2025",
    certificateUrl: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_LGxT9xBWGyrrpkf62_1757740670520_completion_certificate.pdf"
  },
  {
    title: "Build Your Own Dynamic Web Application",
    organization: "CCBP Academy",
    date: "2025",
    certificateUrl: "https://certificates.ccbp.in/academy/dynamic-web-application?id=ENEXENJYMR"
  },
  {
    title: "IoT Fundamentals",
    organization: "Cisco Networking Academy",
    date: "2023",
    certificateUrl: "#"
  },
  {
    title:"AWS Certifications ",
    organization: "ccbp academy",
    date: "2024",
    certificateUrl: "https://cdn1.ccbp.in/misc/aws-workshop-completion-certificate/TPKQGAIIS1.png"
  }
  ,{
    title:"Build Your Own Static Website Certificate",
    organization: "ccbp academy",
    date: "2024",
    certificateUrl: "https://certificates.ccbp.in/academy/static-website?id=VNVOPMOKUF"
  },
  {
    title:"Build Your Own Responsive Website",
    organization: "ccbp academy",
    date: "2024",
    certificateUrl: "https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=OLYOQELMKV"
  },
  {
    title:"",
    organization: "ccbp academy",
    date: "2024",
    certificateUrl: "#"
  }
];
