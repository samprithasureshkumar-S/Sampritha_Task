# Zooperz Website Builder — Audit & Exploration Report

**Website URL:** [https://designer.zooperz.com](https://designer.zooperz.com)  
**Login Email:** `designer@gmail.com`  
**Password:** `password123`  
**Date of Audit:** September 13, 2026  

---

## 1. Login & Workspace Setup

- **Authentication Flow:** Navigated to `https://designer.zooperz.com/login`, supplied credentials `designer@gmail.com` / `password123`, and successfully authenticated into the **Zooperz Designer Workspace** (`/home`).
- **Dashboard Overview:** Displays workspace metrics (Sites, Active Status, Themes count), recent site overview (`Test`), and jump links to Clients, Themes, and Public Profile.

---

## 2. Builder Modes & How They Work

### A. Designer Layout Mode (Visual Mode)
- **Interface Structure:**
  - **Left Navigator Panel:** Displays page hierarchy and ordered section blocks (e.g. Announcement Bar, Hero, Split Image & Text, Promo Banner, Product Grid).
  - **Central Preview Canvas:** Interactive WYSIWYG canvas showing live rendered HTML components with responsive viewport previews (`Desktop`, `Tablet`, `Mobile`).
  - **Right Inspector Panel:** Block-level property controls to edit headlines, subheadlines, rich HTML text (`<p>`), primary/secondary CTA buttons & links, layout alignment, background color, image positioning, and column counts.
  - **Top Toolbar:** Navigation, section insertion (`+ Add Block`), responsive viewport switchers, visual/JSON mode toggle, `Save`, and `Preview Storefront` modal trigger.

- **How it Works:**
  1. Users click `+ Add Block` or `+ Add First Section` to insert section templates from a predefined palette (`announcement-bar`, `header`, `hero`, `split-image-text`, `promo-banner`, `countdown-offer`, `product-grid`, `footer`).
  2. Selecting any section on the canvas focuses its props inside the **Inspector Panel**.
  3. Edits in the Inspector update the canvas in real-time.

---

### B. JSON Mode
- **Interface Structure:**
  - **Split View:** Top half features a raw code editor (`textarea`), while the bottom half displays the live rendered visual preview.
  - **Top JSON Action Bar:** Includes `Format` (beautify JSON), `Copy`, and `Paste` tools.
  - **Right Panel (Schema & Verification):** Features Mode Toggle (`Simple` vs `Advanced`), `VERIFIED JSON (APPLIED)` schema inspector, `Verify` button, and `Copy AI Prompt` helper button.

- **JSON Schema Architecture:**
  ```json
  {
    "mode": "simple",
    "title": "Shopify Showcase",
    "sections": [
      {
        "type": "announcement-bar",
        "props": {
          "text": "Special Offer: Free shipping on all orders over $50!",
          "link": "#"
        },
        "visible": true
      },
      {
        "type": "hero",
        "props": {
          "headline": "Welcome to Shopify Showcase",
          "subheadline": "<p>Discover premium products curated for modern commerce.</p>",
          "ctaPrimary": "Shop Collection",
          "ctaPrimaryLink": "#products",
          "alignment": "center"
        },
        "visible": true
      },
      {
        "type": "product-grid",
        "props": {
          "title": "Featured Products",
          "columns": 4,
          "itemCount": 8
        },
        "visible": true
      }
    ]
  }
  ```

- **How it Works:**
  1. Users can manually construct or paste raw section JSON payloads into the editor.
  2. Clicking **Verify** validates the syntax and applies schema changes directly to the visual preview canvas below.
  3. Clicking **Format** indents and beautifies JSON formatting.
  4. The **Copy AI Prompt** feature formats the site schema into a prompt designed for LLM generation (Claude, ChatGPT, Gemini).

---

## 3. Shopify Showcase Recreation Feasibility Assessment

### Context
The submitted project (`Shopify Reference Component Showcase`) is a React + Vite storefront application showcasing UI patterns extracted from **ILIA Beauty** and **VAHDAM India**:
- Sticky dual-navigation bar with SVG icons
- Editorial hero section with brand story badges
- Category pill tiles & curated collection grids
- Interactive product cards with rating stars, price badges, and variant selector swatches
- Editorial split feature sections & brand highlights
- Dynamic newsletter subscription form & multi-column footer

### Recreation Evaluation

| Component / Feature | Zooperz Builder Support | Can Recreate? | Details / Constraints |
| :--- | :--- | :--- | :--- |
| **Announcement Bar** | Supported (`announcement-bar`) | ✅ Yes | Text and link fully configurable. |
| **Hero Banner** | Supported (`hero`) | ⚠️ Partial | Basic headline, subheadline, and button work; lacks background sliders, custom badges, or SVG iconography. |
| **Split Feature / Story** | Supported (`split-image-text`) | ⚠️ Partial | Basic layout works; lacks custom column ratios, overlay filters, or rich typography options. |
| **Promo Banner** | Supported (`promo-banner`) | ✅ Yes | Text and CTA buttons configurable. |
| **Product Grid** | Supported (`product-grid`) | ⚠️ Partial | Renders grid columns (1–4); **cannot edit individual product titles, prices, ratings, or swatches** (only global item count). |
| **Category Cards / Tiles** | Not Supported | ❌ No | Builder lacks dedicated Category Grid / Tile block. |
| **Custom Header & Footer** | Standard Block Only | ⚠️ Partial | Pre-baked header/footer blocks available; cannot insert custom navigation links or SVG logos. |
| **Custom React & CSS** | Not Supported in Simple Mode | ❌ No | Simple JSON mode restricts styling to pre-baked props; custom CSS/JS components cannot be embedded. |

### Verdict
The Shopify Showcase website can be **partially recreated as a high-level layout wireframe/prototype** (matching section sequence and basic content). However, it **cannot be recreated 1:1** due to rigid section schema rules, lack of individual product card data binding, and absence of custom CSS/Component injection in Simple mode.

---

## 4. Comprehensive Bug & Defect Report

### 🐛 Bug 1: "Save Failed - Retry" Persistence Failure
- **Severity:** High
- **Description:** Clicking the `Save` button in the top toolbar or bottom status bar intermittently triggers a red status message: `Save failed Retry`. 
- **Impact:** Users are led to believe their design progress is lost.

### 🐛 Bug 2: Emoji / Unicode Keyboard Input Error in JSON Editor
- **Severity:** Medium
- **Description:** Attempting to type special unicode characters or emojis (e.g. `✨`) inside text fields or JSON textarea triggers keypress runner exceptions (`Unknown key: "✨"`).
- **Impact:** Emojis and special characters break text entry in automated or specific browser input flows.

### 🐛 Bug 3: Missing Real-Time Auto-Sync on Raw JSON Typing
- **Severity:** Medium
- **Description:** Typing directly into the JSON mode textarea does not update the visual preview canvas until the user explicitly clicks the `Verify` button.
- **Impact:** If a user switches back to `Visual` mode without clicking `Verify`, unapplied JSON changes are lost.

### 🐛 Bug 4: Contrast Deficit on Dark Hero CTA Buttons
- **Severity:** Low / Visual
- **Description:** When selecting dark background colors (e.g. dark green `#15803d`) for Hero sections, CTA button text renders in dark text on dark background rather than white text.
- **Impact:** CTA button text becomes unreadable without manual contrast adjustments.

### 🐛 Bug 5: Product Grid Individual Card Editing Unsupported
- **Severity:** Medium / Feature Flaw
- **Description:** In `product-grid` sections, clicking individual cards inside Visual mode does not open item-specific controls (image URL, product title, price tag). Only overall `columns` and `itemCount` can be edited.
- **Impact:** Merchants cannot display actual custom products; grid relies strictly on placeholder mock data.

### 🐛 Bug 6: Split-Image-Text Image Upload / URL Control Missing in Visual Inspector
- **Severity:** Medium
- **Description:** The Visual Inspector panel for `split-image-text` displays title and description fields but lacks an image URL input or image uploader control.
- **Impact:** Users must switch to JSON mode to specify an `imageUrl` prop for split feature sections.

---
