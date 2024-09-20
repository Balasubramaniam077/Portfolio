import { Icons } from "@/components/icons";
import { link } from "fs/promises";
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

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
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
      title: "Research & developement Engineer",
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
      start: "",
      end: "",
      
    },
    {
      school: "KPR Institute of Engineering and Technology, Coimbatore",
      href: "https://kpriet.ac.in/",
      degree: "B.E Computer Science and Engineering (CSE) - 8.0 CGPA",
      logoUrl: "/KPRIET.jpg",
      start: "",
      end: "",
    },

  ],



// Projects page 

  projects: [
    // {
    //   title: "Crop Yield Monitor",
    //   href: "https://github.com/Balasubramaniam077/Crop-Output-Estimation-and-Quality-Assessment",
    //   dates: "Jan 20 - Feb 2024",
    //   active: true,
    //   description:
    //     "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    // },
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
      image: "",
      video: "License.mp4",
    },
    {
      title: "Mask Position Identiﬁcation in Pandemic",
      href: "https://github.com/Balasubramaniam077/Mask_object-detection",
      dates: "Augest 2022 - January 2023",
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
      image: "",
      video:
        "Mask.mp4",
    },
  ],


  // Certification 
  hackathons: [
    {
      title: "Python for Data Science and Machine Learning Bootstrap on Udemy.",
      dates: "" ,
      location: "Udemy",
      description:
        "Learned about the Data Science and Machine learning algorithms by implementing an real time problem statement.",
      image: "/udemy.png",

    },
    {
      title: "Oracle Certiﬁed Associate, Java SE 8 Programmer",
      dates: "",
      location: "Oracle",
      description:
        "I learned and complete an orcle associate certification by attenting an Physical examization in bangalore",
      image:"/oracle.png",
    mlh: "/oracle.png",
    },
    {
      title: "Front-End Web UI Frameworks and Tools:Bootstrap 4",
      dates: "",
      location: "Coursera",
      description:
        "In this certification I learned about the web technology and UI frameworks as Figma with Tools.",
      icon: "/coursera.png",
      image:
        "/coursera.png",
    },
  ],


