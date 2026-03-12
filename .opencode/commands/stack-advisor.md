---
description: Confirm frontend stack and derive backend architecture aligned with the frontend system
agent: plan
subtask: true
---

Reference:

@docs/reference/frontend-architecture.md
@docs/reference/brainstorm-prd-draft.md
@docs/reference/app-classification.md

---

# Objective

Determine and finalize the full **application technology stack**.

The command must:

1. Confirm the frontend stack derived from the frontend architecture.
2. Ask clarifying questions to determine the backend stack.
3. Validate compatibility between frontend and backend systems.
4. Produce a backend architecture aligned with the frontend system.

The result should be a **cohesive full-stack architecture**.

---

# Step 1 — Read Frontend Architecture

Load:

docs/reference/frontend-architecture.md

Extract:

Frontend framework  
Routing system  
State management approach  
UI architecture style  
API consumption pattern  

Examples:

React + Tailwind  
Next.js App Router  
REST data fetching hooks  

---

# Step 2 — Confirm Frontend Stack

Display detected frontend stack.

Example:

Frontend Framework  
Next.js

Styling  
TailwindCSS

State Management  
React Hooks

Routing  
Next.js App Router

Ask user to confirm:

Is the detected frontend stack correct?

If not, request corrections.

---

# Step 3 — Backend Architecture Questionnaire

Generate a backend clarification questionnaire.

Ask questions **sequentially without pauses** so the user can answer them together.

---

## Backend Runtime

Which runtime environment should power the backend?

Examples:

Node.js  
Python  
Go  
Java  

---

## Backend Framework

Which backend framework should be used?

Examples:

Express  
NestJS  
FastAPI  
Django  
Spring Boot  

---

## API Architecture

Which API style should the backend follow?

Examples:

REST  
GraphQL  
tRPC  

---

## Database

Which database should be used?

Examples:

PostgreSQL  
MySQL  
MongoDB  
SQLite  

---

## ORM / Query Layer

Which database abstraction layer should be used?

Examples:

Prisma  
Drizzle  
SQLAlchemy  
TypeORM  

---

## Authentication Strategy

How should authentication be implemented?

Examples:

JWT  
Session cookies  
OAuth providers  
Auth0 / Clerk  

---

## File Storage

Will the application require file storage?

Examples:

S3  
Cloud storage  
Local storage  

---

## Background Jobs

Does the application require background job processing?

Examples:

Queue workers  
Task schedulers  
Async workers  

---

## Deployment Target

Where will the backend be deployed?

Examples:

AWS  
Vercel serverless  
Render  
Fly.io  
Docker containers  

---

## Testing Framework

Which backend testing framework should be used?

Examples:

Jest  
Vitest  
Pytest  

---

# Step 4 — Validate Stack Compatibility

Ensure the backend stack is compatible with the frontend.

Examples:

Next.js frontend → REST or GraphQL API expected  
React Native → mobile-friendly API responses  
Serverless deployment → stateless backend  

Flag incompatibilities and suggest corrections.

---

# Step 5 — Generate Backend Architecture

Create a backend architecture aligned with the frontend system.

The architecture must include:

Service layer  
Controller layer  
Repository layer  
Database models  
API routing structure  

Example structure:

---
