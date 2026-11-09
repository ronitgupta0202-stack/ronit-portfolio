export const personalInfo = {
  name: "Ronit Gupta",
  headline: "AI & Software Development Enthusiast",
  subtext: "Computer Engineering Student at University of Mumbai",
  location: "Mumbai, India",
  phone: "8097814619",
  email: "roniitgupta0202@gmail.com",
  githubUsername: "ronitgupta0202-stack",
  githubUrl: "https://github.com/ronitgupta0202-stack",
  linkedinName: "Ronit Gupta",
  linkedinUrl: "https://www.linkedin.com/in/ronit-gupta-121859333/",
  resumePdfUrl: "/resume.pdf",
  summary: "B.Tech Computer Science student at Mumbai University with hands-on experience through two internships in AI Content Curation and CAD & Web Development. Passionate about Software Development, AI, and continuously learning by participating in hackathons, Microsoft tech events, and industry workshops. Eager to apply problem-solving, web development, and AI skills to build impactful real-world solutions.",
  status: "Available for Software Engineering & AI Internships / Roles"
};

export const education = [
  {
    degree: "Bachelor of Engineering - BE, Computer Engineering",
    institution: "University of Mumbai",
    location: "Mumbai, India",
    period: "Expected graduation: May 2027",
    highlights: [
      "Specializing in Computer Engineering with focus on Software Development, Data Structures, and AI.",
      "Active participant in hackathons, Microsoft technology conferences, and industry skill workshops.",
      "Pursuing certifications across AI, Cybersecurity, Software Engineering, and Web Analytics."
    ]
  }
];

export const experience = [
  {
    role: "CAD Design & Web Development Intern",
    company: "Engineering Solutions",
    period: "01 February 2026 - 28 February 2026",
    location: "Mumbai, India",
    type: "Internship",
    responsibilities: [
      "Created and modified technical drawings using CAD software to support engineering specifications.",
      "Supported frontend and backend development tasks, including bug fixing, unit testing, and component refinement.",
      "Collaborated with cross-functional team members to deliver technical project requirements on schedule.",
      "Developed responsive, accessible web pages using modern HTML, CSS, and JavaScript."
    ],
    skillsUsed: ["CAD Software", "HTML5", "CSS3", "JavaScript", "Team Collaboration"]
  },
  {
    role: "AI Content Curator Intern",
    company: "Nextleap",
    period: "01 June 2025 - 30 June 2025",
    location: "Mumbai, India",
    type: "Internship",
    responsibilities: [
      "Converted digitized content into clean, structured HTML formats suitable for web publishing.",
      "Identified and resolved complex HTML syntax, layout, and formatting errors to ensure accurate web rendering.",
      "Assisted in training Generative AI models by curating, evaluating, and validating high-quality dataset content."
    ],
    skillsUsed: ["Generative AI", "HTML5", "Data Curation", "Quality Assurance"]
  }
];

export const projects = [
  {
    id: "ecobatch-ai",
    title: "EcoBatch AI",
    tagline: "AI-Based Batch Optimization Platform",
    description: "An intelligent platform engineered for batch process optimization in industrial and manufacturing workflows. It processes user input data to generate optimized resource usage schedules, directly minimizing raw material waste and operational overhead while advocating sustainable manufacturing.",
    techStack: ["Python", "Generative AI", "HTML5", "CSS3", "JavaScript"],
    keyFeatures: [
      "Analyzes user-provided data parameters to generate highly efficient processing solutions.",
      "Optimizes resource utilization to significantly reduce material waste and operational costs.",
      "Promotes eco-friendly, energy-efficient, and sustainable manufacturing practices.",
      "Designed specifically to improve output efficiency while minimizing carbon and environmental footprint."
    ],
    githubUrl: "https://github.com/ronitgupta0202-stack/eco-batch-ai",
    badge: "AI & Sustainability"
  },
  {
    id: "attendance-face-detection",
    title: "Attendance Management System",
    tagline: "Real-Time Face Detection & Automated Logging",
    description: "A Python and OpenCV-based computer vision solution built to automate event and classroom attendance. By leveraging real-time facial recognition algorithms, it eliminates manual headcount errors and duplicate attendance entries effortlessly.",
    techStack: ["Python", "OpenCV", "Generative AI", "Computer Vision"],
    keyFeatures: [
      "Automates attendance logging through real-time facial recognition algorithms.",
      "Captures and identifies multiple attendees simultaneously with a 5-second detection interval.",
      "Dramatically reduces manual attendance error margins, paper waste, and duplicate entries.",
      "Designed to solve real-world institutional attendance management reliably."
    ],
    githubUrl: import.meta.env.VITE_ATTENDANCE_REPO_URL || "",
    badge: "Computer Vision"
  },
  {
    id: "cinema-ticket-booking",
    title: "Cinema Seat Ticket Booking System",
    tagline: "Automated Object-Oriented Ticketing Application",
    description: "A robust Java desktop application created to automate movie selection, seat allocation, timing schedules, and booking confirmations. Built adhering strictly to core Object-Oriented Programming (OOP) principles for scalability and maintainability.",
    techStack: ["Java", "OOP", "Algorithm Design"],
    keyFeatures: [
      "Enables seamless movie selection, customizable show timings, and interactive seat booking.",
      "Implements real-time seat availability matrix and instant booking confirmation output.",
      "Automates end-to-end ticketing workflow to deliver a streamlined user experience.",
      "Applies Object-Oriented Programming (Encapsulation, Polymorphism, Abstraction) effectively."
    ],
    githubUrl: "https://github.com/ronitgupta0202-stack/java-Project",
    badge: "Core Software"
  },
  {
    id: "industrial-approval-workflow",
    title: "Industrial Approval Workflow Tool",
    tagline: "Hackathon Project",
    description: "A lightweight multi-stage industrial approval workflow system built for a hackathon. It models an approval chain from application submission through multiple departments to final approval, with status tracking and SLA monitoring.",
    techStack: ["HTML5", "JavaScript", "SQLite", "State Machine"],
    keyFeatures: [
      "Multi-stage approval workflow & department-wise approval process",
      "State machine-based transitions with Approve and Reject actions",
      "Role-Based Access Control (RBAC) & persistent SQLite database",
      "SLA monitoring, breach detection, application status tracking & transition history"
    ],
    githubUrl: "https://github.com/ronitgupta0202-stack/Industrial-Approval-Workflow-tool",
    badge: "Hackathon Project"
  },
  {
    id: "revunivo-ai",
    title: "RevunivoAI",
    tagline: "AI-Powered Google Review Generator",
    description: "An AI-powered platform developed to generate personalized Google reviews for businesses. Integrates NFC cards and QR codes for seamless customer access, generates natural review drafts based on selected services and keywords, and features an admin dashboard for business profiles.",
    techStack: ["Generative AI", "HTML5", "CSS3", "JavaScript", "NFC & QR"],
    keyFeatures: [
      "Developed an AI-powered platform to generate personalized Google reviews for businesses.",
      "Integrated NFC cards and QR codes for seamless customer access.",
      "Generates natural review drafts based on customer-selected services and keywords.",
      "Built an admin dashboard to manage business profiles and review generation."
    ],
    githubUrl: import.meta.env.VITE_REVUNIVO_REPO_URL || "",
    badge: "AI Platform"
  }
];

