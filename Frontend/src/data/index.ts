import devport from "@/assets/Home/Project/DeveloperPortfolio.svg";
import productManagement from "@/assets/Home/Project/ProductManagement.svg";
import progressWave from "@/assets/Home/Project/ProgressWave.svg";
import toyJoy from "@/assets/Home/Project/ToyJoy.svg";
import wonderRoots from "@/assets/Home/Project/WonderRoots.svg";
import flat from "@/assets/Home/Project/flat.svg";
import {
  aws,
  express,
  figma,
  framer,
  graphQl,
  javascript,
  mongo,
  next,
  node,
  postgresql,
  prismaorm,
  python,
  react,
  redux,
  supabase,
  tailwind,
  typescript,
  vs,
  wordpress,
} from "@/utils/icon";
import { AiOutlineAntDesign } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { CiFlag1 } from "react-icons/ci";
import { FaBug, FaFigma, FaMobileAlt, FaPhotoVideo } from "react-icons/fa";
import {
  FaMedapps,
  FaRankingStar,
  FaSquareWebAwesomeStroke,
} from "react-icons/fa6";
import { GrCloudSoftware } from "react-icons/gr";
import {
  MdDesignServices,
  MdOutlineAccessTime,
  MdOutlineDesignServices,
  MdOutlineEmojiEmotions,
  MdOutlineEngineering,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { SiGooglemarketingplatform } from "react-icons/si";
import { VscGraph } from "react-icons/vsc";

export const navItems = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Skills", link: "skills" },
  { name: "Services", link: "services" },
  { name: "Experience", link: "experience" },
  { name: "Projects", link: "projects" },
  { name: "Testimonials", link: "testimonials" },
  { name: "Blog", link: "blog" },
  { name: "Contact", link: "contact" },
];

export const mobileNavItems = [
  { name: "About", link: "about" },
  { name: "Skills", link: "skills" },
  { name: "Services", link: "services" },
  { name: "Projects", link: "projects" },
];
export const socialMedia = [
  {
    id: 4,
    img: "/facebook.svg",
    link: "https://www.facebook.com/jubair.jx",
  },
  {
    id: 5,
    img: "/instagram.svg",
    link: "https://www.instagram.com/jubair.jx/",
  },
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/jubair-jx",
  },

  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mohammad-jubair/",
  },
];

export const ExperineceData = [
  {
    id: 1,
    count: 76,
    icon: CiFlag1,
    title: "Projects Done",
  },
  {
    id: 2,
    count: "2y",
    icon: FaRankingStar,
    title: "Experiences",
  },
  {
    id: 3,
    count: 89,
    icon: MdOutlineEmojiEmotions,
    title: "Happy Clients",
  },
  {
    id: 4,
    count: "20K",
    icon: MdOutlineAccessTime,
    title: "Working Hours",
  },
];

export const myTechStack = [
  {
    id: 1,
    name: "MERN Stack",
    icon: FaSquareWebAwesomeStroke,
  },
  {
    id: 2,
    name: "Figma",
    icon: FaFigma,
  },
  {
    id: 3,
    name: "App Dev",
    icon: FaMedapps,
  },
  {
    id: 4,
    name: "Video Editing",
    icon: FaPhotoVideo,
  },
  {
    id: 5,
    name: "Graphics Design",
    icon: AiOutlineAntDesign,
  },
  {
    id: 6,
    name: "Engineering",
    icon: MdOutlineEngineering,
  },
  {
    id: 7,
    name: "Marketing",
    icon: SiGooglemarketingplatform,
  },
  {
    id: 8,
    name: "UI/UX",
    icon: MdDesignServices,
  },
  {
    id: 9,
    name: "Bug Fixing",
    icon: FaBug,
  },
];

