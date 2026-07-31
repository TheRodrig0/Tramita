---
name: design_system
description: Design System & Guidelines (Desktop-First) for the Tramita URL Shortener.
---
# Design System: Tramita

Below are the "Design Tokens" (style variables). They define the exact colors, fonts, and spacing of the system.

## Design Tokens

```yaml
colors:
  primary: "#0d9488"
  primary-hover: "#0f766e"
  bg-dark: "#031f39"
  bg-light: "#f8fafc"
  bg-card-dark: "#0f172a"
  text-primary: "#0f172a"
  text-secondary: "#475569"
  text-dark-bg: "#ffffff"
  text-dark-bg-support: "#cbd5e1"
  input-bg-dark: "#334155"
  input-border-dark: "#475569"

typography:
  h1:
    fontFamily: Inter
    fontWeight: 900
  h2:
    fontFamily: Inter
    fontWeight: 800
  body:
    fontFamily: Inter
    fontWeight: 400
  label:
    fontFamily: Inter
    fontWeight: 700
    fontSize: 11px
    letterSpacing: widest
  button:
    fontFamily: Inter
    fontWeight: 600

rounded:
  sm: 4px
  md: 8px
  lg: 12px

spacing:
  container-max: 1200px
  card-p: 24px
  card-p-lg: 32px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-dark-bg}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
  input-dark:
    backgroundColor: "{colors.input-bg-dark}"
    textColor: "{colors.text-dark-bg}"
  card-dark:
    backgroundColor: "{colors.bg-card-dark}"
    rounded: "{rounded.lg}"
```

## 1. Overview

This document defines the visual rules and universal components for the Tramita URL Shortener frontend. The goal is to ensure consistency across all screens of the system (Landing Page, Authentication, Logged-in Dashboard).

## 2. Brand & Style

Classic B2B SaaS (Desktop-First): The system is designed primarily for computers and laptops, which is the standard B2B work environment. Mobile responsiveness is treated as an adaptation, not the starting point.

High Readability: Strong contrast between text and backgrounds. Form elements are large and obvious.

Componentization: Everything should be conceived as reusable blocks (action buttons, inputs with clear labels, configuration panels).

## 3. Colors

Colors must be used strictly based on their semantic function, decoupled from other market brands.

### Background Colors

Dark Bg (Premium): #031f39 (Deep navy blue). Used in the main header, hero section, and dashboard sidebars.

Light Bg (Standard): #f8fafc (Slate 50 / Very light gray). Standard background for the dashboard content area and form pages.

Dark Cards Bg: #0f172a (Slate 900). Used to highlight floating panels or modals over the main dark background.

### Action Colors (Primary)

Primary Action (Teal): #0d9488 (Tailwind: teal-600). Exclusive for the main CTAs ("Shorten" button, "Log In", "Save Settings").

Action Hover: #0f766e (Tailwind: teal-700).

### Text Colors (Typography)

Primary Text: #0f172a (Tailwind: slate-900). For titles on light backgrounds.

Secondary Text: #475569 (Tailwind: slate-600). For paragraphs and captions.

Text on Dark Background: #ffffff (Pure white) or #cbd5e1 (Tailwind: slate-300 for supporting text and placeholders).

## 4. Typography

Main Font: Inter (Google Fonts). Chosen for its excellent readability in data interfaces (tables, dashboards).

### Font Weights:

Regular (400): Standard text and table values.

Semibold (600): Links and Buttons.

Bold (700) / Tracking Widest: Used specifically for uppercase form labels (e.g., "SHORT LINK (SLUG)").

Black (900): H1 and H2 titles for strong hierarchical impact.

## 5. Layout & Spacing

Desktop-First: The main layout must be contained in a wrapper with a maximum width of 1200px centered on the screen.

Responsiveness: On screens smaller than 1024px (tablets and mobile phones), side-by-side elements must stack (flex-col), and the container must use safe horizontal padding (px-6).

Form Structure: Adjacent inputs and buttons should use the same height (h-12 or py-3) for perfect alignment.

## 6. Elevation & Shapes

Shadows: Long, soft shadows to create depth without visual clutter (shadow-xl or shadow-2xl).

Borders (Border Radius): Moderate rounding (rounded-md or rounded-lg). Never use "pill" shaped buttons (fully rounded), as they reduce the software's corporate feel.

## 7. Components

### 7.1. Buttons

Primary: Teal background (#0d9488), white text, Semibold font, rounded-md corners. Smooth hover transition to #0f766e.

Secondary (Outline): Solid 1px border and text using the theme's predominant color (white on dark, slate on light). Transparent background.

### 7.2. Forms and Inputs

This is the primary system interaction (based on LinkController and AuthController).

Label: Always above the input. Uppercase, small size (text-[11px]), wide tracking (tracking-widest), Bold font. Medium gray color (slate-400 on dark, slate-500 on light).

Input Dark (Dashboard / Hero): Solid #334155 background with subtle #475569 border. White text. Visible but discrete placeholder.

Input Light (Login / Tables): White background with #cbd5e1 border. Text #0f172a.

Focus State: Crucial for desktop accessibility. When clicked, the border must change to Teal (focus:border-teal-500) with a transparent ring or one of the same color, removing the browser's native outline.

### 7.3. Panels and Cards

Used to group shortening actions (e.g., Alias/Slug area). They should have generous padding (p-6 or p-8) and rounded corners (rounded-lg) to clearly separate the action area from the rest of the page.

### 7.4. UI Component Library (shadcn/ui)

The project leverages **shadcn/ui** (built on top of `@base-ui/react` primitives and Tailwind CSS v4) for modular, accessible, and themeable UI components.
- Standard custom components are located in `app/src/components/ui/`.
- Buttons and form elements (such as `Button` and `Input`) should be imported from `@/components/ui/` to ensure design system consistency and state bindings.
