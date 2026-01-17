"use client";

import { motion } from "framer-motion";
import type { Category } from "@/lib/data/projects";

interface ProjectFilterProps {
    categories: readonly string[];
    activeCategory: Category;
    onCategoryChange: (category: Category) => void;
}

export function ProjectFilter({
    categories,
    activeCategory,
    onCategoryChange,
}: ProjectFilterProps) {
    return (
        <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category as Category)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                            ? "text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                >
                    {activeCategory === category && (
                        <motion.div
                            layoutId="activeCategory"
                            className="absolute inset-0 bg-primary rounded-full"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10 capitalize">{category}</span>
                </button>
            ))}
        </div>
    );
}
