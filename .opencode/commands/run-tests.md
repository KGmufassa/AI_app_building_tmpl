---
description: Execute the project test suite and ensure the correct test framework configuration exists.
agent: plan
subtask: true
---

# Run Tests

Execute the project's automated test suite.

Before running tests, verify that the test framework configuration exists.

If configuration is missing, automatically initialize the test framework.

---

## Step 1 — Detect Framework

Inspect:

- docs/reference/stack.md
- package.json
- project language

Determine appropriate test framework.

Examples:

Node → Vitest or Jest  
Python → Pytest  
Go → Go test  
React Native → Jest  
Flutter → Flutter test

---

## Step 2 — Ensure Test Framework Setup

If required configuration files are missing, generate them automatically.

Examples:

Node:

vitest.config.ts  
tests/setup.ts  
.env.test

Python:

pytest.ini  
tests/conftest.py  
.env.test

---

## Step 3 — Execute Tests

Run the appropriate test command.

Examples:

Node:

npm test

Python:

pytest

Go:

go test ./...

---

## Step 4 — Capture Results

Report:

- total tests
- passed tests
- failed tests
- failing test files
- error messages

---

## Output

Example:

Tests executed: 48  
Passed: 46  
Failed: 2
