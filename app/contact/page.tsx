import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialLinks } from "@/components/contact/SocialLinks";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <ScrollReveal>
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    Get In Touch
                </h1>
                <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                    Have a question or want to work together? Feel free to reach out!
                </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                {/* Contact Info */}
                <div className="lg:col-span-1 space-y-6">
                    <ScrollReveal delay={0.1}>
                        <Card className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Mail className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Email</h3>
                                    <a
                                        href="mailto:your.email@example.com"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        your.email@example.com
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <Card className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Phone className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Phone</h3>
                                    <a
                                        href="tel:+1234567890"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +1 (234) 567-890
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <Card className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Location</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Your City, Country
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <Card className="p-6">
                            <h3 className="font-semibold mb-4">Connect With Me</h3>
                            <SocialLinks />
                        </Card>
                    </ScrollReveal>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <ScrollReveal delay={0.2}>
                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                            <ContactForm />
                        </Card>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}
