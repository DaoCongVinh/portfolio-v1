# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js 15, featuring 3D animations, dark mode, MDX blog, and beautiful UI components.

## ✨ Features

- 🎨 **Modern UI**: Built with Shadcn/ui and Tailwind CSS
- 🌓 **Dark Mode**: Fully functional dark/light theme toggle
- 🎭 **3D Graphics**: Interactive Three.js animations
- ✍️ **MDX Blog**: Write blog posts in MDX with syntax highlighting
- 📱 **Fully Responsive**: Optimized for all device sizes
- 🚀 **Performance**: Optimized with lazy loading and code splitting
- 🎬 **Animations**: Smooth scroll reveals and page transitions with Framer Motion
- 📧 **Contact Form**: Functional contact form with validation
- 🔍 **SEO Optimized**: Comprehensive metadata and Open Graph tags

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber (@react-three/fiber, @react-three/drei)
- **Blog**: MDX with next-mdx-remote
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React
- **Theme**: next-themes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-v1
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📂 Project Structure

```
portfolio-v1/
├── app/                    # Next.js 15 App Router
│   ├── about/             # About page
│   ├── blog/              # Blog listing and posts
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── 3d/               # Three.js components
│   ├── about/            # About page components
│   ├── animations/       # Animation wrappers
│   ├── blog/             # Blog components
│   ├── contact/          # Contact components
│   ├── layout/           # Layout components
│   ├── portfolio/        # Portfolio components
│   └── ui/               # Shadcn/ui components
├── content/              # Content files
│   └── blog/            # MDX blog posts
├── lib/                  # Utilities and helpers
│   ├── context/         # React contexts
│   ├── data/            # Static data
│   ├── hooks/           # Custom hooks
│   └── mdx.ts           # MDX utilities
└── public/              # Static assets
```

## ✏️ Customization

### Update Personal Information

1. **Home Page**: Edit `app/page.tsx` to update your name and introduction
2. **About Page**: Modify `lib/data/experience.ts` with your experience and skills
3. **Projects**: Update `lib/data/projects.ts` with your portfolio projects
4. **Contact Info**: Change contact details in `app/contact/page.tsx` and `components/contact/SocialLinks.tsx`
5. **Metadata**: Update SEO information in `app/layout.tsx`

### Add Blog Posts

Create new MDX files in  `content/blog/` with frontmatter:

```mdx
---
title: "Your Post Title"
description: "Post description"
date: "2024-01-15"
author: "Your Name"
tags: ["tag1", "tag2"]
---

Your content here...
```

### Theme Customization

Modify `app/globals.css` to customize colors and styles. The theme uses CSS variables for easy customization.

## 📧 Contact Form Setup

The contact form is set up with an API route at `app/api/contact/route.ts`. To enable email sending:

1. Choose an email service (e.g., Resend, SendGrid, Nodemailer)
2. Install the package: `npm install resend` (or your chosen service)
3. Add environment variables to `.env.local`:
```env
RESEND_API_KEY=your_api_key_here
CONTACT_EMAIL=your-email@example.com
```
4. Update `app/api/contact/route.ts` with your email sending logic

## 🎨 Adding Images

Place images in the `public/images/` directory and reference them in your projects or blog posts.

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to Vercel.

Quick deploy:

```bash
npm run build  # Test production build locally
```

Then push to GitHub and deploy via Vercel dashboard or CLI.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Your Name**
- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)

---

Made with ❤️ using Next.js
