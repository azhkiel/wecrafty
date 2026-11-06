# Wecrafty — Official Website

> **Your Website, Our Craft.**  
> Modern, minimalist, professional, responsive website for Wecrafty — Website Development & Digital Solutions.

## Brand Identity & Asset Placement

The website is configured to display the official brand logo from:
```text
public/images/wecrafty-logo.png
```
- If this file is missing, the website displays a temporary neutral box placeholder and never distorts or replaces your official logo.
- When you add your `wecrafty-logo.png` into `public/images/`, it will automatically render across the navbar, hero browser mockup, and footer.

## Technology Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 with custom brand tokens (Navy `#17165E`, Blue `#1685F7`, Blue-strong `#0F6FD9`, Purple `#8739E8`, Gray-50 `#F6F8FC`)
- **Typography:** Bricolage Grotesque (Display) + DM Sans (Body)
- **Icons:** Lucide React
- **Architecture:** Zero-dependency static SPA with anchor navigation (no server or backend required)

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Build & Preview

```bash
# Build production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```

## Vercel Deployment

This project is ready to deploy directly to Vercel:

1. Push your repository to GitHub or GitLab.
2. Import the project in the [Vercel Dashboard](https://vercel.com/new).
3. Vercel automatically detects Vite with:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy with no environment variables required.

## Customizing Contact Channels

Update your contact info, WhatsApp number, email, and social links in:
```text
src/config/site.ts
```
All channels feature clearly labeled placeholder comments.
