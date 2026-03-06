# Frontend Architecture

This document defines the UI architecture for the application.  
It is generated from the design system and is used by the `/build-frontend` stage.

Design source:

- Figma export
- Google Stitch export
- design/ directory artifacts

---

# 1. Frontend Framework

Framework: Next.js

Language: TypeScript

Styling System:

- Tailwind CSS
- Design tokens from `design/tokens.json`

State Management:

- Zustand

Form Handling:

- React Hook Form
- Zod validation

---

# 2. Application Layout

The application uses two main layout systems.

## Auth Layout

Used for authentication pages.

Structure:

AuthLayout
└── Content

Pages:

- /login
- /signup

---

## Main Application Layout

Structure:

MainLayout
├── Navbar
├── Sidebar
└── Content

Pages:

- /dashboard
- /projects
- /tasks
- /settings

---

# 3. Page Map

Defines the route structure.


/login
/signup
/dashboard
/projects
/projects/[id]
/tasks
/settings


Each page must be generated during `/build-frontend`.

---

# 4. Component Architecture

Components follow a modular structure.


components/
├── ui
├── navigation
├── project
├── task
└── forms


### Navigation Components

Navbar  
Sidebar  
Breadcrumb

### Project Components

ProjectCard  
ProjectList  
ProjectForm

### Task Components

TaskCard  
TaskTable  
TaskForm

### Form Components

Input  
Select  
Button  
Modal

---

# 5. Hooks

Hooks manage data fetching and state.


hooks/
├── useAuth
├── useProjects
├── useTasks


Responsibilities:

- call API endpoints
- manage loading state
- manage error state

---

# 6. API Client Layer

Location:


lib/apiClient.ts


Responsibilities:

- API request wrapper
- attach auth headers
- error handling
- retry logic

---

# 7. State Management

Global state store:


stores/


Example stores:

UserStore  
ProjectStore  
TaskStore

Responsibilities:

- cache API responses
- manage UI state
- store authentication status

---

# 8. Design Tokens

Imported from:


design/tokens.json


Includes:

- color palette
- typography
- spacing
- breakpoints

Example:

Primary Color  
Secondary Color  
Base Font  
Spacing Scale

---

# 9. Asset System

Location:


design/assets/


Includes:

icons  
images  
illustrations

---

# 10. UI Data Flow

The UI data flow follows this structure.


Page
↓
Hooks
↓
API Client
↓
Backend Endpoint
↓
Database


---

# 11. Validation Rules

All forms must include validation using:

Zod

Example:

LoginForm validation:

email required  
password minimum length

---

# 12. Accessibility

All components must support:

- keyboard navigation
- ARIA attributes
- accessible labels

---

# 13. Responsive Design

Breakpoints defined by tokens:

Mobile  
Tablet  
Desktop

Components must support responsive layouts.

---

# 14. File Structure

The frontend generator must produce the following structure.


app/
├── pages
├── components
├── hooks
├── layouts
├── stores
├── lib
└── styles


---

# 15. Validation Checklist

The build process must confirm:

- pages match page map
- components match component architecture
- hooks exist for API interactions
- design tokens applied
- layouts implemented
