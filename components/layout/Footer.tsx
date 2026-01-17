import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t mt-20">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Portfolio</h3>
                        <p className="text-sm text-muted-foreground">
                            A professional portfolio showcasing my work, skills, and experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <div className="flex flex-col gap-2">
                            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Home
                            </Link>
                            <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Portfolio
                            </Link>
                            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Blog
                            </Link>
                            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                About
                            </Link>
                            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Github size={20} />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Linkedin size={20} />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Twitter size={20} />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a
                                href="mailto:your.email@example.com"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Mail size={20} />
                                <span className="sr-only">Email</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