export const Skills1 = [
  {
    id: 1,
    icon: javascript,
    alt: "Javascript",
  },
  {
    id: 2,
    icon: typescript,
    alt: "Typescript",
  },
  {
    id: 3,
    icon: python,
    alt: "Python",
  },
];
export const Skills2 = [
  {
    id: 1,
    icon: react,
    alt: "React",
  },
  {
    id: 2,
    icon: node,
    alt: "NodeJS",
  },
  {
    id: 3,
    icon: express,
    alt: "Express",
  },
  {
    id: 4,
    icon: mongo,
    alt: "MongoDB",
  },
];
export const Skills3 = [
  {
    id: 1,
    icon: next,
    alt: "Nextjs",
  },
  {
    id: 2,
    icon: prismaorm,
    alt: "Prisma",
  },
  {
    id: 3,
    icon: supabase,
    alt: "Express",
  },
  {
    id: 4,
    icon: framer,
    alt: "Framer",
  },
  {
    id: 5,
    icon: redux,
    alt: "Redux",
  },
];
export const Skills4 = [
  {
    id: 1,
    icon: tailwind,
    alt: "Tailwind",
  },
  {
    id: 2,
    icon: postgresql,
    alt: "Postgresl",
  },
  {
    id: 3,
    icon: graphQl,
    alt: "GrpahQl",
  },
  {
    id: 4,
    icon: aws,
    alt: "AWS",
  },
];
export const Skills5 = [
  {
    id: 1,
    icon: figma,
    alt: "Figam",
  },
  {
    id: 2,
    icon: wordpress,
    alt: "Wordpres",
  },
  {
    id: 3,
    icon: vs,
    alt: "Vscode",
  },
];
export const projectData = [
  {
    id: 1,
    title: "Discover your own Flat",
    des: "Explore a wide range of properties to buy and make your dream home a reality. Our platform offers detailed listings and expert assistance.",
    img: flat,
    iconLists: [typescript, next, node, redux, prismaorm, postgresql, tailwind],
    link: "https://flat-hive-app.vercel.app/",
  },
  {
    id: 2,
    title: "Programize Portfolio Hub",
    des: "Create stunning portfolios tailored for developers. Showcase your skills and projects with a sleek and modern UI.",
    img: devport,
    iconLists: [javascript, react, redux, framer, figma, tailwind],
    link: "https://programmer-portfolio-by-jubair.netlify.app/",
  },
  {
    id: 3,
    title: "Manage Your Own Product",
    des: "Manage products seamlessly with our POS system. Track inventory, sales, and streamline your operations effortlessly.",
    img: productManagement,
    iconLists: [typescript, react, node, express, mongo, redux, tailwind],
    link: "https://gift-shop-app.netlify.app",
  },
  {
    id: 4,
    title: "Wonder Roots Scholars",
    des: "Enroll in photography courses and connect with expert instructors. Manage your learning journey in one place.",
    img: wonderRoots,
    iconLists: [javascript, react, node, express, mongo, redux, tailwind],
    link: "https://wonder-root-sch.netlify.app",
  },
  {
    id: 5,
    title: "Back To Your Childhood",
    des: "Discover a wide range of toys. Buy and explore the latest collections on our user-friendly marketplace.",
    img: toyJoy,
    iconLists: [typescript, react, node, express, mongo, redux, tailwind],
    link: "https://toy-marketplace-auth-e3ae6.web.app",
  },
  {
    id: 6,
    title: "Organize Your Tasks",
    des: "A streamlined project management tool. Organize tasks and collaborate efficiently, just like Trello but lighte",
    img: progressWave,
    iconLists: [javascript, react, express, mongo, redux, tailwind],
    link: "https://progress-wave.web.app/",
  },
];

export const myServices = [
  {
    id: 1,
    image: CgWebsite,
    title: "Web Development",
    des: "Develop robust, scalable websites and web applications tailored to your business needs, ensuring performance and reliability.",
  },
  {
    id: 2,
    image: FaMobileAlt,
    title: "App Development",
    des: "Create powerful, user-friendly mobile apps tailored to your business needs. We ensure seamless performance, scalability etc.",
  },
  {
    id: 3,
    image: MdOutlineDesignServices,
    title: "UI/UX Design",
    des: "Create intuitive and engaging user interfaces that enhance user experience, driving satisfaction and loyalty through meticulous design.",
  },
  {
    id: 4,
    image: MdProductionQuantityLimits,
    title: "E-Commerce Solutions",
    des: "Launch and optimize your online store with powerful, user-friendly e-commerce platforms that drive sales and streamline operations.",
  },
  {
    id: 5,
    image: GrCloudSoftware,
    title: "Customized Software",
    des: "Develop custom software solutions that address your specific business challenges, improving efficiency and fostering growth.",
  },
  {
    id: 6,
    image: VscGraph,
    title: "Marketing",
    des: "Elevate your brand with strategic digital marketing services, including SEO, social media, and content marketing, to attract customers.",
  },
];

