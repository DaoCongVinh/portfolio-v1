"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ProjectFilter } from "@/components/portfolio/ProjectFilter";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { projectsData, categories, type Category } from "@/lib/data/projects";

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState<Category>("all");

    const filteredProjects =
        activeCategory === "all"
            ? projectsData
            : projectsData.filter((p) => p.category === activeCategory);

    return (
        <div className="container mx-auto px-4 py-20">
            <ScrollReveal>
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    My Portfolio
                </h1>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A collection of projects I've worked on, showcasing my skills and
                    experience in web development, design, and more.
                </p>
            </ScrollReveal>

            <ProjectFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-muted-foreground">
                        No projects found in this category.
                    </p>
                </div>
            )}
        </div>
    );
}
