---
description: Generate backend services, controllers, and API routes using the database models and architecture.
agent: build
subtask: true
---

# Build Backend Command

Use the `build-backend` skill to generate the application service layer and API endpoints.

Required artifacts:

- docs/reference/architecture.md
- docs/reference/prd.md
- docs/reference/plan.md
- db/schema
- db/models

Invoke the `build-backend` skill.

Ensure the following layers are created:

- controllers (API endpoints)
- services (business logic)
- repositories or data access
- validation schemas
- middleware

Validate:

- endpoints correspond to entities
- services interact with database models
- request validation exists
- error handling implemented

Output confirmation only:

"Backend services and API routes successfully generated."
