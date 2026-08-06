# EXISTING SYSTEM REPORT

## Web Development Using WordPress and Wix

**Project Title:** Comparative Existing-System Analysis of WordPress and Wix  
**Prepared By:** Sampritha Sureshkumar  
**Date:** 25 July 2026  

---

## 1. Introduction

Modern website development no longer requires every page to be programmed entirely from the beginning. Content Management Systems and hosted website builders provide ready-made tools for designing pages, managing content, publishing blogs, running online stores, and maintaining websites.

WordPress and Wix are two important existing solutions in this area. WordPress is an open-source content management system that gives the website owner extensive control over themes, plugins, hosting, data, and source code. Wix is an all-in-one cloud website-building platform that combines design tools, artificial intelligence, hosting, security, publishing, and business applications.

This report studies both systems from the viewpoint of usability, customization, cost, maintenance, ownership, scalability, and suitability for different users.

---

## 2. Existing System 1: WordPress

### 2.1 Overview

WordPress is open-source web-publishing software used for blogs, portfolios, company websites, news portals, membership platforms, educational websites, and ecommerce stores. WordPress.org describes the software as flexible enough for simple sites as well as complex portals and enterprise applications.

A self-hosted WordPress website is installed on a web server selected by the owner. The owner controls the database, themes, plugins, files, users, and deployment environment.

### 2.2 Major Features

- Block-based page and content editing
- Posts, pages, categories, tags, menus, and media management
- Thousands of themes and plugins
- User roles and permissions
- Search-engine-friendly URL and content options
- Responsive theme support
- Custom themes, plugins, CSS, PHP, and JavaScript
- REST API support
- Multisite capability
- WooCommerce and other ecommerce integrations
- Import, export, backup, and migration options
- Full ownership of self-hosted website files and database

### 2.3 Advantages

1. **High customization:** Developers can alter themes, build plugins, connect external APIs, and create custom business workflows.
2. **Ownership and portability:** A self-hosted website can be moved to another compatible hosting provider.
3. **Large ecosystem:** Themes, plugins, tutorials, agencies, and community support are widely available.
4. **Scalability:** WordPress can support a small portfolio or a larger content, membership, or ecommerce website when properly designed.
5. **Content management:** Non-technical users can manage pages, posts, images, and menus through an administration dashboard.
6. **SEO flexibility:** Site owners can control metadata, sitemaps, URLs, structured data, redirects, and performance configuration.

### 2.4 Disadvantages

- The owner is responsible for hosting, updates, backups, security, and monitoring unless a managed service is purchased.
- Poorly selected plugins can introduce compatibility, security, or performance problems.
- Advanced customization requires PHP, HTML, CSS, JavaScript, database, and server knowledge.
- Major plugin or theme updates can sometimes affect existing layouts.
- Too many extensions may increase page weight and administration complexity.
- Reliable hosting, premium themes, extensions, development, and maintenance can increase total cost.

---

## 3. Existing System 2: Wix

### 3.1 Overview

Wix is a hosted website-building platform intended for users who want to design, manage, and publish a website from one service. Its current platform combines templates, drag-and-drop editing, AI-assisted creation, hosting, domain connection, SEO tools, ecommerce, booking, marketing, and business-management features.

Unlike self-hosted WordPress, Wix manages the hosting environment and core platform updates. Users mainly work through the Wix editor and dashboard.

### 3.2 Major Features

- Drag-and-drop visual editor
- AI-assisted website creation
- Professionally designed templates
- Managed cloud hosting
- SSL and platform-level security
- Mobile and responsive design tools
- SEO setup and optimization tools
- Wix App Market
- Ecommerce and payment features
- Booking, event, restaurant, blog, and portfolio tools
- Forms, customer-management, and marketing functions
- Custom code and data features through Velo and Wix developer tools
- Domain connection and publishing from one dashboard

### 3.3 Advantages

1. **Beginner friendly:** Users can build pages visually without manually configuring a server.
2. **Faster setup:** Templates, AI tools, hosting, and publishing are available in the same platform.
3. **Managed maintenance:** Wix handles core hosting infrastructure and platform updates.
4. **Consistent dashboard:** Website, store, bookings, contacts, marketing, and analytics can be managed together.
5. **Built-in business tools:** Many common small-business requirements are available without installing separate systems.
6. **Design convenience:** Visual controls make layout changes easy for non-programmers.

### 3.4 Disadvantages

- Deep server-level access and backend control are more limited than in a self-hosted platform.
- Moving a complete Wix website to another system can require redesign or rebuilding.
- Advanced business features usually depend on paid plans or applications.
- Developers must work within Wix platform APIs and supported extension mechanisms.
- Highly specialized systems may be more difficult to implement than with an open-source stack.
- Long-term cost depends on the selected subscription, applications, domain, and business features.

---

## 4. Comparison of WordPress and Wix

