# Database Rules

## Objective

This document defines the official database standards for Nexoura Core.

Every database table, relation, query, migration, and schema must follow these rules.

No exceptions.

---

# Database Engine

Official Database

PostgreSQL

ORM

Prisma ORM

Migration Tool

Prisma Migrate

---

# Primary Keys

Every table must use

UUID

Example

id UUID PRIMARY KEY

Never use auto increment IDs.

---

# Multi Tenant

Every business table must contain

company_id

Every query must filter by

company_id

No company can access another company's data.

---

# Required Columns

Every table must include

id

created_at

updated_at

Optional

deleted_at

created_by

updated_by

deleted_by

---

# Naming Convention

Tables

snake_case

Examples

companies

users

projects

project_tasks

client_contacts

invoice_items

---

Columns

snake_case

Examples

first_name

company_id

created_at

invoice_number

---

Indexes

idx_table_column

Example

idx_projects_company_id

---

Foreign Keys

fk_table_reference

Example

fk_projects_company

---

Unique Constraints

uq_table_column

Example

uq_users_email

---

# Relationships

Prefer explicit foreign keys.

Never store unrelated IDs.

Always enforce referential integrity.

---

# Soft Delete

Never delete important business records.

Use

deleted_at

Hidden records remain recoverable.

---

# Audit Trail

Critical tables must track

created_by

updated_by

deleted_by

Every important change should also be logged.

---

# Transactions

Use database transactions when operations affect multiple tables.

Examples

Create Invoice

↓

Invoice Items

↓

Payment

↓

Activity Log

↓

Notification

Everything succeeds or everything rolls back.

---

# Query Rules

Always paginate.

Never return unlimited records.

Never use SELECT *

Only request needed fields.

Avoid N+1 queries.

Prefer indexes.

---

# Performance

Index frequently filtered columns.

Examples

company_id

status

created_at

email

project_id

client_id

---

Avoid duplicate indexes.

Review slow queries regularly.

---

# File Storage

Database stores only metadata.

Example

file_name

storage_path

mime_type

size

uploaded_by

Actual files live in storage.

---

# Money

Never use float.

Use

Decimal

Store currency separately.

Examples

amount

currency

exchange_rate

---

# Dates

Store dates in UTC.

Convert to local timezone only in the UI.

---

# Enums

Use enums for

Status

Roles

Priorities

Currencies

Languages

Payment Status

Project Status

Task Status

---

# Data Validation

Validate before insert.

Validate before update.

Never trust client data.

---

# Migrations

Every schema change must use a migration.

Never modify production tables manually.

Never edit old migrations.

Create new migrations only.

---

# Seed Data

Seed only required data.

Examples

Roles

Permissions

Countries

Currencies

Languages

Default Settings

---

# Backup

Database backups must be automated.

Support restore procedures.

Backups should be encrypted.

---

# AI Instructions

When generating Prisma models or SQL:

Use UUID.

Respect Multi-Tenant architecture.

Add indexes where appropriate.

Use explicit relations.

Use Decimal for financial values.

Use UTC timestamps.

Never generate auto-increment IDs.

Never generate tables without documentation.

Always optimize for scalability.
