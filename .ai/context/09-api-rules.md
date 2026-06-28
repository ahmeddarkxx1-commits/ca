# API Standards

## Objective

This document defines the official API standards for Nexoura Core.

Every API endpoint, action, request, response, and integration must follow these standards.

Consistency is mandatory.

---

# API Philosophy

APIs are the backbone of the platform.

Every endpoint must be:

Predictable

Secure

Typed

Versionable

Documented

Testable

Scalable

---

# API Style

Architecture

REST API

Future Support

GraphQL (Optional)

Realtime

Supabase Realtime

---

# Versioning

Every API starts with

/api/v1/

Example

/api/v1/projects

/api/v1/clients

/api/v1/invoices

Never create unversioned APIs.

---

# Standard HTTP Methods

GET

Read

POST

Create

PUT

Replace

PATCH

Update

DELETE

Soft Delete Only

---

# Authentication

Every protected endpoint requires authentication.

Never trust client authentication.

Always verify server-side.

---

# Authorization

Authentication is not enough.

Always check permissions.

Examples

Can Create Project

Can Edit Invoice

Can Delete Client

Can Manage Users

---

# Request Validation

Every request must be validated.

Use Zod.

Reject invalid requests.

Never trust frontend validation.

---

# Standard Response Format

Every successful response should follow

success

message

data

meta (optional)

Example

{
"success": true,
"message": "Project created successfully.",
"data": {},
"meta": {}
}

---

Every error response should follow

success

message

errors

Example

{
"success": false,
"message": "Validation failed.",
"errors": {}
}

---

# Status Codes

200 OK

201 Created

204 No Content

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

409 Conflict

422 Validation Error

429 Too Many Requests

500 Internal Server Error

---

# Pagination

Never return unlimited records.

Default

20 items

Support

page

limit

search

sort

filters

---

# Filtering

Allow filtering using query parameters.

Examples

status

priority

client

project

date

company

---

# Sorting

Support sorting by

created_at

updated_at

name

status

Never sort on non-indexed fields without review.

---

# Searching

Use dedicated search parameters.

Never mix search with filtering logic.

---

# File Upload

Validate

File Type

File Size

Virus Scan (Future)

Store files in storage.

Store metadata in database.

---

# Rate Limiting

Apply rate limits to

Login

Register

Password Reset

Public APIs

Webhook Endpoints

AI Endpoints

---

# Logging

Log

Errors

Critical Operations

Authentication Events

Permission Failures

Never log

Passwords

Tokens

Secrets

Personal Sensitive Data

---

# Idempotency

Critical endpoints such as

Payments

Invoices

Subscriptions

must support idempotent behavior where appropriate.

---

# Background Jobs

Long-running operations must not block requests.

Use background processing.

Examples

Sending Emails

Generating Reports

AI Processing

Large Imports

Notifications

---

# API Documentation

Every endpoint must include

Description

Authentication

Permissions

Request Example

Response Example

Validation Rules

Possible Errors

---

# API Naming

Use plural resource names.

Good

/projects

/users

/invoices

Avoid

/getProject

/createInvoice

/deleteUser

---

# Error Messages

Error messages should be

Clear

Human-readable

Actionable

Never expose stack traces.

---

# Multi-Tenant Rules

Every request must validate

company_id

Never allow cross-company access.

Never trust client-provided company identifiers without verification.

---

# AI Instructions

When generating APIs:

Follow REST standards.

Validate every request.

Authenticate every protected endpoint.

Authorize every protected action.

Return standardized responses.

Write scalable endpoints.

Document every endpoint.

Optimize database queries.

Avoid duplicated logic.

Generate production-ready code only.
