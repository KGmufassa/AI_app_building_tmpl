---
name: drift-check
description: Detect divergence between system specifications and the generated codebase.
---

# Drift Check

Ensure the implementation remains aligned with the system specifications.

---

# Inputs

Load the following reference documents:

- docs/reference/prd.md
- docs/reference/architecture.md
- docs/reference/frontend-architecture.md

Scan the current repository codebase.

---

# Drift Detection Categories

## 1. Feature Drift (PRD vs Code)

Verify that features defined in the PRD exist in the implementation.

Examples of drift:

Missing:
- endpoint POST /projects
- UI page /settings

Extra:
- feature not defined in PRD
- unused endpoint

---

## 2. API Drift

Compare expected API endpoints to implemented routes.

Sources:

PRD  
architecture.md  

Example issues:

Missing endpoint:
- POST /projects

Unexpected endpoint:
- DELETE /admin/users

---

## 3. UI Drift

Compare frontend pages and components against the UI architecture.

Source:

docs/reference/frontend-architecture.md

Examples:

Missing:
- Settings page

Unexpected:
- AdminDashboard component not defined in architecture

---

## 4. Data Model Drift

Compare database entities to those defined in architecture.

Examples:

Missing:
- table ProjectTasks

Unused:
- table AuditLogs

---

# Generate Drift Report

Write results to:

validation-reports/drift-report.json

Example structure:

{
  "status": "fail",
  "missing": [
    {
      "type": "endpoint",
      "name": "POST /projects"
    }
  ],
  "unexpected": [
    {
      "type": "component",
      "name": "AdminDashboard"
    }
  ],
  "unused": [
    {
      "type": "database_table",
      "name": "AuditLogs"
    }
  ]
}

---

# Output

If no drift detected:

System aligned with specifications.

If drift detected:

Specification drift detected.
