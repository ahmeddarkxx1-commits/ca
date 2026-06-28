# Companies Module Specification

## Module Name

Companies

---

# Purpose

The Companies table is the root entity of the entire platform.

Every business object belongs to exactly one company.

The system is Multi-Tenant.

No data may exist outside a company.

---

# Responsibilities

Store company information.

Store subscription information.

Store branding.

Store localization.

Store company settings.

Store billing information.

Own every business record.

---

# Prisma Model

Company

---

# Database Table

companies

---

# Primary Key

id

UUID

---

# Required Columns

id

name

slug

legal_name

email

phone

website

logo_url

cover_image

country

city

address

timezone

language

currency

tax_number

commercial_register

subscription_plan

subscription_status

subscription_starts_at

subscription_ends_at

is_active

is_verified

created_at

updated_at

deleted_at

---

# Optional Columns

description

facebook

linkedin

instagram

x

youtube

support_email

billing_email

notes

---

# Relationships

Company

↓

Users

One To Many

---

Company

↓

Clients

One To Many

---

Company

↓

Projects

One To Many

---

Company

↓

Employees

One To Many

---

Company

↓

Invoices

One To Many

---

Company

↓

Expenses

One To Many

---

Company

↓

Files

One To Many

---

Company

↓

Settings

One To One

---

Company

↓

Roles

One To Many

---

Company

↓

Departments

One To Many

---

# Business Rules

Company name must be unique.

Slug must be unique.

Email should be unique.

Only verified companies may activate subscriptions.

Inactive companies cannot login.

Deleted companies cannot access the system.

Every new company receives default settings automatically.

Every new company receives default roles automatically.

Every company owns isolated storage.

---

# Indexes

slug

email

subscription_status

country

is_active

created_at

---

# Validation Rules

Company Name

Required

Maximum 150 characters

Slug

Required

Lowercase only

Unique

Country

Required

ISO Country Code

Timezone

Required

Currency

Required

Email

Valid Email Format

Website

Valid URL

Phone

International Format

---

# Default Values

language

English

currency

USD

timezone

UTC

subscription_status

trial

is_active

true

is_verified

false

---

# API Endpoints

GET /api/v1/company

PATCH /api/v1/company

GET /api/v1/company/settings

PATCH /api/v1/company/settings

GET /api/v1/company/subscription

PATCH /api/v1/company/branding

---

# Permissions

company.view

company.update

company.manage

subscription.manage

branding.manage

---

# UI Screens

Company Profile

Company Settings

Branding

Subscription

Localization

Billing Information

---

# Dashboard Widgets

Company Profile

Subscription Status

Storage Usage

Users Count

Projects Count

Clients Count

Revenue Summary

---

# Automation

On Company Creation

Create default roles.

Create default permissions.

Create default settings.

Create storage folders.

Generate company workspace.

Create owner account.

Log activity.

Send verification email.

---

# Activity Logs

Company Created

Company Updated

Subscription Changed

Branding Updated

Company Verified

Company Disabled

Company Deleted

---

# AI Instructions

When implementing this module:

Use UUID.

Implement soft delete.

Generate Prisma model.

Generate Zod validation.

Generate CRUD service.

Generate REST API.

Generate React forms.

Generate Settings page.

Generate activity logs.

Never expose companies belonging to other tenants.

Always filter using company_id.

Never bypass authorization.

Generate production-ready code only.
