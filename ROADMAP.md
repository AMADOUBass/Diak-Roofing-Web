# Diakite Roofing website: roadmap

Rebuild of https://diakiteroofingrestoration.com/ from scratch. Tick items as they are done.

## 0. Setup

- [x] Astro project with Tailwind, GSAP and Lenis
- [x] GitHub repository
- [x] Vercel connected, deploys on every push to `main`

## 1. From the client

These do not block building, but the first three block launch.

- [ ] Send him the website review
- [ ] Domain: who registered it, and can he log in? (blocks launch)
- [x] Phone: (667) 200-6656 confirmed as his own line
- [ ] Google Business Profile: can he log in as owner? (to settle later, blocks launch)
- [ ] Photo of him on a roof or in front of a finished job
- [ ] Crew photo, if he has one
- [ ] Drone video and his best job photos at full size
- [ ] Logo source file (SVG, AI or high-resolution PNG)
- [ ] Owens Corning account, for the instant quote tool
- [ ] Enhancify link, for the financing page
- [ ] Where inspection requests should be emailed
- [ ] Approval of the homepage headline

## 2. Foundations

- [x] Fonts and type scale
- [x] Colors, spacing and button styles
- [x] Logo added to the project
- [ ] Photos added to the project (AI placeholders for now, real ones before launch)
- [x] Layout: page title, description, canonical URL
- [ ] Social share image
- [x] Header with navigation and the Services and Service Areas dropdowns
- [x] Mobile menu
- [x] Footer
- [x] Fixed call button on mobile
- [x] Smooth scroll (Lenis) and shared scroll animations (GSAP)
- [x] Reduced-motion fallback in the shared animation setup

## 3. Homepage

- [x] First screen: headline, two buttons, staged opening animation, scrolling services band
- [x] First screen: cut-out roofer overlapping the headline (AI placeholder, swap for a real photo)
- [x] Recent work: heading that reveals line by line beside a tilted photo grid (AI placeholder photos, swap for real jobs)
- [x] Services: numbered list that fades in row by row, with a photo that follows the hovered service
- [x] Who you are calling: dark section with overlapping photos and counting numbers (AI placeholder photos)
- [x] Before and after, revealed on scroll (real drone photos of one job)
- [x] How it works: four steps on a line that fills as you scroll
- [x] Google reviews: sliding row of the seven real reviews
- [x] Service area: the 14 towns as links
- [x] FAQ: accordion with structured data for search engines
- [x] Closing call to action with the inspection form (opens the email app until the server route exists)
- [ ] Trust strip with the Owens Corning and Xactimate names (optional, not built)
- [ ] Long search text moved into collapsible sections

## 4. Other pages

Every address must match the old site exactly, with a trailing slash.

- [ ] Content collections for services, towns and blog posts
- [ ] Service page template, then the 7 service pages
- [ ] Town page template, then the 14 town pages
- [ ] `/roof-replacement-ellicott-city-md/`
- [ ] `/services/`
- [ ] `/service-areas/`
- [ ] `/about/`
- [ ] `/gallery/`
- [ ] `/financing/`
- [ ] `/contact/`
- [ ] `/instant-estimate/`
- [ ] `/blog/` and the blog post template
- [ ] Blog posts rewritten
- [ ] `/privacy-policy/`
- [ ] 404 page
- [ ] All text rewritten fresh, not copied from the old site

## 5. Features

- [ ] Inspection form: Vercel adapter, server route, email through Resend
- [ ] Spam protection on the form
- [ ] Thank-you state after sending
- [ ] Instant quote tool reconnected
- [ ] Financing link to Enhancify
- [ ] Gallery with filters and a full-size viewer

## 6. Search

- [ ] Unique title and description on every page
- [ ] Structured data: local business, services, FAQ
- [ ] Sitemap and robots.txt
- [ ] Check that every address in the old sitemap exists on the new site
- [ ] Alt text on every image

## 7. Checks before launch

- [ ] Phone, tablet and desktop
- [ ] Chrome, Safari and Firefox
- [ ] Speed test on the homepage and one service page
- [ ] Keyboard navigation and color contrast
- [ ] Form tested end to end
- [ ] Every link and phone number tested
- [ ] Client walkthrough and sign-off

## 8. Launch

- [ ] Analytics account in the client's name
- [ ] Search Console in the client's name
- [ ] Domain pointed at Vercel
- [ ] Sitemap submitted to Google
- [ ] Old addresses checked again on the live domain
- [ ] Rankings and calls watched for the first four weeks
