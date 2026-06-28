# Database Overview

## Objective

This document defines the overall database architecture of Nexoura Core.

It serves as the master reference for every database table, relationship, migration, Prisma schema, and backend implementation.

No table should be created before following this document.

---

# Database Engine

PostgreSQL

ORM

Prisma ORM

Migration Tool

Prisma Migrate

---

# Database Philosophy

The database is the single source of truth.

Business logic belongs to services.

The database stores facts, not calculations.

Avoid duplicated information.

Normalize when appropriate.

Denormalize only when performance requires it.

---

# Architecture

The database follows a Multi-Tenant architecture.

Every company owns its own data.

Every business record belongs to one company.

Cross-company access is prohibited.

---

# Database Layers

Core

Business

Finance

Human Resources

Automation

AI

Logs

System

---

# Core Tables

companies

users

roles

permissions

role_permissions

user_roles

sessions

settings

---

# CRM Tables

clients

client_contacts

client_notes

client_tags

meetings

lead_sources

---

# Projects

projects

project_members

project_status

milestones

tasks

task_comments

task_checklists

task_labels

time_entries

---

# Files

files

folders

attachments

versions

---

# Finance

invoices

invoice_items

payments

expenses

currencies

transactions

subscriptions

---

# HR

employees

attendance

leave_requests

payroll

departments

positions

---

# Notifications

notifications

notification_templates

email_logs

sms_logs

---

# Reports

saved_reports

dashboards

widgets

---

# AI

ai_conversations

ai_messages

ai_usage

ai_prompts

---

# System

activity_logs

audit_logs

api_keys

webhooks

integrations

---

# Common Columns

Every business table should contain

id

company_id

created_at

updated_at

Optional

deleted_at

created_by

updated_by

deleted_by

---

# Relationships

Companies

↓

Users

↓

Roles

↓

Permissions

---

Companies

↓

Clients

↓

Projects

↓

Tasks

↓

Files

---

Companies

↓

Invoices

↓

Payments

↓

Transactions

---

Companies

↓

Employees

↓

Attendance

↓

Payroll

---

# UUID

Every primary key uses UUID.

No auto-increment IDs.

---

# Time

Store timestamps in UTC.

Convert only in UI.

---

# Money

Use Decimal.

Never Float.

Store currency separately.

---

# Storage

Business files are stored in Supabase Storage.

Database stores only metadata.

---

# Multi Tenant Rule

Every backend query must automatically filter by company_id.

No exception.

---

# Soft Delete

Use deleted_at.

Never permanently delete important business records.

---

# Indexing

Index:

company_id

status

created_at

updated_at

email

client_id

project_id

employee_id

invoice_number

---

# Audit

Critical operations must be logged.

Examples

Login

Invoice Paid

Project Deleted

Role Updated

Permission Changed

Settings Updated

---

# AI Instructions

When generating Prisma Schema:

Read every table documentation.

Respect relationships.

Use UUID.

Use Decimal.

Generate indexes.

Generate explicit foreign keys.

Follow Multi-Tenant architecture.

Never invent tables.

Never skip required columns.

Never optimize prematurely.

Generate enterprise-grade schemas only.
