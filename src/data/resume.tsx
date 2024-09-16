import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Balasubramaniam",
  initials: "V",
  url: "https://dillion.io",
  location: "Tiruppur, Tamil Nadu",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    " Software engineer who enjoys building efficient systems and driving innovation with technology.",
  summary:
    " I’m a software engineer with a focus on machine learning and database management. I develop efficient systems and integrate AI technologies to enhance performance. Eager to apply my skills to drive innovation and solve real-world challenges.",
  avatarUrl: "/Profile.jpeg",
  skills: [
    "Python",
    "Java",
    "MySQL",
    "Javascript",
    "Business Analyst",
    "Machine Learning",
    "Computer Vision",
    "React js",
    "Flask",
    "Langchain",
    "LLMs",
    "Firebase",
    "Research & Development"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog"},
  ],
  contact: {
    email: "balasubramaniamvadivel@gmail.com",
    tel: "+91 9360361518",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Balasubramaniam077",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/balasubramaniamvadivel/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Dhyana",
      href: "https://www.dhyanalab.in/home",
      badges: [],
      location: "Coimbatore - hybrid",
      title: "AI Engineer",
      logoUrl: "/dhyana.png",
      start: "June 2024",
      end: "Aug 2024",
      description:
        " Created a lightweight, responsive object detection system with Python, PyTorch, and SQL for embedded boards, integrating traditional computer vision with advanced machine learning and LLM models to automate and secure surveillance.",
    },
    {
      company: "Avasoft",
      badges: [],
      href: "https://www.avasoft.com/",
      location: "Chennai - Onsite",
      title: "Software Engineer",
      logoUrl: "/Avasoft.jpg",
      start: "Feb 2024",
      end: "May 2024",
      description:
        "Worked on internal products to accelerate development and optimize software design, gaining hands-on experience in design, flow, and pseudo-coding. Contributed to data integration and database management, enhancing backend processes and application efficiency through API management.",
    },
    {
      company: "Nexusnova Solutions",
      href: "https://nexusnova-95794.web.app/",
      badges: [],
      location: "Tiruppur - Remote",
      title: "freelancer",
      logoUrl: "/nexusnova.jpg",
      start: "Sept 2023",
      end: "Feb 2024",
      description:
        "In the Time of Freelacing. I learned and Worked in UI/UX design for an Startup's, Business and Strategy Analyst in Tiruppur based E-Commerce (Nexa, Siyaram and Swathi) band's and Mainly contributed and implementing an White Research paper for Ph.D schoolar in Computer Vision.",
    },
    {
      company: "Virtusa",
      href: "https://www.virtusa.com/",
      badges: [],
      location: "Chennai - Remote",
      title: "Full Stack developer Intern",
      logoUrl: "/virtusa.jpeg",
      start: "June 2023",
      end: "Sept 2023",
      description:
        "Managed the database design for an Inventory Management System, focusing on data integrity and efficiency. Improved system performance by developing and optimizing complex SQL queries for better data storage and retrieval, impacting both frontend and backend.",
    },
    // {
    //   company: "Gateway Software Solutions",
    //   href: "https://gatewaysoftwaresolutions.com/",
    //   badges: [],
    //   location: "Coimbatore - Remote",
    //   title: "Inplan Training - AI/ML",
    //   logoUrl: "/getway.png",
    //   start: "June 2022",
    //   end: "Aug 2022",
    //   description:
    //     "In Three Month of Inplan Training gained an knowledge about the Python, EDA Processing and Basic Machine learning algorithms and hands on Project experiences",
    // },
  ],
  education: [
    {
      school: "Sri Ramakrishna Institute of Technology, Coimbatore",
      href: "https://www.srit.org/",
      degree: "M.E Computer Science and Engineering (CSE) - 8.6 CGPA",
      logoUrl: "/SRIT.png",
      start: "2023",
      end: "2025",
      
    },
    {
      school: "KPR Institute of Engineering and Technology, Coimbatore",
      href: "https://kpriet.ac.in/",
      degree: "B.E Computer Science and Engineering (CSE) - 8.0 CGPA",
      logoUrl: "/KPRIET.jpg",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Crop Yield Monitor",
      href: "https://github.com/Balasubramaniam077/Crop-Output-Estimation-and-Quality-Assessment",
      dates: "Jan 20 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Crop Yield Monitor",
      href: "https://github.com/Balasubramaniam077/Crop-Output-Estimation-and-Quality-Assessment",
      dates: "Jan 2023 - April 2023",
      active: true,
      description:
        "A system was developed to identify crop diseases and predict yield, aiding farmers in monitoring crop health. It also recommends natural fertilizers for improved crop quality. User-friendly and supporting local languages, the system allows farmers to prevent diseases and promote sustainable agriculture via mobile access.",
      technologies: [
        "Python",
        "Flask",
        "MongoDB",
        "React Js",
        "AWS",
        "Bootstrap",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://magicui.design",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Balasubramaniam077/Crop-Output-Estimation-and-Quality-Assessment",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/Crop.mp4",
    },
    {
      title: "Number Plate Tracking & Safety System",
      href: "https://license-plate-green.vercel.app/",
      dates: "April 2023 - Present",
      active: true,
      description:
        "The AI-powered system you developed integrates with CCTV cameras, using OCR to track and extract vehicle number plates accurately. It sends automatic email alerts, seamlessly integrates data, and includes real-time safety features like helmet detection and pillion rider monitoring to ensure compliance, making roads safer and the process more efficient.",
      technologies: [
        "Python",
        "Object Detection(YOLO)",
        "C++",
        "MySQL",
        "OCR",
        "Excel",
        "Custom dataset",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://llm.report",
        //   icon: <Icons.globe className="size-3" />,
        // },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "",
      video: "License.mp4",
    },
    {
      title: "Mask Position Identiﬁcation in Pandemic",
      href: "https://github.com/Balasubramaniam077/Mask_object-detection",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "A real-time mask position identification system was developed using computer vision to monitor mask usage during the COVID-19 pandemic. It automatically detects improper mask positions and triggers audible alerts to ensure compliance with safety protocols, enhancing public safety and preventing the spread of the virus in public spaces.",
      technologies: [
        "Python",
        "C++",
        "Proposed Object Detection",
        "Custom Datset",
        "Open CV",
        "Darknet",
        "Data Anlysis Report",
        "Excel + PowerBI",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://automatic.chat",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Balasubramaniam077/Mask_object-detection",
          icon: <Icons.github className="size-3" />,
        },
        
      ],
      image: "",
      video:
        "Mask.mp4",
    },
  ],
  hackathons: [
    {
      title: "Python for Data Science and Machine Learning Bootstrap on Udemy.",
      // dates: "" ,
      location: "Udemy",
      description:
        "Learned about the Data Science and Machine learning algorithms by implementing an real time problem statement.",
      image: "/udemy.png",

    },
    {
      title: "Oracle Certiﬁed Associate, Java SE 8 Programmer",
      // dates: "",
      location: "Oracle",
      description:
        "I learned and complete an orcle associate certification by attenting an Physical examization in bangalore",
      image:"/oracle.png",
    mlh: "/oracle.png",
    },
    {
      title: "Front-End Web UI Frameworks and Tools:Bootstrap 4",
      // dates: "",
      location: "Coursera",
      description:
        "In this certification I learned about the web technology and UI frameworks as Figma with Tools.",
      icon: "/coursera.png",
      image:
        "/coursera.png",
    },
  ],
  // hackathons: [
  //   {
  //     title: "Python for Data Science and Machine Learning Bootstrap on Udemy.",
  //     dates: "" ,
  //     location: "Udemy",
  //     description:
  //       "Learned about the Data Science and Machine learning algorithms by implementing an real time problem statement.",
  //     image:
  //       "/udemy.png",
  //     mlh: "/udemy.png",
  //     links: [],
  //   },
  //   {
  //     title: "Oracle Certiﬁed Associate, Java SE 8 Programmer",
  //     dates: "",
  //     location: "Oracle",
  //     description:
  //       "I learned and complete an orcle associate certification by attenting an Physical examization in bangalore",
  //     image:
  //       "/oracle.png",
  //     mlh: "/oracle.png",
  //     links: [],
  //   },
  //   {
  //     title: "Front-End Web UI Frameworks and Tools:Bootstrap 4",
  //     dates: "",
  //     location: "Coursera",
  //     description:
  //       "In this certification I learned about the web technology and UI frameworks as Figma with Tools.",
  //     icon: "/coursera.png",
  //     image:
  //       "/coursera.png",
  //   },
  // ],
} as const;