export const skillCategories = [
  {
    category: "Languages & Core",
    description: "Primary programming languages used for software development and algorithms.",
    skills: [
      { name: "Python", level: "Proficient", icon: "Code2" },
      { name: "Java", level: "Proficient", icon: "Coffee" },
      { name: "JavaScript", level: "Intermediate", icon: "FileCode" }
    ]
  },
  {
    category: "Web & Frontend Development",
    description: "Building responsive, modern, and accessible user interfaces.",
    skills: [
      { name: "HTML5", level: "Advanced", icon: "Layout" },
      { name: "CSS3", level: "Advanced", icon: "Palette" },
      { name: "JavaScript", level: "Intermediate", icon: "FileJson" }
    ]
  },
  {
    category: "AI, Vision & Innovation",
    description: "Leveraging machine intelligence and image recognition tools.",
    skills: [
      { name: "Generative AI", level: "Hands-on", icon: "Sparkles" },
      { name: "OpenCV", level: "Hands-on", icon: "Eye" }
    ]
  },
  {
    category: "Engineering & Soft Skills",
    description: "Tools, design methods, and collaborative practices.",
    skills: [
      { name: "CAD Software", level: "Practical", icon: "PenTool" },
      { name: "Team Collaboration", level: "High", icon: "Users" }
    ]
  }
];

export const certifications = [
  {
    title: "JPMorgan Chase & Co. Software Engineering",
    subtitle: "Job Simulation",
    issuer: "JPMorgan Chase & Co. / Forage",
    category: "Software Engineering",
    description: "Hands-on software engineering simulation focusing on practical coding, system design concepts, and enterprise software practices.",
    date: "Verified Certification",
    badgeColor: "emerald"
  },
  {
    title: "Deloitte Cyber Security",
    subtitle: "Job Simulation",
    issuer: "Deloitte / Forage",
    category: "Cyber Security",
    description: "Completed practical security modules analyzing threat vectors, security protocols, and enterprise data protection strategies.",
    date: "Verified Certification",
    badgeColor: "cyan"
  },
  {
    title: "Google Analytics",
    subtitle: "Professional Certification",
    issuer: "Google",
    category: "Web Analytics & Data",
    description: "Proficiency in tracking web performance metrics, user engagement patterns, conversion funnels, and data reporting.",
    date: "Verified Certification",
    badgeColor: "indigo"
  },
  {
    title: "Green Skills and Artificial Intelligence",
    subtitle: "Specialized Course",
    issuer: "Industry Workshop / Event",
    category: "AI & Sustainability",
    description: "Studying sustainable computing practices and applying artificial intelligence to eco-friendly process optimization.",
    date: "Verified Certification",
    badgeColor: "green"
  }
];

export const languages = [
  { name: "English", proficiency: "Proficient" },
  { name: "Hindi", proficiency: "Conversational / Fluent" },
  { name: "Marathi", proficiency: "Conversational / Native" }
];

export const learningMindset = [
  {
    title: "Hackathons & Events",
    description: "Regularly participates in technical hackathons to rapidly prototype solutions under real deadlines."
  },
  {
    title: "Microsoft Tech Events",
    description: "Attends Microsoft industry workshops and technology summits to keep pace with modern cloud and developer tools."
  },
  {
    title: "Continuous Upskilling",
    description: "Enthusiastic about exploring cutting-edge AI content curation, Generative AI models, and full-stack software practices."
  }
];
