"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";
import type { BlogPost } from "@/lib/mdx";

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <Link href={`/blog/${post.slug}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 h-full">
                    {post.coverImage && (
                        <div className="relative h-48 overflow-hidden bg-muted">
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                className="h-full w-full"
                            >
                                <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" />
                            </motion.div>
                        </div>
                    )}

                    <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors">
                            {post.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                            <div className="flex items-center gap-1">
                                <Calendar size={14} />
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock size={14} />
                                <span>{post.readingTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <User size={14} />
                                <span>{post.author}</span>
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent>
                        <p className="text-muted-foreground">{post.description}</p>

                        {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-4">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </Link>
        </motion.div>
    );
}
