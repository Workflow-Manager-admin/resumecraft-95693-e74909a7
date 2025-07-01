# Resume Builder App Architecture

## Overview

The Resume Builder App is a modern, minimalistic single-container frontend application built with Next.js and styled using Tailwind CSS. Its primary goal is to offer users an intuitive way to input resume details via a guided, multi-step form while providing an immediate, real-time preview of the final resume in various selectable templates. The design is responsive to support both desktop and mobile devices.

## Layout and Component Structure

The app utilizes a split-screen layout:
- **Left Panel:** Multi-step form for user input (personal information, experience, education, skills, projects).
- **Right Panel:** Live preview of the resume, which updates immediately based on form inputs. Above the preview, users can select from several resume templates (2-3 styles).
- The panels adapt responsively to stack vertically or compress on smaller screens.
- The app includes utility components like global layout (font/theme), page wrapper, and basic navigation (if needed).

Key features are:
- Modern, clean aesthetic using a minimal palette and typographic focus
- Tailwind CSS driven utility classes, with dark mode via media queries
- Next.js app router for page composition and SSR/ISR/SSG (if needed)
- Support for future extensibility (download/print, authentication)

## Architecture Diagram

```mermaid
graph TD
    A[RootLayout (layout.tsx)]
    B[Page (page.tsx)]
    C[Multi-step Form<br/>(form section)]
    D[Template Selector<br/>(above preview)]
    E[Resume Preview Panel]
    F[Globals/CSS Variables<br/>Tailwind Styles]

    A --> B
    B --> C
    B --> D
    B --> E
    A --> F

    C -.->|User input| E
    D -.->|Template pick| E
    E -.->|Real-time resume| C
```

### Node Descriptions

- **RootLayout (layout.tsx):** Sets up global HTML, theme/font variables, and loads globals.css with Tailwind support.
- **Page (page.tsx):** Hosts the primary app layout. Handles grid/split arrangement and responsive structure.
- **Multi-step Form:** Allows users to enter all resume data in steps; intended for future component files.
- **Template Selector:** Displays available resume layouts as options. Selection state is forwarded to the preview.
- **Resume Preview Panel:** Renders a real-time, formatted resume using the input data and the chosen template.
- **Globals/CSS Variables:** Central color/themes, maintained in globals.css, used app-wide.

## Responsive Adaptation

- Uses CSS grid/flex utilities to switch between horizontal (split-screen) and stacked (single-column) layouts on mobile.
- All UI components shrink or realign using Tailwind breakpoints.

## File Reference

- `src/app/layout.tsx` — Root layout, HTML, head, font variables, and body.
- `src/app/page.tsx` — Partial placeholder for the split main view; presently shows setup content.
- `src/app/globals.css` — Global styles, variables, and Tailwind import; color palette and theme switching through CSS variables.

> As of this documentation, the codebase offers a minimal starting point (Next.js scaffold plus basic style theme). The fully featured split-screen, form, preview, and template picker components are planned for future implementation.

## Future Extension

- Multi-step form and preview panel will be split into their own files under `src/app/`.
- Component-driven approach will be used for each major logical unit in the app.
- Resume download/print and template persistence may be handled in separate hooks or API routes as needed.
