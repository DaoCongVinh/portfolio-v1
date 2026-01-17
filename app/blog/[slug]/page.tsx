import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.frontmatter.title,
        description: post.frontmatter.description,
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: { slug: string };
}) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-20 max-w-4xl">
            <Link href="/blog">
                <Button variant="ghost" className="mb-8">
                    <ArrowLeft className="mr-2" size={16} />
                    Back to Blog
                </Button>
            </Link>

            <article>
                {/* Header */}
                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {post.frontmatter.title}
                    </h1>

                    <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>
                                {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{post.frontmatter.readingTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={16} />
                            <span>{post.frontmatter.author}</span>
                        </div>
                    </div>

                    {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.frontmatter.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {post.frontmatter.coverImage && (
                        <div className="rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 h-64 md:h-96" />
                    )}
                </header>

                {/* Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    {post.content}
                </div>
            </article>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t">
                <Link href="/blog">
                    <Button variant="outline">
                        <ArrowLeft className="mr-2" size={16} />
                        Back to all posts
                    </Button>
                </Link>
            </div>
        </div>
    );
}
