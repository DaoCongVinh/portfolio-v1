import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import readingTime from "reading-time";

const contentDir = path.join(process.cwd(), "content/blog");

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    coverImage?: string;
    tags?: string[];
    readingTime: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
    // Ensure content directory exists
    if (!fs.existsSync(contentDir)) {
        return [];
    }

    const files = fs.readdirSync(contentDir);
    const posts = files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => {
            const slug = file.replace(/\.mdx$/, "");
            const filePath = path.join(contentDir, file);
            const fileContents = fs.readFileSync(filePath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                title: data.title || slug,
                description: data.description || "",
                date: data.date || "",
                author: data.author || "Anonymous",
                coverImage: data.coverImage,
                tags: data.tags || [],
                readingTime: readingTime(content).text,
            };
        })
        .sort((a, b) => {
            if (new Date(a.date) > new Date(b.date)) return -1;
            if (new Date(a.date) < new Date(b.date)) return 1;
            return 0;
        });

    return posts;
}

export async function getPostBySlug(slug: string) {
    const filePath = path.join(contentDir, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    const { content: mdxContent } = await compileMDX({
        source: content,
        options: {
            parseFrontmatter: false,
        },
    });

    return {
        frontmatter: {
            title: data.title,
            description: data.description,
            date: data.date,
            author: data.author,
            coverImage: data.coverImage,
            tags: data.tags || [],
            readingTime: readingTime(content).text,
        },
        content: mdxContent,
    };
}