| Comparison Area | WordPress | Wix |
|---|---|---|
| Platform type | Open-source CMS | Hosted website builder |
| Hosting | Selected and managed separately | Included and managed by Wix |
| Initial difficulty | Moderate | Low |
| Coding requirement | Optional for basic use; valuable for advanced work | Not required for basic use |
| Customization | Very high | High within platform limits |
| Data and file control | Strong on self-hosted installation | Managed within Wix platform |
| Maintenance | Owner or hosting provider | Mainly platform managed |
| Themes/templates | Large theme ecosystem | Built-in template ecosystem |
| Extensions | Plugins and custom code | App Market, Velo and Wix APIs |
| Ecommerce | Commonly through WooCommerce or other plugins | Built-in Wix Stores and business tools |
| SEO control | Extensive with core settings and plugins | Built-in SEO tools and guided setup |
| Migration | Generally flexible between compatible hosts | More platform dependent |
| Security | Shared responsibility | Mainly managed by Wix |
| Best suited for | Custom, content-rich, scalable systems | Fast business, portfolio, booking, and small-store websites |

---

## 5. Workflow of the Existing Systems

### 5.1 WordPress Website Workflow

```text
Identify website requirements
          ↓
Purchase domain and hosting
          ↓
Install WordPress and configure database
          ↓
Select or develop a theme
          ↓
Install required plugins
          ↓
Create pages, menus and content
          ↓
Configure SEO, security and backups
          ↓
Test desktop and mobile layouts
          ↓
Publish and maintain the website
```

### 5.2 Wix Website Workflow

```text
Create a Wix account
          ↓
Choose AI creation or a template
          ↓
Select the website/business type
          ↓
Customize pages using the editor
          ↓
Add Wix applications and business tools
          ↓
Configure mobile layout and SEO
          ↓
Choose a plan and connect a domain
          ↓
Preview, publish and monitor
```

---

## 6. Technologies and Components

### WordPress

- PHP
- MySQL or MariaDB
- HTML, CSS, and JavaScript
- Themes and template files
- Plugins and hooks
- REST API
- Apache or Nginx
- Web hosting, caching, and CDN services

The current WordPress download guidance recommends modern PHP and database versions for performance and security. Exact server requirements must be checked before deployment.

### Wix

- Cloud-managed hosting infrastructure
- HTML5, CSS, and JavaScript-generated interfaces
- Wix Editor and AI creation tools
- Wix CMS and data collections
- Wix applications and business services
- Velo and Wix JavaScript SDK/API tools
- Wix dashboard, analytics, marketing, and SEO services

---

## 7. Existing-System Architecture

### 7.1 WordPress Architecture

```text
Visitor Browser
      │
      ▼
Web Server / CDN
      │
      ▼
WordPress Core
 ┌────┼──────────────┐
 ▼    ▼              ▼
Theme Plugins     REST API
 │      │             │
 └──────┴──────┬──────┘
               ▼
       MySQL / MariaDB
```

### 7.2 Wix Architecture

```text
Visitor Browser
      │
      ▼
Wix Managed Cloud and CDN
      │
      ▼
Published Wix Website
 ┌────┼───────────────┐
 ▼    ▼               ▼
CMS  Business Apps  Custom Code/APIs
 │       │              │
 └───────┴──────┬───────┘
                ▼
        Wix Managed Services
```

---

## 8. Main Limitations of the Existing Systems

### WordPress Limitations

- Maintenance quality differs according to the owner and hosting provider.
- Plugin conflicts can occur when extensions modify similar functions.
- Security can weaken when outdated or unsupported software is used.
- Non-technical owners may require assistance for backups, recovery, and optimization.
- Complex sites need testing before updates are applied.

### Wix Limitations

- The user has less control over the physical hosting and server stack.
- Migration away from the platform is less direct.
- Custom applications must follow platform limits and supported APIs.
- Advanced plans and applications may increase recurring cost.
- Some designs or behaviours possible through custom development may be difficult to reproduce exactly.

---

## 9. Selection Guidelines

WordPress is preferable when a project requires custom workflows, extensive content, source-code access, flexible hosting, specialized integrations, or long-term platform independence.

Wix is preferable when a project requires fast deployment, visual editing, low technical maintenance, built-in business tools, managed hosting, and a simple dashboard for the website owner.

---

## 10. Conclusion

WordPress and Wix solve the same general problem through different approaches. WordPress provides control, extensibility, and portability, but transfers more technical responsibility to the owner. Wix reduces setup and maintenance by providing a managed, integrated environment, but users work within the boundaries of the platform.

Neither system is automatically better for every project. A business should select WordPress when ownership, deep customization, integrations, and future scalability are major priorities. Wix is a practical choice when simplicity, quick delivery, managed infrastructure, and visual control are more important.

---

## References

1. WordPress.org — Features: https://wordpress.org/about/features/
2. WordPress.org — Documentation: https://wordpress.org/documentation/
3. WordPress.org — Download and server recommendations: https://wordpress.org/download/
4. Wix — Website Builder: https://www.wix.com/
5. Wix — Drag-and-Drop Website Builder: https://www.wix.com/builder/drag-and-drop
6. Wix Developer Documentation — Velo: https://dev.wix.com/docs/velo
