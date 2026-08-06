# Shopify Reference Component Showcase Report

## UI Component Analysis of ILIA Beauty (International) & VAHDAM India (Indian)

**Prepared By:** Sampritha Sureshkumar  
**Technology:** React + Vite  
**Internship Task:** Shopify Reference Component Showcase  
**Date:** August 2026

---

# Table of Contents
1. Introduction
2. Objectives
3. Selected Websites
4. Comparative Analysis
5. Component Inventory
6. UI Flow
7. Proposed React Architecture
8. Technologies
9. Deliverables
10. Conclusion

---

# 1. Introduction

The purpose of this assignment is to analyze two Shopify-powered storefronts and identify reusable UI sections that can be recreated as React components. The implementation will be a single-page React + Vite application using placeholder images instead of brand assets.

# 2. Objectives

- Research one International and one Indian Shopify storefront.
- Identify reusable homepage components.
- Maintain layout rhythm and spacing.
- Use placeholder images only.
- Build a React + Vite SPA.
- Deploy on GitHub Pages.

# 3. Selected Websites

| Website | Type | Reason |
|---|---|---|
| ILIA Beauty | International | Clean premium UI, reusable homepage sections, modern navigation |
| VAHDAM India | Indian | Excellent storytelling, product collections, responsive layout |

# 4. Comparative Analysis

| Feature | ILIA Beauty | VAHDAM India |
|---|---|---|
| Design Style | Minimal & Elegant | Premium & Storytelling |
| Navigation | Clean Mega Navigation | Category-focused |
| Hero Section | Lifestyle Banner | Promotional Banner |
| Product Cards | Modern | Collection-oriented |
| CTA Style | Soft | Promotional |
| Mobile UX | Excellent | Excellent |

# 5. Component Inventory

## ILIA Beauty
| Order | Component | Purpose |
|---:|---|---|
|1|Announcement Bar|Offers|
|2|Navbar|Navigation|
|3|Hero Banner|Primary CTA|
|4|Category Cards|Browse|
|5|Product Grid|Featured products|
|6|Benefits Section|Brand value|
|7|Newsletter|Subscription|
|8|Footer|Links|

## VAHDAM India
| Order | Component | Purpose |
|---:|---|---|
|1|Offer Bar|Discounts|
|2|Navbar|Navigation|
|3|Hero Section|Campaign|
|4|Collections|Categories|
|5|Product Grid|Products|
|6|Feature Section|Highlights|
|7|Testimonials|Trust|
|8|Newsletter|Subscription|
|9|Footer|Links|

# 6. UI Flow Diagram

```text
Landing Page
   │
   ├── ILIA Components
   │     ├── Hero
   │     ├── Categories
   │     ├── Products
   │     └── Footer
   │
   └── VAHDAM Components
         ├── Hero
         ├── Collections
         ├── Products
         └── Footer
```

# 7. Proposed React Architecture

```text
src/
 ├── components/
 │   ├── ilia/
 │   └── vahdam/
 ├── App.jsx
 ├── main.jsx
 └── styles/
```

Recommended libraries:
- React
- Vite
- React Icons
- Framer Motion
- CSS Modules

# 8. Deliverables

- Approved reference URLs
- Component inventory
- React + Vite SPA
- Placeholder-based UI
- GitHub Repository
- GitHub Pages URL

# 9. Conclusion

ILIA Beauty and VAHDAM India demonstrate high-quality Shopify storefront design with reusable component patterns. Their layouts provide a strong foundation for implementing a maintainable React component library while complying with the internship requirements.

# References

- https://iliabeauty.com/
- https://www.vahdam.in/
- https://react.dev/
- https://vite.dev/
