---
name: drift-check
description: Detect divergence between specifications and implementation.
---

Steps:

1. Load PRD
2. Load architecture
3. Load frontend architecture
4. Scan codebase

Compare expected vs implemented features.

Example findings:

Missing:
- endpoint POST /projects
- UI page /settings

Unused:
- database table AuditLogs
