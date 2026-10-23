# Shopify Theme Development & Learning (OS 2.0)

[![Shopify](https://img.shields.io/badge/Shopify-Online%20Store%202.0-7AB55C?logo=shopify&logoColor=white)](https://www.shopify.com/)
[![Liquid](https://img.shields.io/badge/Liquid-Template%20Engine-5C6AC4?logo=shopify&logoColor=white)](https://shopify.github.io/liquid/)
[![Shopify CLI](https://img.shields.io/badge/Shopify%20CLI-v4.x-95BF47?logo=shopify&logoColor=white)](https://shopify.dev/docs/themes/tools/cli)
[![Swiper](https://img.shields.io/badge/Swiper.js-Carousel%20Slider-6332F6?logo=swiper&logoColor=white)](https://swiperjs.com/)
[![CSS3](https://img.shields.io/badge/CSS3-Design%20Tokens%20%26%20Grid-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A custom **Shopify Online Store 2.0 (OS 2.0)** theme built from scratch for learning, hands-on experimentation, and mastering modern Shopify theme architecture. It features modular Liquid components, dynamic JSON templates, section groups, interactive sliders, asynchronous product recommendations, clean design tokens, and practical Liquid programming tasks.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Folder Structure](#-folder-structure)
- [Core Sections & Components](#-core-sections--components)
- [Design System & CSS Architecture](#-design-system--css-architecture)
- [Hands-on Liquid Practice Modules](#-hands-on-liquid-practice-modules)
- [Getting Started / Local Development](#-getting-started--local-development)
- [Helpful Shopify CLI Commands](#-helpful-shopify-cli-commands)
- [Tech Stack](#-tech-stack)
- [Author & License](#-author--license)

---

## 🔍 Overview

This repository demonstrates the core concepts of Shopify theme development using the modern **Online Store 2.0** architecture:
- Modular, reusable Liquid sections and snippets
- JSON templates with dynamic block configuration
- Multi-level dropdown navigation with keyboard and click-outside accessibility
- Responsive product carousel slider powered by **Swiper.js**
- Asynchronous dynamic product recommendations using Shopify's Recommendations API
- Cohesive design system built on CSS custom properties (variables)
- Real-world Liquid exercises covering tags, filters, objects, control flow, loops, and math operations

---

## ✨ Key Features

- **🛍️ Online Store 2.0 Architecture:** JSON templates (`index.json`, `product.json`, `cart.json`, `page.json`) and section groups (`header-group.json`, `footer-group.json`) for seamless merchant customization via the Shopify Theme Editor.
- **🧭 Accessible Multi-Level Navigation:** Clean header navigation supporting 2-level and 3-level flyout menus with automatic ESC key closing and click-outside detection.
- **🎠 Swiper.js Product Carousel:** Dynamic product slider supporting responsive breakpoints (1-col mobile, 2-col small tablet, 3-col tablet, 4-col desktop), variant switching, and sale badges.
- **⚡ Asynchronous Product Recommendations:** Fetches related products dynamically using the Shopify Recommendation API (`/recommendations/products`) without reloading the page.
- **🛒 Dedicated Cart Page:** Custom cart layout featuring line-item details, pricing, quantities, checkout submission, and empty cart states.
- **🎨 Comprehensive Base CSS & Design Tokens:** Centralized stylesheet (`assets/base.css`) featuring modern design tokens, elevation shadows, fluid responsive typography (`clamp()`), button variants, and utility classes.
- **🧩 Configurable Rich Text & Banners:** Rich text sections with dynamic blocks (captions, headings, subheadings, descriptions, button pairs) and customizable hero banners.
- **🏷️ Metafields Support:** Integration of custom product and collection metafields (e.g., banner headings, material details).

---

## 📂 Folder Structure

```text
shopify-theme-learn/
├── assets/
│   ├── base.css                 # Theme-wide CSS system, tokens, resets, utilities & components
│   ├── product-swiper.js        # Swiper slider initialization & responsive breakpoint config
│   ├── swiper-bundle.min.css    # Swiper.js stylesheet
│   └── swiper-bundle.min.js     # Swiper.js script bundle
├── config/
│   ├── settings_data.json       # Current active theme configuration and presets
│   └── settings_schema.json     # Theme settings schema (Page width, paddings, typography pickers)
├── layout/
│   └── theme.liquid             # Main layout wrapper: head, header-group, content_for_layout, footer-group
├── sections/
│   ├── announcementbar.liquid   # Top announcement banner with subtle gradient styling
│   ├── collection-details.liquid# Collection showcase with metafield headings & description
│   ├── custom-content.liquid    # Flexible media & text content section
│   ├── footer-group.json        # OS 2.0 footer section group
│   ├── footer.liquid            # Theme footer with store info and email contact
│   ├── header-group.json        # OS 2.0 header section group
│   ├── header-section.liquid    # Main navigation bar with nested dropdowns & flyouts
│   ├── hero-banner.liquid       # Hero banner section with customizable image and text
│   ├── main-cart.liquid         # Main cart page template section
│   ├── main-page.liquid         # Generic Shopify page layout container
│   ├── main-product.liquid      # Product details & carousel slider section
│   ├── practice_task.liquid     # Liquid learning exercises and tasks
│   ├── product-recommendations.liquid # Async product recommendations section
│   └── richtext.liquid          # Custom block-based rich text section
├── snippets/
│   ├── cart-items.liquid        # Cart line-item loop snippet
│   ├── icons.liquid             # Dynamic SVG icon renderer with custom stroke and size
│   ├── product-badge.liquid     # Sale/stock badge snippet
│   └── theme-variables.liquid   # Dynamic CSS root variables populated from theme settings
└── templates/
    ├── cart.json                # OS 2.0 cart page template
    ├── index.json               # OS 2.0 homepage template
    ├── page.json                # OS 2.0 standard page template
    └── product.json             # OS 2.0 product page template
```

---

## 🧩 Core Sections & Components

| Section / Component | Purpose | Configurable Settings / Blocks |
| :--- | :--- | :--- |
| **`header-section`** | Primary storefront navigation | Linked to navigation menus with multi-level dropdowns |
| **`announcementbar`** | Top bar for store alerts & promos | Custom announcements, background gradients |
| **`hero-banner`** | Visual intro banner | Image picker, heading text, description, full-width toggle |
| **`main-product`** | Featured products / catalog slider | Collection picker, Swiper carousel with responsive breakpoints |
| **`product-recommendations`** | Related product recommendations | Dynamic asynchronous fetch based on current product |
| **`richtext`** | Flexible storytelling section | Blocks: `caption`, `heading`, `sub_heading`, `description`, `buttons` |
| **`main-cart`** | Shopping cart review and checkout | Line items, line totals, checkout action button |
| **`footer`** | Site footer and contact info | Dynamic store email, shop name, copyright |
| **`collection-details`**| Collection banner & metadata | Collection image, description, metafield headings |

---

## 🎨 Design System & CSS Architecture

All theme styles are structured in [assets/base.css](assets/base.css) using modern CSS principles:

- **CSS Variables (`:root`)**:
  - **Colors**: Primary (`#1d4ed8`), hover state (`#1e40af`), dark heading text (`#172554`), muted text (`#64748b`), background shades (`#ffffff`, `#f8fafc`), and alerts (`#ef4444`, `#10b981`).
  - **Elevation Shadows**: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`.
  - **Border Radii**: `--radius-sm` (6px) through `--radius-full` (9999px).
- **Responsive Typography**: Headings leverage `clamp()` for smooth resizing across mobile, tablet, and desktop viewports without requiring dozens of media queries.
- **Button System**: Reusable `.button`, `.button--secondary`, `.button--outline`, `.button--full`, `.button--sm`, and `.button--lg`.
- **Layout Utilities**: Reusable grid systems (`.grid--2-col`, `.grid--3-col`, `.grid--4-col`) and flexbox helpers (`.flex-between`, `.flex-center`, `.gap-1` to `.gap-4`).

---

## 🧪 Hands-on Liquid Practice Modules

The theme includes a comprehensive practice module ([sections/practice_task.liquid](sections/practice_task.liquid)) covering fundamental and advanced Liquid concepts:

1. **Variables & Output**: `assign`, `capture`, outputting variables
2. **Filters**: `capitalize`, `upcase`, `downcase`, `truncate`, `strip_html`, `money`, `split`
3. **Conditionals**: `if / elsif / else`, `unless`, `case / when`, truthy/falsy checks (`!= blank`)
4. **Loops**: `for` loops, loop limits, `forloop.index`, empty checks
5. **Math Filters**: `plus`, `minus`, `times`, `divided_by` for price calculations and discounts
6. **Whitespace Control**: Trimming whitespace using `{%-` and `-%}`
7. **Metafields**: Accessing custom metafield namespaces and keys

---

## 🚀 Getting Started / Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli/install) (v3.x or 4.x)
- A [Shopify Partner Account](https://www.shopify.com/partners) and a development store

### 1. Clone the repository

```bash
git clone https://github.com/harshil962/shopify-theme-learn.git
cd shopify-theme-learn
```

### 2. Log in to your Shopify store

```bash
shopify auth login
```

### 3. Start local development server

Run the theme development server with hot-reload connected to your Shopify development store:

```bash
shopify theme dev --store your-store-name.myshopify.com
```

Shopify CLI will output a local preview URL (typically `http://127.0.0.1:9292`) where you can preview and customize the theme in real-time.

---

## 🛠️ Helpful Shopify CLI Commands

| Task | Command |
| :--- | :--- |
| **Validate Theme Code** | `shopify theme check` |
| **Preview Theme Locally** | `shopify theme dev --store <store-name>` |
| **Push Changes to Store** | `shopify theme push --store <store-name>` |
| **Pull Changes from Store** | `shopify theme pull --store <store-name>` |
| **Package Theme into ZIP** | `shopify theme package` |

---

## 💻 Tech Stack

- **Platform:** [Shopify Online Store 2.0](https://shopify.dev/docs/themes)
- **Templating:** [Liquid](https://shopify.github.io/liquid/)
- **Styling:** CSS3 (Custom Properties, Flexbox, CSS Grid)
- **Scripting:** Vanilla JavaScript (ES6+)
- **Slider:** [Swiper.js v11](https://swiperjs.com/)
- **CLI & Tooling:** [Shopify CLI](https://shopify.dev/docs/themes/tools/cli) & Theme Check

---

## 👤 Author

**Harshil Prajapati**
- GitHub: [@harshil962](https://github.com/harshil962)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

