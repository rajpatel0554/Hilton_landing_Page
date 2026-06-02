---
name: Industrial Excellence
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#434655'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#784b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#996100'
  on-tertiary-container: '#ffeedd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
  surface-muted: '#F3F4F6'
  surface-white: '#FFFFFF'
  text-subtle: '#4B5563'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 80px
  section-gap-mobile: 48px
  grid-margin-desktop: 64px
  grid-gutter: 24px
---

## Brand & Style

This design system is built to project a sense of industrial reliability, precision engineering, and agricultural expertise. The brand personality is authoritative yet accessible—positioning the product as a dependable partner for farmers, contractors, and engineers.

The visual style follows a **Corporate / Modern** aesthetic with an industrial edge. It leverages generous whitespace to ensure technical product specifications remain legible, while bold color blocking and strong geometric typography create a clear hierarchy. The design avoids unnecessary decorative elements, favoring a functional "form follows function" approach that mirrors the durability of the manufacturing sector.

The emotional response should be one of "Unshakable Trust"—users must feel that the products and the information provided are backed by rigorous standards and long-term durability.

## Colors

The color palette is strategically divided to represent the core sectors of the business. **Ocean Blue** serves as the primary driver, symbolizing the engineering and fluid-management aspect of plumbing. **Forest Green** is utilized as the secondary color to establish an immediate visual connection to agriculture and irrigation. **Warm Orange** acts as a high-visibility accent for specific calls to action, badges, and status indicators.

**Color Usage Guidelines:**
- **Primary (Ocean Blue):** Used for global navigation, primary buttons, and critical headers to establish brand authority.
- **Secondary (Forest Green):** Used for agriculture-specific sections, environmental features, and secondary success indicators.
- **Accent (Warm Orange):** Reserved for "Contact for Quote," "Sale/New," and functional highlights that require immediate attention.
- **Neutrals:** Dark Gray is used for all primary body text to ensure WCAG AA compliance. Light Blue-Gray is reserved for background layering and dividing complex data tables.

## Typography

The typography strategy pairs **Montserrat** (substituted for Poppins for a more industrial, geometric weight) for headlines with **Inter** for all functional and body copy. 

Montserrat provides a strong, structural presence for brand-level communication, while Inter’s high x-height and neutral character ensure that dense technical specifications—such as pipe dimensions and material types—remain highly readable across all devices.

For mobile devices, headline sizes scale down to prevent awkward text wrapping, while body sizes remain consistent to maintain legibility for field workers and contractors viewing the site on handheld devices.

## Layout & Spacing

The layout is built on a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile. The design system utilizes an 8px base unit to ensure consistent vertical rhythm across all components.

**Layout Principles:**
- **Generous Margins:** Desktop layouts use 64px outer margins to provide a clean, premium industrial feel.
- **Content Reflow:** Technical data tables should reflow into card-based layouts on mobile to prevent horizontal scrolling.
- **Section Spacing:** A standardized 80px gap between major homepage sections ensures that the distinct product categories (e.g., Ball Valves vs. Irrigation) are clearly demarcated.

## Elevation & Depth

To maintain a clean and professional aesthetic, this design system uses **Tonal Layers** rather than heavy shadows. Depth is conveyed through subtle changes in background color (using the Light Blue-Gray surface) and crisp, low-contrast outlines.

- **Level 0 (Base):** Pure White (#FFFFFF) for the primary content canvas.
- **Level 1 (Sections):** Light Blue-Gray (#F3F4F6) used to group related products or technical charts.
- **Level 2 (Cards/Interaction):** White surfaces with a very soft, 10% opacity Ocean Blue shadow (0px 4px 12px) to indicate interactivity.
- **Dividers:** 1px solid lines using #E5E7EB are used to separate list items in long product specifications.

## Shapes

The shape language is **Soft (0.25rem)**. This subtle rounding of corners strikes a balance between the hard, rigid nature of industrial hardware and the modern, user-friendly nature of a digital platform.

- **Buttons & Inputs:** Use the standard 4px radius.
- **Product Cards:** Use 8px (rounded-lg) to provide a more defined container for imagery.
- **Badges/Tags:** Use a full pill-shape to distinguish them from interactive buttons.

## Components

### Buttons
- **Primary:** Solid Ocean Blue with white text. High-contrast, sharp 4px corners. Used for "Inquire Now" or "Download Catalog."
- **Secondary:** Outlined Forest Green with green text. Used for "View Applications" or "Technical Specs."
- **Tertiary:** Ghost style with Dark Gray text for low-priority actions.

### Cards
Product cards feature a Light Blue-Gray header area for the product image, followed by a white content area for the title, material type (e.g., UPVC, Brass), and available sizes.

### Input Fields
Strictly rectangular with a 1px Dark Gray border that thickens and turns Ocean Blue on focus. Labels are always positioned above the field using `label-bold`.

### Data Tables
Tables are critical for this design system. They feature a Dark Gray header with white text. Rows should alternate between white and Light Blue-Gray for maximum scannability of pricing and sizing.

### Chips & Badges
Small, pill-shaped indicators. "Agriculture" chips use Forest Green backgrounds; "Plumbing" chips use Ocean Blue; and status-based badges (like "New" or "Best Seller") use Warm Orange.