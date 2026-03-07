# AI Application Development Lifecycle

This document outlines the full command progression for the automated application development system.  
The workflow is divided into **Planning**, **Implementation**, **Validation**, and **Orchestration** phases.

Commands orchestrate the workflow and update project state.  
Skills perform the actual execution work.

---

# 1. Planning Phase

The planning phase transforms a raw idea into a structured system specification.

## Step 1 — Brainstorm

Command:

/brainstorm


Purpose:

- Capture the initial idea
- Ask clarifying questions
- Identify assumptions
- Define core goals

Output:


docs/reference/brainstorm.md


State Update:


<<CURRENT_PHASE>> = Brainstorm


---

## Step 2 — Classify Application

Command:


/classify-app


Purpose:

Identify the type of application.

Examples:

- SaaS
- AI application
- Internal tool
- Marketplace
- Mobile app

Output:


docs/reference/app-classification.md


State Update:


<<CURRENT_PHASE>> = Classified


---

## Step 3 — Generate Framework

Command:


/generate-framework


Purpose:

Define the major modules and system boundaries.

Examples:

- API layer
- service layer
- data layer
- frontend layer

Output:


docs/reference/framework.md


State Update:


<<CURRENT_PHASE>> = Framework Generated
<<FRAMEWORK_VERSION>> = v1


---

## Step 4 — Generate PRD

Command:


/generate-prd


Purpose:

Create a detailed Product Requirements Document.

Includes:

- features
- workflows
- functional requirements
- system behavior

Output:


docs/reference/prd.md


State Update:


<<CURRENT_PHASE>> = PRD Approved
<<PRD_VERSION>> = v1


---

## Step 5 — Stack Advisor

Command:


/stack-advisor


Purpose:

Select the appropriate technology stack based on:

- application type
- scalability requirements
- best practices

Output:


docs/reference/stack.md


---

## Step 6 — Generate Architecture

Command:


/generate-architecture


Purpose:

Define the full system architecture.

Includes:

- directory structure
- layer responsibilities
- scaling strategy
- infrastructure design

Output:


docs/reference/architecture-v1.md


State Update:


<<CURRENT_PHASE>> = Architecture Approved
<<ARCH_VERSION>> = v1


---

## Step 7 — Generate Implementation Plan

Command:


/generate-plan


Purpose:

Break architecture into executable development tasks.

Includes:

- build order
- task breakdown
- dependency mapping

Output:


docs/reference/plan.md


State Update:


<<CURRENT_PHASE>> = Plan Approved
<<PLAN_VERSION>> = v1


---

# 2. Implementation Phase

The implementation phase generates the application codebase.

---

## Step 8 — Scaffold Project

Command:


/scaffold-project


Purpose:

Create the initial repository structure.

Example:


src/
api/
services/
repositories/
components/
tests/


---

## Step 9 — Build Database

Command:


/build-database


Purpose:

Generate database schema and migrations.

Outputs:


db/
migrations/
models/


---

## Step 10 — Build Backend

Command:


/build-backend


Purpose:

Implement backend services and API endpoints.

Layers:


controllers
services
repositories


---

## Step 11 — Extract Design Spec

Command:


/extract-design-spec


Purpose:

Convert UI design exports into system architecture.

Input:


design/


Output:


docs/reference/frontend-architecture.md


---

## Step 12 — Build Frontend

Command:


/build-frontend


Purpose:

Generate UI components based on:

- frontend architecture
- design spec

Output:


src/components
src/pages


---

## Step 13 — Integrate Services

Command:


/integrate-services


Purpose:

Connect frontend and backend layers.

Examples:

- API calls
- authentication flows
- service connections

---

## Step 14 — Write Tests

Command:


/write-tests


Purpose:

Generate automated tests.

Test categories:


tests/unit
tests/api
tests/integration
tests/mocks
tests/utils


---

# 3. Validation Phase

The validation phase ensures the generated application works correctly.

---

## Step 15 — Run Tests

Command:


/run-tests


Purpose:

Execute automated test suite.

Output:


validation-reports/test-results.json


Example:

```json
{
  "status": "pass",
  "total": 48,
  "passed": 48,
  "failed": 0
}

State Update:

<<CURRENT_PHASE>> = Validation
Step 16 — Validate Architecture

Command:

/validate-architecture

Purpose:

Ensure code follows the architecture rules.

Checks:

folder structure

dependency boundaries

layer separation

Output:

validation-reports/architecture-report.json

State Update:

<<ARCH_VALIDATED>> = Yes
Step 17 — Drift Check

Command:

/drift-check

Purpose:

Detect divergence between:

PRD

architecture

frontend architecture

codebase

Output:

validation-reports/drift-report.json

State Update:

<<DRIFT_CHECK>> = Yes
Step 18 — QA Review

Command:

/qa-review

Purpose:

Perform final system quality inspection.

Checks:

security issues

performance risks

dependency vulnerabilities

environment configuration

Step 19 — Auto Fix

Command:

/auto-fix

Purpose:

Automatically repair detected issues.

Possible fixes:

generate missing endpoints

repair architecture violations

fix broken imports

create missing components

After fixes, validation commands run again.

4. Orchestration Layer

These commands manage the pipeline.

Project Engine

Command:

/project-engine

Purpose:

Coordinate the entire development lifecycle.

Determines which command should run next based on project state.

Advance Phase

Command:

/advance-phase

Purpose:

Move the project to the next lifecycle phase when required artifacts exist.

Status

Command:

/status

Purpose:

Display current project health.

Reads:

docs/reference/project-state.md
validation-reports/

Example output:

Phase: Validation

Artifacts:
PRD v1
Architecture v1
Plan v1

Tests: Passed
Architecture: Valid
Drift Check: Passed

Last Updated:
2026-03-07T23:58:10Z
