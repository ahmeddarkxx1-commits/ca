# Folder Structure

## Objective

This document defines the official project structure for Nexoura Core.

Every AI assistant and developer must follow this structure.

Creating files outside the approved structure is prohibited unless the architecture documentation is updated.

---

# Root Structure

```text
nexoura-core/

.ai/
apps/
packages/
docs/
public/
scripts/
.github/

.env
.env.example
package.json
pnpm-workspace.yaml
turbo.json
README.md
```

---

# AI Folder

Contains all AI documentation.

```text
.ai/

context/
architecture/
database/
modules/
prompts/
agents/
rules/
templates/
sprints/
decisions/
examples/
```

---

# Applications

```text
apps/

web/
admin/
client-portal/
employee-portal/
```

## web

Main marketing website.

Contains

Landing Pages

Blog

Services

Products

Authentication Entry

---

## admin

ERP Dashboard.

Contains

CRM

Projects

Finance

HR

Reports

Settings

Automation

AI

---

## client-portal

Client dashboard.

Contains

Projects

Invoices

Payments

Files

Support

Profile

Notifications

---

## employee-portal

Employee dashboard.

Contains

Tasks

Attendance

Leaves

Performance

Documents

---

# Packages

Shared code.

```text
packages/

ui/
database/
types/
config/
utils/
constants/
hooks/
services/
```

---

## ui

Reusable Components

Buttons

Cards

Dialogs

Inputs

Tables

Charts

Layouts

---

## database

Prisma

Schemas

Migrations

Seeds

Database Utilities

---

## types

Shared TypeScript Types

Interfaces

Enums

DTOs

---

## config

Environment Configuration

Application Configuration

Feature Flags

---

## utils

Reusable Helper Functions

Date Utilities

Currency Utilities

Validation Helpers

Formatting Helpers

---

## services

External Services

Email

Storage

Payments

Notifications

AI

---

# Documentation

```text
docs/

prd/
architecture/
api/
database/
deployment/
meeting-notes/
```

---

# Public Folder

```text
public/

images/

icons/

logos/

fonts/
```

---

# Scripts

```text
scripts/

database/

seed/

migration/

cleanup/

automation/
```

---

# Feature Structure

Every feature follows this structure.

```text
feature-name/

components/

hooks/

services/

actions/

schemas/

validators/

types/

constants/

utils/

api/

pages/

tests/
```

---

# File Naming Rules

Components

PascalCase

Example

ProjectCard.tsx

---

Hooks

camelCase

Example

useProjects.ts

---

Utilities

camelCase

Example

formatCurrency.ts

---

Constants

UPPER_CASE

Example

DEFAULT_PAGE_SIZE.ts

---

Database

snake_case

Example

project_members

---

Routes

kebab-case

Example

/client-projects

---

# Import Rules

Prefer absolute imports.

Avoid deep relative imports.

Bad

../../../../../

Good

@/components

@/features

@/services

---

# Module Independence

Every module owns:

Components

Business Logic

Database Access

Validation

API

Types

Documentation

Tests

No module should depend directly on another module's internal implementation.

---

# Shared Code Policy

Only reusable code belongs inside packages.

Business logic must stay inside its module.

Never create a shared package for code used by only one module.

---

# AI Instructions

When creating files:

Always place files in the correct directory.

Never create duplicate folders.

Reuse existing shared packages.

Respect naming conventions.

Do not invent new project structures.

Follow Feature-First Architecture.

Keep modules isolated.

Update documentation whenever a new module is added.

Never move existing files without approval.
