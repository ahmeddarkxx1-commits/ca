# Roles Entity Specification

## Entity Name

Roles

---

# Purpose

The Roles table defines user roles within a company.

Roles group permissions together to simplify authorization.

Users receive permissions through assigned roles.

---

# Business Purpose

Provide a flexible Role-Based Access Control (RBAC) system.

Support custom roles per company.

Allow companies to create, edit, duplicate, archive, and assign roles without changing application code.

---

# Database Table

roles

---

# Primary Key

id (UUID)

---

# Required Columns

id

company_id

name

slug

description

is_system

is_active

priority

created_at

updated_at

deleted_at

---

# Optional Columns

color

icon

notes

---

# Relationships

Company

↓

Roles

One To Many

---

Role

↓

Permissions

Many To Many

---

Role

↓

Users

Many To Many

---

# Business Rules

Every role belongs to one company.

Role names must be unique within the same company.

System roles cannot be deleted.

System roles cannot be renamed.

Every company receives default roles on creation.

Inactive roles cannot be assigned.

---

# Default System Roles

Owner

Admin

Project Manager

Sales

Developer

Designer

HR

Finance

Support

Client

---

# Validation Rules

Name

Required

Maximum 100 Characters

Slug

Required

Unique

Lowercase

Priority

Integer

Greater than zero

---

# Indexes

company_id

slug

name

is_active

priority

---

# Permissions

roles.view

roles.create

roles.update

roles.delete

roles.assign

---

# API Endpoints

GET /api/v1/roles

GET /api/v1/roles/:id

POST /api/v1/roles

PATCH /api/v1/roles/:id

DELETE /api/v1/roles/:id

POST /api/v1/roles/:id/duplicate

---

# UI Screens

Roles List

Create Role

Edit Role

Role Details

Assign Permissions

Assign Users

---

# Filters

Search

Status

System Role

Created Date

---

# Events

Role Created

Role Updated

Role Deleted

Role Activated

Role Archived

Role Assigned

Permission Added

Permission Removed

---

# Audit Logs

Every role modification must be logged.

Store:

User ID

Company ID

Action

Timestamp

Old Values

New Values

---

# AI Instructions

Generate:

Prisma Model

CRUD API

Role Management UI

Role Assignment Logic

Search

Pagination

Audit Logs

Validation

Never hardcode permissions.

Never hardcode roles except initial seed data.

Support unlimited custom roles.

Respect company isolation.

Generate production-ready code.
