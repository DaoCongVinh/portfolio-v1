# Deployment Guide

This guide will help you deploy your Next.js portfolio to Vercel.

## Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Git repository (GitHub, GitLab, or Bitbucket)
- Your project pushed to the repository

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Project"
3. Select your Git provider (GitHub/GitLab/Bitbucket)
4. Choose your repository from the list
5. Configure your project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `next build` (default)
   - **Output Directory**: `.next` (default)

### Step 3: Environment Variables

If you're using the contact form with an email service, add environment variables:

1. Click "Environment Variables"
2. Add your variables:
   ```
   RESEND_API_KEY=your_api_key_here
   CONTACT_EMAIL=your-email@example.com
   ```

### Step 4: Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 1-2 minutes)
3. Your site will be live at `https://your-project.vercel.app`

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login

```bash
vercel login
```

### Step 3: Deploy

From your project directory:

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Custom Domain Setup

### Add a Custom Domain

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Enter your domain name
4. Follow the instructions to:
   - Add DNS records (A or CNAME) to your domain provider
   - Wait for DNS propagation (can take up to 48 hours)

### Example DNS Configuration

**For Apex Domain** (example.com):
```
Type: A
Name: @
Value: 76.76.21.21
```

**For Subdomain** (www.example.com):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Environment Variables

### Required Variables

If using email functionality:

| Variable | Description | Example |
|----------|-------------|---------|
| `RESEND_API_KEY` | Resend API key for emails | `re_123...` |
| `CONTACT_EMAIL` | Your email address | `you@example.com` |

### Adding Environment Variables

**Via Dashboard:**
1. Project Settings → Environment Variables
2. Add each variable with name and value
3. Select environments (Production/Preview/Development)
4. Save changes

**Via CLI:**
```bash
vercel env add RESEND_API_KEY
```

## Performance Optimization

### Before Deploying

1. **Optimize Images**: Ensure images are compressed
2. **Remove Console Logs**: Clean up development code
3. **Test Build Locally**:
   ```bash
   npm run build
   npm start
   ```

### After Deployment

1. **Check Lighthouse Scores**:
   - Open DevTools
   - Go to Lighthouse tab
   - Run audit
   - Aim for 90+ scores

2. **Monitor Analytics**:
   - Enable Vercel Analytics in project settings
   - Monitor Core Web Vitals

## Continuous Deployment

Vercel automatically deploys when you push to your Git repository:

- **Main/Master Branch**: Production deployment
- **Other Branches**: Preview deployments
- **Pull Requests**: Automatic preview URLs

### Workflow

```bash
# Make changes
git add .
git commit -m "Update portfolio"
git push

# Vercel automatically builds and deploys
```

## Troubleshooting

### Build Failures

**Issue**: Build fails with module errors
**Solution**: 
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

**Issue**: Environment variables not working
**Solution**: 
- Verify variables are added in Vercel dashboard
- Redeploy after adding variables
- Check variable names match exactly

### Deployment Issues

**Issue**: 404 on refresh
**Solution**: This shouldn't happen with Next.js, but verify `next.config.ts` is correct

**Issue**: Slow loading
**Solution**:
- Check image sizes
- Enable Vercel's Image Optimization
- Verify lazy loading is working

## Post-Deployment Checklist

- [ ] Test all pages work correctly
- [ ] Verify dark/light mode toggle
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test 3D animations performance
- [ ] Check blog posts render correctly
- [ ] Verify SEO metadata (use view-source)
- [ ] Test on multiple browsers
- [ ] Submit sitemap to Google Search Console

## Updating Your Site

To update your deployed site:

```bash
# Make changes locally
git add .
git commit -m "Description of changes"
git push

# Vercel automatically redeploys
```

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Community**: https://github.com/vercel/next.js/discussions

---

Happy deploying! 🚀
