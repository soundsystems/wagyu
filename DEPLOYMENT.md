# Production Deployment Checklist

## Pre-Deployment Checklist

### 1. Environment Variables
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your production domain
- [ ] Update Google Analytics ID if using analytics
- [ ] Add Google Search Console verification code
- [ ] Configure social media handles and URLs

### 2. SEO & Metadata
- [x] ✅ Comprehensive meta tags implemented
- [x] ✅ Open Graph images generated dynamically
- [x] ✅ Structured data (JSON-LD) added
- [x] ✅ Sitemap.xml generated
- [x] ✅ Robots.txt configured
- [ ] Update verification codes in layout.tsx
- [ ] Test all Open Graph images render correctly

### 3. PWA Configuration
- [x] ✅ Web App Manifest created
- [x] ✅ Service Worker implemented
- [x] ✅ PWA meta tags added
- [x] ✅ Touch-friendly styling implemented
- [x] ✅ Safe area handling for mobile devices

### 4. Performance Optimization
- [x] ✅ Image optimization configured
- [x] ✅ Font optimization with display: swap
- [x] ✅ Compression enabled
- [x] ✅ Caching headers configured
- [x] ✅ Performance monitoring added
- [ ] Test Core Web Vitals scores
- [ ] Optimize any remaining large images

### 5. Security Headers
- [x] ✅ X-Frame-Options: DENY
- [x] ✅ X-Content-Type-Options: nosniff
- [x] ✅ Referrer-Policy configured
- [x] ✅ Permissions-Policy configured
- [ ] Verify all security headers in production

### 6. Production Build
- [ ] Run `pnpm build` locally to test
- [ ] Check for build errors and warnings
- [ ] Verify all pages load correctly
- [ ] Test responsive design on multiple devices

### 7. Domain & SSL
- [ ] Configure custom domain
- [ ] Ensure SSL certificate is active
- [ ] Set up HTTPS redirects
- [ ] Update DNS records

### 8. Monitoring & Analytics
- [ ] Set up Google Analytics (if using)
- [ ] Configure Google Search Console
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Monitor Core Web Vitals

## Post-Deployment Verification

### 1. SEO Testing
- [ ] Test Open Graph images on social platforms
- [ ] Verify structured data with Google's Rich Results Test
- [ ] Check sitemap accessibility at `/sitemap.xml`
- [ ] Test robots.txt at `/robots.txt`

### 2. PWA Testing
- [ ] Test "Add to Home Screen" on mobile devices
- [ ] Verify offline functionality
- [ ] Check manifest.json loads correctly
- [ ] Test service worker registration

### 3. Performance Testing
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test on slow 3G connection
- [ ] Verify Core Web Vitals meet Google's thresholds
- [ ] Check image loading and optimization

### 4. Cross-Browser Testing
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on iOS and Android devices
- [ ] Verify responsive design works correctly
- [ ] Check for console errors

## Deployment Commands

```bash
# Install dependencies
pnpm install

# Build for production
pnpm build

# Start production server (for testing)
pnpm start

# Deploy to Vercel (example)
vercel --prod

# Deploy to other platforms
# Follow your hosting provider's deployment instructions
```

## Performance Targets

- **Lighthouse Performance**: 90+
- **Lighthouse SEO**: 95+
- **Lighthouse Accessibility**: 90+
- **Lighthouse Best Practices**: 90+
- **Core Web Vitals**:
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

## Important Notes

1. **Update Domain**: Replace `https://ozarknaturalsteak.com` with your actual domain in all files
2. **Verification Codes**: Update Google/Bing verification codes in `src/app/layout.tsx`
3. **Social Media**: Update social media URLs in structured data and metadata
4. **Contact Info**: Update contact information throughout the site
5. **Analytics**: Configure analytics tracking if desired
6. **Monitoring**: Set up error monitoring and performance tracking

## Files Modified for SEO/PWA Optimization

- `src/app/layout.tsx` - Enhanced metadata and PWA support
- `src/app/globals.css` - PWA styling and responsive utilities
- `src/app/og/route.tsx` - Dynamic OG image generation
- `src/app/sitemap.ts` - Dynamic sitemap generation
- `public/manifest.json` - PWA manifest
- `public/sw.js` - Service worker
- `public/robots.txt` - Search engine directives
- `public/browserconfig.xml` - Windows tile configuration
- `next.config.ts` - Performance and security optimizations
- All page components - Added page-specific metadata
