"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data/projects";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="h-full w-full"
                    >
                        {/* Placeholder gradient instead of image */}
                        <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500" />
                    </motion.div>
                </div>

                <CardHeader>
                    <div className="flex items-start justify-between">
                        <CardTitle className="group-hover:text-primary transition-colors">
                            {project.title}
                        </CardTitle>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 mt-auto">
                        {project.demoUrl && (
                            <Link
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                <ExternalLink size={16} />
                                Demo
                            </Link>
                        )}
                        {project.githubUrl && (
                            <Link
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Github size={16} />
                                Code
                            </Link>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
