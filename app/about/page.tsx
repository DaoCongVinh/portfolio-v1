import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Timeline } from "@/components/about/Timeline";
import { SkillsGrid } from "@/components/about/SkillsGrid";
import { experienceData, skillsData } from "@/lib/data/experience";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <ScrollReveal>
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    About Me
                </h1>
                <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                    Learn more about my journey, experience, and skills
                </p>
            </ScrollReveal>

            {/* Introduction */}
            <section className="mb-20">
                <ScrollReveal>
                    <Card className="p-8 glass-effect">
                        <h2 className="text-2xl font-bold mb-4">Hello! 👋</h2>
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                I'm a passionate Full Stack Developer with over 5 years of
                                experience building web applications. I love creating beautiful,
                                functional, and user-friendly digital experiences.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                My journey in web development started when I built my first
                                website in 2018. Since then, I've worked with various
                                technologies and frameworks, always staying curious and eager to
                                learn new things.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                When I'm not coding, you can find me exploring new technologies,
                                contributing to open-source projects, or writing technical blog
                                posts to share what I've learned.
                            </p>
                        </div>
                    </Card>
                </ScrollReveal>
            </section>

            {/* Experience Timeline */}
            <section className="mb-20">
                <ScrollReveal>
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Work Experience
                    </h2>
                </ScrollReveal>
                <Timeline experiences={experienceData} />
            </section>

            {/* Skills */}
            <section>
                <ScrollReveal>
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Skills & Technologies
                    </h2>
                </ScrollReveal>
                <SkillsGrid skills={skillsData} />
            </section>
        </div>
    );
}
