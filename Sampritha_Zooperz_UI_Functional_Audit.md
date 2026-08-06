# Zooperz Site Builder — UI/UX and Functional Bug Review

**Prepared by:** Sampritha Sureshkumar  
**Review type:** Frontend functionality and merchant/user experience  
**Repository reviewed:** `zooperz-site-builder-develop`  
**Review date:** 23 July 2026

## 1. Review Summary

Zooperz Site Builder has a strong frontend foundation. The monorepo separates shared contracts, design tokens, merchant administration, and the public storefront. The merchant interface already includes onboarding, page management, a visual editor, themes, media, SEO, publishing, permissions, and responsive layouts.

However, the current version behaves more like a detailed product prototype than a release-ready website builder. Several screens visually suggest that an action has completed even though the underlying operation is missing, simulated, or not persisted. This is the main UX risk: merchants may trust a success message and later discover that their settings, upload, checkout, or publication did not actually work.

This audit focuses on visible functional bugs and improvements that would make the experience clearer and more dependable.

## 2. Positive Findings

- The website-builder navigation is well organized into Overview, Customize, Pages, Navigation, Themes, Media, SEO, Publishing, and Settings.
- The editor includes useful concepts such as undo/redo, autosave status, local recovery, responsive preview modes, deletion confirmation, and revision-conflict handling.
- Permission-aware hooks exist for editing, publishing, rollback, media management, and domain management.
- The storefront includes product discovery, search, collections, cart persistence, checkout layout, availability messages, and empty states.
- React Query, Zod contracts, Zustand state, lazy-loaded routes, and repository interfaces create a good base for future expansion.

## 3. Confirmed Functional and UX Bugs

### A. Onboarding appears complete when most steps are placeholders — Critical

The wizard lists 15 setup steps, but only steps 1–5 contain meaningful controls. Steps 6–15 display a generic message saying the configuration is validated and ready, without collecting brand, catalogue, delivery, payment, team, notification, or launch information.

The Business Category cards in step 2 also have no click handler or selected state, so a category cannot actually be chosen. The subdomain screen always displays “Subdomain is available” and advances after a fixed 500 ms delay; no availability request is made, and even an empty value can continue.

**Evidence:**  
`OnboardingWizard.tsx:25–40`, `183–197`, `227–241`, `266–273`

**Improve by:** implementing one validated form model for all steps, storing every selection, calling a real subdomain-check endpoint, disabling Continue until required values are valid, and displaying server-confirmed availability only.

### B. Store settings silently discard contact information — High

The Settings page provides editable Support Email and WhatsApp Phone Number fields. Their values are held only in local component state. The save request sends store name, subdomain, custom domain, and ordering mode, but excludes email and phone. The screen can therefore show successful save feedback while those two fields are lost.

**Evidence:**  
`SettingsManagement.tsx:31–36`, `47–61`, `143–162`

**Improve by:** extending `SiteInfo` with contact fields, loading them from the repository, validating them, and including them in `updateSite`.

### C. Storefront checkout never places an order — Critical

The checkout form contains a “Place order” button, but form submission only runs `event.preventDefault()`. It does not call an API, use the declared `CheckoutAdapter`, show processing, create an order, clear the cart, or navigate to confirmation.

**Evidence:**  
`packages/storefront/src/pages/CheckoutPage.tsx:4`

**Improve by:** adding a checkout service with idempotency, server-side price/stock validation, clear loading/error states, order confirmation, and cart clearing only after success.

### D. Product detail is a dead end — High

Product cards allow Add to cart, but opening a product detail page removes that ability. The page shows only image, name, price, and availability. A shopper who opens the product to inspect it must go back to add it.

**Evidence:**  
`ProductPage.tsx:3`; `ProductCard.tsx:5–7`

**Improve by:** adding quantity selection, Add to cart, original price/discount, product description, delivery information, and related products.

### E. Publishing progress can report success without real job verification — High

After the publish-job creation request succeeds, the UI advances through QUEUED, GENERATING, VERIFYING, READY, ACTIVATING, and ACTIVE using local timers. It does not poll `getPublishJobStatus`. It can therefore display ACTIVE even when a real backend job later fails. The Publish button is also not disabled when validation errors are present.

**Evidence:**  
`PublishingManagement.tsx:53–87`, `233–244`

**Improve by:** polling or subscribing to the actual job state, stopping on failure, exposing retry/resume/cancel, and blocking publication whenever `validation.valid` is false.

### F. Media upload success does not represent a real file upload — High

The selected image file is checked locally, but only its name, size, and MIME type are sent to the repository. Upload progress is a timer rather than transferred bytes. The in-memory repository creates a placeholder URL, so “Upload successful” does not mean the selected image was stored.

The inspector also shows `1024 × 768` whenever real dimensions are missing, which can mislead the merchant.

**Evidence:**  
`MediaManagement.tsx:81–113`, `createMediaUpload` call; dimensions fallback at `MediaManagement.tsx:395`

**Improve by:** using signed uploads or multipart transfer, reporting actual progress, reading real dimensions, and showing “Unknown” rather than invented metadata.

### G. Cart quantity and price handling need protection — High

The cart reducer accepts optional quantities without checking for positive integers or maximum stock. Cart data is loaded from localStorage through an unchecked type assertion. The full product object—including price—is persisted and later used to calculate the checkout total.

This permits stale, malformed, or manually changed browser data to affect the displayed total.

**Evidence:**  
`cartReducer.ts:18–27`; `cartStorage.ts:5–13`; `CheckoutPage.tsx:4`

**Improve by:** validating stored cart data with Zod, storing product ID and quantity only, restricting quantity to valid integers, and refreshing price/stock from the server before checkout.

### H. Accessibility and semantic issues — Medium

- The password visibility button is removed from keyboard navigation with `tabIndex={-1}` and has no accessible label.
- Product images use empty alt text, including the main image on the product detail page.
- Collection pages render a collection `<main>` followed by `CatalogPage`, which creates a second `<main>` and an unrelated “Shop all products” heading.

**Evidence:**  
`LoginPage.tsx:86–93`; `ProductPage.tsx:3`; `CollectionPage.tsx:4`; `CatalogPage.tsx:4`

**Improve by:** labelling icon buttons, restoring keyboard focus, adding meaningful product-image alternatives, and rendering a single main landmark with the category title.

## 4. Recommended Improvement Order

### Release Blockers

1. Complete or reduce onboarding to only genuine steps.
2. Implement real checkout and server-side order creation.
3. Replace simulated publishing with verified job status.
4. Persist every editable setting.
5. Implement real media transfer.

### Next UX Iteration

1. Add Add-to-cart and quantity controls to product details.
2. Add form validation, disabled states, and field-level errors.
3. Display clear unsaved/saved/server-confirmed distinctions.
4. Improve cart price, stock, and quantity validation.
5. Complete keyboard and screen-reader testing.

## 5. Final Assessment

The project demonstrates good frontend planning and a visually mature merchant workflow, but it should not yet be presented as production complete. The highest-value improvement is to align every success state with a real persisted result. Once onboarding, settings, upload, publish, and checkout are connected to verified backend operations, the existing architecture can support a strong merchant site-builder product.

**Current functional readiness:** Prototype / integration stage  
**Recommended decision:** Continue development; block public production launch until critical workflows are real and tested.

## Review Note

This was a direct static source-code inspection. Automated build results were not used as defect evidence because dependencies were not included in the supplied ZIP and could not be fully restored in the review sandbox.
