export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string | "Present";
    description: string[];
    technologies?: string[];
}

export interface Skill {
    category: string;
    items: string[];
}

export const experienceData: Experience[] = [
    {
        id: "1",
        title: "Senior Full Stack Developer",
        company: "Tech Company Inc.",
        location: "Remote",
        startDate: "Jan 2022",
        endDate: "Present",
        description: [
            "Led development of scalable web applications serving 100K+ users",
            "Architected microservices infrastructure using Node.js and Docker",
            "Mentored junior developers and conducted code reviews",
            "Improved application performance by 40% through optimization",
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    },
    {
        id: "2",
        title: "Frontend Developer",
        company: "Digital Agency",
        location: "New York, NY",
        startDate: "Jun 2020",
        endDate: "Dec 2021",
        description: [
            "Developed responsive websites for various clients",
            "Collaborated with designers to implement pixel-perfect UIs",
            "Implemented CI/CD pipelines for faster deployment",
            "Built reusable component library used across projects",
        ],
        technologies: ["React", "Vue.js", "Tailwind CSS", "Git"],
    },
    {
        id: "3",
        title: "Junior Web Developer",
        company: "Startup XYZ",
        location: "San Francisco, CA",
        startDate: "Jan 2019",
        endDate: "May 2020",
        description: [
            "Assisted in development of company's main web platform",
            "Fixed bugs and implemented new features",
            "Wrote unit tests to improve code coverage",
            "Participated in agile development process",
        ],
        technologies: ["JavaScript", "HTML", "CSS", "jQuery", "Bootstrap"],
    },
];

export const skillsData: Skill[] = [
    {
        category: "Frontend",
        items: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Vue.js",
            "HTML5",
            "CSS3",
        ],
    },
    {
        category: "Backend",
        items: [
            "Node.js",
            "Express",
            "PostgreSQL",
            "MongoDB",
            "REST APIs",
            "GraphQL",
            "Firebase",
        ],
    },
    {
        category: "Tools & Others",
        items: [
            "Git",
            "Docker",
            "AWS",
            "Vercel",
            "Figma",
            "Jest",
            "CI/CD",
            "Agile",
        ],
    },
    {
        category: "Mobile",
        items: ["React Native", "Expo", "iOS", "Android"],
    },
];
