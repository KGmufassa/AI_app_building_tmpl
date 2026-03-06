---
name: integrate-services
description: Connect all application layers into a working system.
---

# Integrate Services

---

## Step 1 — Connect Backend to Database

Verify repositories import database models.

---

## Step 2 — Connect Frontend to API

Ensure hooks call correct endpoints.

---

## Step 3 — Configure Environment

Generate:

.env  
.env.example

Include:

DATABASE_URL  
API_URL  
AUTH_SECRET

---

## Step 4 — Configure Authentication

Implement authentication middleware and session handling.

---

## Step 5 — Validation

Ensure:

frontend → backend → database flow works.
