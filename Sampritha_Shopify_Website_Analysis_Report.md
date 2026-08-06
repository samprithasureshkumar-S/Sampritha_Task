# Shopify Storefront Analysis and Design Proposal — Sampritha

## Approved references proposed

1. **Allbirds** — https://www.allbirds.com/
2. **ILIA Beauty** — https://iliabeauty.com/

Both brands are documented by Shopify as Shopify/Shopify Plus merchants. Allbirds
uses a unified Shopify commerce setup, while ILIA adopted Shopify Plus and a
headless front end for richer content and shade-discovery experiences.

## Why these two belong together

This pair supports a unique design direction: **calm, guided commerce**.
Allbirds reduces decision pressure through restrained navigation and material-led
storytelling. ILIA handles a more complex beauty catalogue through category tabs,
shade selection, education, quizzes, loyalty and subscription prompts.

## Allbirds analysis

### UI/UX
- Large campaign imagery and restrained typography keep the first decision simple.
- Men/women and product-family paths are visible without excessive promotional UI.
- Product shelves use familiar cards and quick category switching.
- Comfort, sustainability and natural-material explanations are repeated after
  product discovery, reinforcing the purchase rather than delaying it.

### Navigation
- Broad gender and product-group entry points.
- Mega-menu depth supports shoes, apparel and sustainability content.
- Footer provides help, returns and category recovery.

### Performance
- The visual system is image-led, so responsive images, modern formats, reserved
  aspect ratios and lazy loading are essential.
- The proposed implementation keeps the showcase dependency-light and uses CSS
  rather than a heavy animation library.
- No synthetic Lighthouse score is claimed in this report.

### Responsiveness
- Desktop uses spacious grids and large editorial sections.
- Mobile should collapse navigation, preserve two clear hero actions and convert
  product rows to one-column or horizontal touch-friendly shelves.

### Customer experience strengths
- Low cognitive load
- Consistent comfort proposition
- Clear material proof
- Strong returns/help visibility
- Omnichannel inventory is supported by Shopify according to Shopify’s case study

## ILIA Beauty analysis

### UI/UX
- Promotional offers are visible at the top but the main hero remains brand-led.
- “Curated Favorites” tabs reduce a broad catalogue into routine-based decisions.
- Shade selectors and “Find My Shade” directly address beauty-shopping uncertainty.
- Loyalty, subscription and impact content appear as service cards, making the
  experience feel guided rather than purely transactional.

### Navigation
- Category navigation reflects customer intent: complexion, eyes, lip/cheek and skin care.
- Search, account, bag, rewards and shade guidance are readily accessible.
- Product families and “favorites” are both represented in the menu.

### Performance
- Shade-rich commerce can create large image and script payloads.
- Shopify’s ILIA case study says its headless approach improved front-end flexibility
  and page-load capability while supporting shade comparison.
- A production version should load shade imagery on demand and defer quizzes/reviews
  until interaction.

### Responsiveness
- Shade swatches need at least 44px touch targets and visible selected states.
- Two-column featured products should stack with product controls before supporting copy.
- Offer rails should reduce to one message instead of shrinking three messages.

### Customer experience strengths
- Guided shade discovery
- Education close to purchase
- Category and routine-based browsing
- Subscription and loyalty
- Sustainability and certification proof

## Combined website concept

### Concept name: “Grounded Routine”

The combined site begins with an Allbirds-like low-pressure campaign, then uses
ILIA-like guided tabs and selection controls. It keeps product discovery clear,
explains materials/benefits after the shelf, and closes with loyalty, education
and trust.

### Proposed section order

1. Compact fulfilment/offer rail
2. Minimal sticky header
3. Large editorial hero with two primary paths
4. Tabbed product shelf
5. Guided featured-product selector
6. Category mosaic
7. Three proof/value pillars
8. Material/ingredient story split
9. Shade/fit quiz, subscription and rewards
10. Editorial proof and newsletter

## React library recommendations

| Feature | Recommendation | Why |
|---|---|---|
| Accessible tabs, menu, select and dialog | React Aria Components | Unstyled components with accessibility, internationalization and interaction behaviour built in |
| Product carousel | Embla Carousel React | Small API, touch precision, React wrapper and automatic cleanup |
| API/cache layer | TanStack Query | Scalable server-state caching, retries and loading/error states |
| Forms | React Hook Form + Zod | Low re-render form handling plus typed runtime validation |
| Small client state | Zustand | Lightweight store for bag, active filters and non-server UI state |
| Icons | Lucide React | Consistent SVG icons with tree-shakeable imports |
| Testing | Vitest + Testing Library + axe-core | Fast unit tests, semantic interaction testing and automated accessibility checks |
| Motion | CSS first; Motion only for complex transitions | Keeps the base bundle lean and respects reduced-motion preferences |

## Accessibility requirements

- One visible H1 and logical heading order
- Keyboard-operable menus, tabs, swatches and carousels
- Visible focus and selected states
- Labelled placeholder/product images
- 44px minimum touch targets for shade choices
- Reduced-motion support
- Sufficient text/CTA contrast
- No auto-rotating content without pause controls

## Sources

- Allbirds: https://www.allbirds.com/
- Shopify Allbirds case study: https://www.shopify.com/au/case-studies/allbirds
- ILIA Beauty: https://iliabeauty.com/
- Shopify ILIA case study: https://www.shopify.com/in/case-studies/ilia
- React Aria: https://react-spectrum.adobe.com/react-aria/
- Embla Carousel: https://www.embla-carousel.com/docs/get-started/react/
- Radix alternative: https://www.radix-ui.com/primitives
- TanStack Query: https://tanstack.com/query/latest/docs/framework/react
