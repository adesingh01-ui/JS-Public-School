# J S Public School - Web Portal Codebase

Production-ready static website developed for **J S Public School**, Sitapur, Uttar Pradesh (CBSE Affiliated). Designed with a custom glassmorphism visual language, custom typography, and dynamic interactivity without reliance on heavy JS frameworks.

## Project Specifications

- **Client:** J S Public School
- **Board:** CBSE
- **Classes:** Nursery to Class X
- **Location:** Kakori, Lauli, Machhrehta, Sitapur, UP - 261403
- **Primary Color Palette:** Royal Blue (`#0A2540`), Gold (`#D4AF37`), Soft Gray (`#F8FAFC`)

## Structure Overview

- `index.html`: Main landing page featuring full-width slider, leadership introduction, statistics counters, and quick links.
- `about.html`: Core philosophy, vision, and mission statement.
- `leadership.html`: Showcase profiles for Chairman Sub Major / Er. K K Singh, Vice Chairman Mr. M K Singh, Manager Mr. K P Singh, and Principal Mr. Himanshu Tiwari.
- `academics.html`: Detailed CBSE academic breakdown across Primary and Secondary divisions.
- `gallery.html`: Filterable media gallery with lightbox modal previewing capability.
- `admissions.html`: Guidelines, requirements, and application inquiries.
- `contact.html`: Location maps, touch points, and contact form handlers.

## Image Asset Placement

Ensure your 32 custom school photographs and staff portraits are assigned to `assets/images/`:
- `logo.png`
- `chairman.jpg`
- `vice-chairman.jpg`
- `manager.jpg`
- `principal.jpg`
- `img-1.jpg` through `img-32.jpg`

## Deployment Instructions

1. Upload the root directory `JS-Public-School` directly to any web host (e.g., Apache, Nginx, Vercel, Netlify, or GitHub Pages).
2. Ensure file permissions permit reading for all asset folders.
3. Sitemap (`sitemap.xml`) and Web Crawler Directives (`robots.txt`) are located at root level for automatic indexing.