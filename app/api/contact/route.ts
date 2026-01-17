import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate inputs
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // TODO: Implement email sending logic here
        // You can use nodemailer, SendGrid, Resend, or any other email service
        // Example with console log for now:
        console.log("Contact form submission:", { name, email, subject, message });

        // For demonstration, we'll just return success
        // In production, you'd send an actual email here
        /*
        // Example with Resend:
        // await resend.emails.send({
        //   from: 'onboarding@resend.dev',
        //   to: 'your-email@example.com',
        //   subject: `Contact Form: ${subject}`,
        //   html: `
        //     <h2>New Contact Form Submission</h2>
        //     <p><strong>From:</strong> ${name} (${email})</p>
        //     <p><strong>Subject:</strong> ${subject}</p>
        //     <p><strong>Message:</strong></p>
        //     <p>${message}</p>
        //   `
        // });
        */

        return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}
