---
description: Generate detailed build plan aligned to PRD and framework
agent: build
subtask: true
---

# Preconditions

Read:

docs/reference/project-state.md

If Current Phase < Architecture Generated:
Abort execution.

---

# References

Use ONLY the following reference documents.

@docs/reference/prd.md  
@docs/reference/framework.md  
@docs/reference/architecture-v1.md  
@docs/reference/stack.md

Do not invent features, modules, technologies, or assumptions not present in these documents.

All output must be derived directly from the reference docs.

---

# Step 1 — Extract Application Features

Parse the PRD and extract all defined features.

For each feature determine:

• feature name  
• user goal  
• related user actions  
• referenced modules from framework  
• referenced architecture layers  

If a feature does not contain enough implementation detail, mark it as:


Implementation Detail Missing


Do not fabricate missing logic.

---

# Step 2 — Map Features to System Modules

Using the framework document, map each feature to the correct module.

Possible modules include:

• API layer  
• service layer  
• repository layer  
• data model layer  
• frontend components  

Respect all module boundaries defined in the framework.

Never place logic outside its designated module.

---

# Step 3 — Define Feature Implementation Blocks

For each feature generate a structured implementation breakdown.

Each feature must contain the following sections.

---

### Feature: <Feature Name>

Goal  
Describe the user goal as defined in the PRD.

Module Scope  
List which modules participate in this feature.

Example:


API
Services
Repositories
Frontend


---

### Data Schema

Extract required data structures referenced in the PRD.

Define:

• entity name  
• attributes  
• relationships  

If schema details are not specified in the PRD:


Schema definition required during build-database phase


---

### Service Layer Logic

Describe the business logic required.

Example format:


validate request
execute domain logic
call repository
return structured response


Do not invent algorithms not referenced in the PRD.

---

### Repository Layer

Define required persistence operations.

Examples:


create entity
retrieve entity
update entity
delete entity


---

### API Endpoints

Extract endpoint definitions from the PRD.

Define:


HTTP method
route
input parameters
response structure


If endpoint details are missing:


API contract required during backend build phase


---

### Validation Rules

Define validation constraints mentioned in the PRD.

Examples:


input validation
format validation
business rule validation


---

### Security Checks

Define security enforcement relevant to the feature.

Examples:


authentication required
role-based access
rate limiting


Only include checks referenced in the PRD or architecture.

---

### Observability Hooks

Define required monitoring signals.

Examples:


structured logs
error tracking
metrics


---

### Test Requirements

Define tests required for the feature.

Examples:


unit tests for service logic
API endpoint tests
integration tests


---

# Step 4 — Infrastructure Phase

Define infrastructure required to support the system.

Extract technologies from:

docs/reference/stack.md

Define infrastructure components such as:


database
cache
object storage
queue systems
authentication provider


Define environment layers:


local
staging
production


List required configuration artifacts:


.env.example
environment variables
service configuration files


Only include components defined in the stack document.

---

# Step 5 — Core Module Setup

Define the foundational module structure using the framework.

Example format:


src/

api/
services/
repositories/
models/
frontend/
infrastructure/
tests/


Document module responsibilities and allowed dependencies.

Respect architectural layering rules defined in architecture-v1.md.

---

# Step 6 — Cross-Cutting Concerns

Identify system-wide concerns referenced in the architecture.

Examples may include:


logging
monitoring
error handling
configuration management


Only include items present in the architecture reference.

---

# Step 7 — Performance Strategy

Extract performance goals from the architecture or PRD.

Define:


expected latency targets
expected scale
performance optimization strategies


If performance requirements are not specified:


Performance requirements unspecified in PRD


---

# Step 8 — Security Enforcement

Define security mechanisms referenced in the architecture or PRD.

Examples:


authentication strategy
authorization model
data protection measures
security middleware


Do not introduce security controls not present in the references.

---

# Step 9 — Validation Checklist

Define validation conditions required before deployment.

Examples:


all features implemented
architecture boundaries respected
tests written
tests passing


Include validation requirements referenced in the architecture.

---

# Step 10 — Deployment Strategy

Extract deployment approach from the stack or architecture.

Define:


deployment platform
build pipeline stages
environment promotion flow
rollback strategy


If deployment strategy is not specified:


Deployment strategy unspecified in reference docs


---

# Output Structure

Generate the following sections.

APPLICATION BUILD PLAN
Infrastructure Phase
Core Module Setup
Feature-by-Feature Breakdown
Cross-Cutting Concerns
Performance Strategy
Security Enforcement
Validation Checklist
Deployment Strategy

---

# File Output

Save the generated document to:


docs/reference/plan.md


If directory does not exist:

Create it.

Overwrite existing file.

---

# Output Confirmation

Return confirmation only:


Build plan saved to docs/reference/plan.md


---

# Update Project State

Update the following file:


docs/reference/project-state.md


Modify fields:


Phase: Plan Generated
Last Updated: [CURRENT_TIMESTAMP]


Save changes.