// Research page Starts 


  research: [
    {
      title: "Drone based defence vision model : Electronic Warfare",
      dates: "2024" ,
      location: "White Paper - MDPI - Present",
      description:
        "Implemeting Automated Tracking Vision system to identify the target in upskill without effect or defect in electroinc warfare.",
      image:"/MDPI.png",

    },
    {
      title: "Bloodcell Detection using an Optimized YOLOv8 algorithms with an fine tune methodology",
      dates: "2024" ,
      location: "White Paper - Electronics Letters - Present",
      description:
        "Blood cell identification in microscopic images is a crucial area of medical image processing. The examination of blood images under the microscope contributes to disease diagnosis by distinguishing the types of blood cells. Manual detection of blood cells is time-consuming and sometimes prone to an error. A blood routine examination evaluates the number and morphology of platelets, white blood cells (WBCs), and red blood cells (RBCs), each playing critical roles in the body. Variations in these cells can indicate various diseases and timely detection of blood cells is vital to reducing the risk of infection. necessitating precise and timely detection. In this paper a modified YOLOv8 model is introduced to enhance the blood cell detection and classification. This model achieves a high detection accuracy of 0.939, surpassing other YOLO variants. The proposed model proves to be a powerful tool for accurate blood cell detection, significantly aiding in the diagnosis and treatment of blood disorders.",
      image:"/IET.png",

    },
    {
      title: "K-Kotagiri (NRB) Avocado Leaf Dataset.",
      dates: "2024" ,
      location: "Mendeley Data",
      description:
        "The Avocado Image Dataset consists of 435 raw images showcasing both healthy and disease-infected avocados, with 216 images depicting avocados affected by various diseases and 219 images representing healthy specimens. Prior to annotation, the dataset underwent a splitting process with a ratio of 7:2:1 for training, validation, and testing respectively. Post-processing, all images were resized to 224x224 pixels. Annotation techniques, including vertical flipping, 90-degree rotation, and shearing, were exclusively applied during the training phase to enhance dataset diversity. The augmented dataset distribution across training, validation, and testing sets is outlined, showcasing a balanced representation of both healthy and diseased avocado images.",
      image:"/mendeley.jpeg",
    },
    {
      title: "K-Kotagiri Tea Leaf Dataset",
      dates: "2024",
      location: "Mendeley Data",
      description:
        "In the serene tea fields of Kotagiri (Kaithala), Tamil Nadu, India, a dedicated team embarked on a fascinating journey to delve into the intricacies of tea leaf diseases using captured images. Datasets consist of 4259 images which includes original and augmented images of healthy and disease classes. Out of which, 225 original images of healthy class and 303 original images of disease class. Similarly, 1610 augmented images of healthy class and 2121 augmented images of disease class.",
      image:"/mendeley.jpeg",
    },
    {
      title: "Tea Leaf Disease Identification using Improved Convolution Neural Network",
      dates: "2023",
      location: "2023 International Conference on Digital Applications, Transformation & Economy (ICDATE), Malaysia",
      description:
        "Plant diseases are a significant concern for the agricultural industry, as they can reduce crop yields and cause economic losses. Tea is a popular and widely consumed beverage in India, and the tea crop can be affected by different leaf diseases. Early detection of the diseases is essential to prevent the spread of other crops and minimize production losses. Traditional methods of detecting leaf diseases involve manually interpreting the images, which can be time-consuming and laborious. To address this, artificial intelligence techniques, specifically deep learning models are used for more accurate and efficient detection of tea leaf disease. This study compares the performance of several deep learning models including ResNet50, Resnet50-RS, ResNetlOl-V2, and Modified-ResNet50-V2 (M-RN50V2) and finds that the M-RN50V2 model has the highest accuracy at 90.S4%. Overall, this work aims to promote …",
      icon: "/research2023.jpeg",
      image:
        "/research2023.jpeg",
    },
    {
      title: "Monitoring COVID-19 Environment: A real-time facial mask detection using YOLO models",
      dates: "2023",
      location: "Open Publication - Springer - Still in Process (3rd Revision)",
      description:
        "Purpose: COVID-19&#39;s fast spread has caused substantial damage and affected more than tens of millions of individuals around the world. People frequently wear masks to safeguard themselves and others against the transmission of coronavirus. Coronavirus protection guidelines have been published by the World Health Organization (WHO). According to WHO standards, COVID-19 can be prevented by wearing a mask in public places and congested regions. In these places, it&#39;s very difficult to personally check to see if people are wearing face masks or not.",
      icon: "/springer.jpeg",
      image:
        "/springer.jpeg",
    },
    {
      title: "Deep Learning Models for Potato Leaf Disease Identification: A Comparative Analysis",
      dates: "2022",
      location: "2022 International Conference on Green Energy, Computing and Sustainable Technology (GECOST), Malaysia",
      description:
        "Plant diseases are the most crucial factor in the agriculture sector, which causes a reduction in yield and economic loss. Therefore, early and accurate detection of these diseases can control the infection spread to other crops and minimize production loss. Traditional methods use the handcrafted features of the images to detect the infection part of the leaves and infection type. Furthermore, the extraction of these features is expensive and time-consuming. However, in light of recent advances in agricultural technology, such as the use of artificial intelligence in diagnosing plant diseases, appropriate research must be conducted toward the development of agriculture in a sustainable manner. However, manually interpreting these leaf diseases can be time-consuming and laborious, and they significantly impact potato quality and yield due to diseases like early blight and late blight. In addition, this study seeks to optimize cutting-edge deep learning (DL) models for detecting potato leaf disease. The deep learning models such as ResNet50, Inception V3, VGG16, and VGG19 are evaluated and their performances are compared. The experimental findings show that the VGG19 model outperforms the other models with an accuracy of 99%.",
      icon: "/research2022.jpeg",
      image:
        "research2022.jpeg",
    },
    {
      title: "Real-Time Handgun Detection in Surveillance Videos based on Deep Learning Approach",
      dates: "2022",
      location: "2022 International Conference on Applied Artificial Intelligence and Computing (ICAAIC), India",
      description:
        "Closed-circuit television (CCTV) systems are vital to prevent security threats to public safety. Nowadays, the use of weapons causes a big security threat in public places and it creates a lot of violence. The quick detection of handguns in public places is very important to avoid or reduce risks. Some places in the world have a lot of crimes that are committed with handguns, even though guns aren't allowed. Closed-circuit television (CCTV) has been used a lot to keep an eye on these situations; it's time to keep an eye on the images. This task is typically carried out by a human, who is more prone to forgetting them due to fatigue or being distracted by something else. Detecting handguns on their own is very important in catching people who use guns to do bad things. Deep-learning based object detectors can't find handguns of different sizes in an unrestricted area. In this work, deep learning techniques are used for automatic detection of handguns in an unconstrained environment through video surveillance footage.",
      icon: "ICAAIC.jpeg",
      image:
        "ICAAIC.jpeg",
    },
  ],
} as const;
