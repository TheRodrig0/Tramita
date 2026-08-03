---
name: design_system
description: Design System & Guidelines (Desktop-First) for the Tramita URL Shortener.
---
# Design System: Tramita

Below are the "Design Tokens" (style variables) defined in the system. They reflect the exact styles, colors, and layout configurations implemented in the project.

## Design Tokens

```yaml
colors:
  primary: "#0d9488" # Teal 600
  primary-hover: "#0f766e" # Teal 700
  bg-dark: "#050505" # Very dark gray/black (used as --color-brand-dark)
  bg-light: "#f8fafc" # Slate 50 / Very light gray
  bg-card-dark: "#0f172a" # Slate 900
  bg-panel-dark: "#111111" # Custom dark panels (e.g. Hero Section shortener panel)
  text-primary: "#0f172a" # Slate 900
  text-secondary: "#475569" # Slate 600
  text-dark-bg: "#ffffff" # Pure white
  text-dark-bg-support: "#cbd5e1" # Slate 300
  input-bg-dark: "rgba(255, 255, 255, 0.1)" # white/10
  input-border-dark: "rgba(255, 255, 255, 0.2)" # white/20

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
    fontWeight: 500
    fontSize: 14px (text-sm)
  button:
    fontFamily: Inter
    fontWeight: 700

rounded:
  sm: 4px
  md: 8px
  lg: 12px

spacing:
  container-max: 1200px
```

## 1. Overview

This document defines the visual rules and reusable components for the Tramita URL Shortener frontend. The goal is to align design specs with the real implementation (Landing Page, Authentication, Dashboard).

## 2. Brand & Style

Classic B2B SaaS (Desktop-First): The interface is built with desktop workflows in mind, adapting responsively for mobile screens. 

High Readability: Strong contrast with dark themes utilizing `#050505` and light themes utilizing `#f8fafc`.

## 3. Colors

### Background Colors

Dark Bg: `#050505` (Very dark gray/black). Used in the header, hero sections, and main background elements.

Light Bg: `#f8fafc` (Slate 50). Standard background for pages with light theme components.

Dark Cards/Panels Bg: `#111111` or `#0f172a` (Slate 900) for floating containers, panels, or highlights.

### Action Colors (Primary)

Primary Action (Teal): `#0d9488` (Tailwind: teal-600). Used for primary buttons and CTA elements.

Action Hover: `#0f766e` (Tailwind: teal-700).

### Text Colors

Primary Text: `#0f172a` (Tailwind: slate-900) for titles on light backgrounds.

Secondary Text: `#475569` (Tailwind: slate-600).

Text on Dark Background: `#ffffff` (Pure white) or `#cbd5e1` (Tailwind: slate-300).

## 4. Typography

Main Font: Inter (Google Fonts).

### Font Weights:
- Regular (400): Body text.
- Medium (500): Form labels.
- Bold (700) / Black (900): Headings, titles, and buttons.

## 5. Layout & Spacing

Responsive Wrappers: Main containers use responsive Tailwind classes (such as `max-w-5xl`, `max-w-250`, or centered columns with `max-w-md` for auth).

Min-Height Viewport Layout: Main layouts use `min-h-screen` and a flex column to push footer sections to the bottom of the viewport on pages with low content heights.

## 6. Components

### 6.1. Buttons
- Primary: Teal background (`#0d9488`), white text, bold font, rounded corners. Smooth hover transition to `#0f766e` or `#14b8a6` (`teal-500`).

### 6.2. Forms and Inputs
- Labels: Placed above inputs. Rendered with `text-sm font-medium text-slate-300` styling.
- Standard Input: Styled with `bg-white/10` and `border-white/20`, white text, and a discrete placeholder.
- Password Input: Implemented as `PasswordInput.tsx`, wrapping the standard input and incorporating an interactive show/hide toggle button with `Eye` and `EyeOff` icons from `lucide-react`.

### 6.3. React 19 Component Pattern
All input components are built using modern React 19 patterns. They accept `ref` directly as a standard component property (removing legacy `forwardRef` and `displayName` boilerplate).
