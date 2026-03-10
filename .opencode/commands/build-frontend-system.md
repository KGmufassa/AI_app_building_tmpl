---
description: Orchestrate the full frontend generation pipeline
agent: build
---

# Frontend Build Orchestrator

Execute the full frontend generation pipeline.

---

# Step 1

Run:

/extract-design-spec

---

# Step 2

Run:

/generate-page-graph

---

# Step 3

Run frontend implementation skill:

build-frontend

---

# Validation

Verify:

- pages exist
- layouts exist
- components generated
- hooks wired
- API endpoints mapped

---

# Output

Return:

"Frontend build pipeline completed."
