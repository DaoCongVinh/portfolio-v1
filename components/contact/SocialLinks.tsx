import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function SocialLinks() {
    const socials = [
        {
            name: "GitHub",
            href: "https://github.com/yourusername",
            icon: Github,
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/yourusername",
            icon: Linkedin,
        },
        {
            name: "Twitter",
            href: "https://twitter.com/yourusername",
            icon: Twitter,
        },
        {
            name: "Email",
            href: "mailto:your.email@example.com",
            icon: Mail,
        },
    ];

    return (
        <div className="flex gap-4">
            {socials.map((social) => {
                const Icon = social.icon;
                return (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    >
                        <Icon size={20} className="text-primary" />
                        <span className="sr-only">{social.name}</span>
                    </a>
                );
            })}
        </div>
    );
}