export const testimonials = [
  {
    quote:
      "Mohammad Jubair's expertise in MERN stack development is unparalleled. His ability to translate complex requirements into scalable solutions is impressive. His dedication to delivering high-quality work is evident in every project. Highly recommended for any web development project.",
    name: "Sarah Ahmed",
    title: "CTO of Innovatech Solutions, Dhaka",
  },
  {
    quote:
      "Working with Mohammad Jubair has been a game-changer for our company. His dedication, professionalism, and creative problem-solving skills have significantly improved our web presence. He always goes above and beyond to ensure client satisfaction.",
    name: "John Smith",
    title: "CEO of TechWave Inc., New York",
  },
  {
    quote:
      "Mohammad Jubair's work ethic and attention to detail are extraordinary. His innovative approach to development helped us launch our project on time and within budget. We are extremely satisfied with the results.",
    name: "Emily Davis",
    title: "Product Manager at SoftServe, London",
  },
  {
    quote:
      "Mohammad Jubair's passion for web development shines through in his work. He delivered an exceptional product that exceeded our expectations. We couldn't be happier with the final outcome and his ongoing support.",
    name: "Rajesh Kumar",
    title: "Director of CodeCrafters, Mumbai",
  },
  {
    quote:
      "It was a pleasure collaborating with Mohammad Jubair. His skills in MERN stack development are top-notch, and his ability to handle complex projects is commendable. His proactive communication kept us informed at every stage.",
    name: "Nabila Khan",
    title: "Project Lead at DigitalZenith, Chattogram",
  },
  {
    quote:
      "Mohammad Jubair's contribution to our project was invaluable. His technical expertise and proactive approach ensured that we met all our milestones with ease. His suggestions and insights were instrumental in our project's success.",
    name: "Michael Brown",
    title: "Lead Developer at NextGen Systems, Sydney",
  },
  {
    quote:
      "I highly recommend Mohammad Jubair for any web development needs. His creativity, coupled with his technical prowess, resulted in a high-quality, user-friendly website for our business. His commitment to excellence is truly commendable.",
    name: "Linda Martinez",
    title: "Marketing Director at WebFusion, San Francisco",
  },
  {
    quote:
      "Mohammad Jubair's deep understanding of the MERN stack was crucial to the success of our project. His commitment to excellence is evident in the final product. We are very pleased with his work and the value he brought to our team.",
    name: "Ahmed Raza",
    title: "CEO of ByteBuilders, Karachi",
  },
  {
    quote:
      "Collaborating with Mohammad Jubair was a delightful experience. His innovative solutions and attention to detail helped us achieve our project goals efficiently. His dedication to client satisfaction is unparalleled.",
    name: "Sophia Lee",
    title: "Chief Designer at CreatiVision, Seoul",
  },
  {
    quote:
      "Mohammad Jubair's skillset and dedication to his craft are truly remarkable. He transformed our ideas into a functional and aesthetically pleasing website. We highly value his expertise and professional approach.",
    name: "Daniel Evans",
    title: "Operations Manager at TechSphere, Toronto",
  },
];

export const blogPosts = [
  {
    category: "Programming",
    date: "June 20, 2024",
    eyeCatchyTitle: "Mastering the Art of Problem Solving",
    description:
      "Becoming a proficient problem solver is a crucial skill for developers and professionals in any field. In this blog post, we explore effective strategies, techniques, and mindsets that can help you enhance your problem-solving abilities. Whether you're tackling coding challenges or real-world issues, these tips will empower you to find innovative solutions quickly and efficiently.",
    tags: [
      "# ProblemSolving",
      "# PersonalDevelopment",
      "# CodingTips",
      "# ProfessionalSkills",
      "# MERNStack",
    ],
  },
  {
    category: "Professional",
    date: "June 22, 2024",
    eyeCatchyTitle: "Wanna Be a Communication Master?",
    description:
      "Effective communication is key to professional success. This blog post delves into essential communication skills, techniques for clear and impactful interactions, and ways to overcome common communication barriers. Enhance your ability to convey ideas and collaborate efficiently with these practical tips.",
    tags: [
      "# CommunicationSkills",
      "# PersonalDevelopment",
      "# ProfessionalGrowth",
      "# SoftSkills",
    ],
  },
  {
    category: "Coding",
    date: "June 24, 2024",
    eyeCatchyTitle: "How to Crack a Coding Interview",
    description:
      "Preparing for a coding interview can be daunting, but with the right strategies, you can ace it. This blog post provides a comprehensive guide on how to prepare, common interview questions, and tips for demonstrating your problem-solving skills and technical knowledge effectively during the interview.",
    tags: [
      "# CodingInterview",
      "# CareerDevelopment",
      "# InterviewPreparation",
      "# JobHunt",
      "# TechCareers",
    ],
  },
];

export const experienceData = [
  {
    id: 1,
    companyName: "Codex Devware",
    date: "2022-2024",
    designation: "Vice-President & Software Developer",
    description:
      "Codex Devware is a amazing company that was the first established to change in the IT industry. It was established in 2022.the organisation has been aiming to create a Digital Bangladesh & Technological Advancement.Let’s build something amazing together!",
  },
  {
    id: 2,
    companyName: "CPI Programming Community",
    date: "2023-2024",
    designation: "Founding Team Lead",
    description:
      "CPI Programming Community is a wonderful programming organization. Bascially, it's a great initiative for those all of newbie programmers. It helps to them a lot. To Provide a guidlines, support, programming workshop, training, session and various of things.",
  },
  {
    id: 3,
    companyName: "SoftTech Amatures",
    date: "2021-2022",
    designation: "Full Stack Developer",
    description:
      "SoftTech Amatures is a one of the newbie Software Agencies based on Chattogram. They can provide a lot of digital services. And Have there a amazing multi-talented software development team.",
  },
];
