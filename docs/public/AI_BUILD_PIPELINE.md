AI Application Development Pipeline

This document describes the full autonomous development pipeline used by the AI project system.

The system converts a raw idea → fully structured implementation plan using staged architecture generation.

Each stage produces artifacts stored in docs/reference/, which are used by subsequent commands.

Pipeline Overview
Brainstorm
↓
PRD Draft
↓
UI Prompt Builder
↓
UI Design Generation (Google Stitch)
↓
Extract Design Spec
↓
Frontend Architecture
↓
Stack Advisor
↓
Backend Architecture
↓
Stack Guidelines
↓
Finalize PRD
↓
Generate Plan
↓
Implementation Phase

Each step progressively reduces ambiguity and adds technical structure.

1. Brainstorm

Command:

/brainstorm
Purpose

Transform a raw brain dump of ideas into a structured concept draft.

This stage is focused on clarifying the product idea.

Inputs

Either:

context window text

or

/brainstorm <file>

Example:

/brainstorm idea.txt
What the Command Does

The command:

Reads the user brain dump

Extracts:

product idea

user goals

features

application theme

Researches industry patterns

Asks clarifying questions

Challenges assumptions

Suggests potential tech stacks

Question Layers

The system asks questions in three layers.

Product Questions

Example:

Who is the primary user?
What problem does the app solve?
What makes this product unique?
Feature Questions

Example:

What are the core features required for MVP?
Which features require backend services?
Which features are UI-only?
Architecture Questions

Example:

Will the app require real-time updates?
Will authentication be required?
Does the system require background workers?
Output Artifact
docs/reference/prd-draft.md

This is a draft PRD used for design generation.

2. UI Prompt Builder

Command:

/ui-prompt-builder
Purpose

Generate a prompt for the Google Stitch UI builder based on the PRD draft.

This allows automatic generation of high quality UI layouts.

Inputs
docs/reference/prd-draft.md
What the Command Does

The system:

Extracts features from the PRD draft

Derives possible UI pages

Identifies UX patterns

Asks UI clarifying questions

Builds a structured UI prompt

Output

A prompt that can be pasted into:

Google Stitch
3. UI Design Generation (Google Stitch)

This stage is manual.

The user submits the generated prompt to:

Google Stitch
Output

The UI builder generates HTML layouts.

The HTML files are saved inside:

design/

Example structure:

design/

stitch/
  landing-page.txt
  dashboard-page.txt
  project-page.txt

The files contain raw HTML source code.

4. Extract Design Spec

Command:

/extract-design-spec
Purpose

Convert HTML design code into a structured UI architecture specification.

Inputs
design/

HTML source files.

What the Command Does

The command analyzes:

HTML structure

Tailwind styles

components

layout containers

It extracts:

pages
components
layouts
design tokens
navigation
Output
docs/reference/frontend-design-spec.md

This becomes the technical summary of the UI system.

5. Generate Frontend Architecture

Command:

/generate-frontend-architecture
Purpose

Convert the design specification into a formal frontend architecture document.

Inputs
docs/reference/frontend-design-spec.md
docs/reference/prd-draft.md
What the Command Generates

The architecture defines:

framework
routing system
layout architecture
component hierarchy
state management
API consumption model
UI dependency graph
page wiring graph
Output
docs/reference/frontend-architecture.md

This document becomes the source of truth for frontend implementation.

6. Stack Advisor

Command:

/stack-advisor
Purpose

Determine the complete technology stack.

Inputs
docs/reference/frontend-architecture.md
docs/reference/prd-draft.md
Process

The system:

Detects frontend stack

Asks questions about backend stack

Determines:

backend framework
database
ORM
authentication
deployment target
testing framework
Outputs
docs/reference/stack.md
docs/reference/backend-architecture.md

7. Backend Architecture

Generated during stack advisor.

Purpose

Define the backend system structure.

Architecture Includes
controllers
services
repositories
models
routes
middleware
configuration
Example Folder Structure
src/

controllers/
services/
repositories/
models/
routes/
middleware/
config/
Output
docs/reference/backend-architecture.md
8. Generate Stack Guidelines

Command:

/generate-stack-guidelines
Purpose

Retrieve official best practices for the confirmed tech stack.

Uses:

Context7 MCP
Example Sources
Next.js documentation
FastAPI documentation
PostgreSQL best practices
Prisma patterns
Output
docs/reference/stack-guidelines.md
Contents
project structure
service layer patterns
configuration patterns
security practices
performance patterns
testing practices
deployment patterns

9. Finalize PRD

Command:

/finalize-prd
Purpose

Create the final authoritative PRD.

Inputs
docs/reference/prd-draft.md
docs/reference/frontend-architecture.md
docs/reference/backend-architecture.md
docs/reference/stack.md
docs/reference/frontend-design-spec.md
Output
docs/reference/prd.md
Contents
product vision
feature list
functional requirements
system architecture
data models
UI structure
tech stack
MVP scope
non-functional requirements

10. Generate Plan

Command:

/generate-plan
Purpose

Generate the technical build plan.

This plan describes exactly how the application should be implemented.

Inputs
frontend-architecture.md
backend-architecture.md
stack.md
prd.md
stack-guidelines.md
What the Command Generates
Build Plan
docs/reference/plan.md

Contains:

Infrastructure Phase
environment setup
database initialization
container configuration
Core Module Setup
authentication
logging
configuration
Backend Implementation
controllers
services
repositories
models
Frontend Implementation
layouts
components
hooks
pages
Feature-by-Feature Breakdown

Each feature defines:

frontend components
backend services
API endpoints
data models
Cross-Cutting Concerns
authentication
authorization
logging
error handling
Performance Strategy
database indexing
API caching
lazy loading
Security Enforcement
input validation
auth guards
rate limiting
Validation Checklist

Ensures:

features implemented
APIs wired
tests written
Deployment Strategy
CI/CD pipeline
database migrations
environment configuration
11. Architecture Rules

Generated alongside the plan.

Output
docs/reference/architecture-rules.md
Purpose

Prevent architectural drift during implementation.

Example Rules
controllers cannot access database directly
repositories handle database queries
services contain business logic
UI cannot call database directly
Final Result of the Pipeline

After the pipeline completes, the system produces a complete engineering specification.

Artifacts created:

docs/reference/

prd-draft.md
frontend-design-spec.md
frontend-architecture.md
backend-architecture.md
stack.md
stack-guidelines.md
prd.md
plan.md
architecture-rules.md

------

scaffold-project
build-database
build-backend
build-frontend
write-tests
run-tests
qa-review
