# Users Entity Specification

## Entity Name

Users

---

# Purpose

The Users table stores every authenticated person who can access the platform.

A user always belongs to one company.

Users authenticate using Supabase Auth.

The local database stores business-related user information only.

---

# Responsibilities

Store profile information.

Store company membership.

Store role assignments.

Store account status.

Store preferences.

Store avatar.

Store last login information.

Store activity metadata.

---

# Database Table

users

---

# Primary Key

id

UUID

---

# Required Columns

id

company_id

auth_user_id

first_name

last_name

email

phone

avatar_url

status

job_title

department_id

last_login_at

email_verified

is_active

created_at

updated_at

deleted_at

---

# Optional Columns

bio

address

birth_date

gender

language

timezone

notes

---

# Relationships

User

↓

Company

Many To One

---

User

↓

Roles

Many To Many

---

User

↓

Tasks

One To Many

---

User

↓

Projects

Many To Many

---

User

↓

Activity Logs

One To Many

---

User

↓

Notifications

One To Many

---

User

↓

Sessions

One To Many

---

# Business Rules

Every user belongs to exactly one company.

A user cannot exist without a company.

Email must be unique within the company.

Only active users may log in.

Deleted users cannot authenticate.

Email verification is required before accessing protected resources.

Every user must have at least one role.

---

# Status Values

active

inactive

pending

suspended

deleted

---

# Validation Rules

First Name

Required

Maximum 100 characters

Last Name

Required

Maximum 100 characters

Email

Required

Valid Email

Phone

International Format

Avatar

Image URL

Job Title

Maximum 100 characters

---

# Default Values

status

pending

email_verified

false

is_active

true

---

# Indexes

company_id

email

status

department_id

last_login_at

created_at

---

# Permissions

users.view

users.create

users.update

users.delete

users.invite

users.activate

users.deactivate

---

# API Endpoints

GET /api/v1/users

GET /api/v1/users/:id

POST /api/v1/users

PATCH /api/v1/users/:id

DELETE /api/v1/users/:id

POST /api/v1/users/invite

POST /api/v1/users/:id/activate

POST /api/v1/users/:id/deactivate

---

# UI Screens

Users List

Create User

Edit User

User Profile

Invite User

Deactivate User

---

# Filters

Department

Status

Role

Created Date

Search by Name

Search by Email

---

# Activity Logs

User Created

User Updated

User Activated

User Deactivated

Role Assigned

Role Removed

Password Reset Requested

Email Verified

---

# Notifications

Welcome Email

Invitation Email

Password Reset Email

Account Activated

Account Suspended

---

# Security Rules

Never store passwords.

Passwords are handled by Supabase Auth only.

Never expose another company's users.

Always validate company ownership.

Always verify permissions before any action.

---

# AI Instructions

When generating code:

Use Supabase Auth for authentication.

Store business information only.

Implement CRUD operations.

Generate Zod validation.

Generate Prisma model.

Generate REST API.

Generate React forms.

Implement pagination.

Implement search.

Implement filters.

Implement audit logging.

Respect Multi-Tenant architecture.

Never bypass authorization.

Generate production-ready code only.
