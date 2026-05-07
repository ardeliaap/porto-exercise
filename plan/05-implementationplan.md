# Portfolio Implementation Plan

## Goal Description
Create a mobile-first, one-page professional portfolio for Ardelia Aryanti Putri. The portfolio will feature a "Playful Professional" aesthetic by default and include an interactive "Developer Toggle" that switches the design to a Dark Mode terminal-like view. 

## Proposed Approach

1.  **Tech Stack & Architecture:**
    *   **HTML5:** Strict adherence to semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<footer>`, `<ul>`, `<li>`, `<span>`, etc.). ZERO non-semantic `<div>` elements.
    *   **Tailwind CSS v4:** Loaded via the new Tailwind v4 browser CDN (`<script src="https://unpkg.com/@tailwindcss/browser@4"></script>`) so the code runs directly in the browser without build tools.
    *   **Vanilla JS:** A separate `script.js` file for handling smooth scrolling, scroll reveal animations, and the complex Developer Toggle logic.
    *   **Vanilla CSS:** A separate `style.css` file for Google Font imports (`Poppins` and `DM Sans`), CSS variables for custom colors, and specific keyframe animations (like the marquee and terminal glitch effect).

2.  **Design System ("Playful Professional"):**
    *   **Colors (Default/Light):** Background `#ffffffee`, Primary Text `#0F172A`, Primary Accent/CTA `#F77EB3`, Secondary Accent `#CD7DF5`.
    *   **Colors (Dev Mode/Dark):** Charcoal Black background `#121212`, Text `#E2E8F0`, with syntax-highlighted colors for the code block.
    *   **Typography:** `Poppins` for headings (bold, geometric, friendly) and `DM Sans` for body text (clean, readable).
    *   **Styling Elements:** Rounded corners (`rounded-2xl`), subtle pink/purple drop shadows on hover, and smooth transitions for all interactive elements.

3.  **Section Structure:**
    *   **Header:** Sticky navigation bar containing section links and the "Dev Mode" toggle.
    *   **Hero Section:** "Hi, I'm Ardelia" with a one-liner and CTA. This section's content will swap out with the Python `def get_candidate_info():` code block when Dev Mode is activated.
    *   **Tech Stack:** A continuous auto-scrolling marquee of skills.
    *   **Projects:** Card-based UI displaying top projects.
    *   **My Journey:** A vertical timeline layout for experience/education.
    *   **Footer:** Contact links and social icons.

## User Review Required
> [!IMPORTANT]
> **Semantic HTML Strictness:** The constraint specifies "ZERO non-semantic `div`". I will use alternatives like `<section>`, `<article>`, `<figure>`, `<main>`, `<header>`, `<footer>`, `<nav>`, `<ul>`, `<li>`, and inline tags like `<span>`. Please confirm this strict adherence is exactly what you want.

> [!NOTE]
> **Tailwind v4 CDN:** Since the code must run directly in the browser without build tools, I will use the `@tailwindcss/browser@4` script tag, which is the official way to use Tailwind v4 in the browser without Node.js.

## Verification Plan
1.  Verify the page looks modern, playful, and clean on both mobile (375px) and desktop resolutions.
2.  Verify the smooth scroll animations trigger correctly as the user scrolls down.
3.  Verify the Developer Toggle switches the theme to Dark Mode and changes the hero section into a Python code block with syntax highlighting.
4.  Run the code purely by opening `index.html` in the browser to ensure no build tools are required.
5.  Check the HTML source code to confirm the absolute absence of `<div>` tags.
