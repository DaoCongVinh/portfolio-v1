"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                reset();
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch (error) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    {...register("name")}
                    placeholder="Your name"
                    className="mt-2"
                />
                {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                )}
            </div>

            <div>
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="your.email@example.com"
                    className="mt-2"
                />
                {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                )}
            </div>

            <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                    id="subject"
                    {...register("subject")}
                    placeholder="What's this about?"
                    className="mt-2"
                />
                {errors.subject && (
                    <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
                )}
            </div>

            <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Your message..."
                    rows={6}
                    className="mt-2"
                />
                {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                )}
            </div>

            {status === "success" && (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <CheckCircle2 size={20} />
                    <span>Message sent successfully!</span>
                </div>
            )}

            {status === "error" && (
                <div className="flex items-center gap-2 text-destructive">
                    <AlertCircle size={20} />
                    <span>Failed to send message. Please try again.</span>
                </div>
            )}

            <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={status === "loading"}
            >
                {status === "loading" ? (
                    "Sending..."
                ) : (
                    <>
                        Send Message
                        <Send className="ml-2" size={16} />
                    </>
                )}
            </Button>
        </form>
    );
}
