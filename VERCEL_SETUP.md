# Vercel Deployment Setup Guide

Complete instructions for connecting your GitHub repository to Vercel and configuring automatic deployments.

## Prerequisites

- A GitHub account with your portfolio repository
- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Your React + Vite project ready to deploy

---

## Step 1: Connect GitHub Repository to Vercel

1. **Log in to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in (or create an account)
   - Use "Continue with GitHub" to link your GitHub account

2. **Import Your Project**
   - Click the **"Add New..."** button → **"Project"**
   - You'll see a list of your GitHub repositories
   - Find your portfolio repository and click **"Import"**

3. **Configure Project Settings**
   - **Project Name**: Your portfolio name (e.g., "portfolio" or "nirwair-portfolio")
   - **Framework Preset**: Select **"Vite"** (or it may auto-detect)
   - **Root Directory**: Leave as `./` (unless your project is in a subdirectory)
   - **Build and Output Settings**: See Step 2 below

---

## Step 2: Configure Build Settings

### Build Command
```
npm run build
```

### Output Directory
```
dist
```

### Install Command (optional, defaults to `npm install`)
```
npm install
```

### Development Command (optional, for preview deployments)
```
npm run dev
```

**Note:** These settings are already configured in your `vercel.json` file, so Vercel should auto-detect them. You can verify them in the project settings.

---

## Step 3: Set Up Environment Variables

### Required Environment Variables

If your project uses environment variables (API keys, tokens, etc.), add them in Vercel:

1. **Go to Project Settings**
   - Click on your project in Vercel dashboard
   - Navigate to **Settings** → **Environment Variables**

2. **Add Variables**
   - Click **"Add New"**
   - Enter the variable name (e.g., `VITE_API_KEY`)
   - Enter the variable value
   - Select environments: **Production**, **Preview**, and/or **Development**
   - Click **"Save"**

### Common Environment Variables for React + Vite

```
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Portfolio
```

**Important:** 
- Vite requires the `VITE_` prefix for environment variables to be exposed to your app
- Variables are available in your code via `import.meta.env.VITE_API_URL`

---

## Step 4: Configure Auto-Deploy Settings

### Enable Automatic Deployments

1. **Go to Project Settings**
   - Click on your project → **Settings** → **Git**

2. **Production Branch**
   - Set **Production Branch** to `main` or `master` (whichever you use)
   - This branch will deploy to your production URL

3. **Automatic Deployments**
   - ✅ **Enable "Automatic deployments from Git"**
   - This will deploy automatically on every push to your production branch

### Preview Deployments

1. **Pull Request Previews**
   - ✅ **Enable "Pull Request Comments"** (optional)
   - Vercel will automatically create preview deployments for each PR
   - Each PR gets a unique preview URL

2. **Branch Previews**
   - ✅ **Enable "Deploy all branches"** (optional)
   - Creates preview deployments for all branches, not just PRs

---

## Step 5: Get Vercel Credentials for GitHub Actions

If you're using GitHub Actions (as configured in `.github/workflows/deploy.yml`), you'll need these values:

### VERCEL_TOKEN

1. Go to [Vercel Account Settings](https://vercel.com/account/tokens)
2. Click **"Create Token"**
3. Give it a name (e.g., "GitHub Actions Deploy")
4. Copy the token (you won't see it again!)

### VERCEL_ORG_ID

1. Go to your project → **Settings** → **General**
2. Scroll to **"Organization ID"**
3. Copy the value

### VERCEL_PROJECT_ID

1. Go to your project → **Settings** → **General**
2. Scroll to **"Project ID"**
3. Copy the value

### Add Secrets to GitHub

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Add each secret:
   - Name: `VERCEL_TOKEN`, Value: [your token]
   - Name: `VERCEL_ORG_ID`, Value: [your org ID]
   - Name: `VERCEL_PROJECT_ID`, Value: [your project ID]

---

## Step 6: Deploy Your Project

### First Deployment

1. **Click "Deploy"** in Vercel dashboard
2. Vercel will:
   - Clone your repository
   - Install dependencies (`npm install`)
   - Build your project (`npm run build`)
   - Deploy to production

### Automatic Future Deployments

Once configured, every push to your `main`/`master` branch will:
- Trigger a new deployment automatically
- Build and deploy your latest changes
- Update your production URL

---

## Step 7: Verify Deployment

### Check Your Deployment

1. **Vercel Dashboard**
   - Go to your project → **Deployments** tab
   - See deployment status, build logs, and URLs

2. **Production URL**
   - Your site will be live at: `https://your-project-name.vercel.app`
   - You can add a custom domain in **Settings** → **Domains**

### Test SPA Routing

- Visit your production URL
- Navigate to routes like `/projects` or `/contact`
- Verify they work correctly (should not show 404)

---

## Troubleshooting

### Build Fails

1. **Check Build Logs**
   - Go to deployment → Click on the failed deployment
   - Review error messages in build logs

2. **Common Issues**
   - Missing dependencies: Check `package.json`
   - Build command incorrect: Verify in `vercel.json`
   - Environment variables missing: Add in Settings → Environment Variables

### 404 Errors on Routes

- Verify `vercel.json` has the rewrite rule for SPA routing
- Ensure `cleanUrls: true` is set
- Check that React Router is configured correctly

### GitHub Actions Not Working

- Verify all three secrets are added correctly
- Check GitHub Actions logs for errors
- Ensure workflow file is in `.github/workflows/` directory

---

## Additional Configuration

### Custom Domain

1. Go to **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter your domain name
4. Follow DNS configuration instructions

### Analytics (Optional)

1. Go to **Settings** → **Analytics**
2. Enable Vercel Analytics for performance insights

### Environment-Specific Variables

- **Production**: Variables used in production deployments
- **Preview**: Variables used in PR/branch previews
- **Development**: Variables used in local development (via Vercel CLI)

---

## Summary Checklist

- [ ] GitHub repository connected to Vercel
- [ ] Build command set to `npm run build`
- [ ] Output directory set to `dist`
- [ ] Production branch set to `main` or `master`
- [ ] Automatic deployments enabled
- [ ] Environment variables added (if needed)
- [ ] GitHub Actions secrets configured (VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID)
- [ ] First deployment successful
- [ ] SPA routing tested and working
- [ ] Custom domain configured (optional)

---

## Quick Reference

**Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)  
**Project Settings**: Project → Settings  
**Environment Variables**: Settings → Environment Variables  
**Git Settings**: Settings → Git  
**Deployments**: Project → Deployments tab  

**Support**: [vercel.com/docs](https://vercel.com/docs) or [vercel.com/support](https://vercel.com/support)

