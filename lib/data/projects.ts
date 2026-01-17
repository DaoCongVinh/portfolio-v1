export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    technologies: string[];
    category: "web" | "mobile" | "design" | "other";
    demoUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export const projectsData: Project[] = [
    {
        id: "1",
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform with payment integration",
        longDescription: "Built with Next.js, Stripe, and PostgreSQL. Features include shopping cart, payment processing, order management, and admin dashboard.",
        image: "/images/project-1.jpg",
        technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
        category: "web",
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: true,
    },
    {
        id: "2",
        title: "Task Management App",
        description: "A collaborative task management application",
        longDescription: "Real-time collaboration tool built with React, Firebase, and Material-UI. Includes drag-and-drop, notifications, and team management.",
        image: "/images/project-2.jpg",
        technologies: ["React", "Firebase", "Material-UI", "Redux"],
        category: "web",
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: true,
    },
    {
        id: "3",
        title: "Mobile Fitness Tracker",
        description: "Cross-platform mobile app for tracking workouts",
        longDescription: "Built with React Native and Expo. Features workout logging, progress tracking, charts, and social sharing.",
        image: "/images/project-3.jpg",
        technologies: ["React Native", "Expo", "TypeScript", "SQLite"],
        category: "mobile",
        demoUrl: "https://example.com",
        featured: false,
    },
    {
        id: "4",
        title: "Portfolio Website Template",
        description: "Modern responsive portfolio template",
        longDescription: "A beautiful, customizable portfolio template with dark mode, animations, and MDX blog support.",
        image: "/images/project-4.jpg",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
        category: "web",
        githubUrl: "https://github.com",
        featured: true,
    },
    {
        id: "5",
        title: "Design System",
        description: "Component library and design system",
        longDescription: "Comprehensive design system with documentation, built with Storybook and React.",
        image: "/images/project-5.jpg",
        technologies: ["React", "Storybook", "CSS-in-JS", "TypeScript"],
        category: "design",
        demoUrl: "https://example.com",
        featured: false,
    },
    {
        id: "6",
        title: "AI Chat Application",
        description: "Real-time chat with AI integration",
        longDescription: "Modern chat application with OpenAI integration, real-time messaging, and conversation history.",
        image: "/images/project-6.jpg",
        technologies: ["Next.js", "OpenAI API", "WebSockets", "MongoDB"],
        category: "web",
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: true,
    },
];

export const categories = ["all", "web", "mobile", "design", "other"] as const;
export type Category = typeof categories[number];
