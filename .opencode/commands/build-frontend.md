---
description: Generate frontend pages, components, and hooks from the frontend architecture specification.
agent: build
subtask: true
---

Use the `build-frontend` skill.

Required inputs:

- docs/reference/frontend-architecture.md
- docs/reference/stack.md
- api directory
- design tokens

Ensure generation of:

- pages
- components
- layouts
- hooks
- API client utilities

Validate:

- components map to design components
- pages map to frontend architecture
- API calls reference real backend endpoints

Output confirmation only:

"Frontend successfully generated."
