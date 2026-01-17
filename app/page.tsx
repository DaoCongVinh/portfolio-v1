"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import ThreeScene from "@/components/3d/SplineScene";
import { ArrowRight, Code, Palette, Rocket } from "lucide-react";
import { projectsData } from "@/lib/data/projects";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <ThreeScene />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Your Name</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A passionate Full Stack Developer crafting beautiful, modern web
              experiences
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/portfolio">
                <Button size="lg" className="group">
                  View My Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/20 rounded-full p-1">
            <div className="w-1.5 h-3 bg-foreground/40 rounded-full mx-auto" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What I Do
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="glass-effect rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-muted-foreground">
                  Building responsive, performant web applications with modern
                  technologies
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass-effect rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                <p className="text-muted-foreground">
                  Creating beautiful, intuitive interfaces that users love
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="glass-effect rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Performance</h3>
                <p className="text-muted-foreground">
                  Optimizing applications for speed, SEO, and user experience
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Featured Projects
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Check out some of my recent work
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button size="lg" variant="outline">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and
              opportunities
            </p>
            <Link href="/contact">
              <Button size="lg">
                Start a Conversation
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
