---
name: build-database
description: Generate database schema, migrations, and ORM models from the architecture data model.
---

# Build Database Skill

This skill converts the data model defined in `architecture.md` into a working database layer.

---

# Required Inputs

The following artifacts must exist:

- docs/reference/architecture.md
- docs/reference/stack.md

If missing, stop execution and report the missing artifact.

---

# Step 1: Identify Database Technology

Read `stack.md` to determine the database type.

Examples:

PostgreSQL  
MySQL  
SQLite  
MongoDB

Determine ORM or database toolkit if specified.

Examples:

Drizzle ORM  
Prisma  
SQLAlchemy  
TypeORM

---

# Step 2: Extract Data Model

From `architecture.md`, identify:

- entities
- attributes
- relationships
- indexes
- constraints

Example entity:

User  
Project  
Task

---

# Step 3: Generate Schema

Create schema definitions in the `/db` directory.

Examples:


/db/schema.sql
/db/models


Example SQL:


CREATE TABLE users (
id UUID PRIMARY KEY,
email TEXT NOT NULL UNIQUE,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


---

# Step 4: Generate Relationships

Implement foreign keys.

Example:


ALTER TABLE projects
ADD CONSTRAINT fk_user
FOREIGN KEY (owner_id)
REFERENCES users(id);


---

# Step 5: Create Migrations

Create migration files:


/db/migrations


Each migration should:

- create tables
- add indexes
- apply constraints

---

# Step 6: Generate ORM Models

If an ORM is used, generate models.

Example:


/db/models/user.ts
/db/models/project.ts


Ensure models match the schema.

---

# Step 7: Add Indexes and Constraints

Implement indexes defined in architecture.

Examples:


CREATE INDEX idx_users_email ON users(email);


Ensure unique and foreign key constraints are applied.

---

# Step 8: Validation

Verify the following:

- schema compiles
- migrations execute successfully
- models match schema
- relationships are valid

If validation fails, halt execution and report the issue.

---

# Output

After execution, the repository must contain:


/db
├── schema.sql
├── migrations
└── models


These artifacts will be used by backend services in the next stage.
