---
description: Convert HTML design sources into a frontend architecture specification
agent: build
subtask: true
---

# Extract Design Specification

Convert HTML prototype pages located in the `design/` directory into an implementable frontend architecture document.

The goal is to preserve the original HTML structure while extracting reusable components, layouts, and page routes.

---

# Inputs

Scan the following directory recursively:

design/

Expected format:

design/
  source/
    page-name/
      page.html.txt

Each `.txt` file contains raw HTML markup.

---

# Step 1 — Discover Pages

Scan for HTML files.

Examples:

dashboard.html.txt  
landing.html.txt  
settings.html.txt

Each HTML file represents a **page prototype**.

---

# Step 2 — Parse DOM Structure

For each HTML page:

Extract:

- layout containers
- navigation structures
- sections
- reusable UI blocks
- form elements

Preserve original DOM hierarchy.

Do not redesign HTML.

---

# Step 3 — Detect Layouts

Detect shared layout containers.

Examples:

Navbar  
Sidebar  
Footer

Pages sharing these elements should reference a common layout.

Example layouts:

MainLayout  
AuthLayout  
MarketingLayout

---

# Step 4 — Detect Components

Identify reusable components.

Rules:

Repeated DOM patterns become components.

Examples:

Card  
Navbar  
Sidebar  
FeatureGrid  
Button

---

# Step 5 — Extract Design Tokens

If tokens exist in HTML (e.g. Tailwind config):

Extract:

- colors
- fonts
- spacing
- dark mode strategy

---

# Step 6 — Determine Framework

Read:

docs/reference/stack.md

Adapt architecture for the defined frontend framework.

Examples:

React  
Next.js  
Vue  
React Native

---

# Step 7 — Generate Architecture

Create the architecture specification using:

@docs/templates/FRONTEND_ARCHITECTURE_TEMPLATE.md

Include:

Pages  
Layouts  
Components  
Design tokens  
File structure

---

# Output

Write the architecture document to:

docs/reference/frontend-architecture.md

Overwrite if exists.

---

# Completion Output

Return confirmation only:

"Frontend architecture generated."

---

# Update Project State

Update:

docs/reference/project-state.md

Phase: Frontend Architecture Generated  
Last Updated: [CURRENT_TIMESTAMP]
