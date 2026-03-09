---
description: Interactive product discovery with tech stack exploration
agent: build
subtask: false
---

Use the command arguments as the initial brain dump.

Idea input:
$ARGUMENTS

If no arguments are provided, use the current context as the idea.

---

Step 1 — Analyze Idea

Identify:

• problem
• target users
• industry domain
• initial features
• possible platforms

---

Step 2 — Interactive Questions

Ask one question at a time.

Pause after each question and wait for the user response.

Questions should refine:

• product definition
• features
• integrations
• AI usage
• platform targets

---

Step 3 — Stack Exploration

Based on gathered information, suggest several suitable tech stack options.

Explain:

• why the stack fits
• potential trade-offs
• scalability implications

Ask the user which stack direction they prefer.

---

Step 4 — Challenge Layer

Challenge:

• assumptions
• adoption risks
• technical feasibility
• scaling challenges

---

Step 5 — Generate Brainstorm Document

Create:

docs/reference/brainstorm.md

Include:

Problem
Users
Product Concept
Feature Inventory
Platform
Data Sources
Integrations
AI Requirements
Recommended Tech Stacks
Risks
Open Questions


---

# Update Project State

Update the following file:

docs/reference/project-state.md

Modify:

Phase: [CURRENT_COMMAND_PHASE]
Last Updated: [CURRENT_TIMESTAMP]

Save changes.
