import Link from "next/link";
import Image from "next/image";

export const MDXComponents = {
    h1: (props: any) => (
        <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
    ),
    h2: (props: any) => (
        <h2 className="text-3xl font-bold mt-6 mb-3" {...props} />
    ),
    h3: (props: any) => (
        <h3 className="text-2xl font-bold mt-5 mb-2" {...props} />
    ),
    p: (props: any) => (
        <p className="text-muted-foreground leading-7 mb-4" {...props} />
    ),
    a: (props: any) => (
        <Link
            href={props.href || "#"}
            className="text-primary hover:underline"
            {...props}
        />
    ),
    ul: (props: any) => (
        <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
    ),
    ol: (props: any) => (
        <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
    ),
    li: (props: any) => (
        <li className="text-muted-foreground" {...props} />
    ),
    code: (props: any) => (
        <code
            className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
            {...props}
        />
    ),
    pre: (props: any) => (
        <pre
            className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 font-mono text-sm"
            {...props}
        />
    ),
    blockquote: (props: any) => (
        <blockquote
            className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground"
            {...props}
        />
    ),
    img: (props: any) => (
        <Image
            {...props}
            className="rounded-lg my-4"
            width={800}
            height={400}
            alt={props.alt || "Blog image"}
        />
    ),
    hr: (props: any) => <hr className="my-8 border-border" {...props} />,
    table: (props: any) => (
        <div className="overflow-x-auto my-4">
            <table className="w-full border-collapse" {...props} />
        </div>
    ),
    th: (props: any) => (
        <th className="border border-border px-4 py-2 bg-muted font-bold" {...props} />
    ),
    td: (props: any) => (
        <td className="border border-border px-4 py-2" {...props} />
    ),
};
