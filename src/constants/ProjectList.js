import job from "../assets/projects/job.png";
import travel from "../assets/projects/travel.png"
import pg from "../assets/projects/pg.png"
import flowcrafter from "../assets/projects/flowcrafter.png"

export const ProjectList = [
    {
        id: 1,
        title: "Roamtales Web Application",
        name: "Roamtales",
        description: "Developed a dynamic travel platform using the MERN stack, enabling seamless experiences for users, guides, and admins with role-based access control.\n\nDesigned a responsive interface with React and Tailwind CSS; integrated Cloudinary for media uploads and JWT authentication for secure access.\n\nImplemented comprehensive features including trip planning, guide booking, blog sharing, and an intuitive admin panel for content moderation.",
        img: travel,
        tech: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Cloudinary"],
        repo: "https://github.com/Ambika03p/roamtales-fe",
        demo: "https://roamtales-fe.vercel.app/"
    },
    {
        id: 2,
        title: "Job Portal Web Application",
        name: "Job Portal",
        description: "Built a comprehensive job portal using MERN stack with dedicated interfaces for job seekers and employers.\n\nImplemented secure user authentication with JWT tokens and developed robust APIs for job posting and application management.\n\nCreated an intuitive dashboard for employers to manage job postings and track applications with real-time updates.",
        img: job,
        tech: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT"],
        repo: "https://github.com/Ambika03p/Job_Portal",
        demo: "https://github.com/Ambika03p/Job_Portal"
    },
    {
        id: 3,
        title: "PG Life Web Platform",
        name: "PG Life",
        description: "Developed a full-stack PG accommodation platform using PHP and MySQL, enabling users to find and book rental properties.\n\nImplemented dynamic property listings with advanced search and filter functionality for location, price, and amenities.\n\nCreated a secure booking system with user authentication and an intuitive interface with responsive layouts.",
        img: pg,
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        repo: "https://github.com/Ambika03p/PG-life-Project",
        demo: "https://github.com/Ambika03p/PG-life-Project"
    },
    {
        id: 4,
        title: "FlowCrafter Web Application",
        name: "FlowCrafter",
        description: "Developed an interactive drag-and-drop editor to create and link custom nodes like Input, Output, Text, and LLM for building data pipelines.\n\nBuilt using React and React Flow, offering a modular architecture for easy node customization and configuration.\n\nImplemented a clean UI with sidebar, toolbar, and integrated backend connectivity for pipeline execution.",
        img: flowcrafter,
        tech: ["React", "React Flow", "Tailwind CSS", "Python"],
        repo: "https://github.com/Ambika03p/FlowCrafter",
        demo: "https://github.com/Ambika03p/FlowCrafter"
    }
];
