# Component Inventory — Sampritha

## Page order

1. Project introduction and in-page reference navigation
2. Allbirds reference analysis
3. Allbirds-inspired component group
4. ILIA Beauty reference analysis
5. ILIA-inspired component group
6. Disclaimer/footer

## Reference 1: Allbirds

| Order | Component | Purpose | Main props/state |
|---|---|---|---|
| 1 | `AnnouncementBar` | Low-noise fulfilment message | `message` |
| 2 | `MinimalHeader` | Gender/category navigation and utility actions | `links`, `menuOpen` |
| 3 | `ComfortHero` | Full-width lifestyle campaign with two CTAs | `eyebrow`, `title`, `actions`, `artLabel` |
| 4 | `ProductShelf` | Tabbed new/bestseller products | `shelves`, `activeTab`, `addedProduct` |
| 5 | `ValuePillars` | Three material/customer-value statements | `items[]` |
| 6 | `MaterialStory` | Editorial image/copy split | `title`, `copy`, `cta`, `artLabel` |

Implementation note: these logical sections are grouped in
`src/components/allbirds/AllbirdsShowcase.jsx` to keep this small assignment easy to review.

## Reference 2: ILIA Beauty

| Order | Component | Purpose | Main props/state |
|---|---|---|---|
| 1 | `OfferRail` | Rotating-offer visual pattern | `offers[]` |
| 2 | `BeautyHeader` | Category-first premium navigation | `links` |
| 3 | `SkinHero` | Educational campaign introduction | `title`, `copy`, `cta` |
| 4 | `CuratedCategoryTabs` | Product discovery by routine | `categories`, `activeCategory` |
| 5 | `FeaturedShadeProduct` | High-choice product with shade swatches | `shades`, `selectedShade`, `added` |
| 6 | `CategoryMosaic` | Visual category grid | `categories[]` |
| 7 | `ServiceCards` | Shade finder, subscription and loyalty | `services[]` |
| 8 | `EditorialProof` | Testimonial/press rhythm | `quote`, `supportingCopy` |
| 9 | `NewsletterFooter` | Email capture and footer close | `onSubmit` |

## Shared components

- `PlaceholderArt`: labelled, responsive placeholder artboard with no brand imagery.
- `SectionIntro`: explains why each reference was selected.
