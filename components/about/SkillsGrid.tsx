"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import type { Skill } from "@/lib/data/experience";

interface SkillsGridProps {
    skills: Skill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillCategory, index) => (
                <ScrollReveal key={skillCategory.category} delay={index * 0.1}>
                    <Card className="p-6 hover:shadow-lg transition-all hover:scale-105">
                        <h3 className="text-lg font-bold mb-4">{skillCategory.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillCategory.items.map((skill) => (
                                <motion.span
                                    key={skill}
                                    whileHover={{ scale: 1.1 }}
                                    className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </Card>
                </ScrollReveal>
            ))}
        </div>
    );
}
