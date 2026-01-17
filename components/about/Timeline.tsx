"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import type { Experience } from "@/lib/data/experience";
import { Briefcase, MapPin, Calendar } from "lucide-react";

interface TimelineProps {
    experiences: Experience[];
}

export function Timeline({ experiences }: TimelineProps) {
    return (
        <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <ScrollReveal key={exp.id} delay={index * 0.1}>
                        <div
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 top-6 z-10" />

                            {/* Content */}
                            <div className="flex-1 ml-8 md:ml-0">
                                <Card className="p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold">{exp.title}</h3>
                                            <div className="flex items-center gap-2 text-muted-foreground mt-1">
                                                <Briefcase size={16} />
                                                <span>{exp.company}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>
                                                {exp.startDate} - {exp.endDate}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin size={14} />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-4">
                                        {exp.description.map((item, i) => (
                                            <li
                                                key={i}
                                                className="text-sm text-muted-foreground flex items-start gap-2"
                                            >
                                                <span className="text-primary mt-1.5">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {exp.technologies && (
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </Card>
                            </div>

                            {/* Spacer for alternating layout */}
                            <div className="hidden md:block flex-1" />
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
}
