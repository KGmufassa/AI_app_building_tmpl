---
description: Detect system drift between specifications and generated code.
agent: build
subtask: true
---

Use the `drift-check` skill.

Compare the codebase against:

- docs/reference/prd.md
- docs/reference/architecture.md
- docs/reference/frontend-architecture.md

Identify:
- missing features
- missing endpoints
- unused database entities
- UI pages not defined in architecture
