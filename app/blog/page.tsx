import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BlogCard } from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/mdx";

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <div className="container mx-auto px-4 py-20">
            <ScrollReveal>
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    Blog
                </h1>
                <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                    Thoughts, tutorials, and insights on web development and technology
                </p>
            </ScrollReveal>

            {posts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <BlogCard key={post.slug} post={post} index={index} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-muted-foreground text-lg mb-4">
                        No blog posts yet. Check back soon!
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Blog posts should be placed in the <code className="bg-muted px-2 py-1 rounded">content/blog/</code> directory
                    </p>
                </div>
            )}
        </div>
    );
}
