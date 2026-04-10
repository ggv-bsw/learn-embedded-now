# Embedded School - Deployment Guide

## Overview

This document covers deploying the Embedded School website to production using Vercel or alternative hosting platforms.

---

## Pre-Deployment Checklist

- [ ] All forms have rate limiting enabled (Checkout, Meeting, Junior, Trainer, Contact)
- [ ] Form validation schemas are in place
- [ ] Supabase client uses sessionStorage (not localStorage)
- [ ] Timeout and retry logic configured (15s timeout, 3 retries)
- [ ] Security headers configured in vercel.json
- [ ] RLS policies created in Supabase (see SUPABASE_RLS_POLICIES.sql)
- [ ] Environment variables set correctly (.env.local created)
- [ ] TypeScript builds without errors (`npm run build`)
- [ ] All tests pass (if applicable)

---

## Deployment Steps

### 1. Vercel (Recommended)

**Option A: Via GitHub**

1. Push to GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Vercel auto-detects Next.js/Vite settings
6. Set environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
7. Click "Deploy"

**Option B: Via Vercel CLI**

```bash
npm i -g vercel
vercel login
vercel --prod
```

### 2. Netlify

Create `netlify.toml` at project root:

```toml
[build]
  command = "npm run build"
  functions = "netlify/functions"
  publish = "dist"

[build.environment]
  VITE_SUPABASE_URL = "https://wzdlhukymsjittdyuddr.supabase.co"
  VITE_SUPABASE_ANON_KEY = "your-key-here"

[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'wasm-unsafe-eval'; ..."
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
```

Then deploy:

```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod
```

### 3. Docker (Self-hosted)

Create `Dockerfile`:

```dockerfile
FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "preview"]
```

Build & run:

```bash
docker build -t embedded-school .
docker run -p 3000:3000 \
  -e VITE_SUPABASE_URL="your-url" \
  -e VITE_SUPABASE_ANON_KEY="your-key" \
  embedded-school
```

---

## Environment Variables

Set these in your deployment platform dashboard:

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_SUPABASE_URL` | Supabase project URL | `https://xxx.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key | `ey...` |

---

## Security Headers Verification

After deployment, verify security headers:

```bash
# Check CSP header is set
curl -I https://your-domain.com | grep Content-Security-Policy

# Check HSTS header
curl -I https://your-domain.com | grep Strict-Transport-Security

# Check X-Frame-Options
curl -I https://your-domain.com | grep X-Frame-Options
```

---

## Supabase Configuration

### 1. Enable RLS Policies

Before going live:

1. Go to Supabase Dashboard
2. SQL Editor
3. Copy all queries from `SUPABASE_RLS_POLICIES.sql`
4. Run each query to enable RLS and create policies
5. Verify with the audit query

### 2. Enable Auth

1. Supabase Dashboard → Authentication → Settings
2. Disable anonymous signups if not needed
3. Configure Email templates
4. Set up OAuth providers (optional)

### 3. Database Backups

1. Supabase Dashboard → Database → Backups
2. Enable automatic daily backups
3. Test restore process by downloading a backup

---

## Monitoring & Logs

### Vercel

- Dashboard → Deployments → Logs section
- Real-time logs during deployment
- Function logs for serverless functions

### Netlify

- Dashboard → Deploys tab
- Build logs available for debugging
- Functions logs in Functions tab

### Supabase

- Dashboard → Logs
- Monitor API calls and errors
- Check Rate Limit statistics

---

## Rollback Plan

If deployment fails:

**Vercel:**
```bash
vercel rollback
```

**Netlify:**
Dashboard → Deploys → Click previous version → "Publish deploy"

**GitHub:**
```bash
git revert HEAD
git push origin main
```

---

## Performance Optimization

### Build Optimization

```bash
# Analyze bundle size
npm run build -- --analyze
```

### Caching Strategy

Headers configured in vercel.json:
- Static assets: 1 year cache
- HTML: no cache
- API routes: no cache

### Image Optimization

Use Vercel Image Optimization (automatic with `<Image />` component)

---

## Troubleshooting

### Blank Page After Deployment

**Cause:** CSP policy blocking resources

**Fix:**
1. Open browser console (F12)
2. Check for CSP violations
3. Add exception to Content-Security-Policy in vercel.json
4. Redeploy

### Form Submissions Failing

**Check:**
1. Supabase functions are deployed
2. Environment variables are set
3. CORS is configured on Supabase
4. Rate limiting not blocking requests

### 15s Timeout Errors

**Solution:** Already configured in `supabase/client.ts`. If still occurring:
1. Check network speed
2. Optimize serverless function performance
3. Increase timeout in client.ts if needed

---

## Health Checks

Create `/api/health` endpoint for monitoring:

```typescript
// src/api/health.ts
export default (req: Request) => {
  return new Response(JSON.stringify({ status: 'ok' }), {
    headers: { 'Content-Type': 'application/json' }
  });
};
```

Configure monitoring to ping this endpoint every 5 minutes.

---

## Team Access

**Vercel Dashboard:**
1. Settings → Team
2. Add team members
3. Set appropriate permissions

**Supabase:**
1. Organization → Members
2. Add team members
3. Set role permissions

**GitHub:**
1. Settings → Manage Access
2. Add collaborators
3. Set permission levels

---

## Post-Deployment

After deployment goes live:

- [ ] Verify all forms work
- [ ] Test phone validation (must have 7+ digits)
- [ ] Test email validation
- [ ] Check rate limiting (5 attempts per minute)
- [ ] Verify no console errors
- [ ] Test in different browsers
- [ ] Verify mobile responsiveness
- [ ] Check loading performance
- [ ] Monitor error logs for first 24 hours

---

## Support & Issues

For issues:
1. Check browser console for errors
2. Check Supabase logs for API errors
3. Check Vercel/Netlify build logs
4. Review ISSUES.md for known problems
