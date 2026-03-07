---
description: Execute the project test suite and ensure the correct test framework configuration exists.
agent: build
subtask: true
---

# Run Tests

Execute the project's automated test suite and generate a structured test report.

Before running tests, verify that the test framework configuration exists.  
If configuration is missing, automatically initialize the test framework.

---

# Step 1 — Detect Project Stack

Inspect:

- docs/reference/stack.md
- package.json
- requirements.txt
- go.mod
- pubspec.yaml

Determine the project language and ecosystem.

Examples:

Node → JavaScript / TypeScript  
Python → Python project  
Go → Go project  
React Native → Mobile JS project  
Flutter → Dart project

---

# Step 2 — Detect Test Framework

Choose the correct framework based on the detected stack.

Examples:

Node → Vitest (preferred) or Jest  
Python → Pytest  
Go → Go test  
React Native → Jest  
Flutter → Flutter test

---

# Step 3 — Ensure Test Framework Setup

Verify required configuration files exist.

If missing, generate them automatically.

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

# Step 4 — Ensure Test Directory Exists

Ensure the following structure exists:

tests/

tests/unit  
tests/api  
tests/integration  
tests/mocks  
tests/utils  

Create directories if missing.

---

# Step 5 — Execute Tests

Run the appropriate test command.

Examples:

Node:

npm test

Python:

pytest

Go:

go test ./...

Flutter:

flutter test

---

# Step 6 — Capture Results

Record:

- total tests executed
- passed tests
- failed tests
- failing files
- error messages

---

# Step 7 — Write Structured Report

Write the test results to:

validation-reports/test-results.json

Example format:

{
  "status": "fail",
  "total": 48,
  "passed": 46,
  "failed": 2,
  "failures": [
    {
      "file": "tests/api/projects.test.ts",
      "error": "Expected 200 but received 500"
    }
  ]
}

If all tests pass:

{
  "status": "pass",
  "total": 48,
  "passed": 48,
  "failed": 0
}

---

# Output

Print a short summary:

Tests executed: 48  
Passed: 46  
Failed: 2

Test report written to:

validation-reports/test-results.json
