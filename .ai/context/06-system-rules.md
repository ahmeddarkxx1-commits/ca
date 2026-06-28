# System Rules

## Objective

This document defines the non-negotiable system-wide rules for Nexoura Core.

These rules apply to every module, every API, every database table, every component, and every future feature.

Violation of these rules is considered an architectural issue.

---

# General Principles

The system must remain scalable.

The system must remain modular.

The system must remain maintainable.

The system must remain secure.

The system must remain reusable.

---

# Multi-Tenant Rule

Every business record belongs to exactly one company.

No company may access another company's data.

Every database query must respect company isolation.

Every API must validate company ownership.

---

# Soft Delete Rule

Never permanently delete business data.

Use deleted_at.

Hidden records should remain recoverable.

---

# UUID Rule

Every primary key must use UUID.

Never use incremental IDs as primary keys.

---

# Audit Rule

Every important action must be logged.

Examples

User Login

Invoice Created

Invoice Paid

Client Updated

Project Deleted

Role Changed

Permission Updated

Employee Created

---

# Timestamp Rule

Every table must contain

created_at

updated_at

Optional

deleted_at

---

# Permission Rule

Authentication does NOT equal Authorization.

Every protected action requires permission verification.

---

# Validation Rule

Every request must be validated.

Frontend validation is not enough.

Backend validation is mandatory.

---

# Transaction Rule

Operations affecting multiple tables must use database transactions.

Either all operations succeed or none succeed.

---

# File Storage Rule

No business files are stored inside the database.

The database stores metadata only.

Actual files live inside storage.

---

# Notification Rule

Notifications are events.

Sending notifications must never block the main request.

Use queues or background jobs whenever possible.

---

# Error Handling Rule

Never expose internal server errors.

Always return standardized API responses.

Log unexpected errors.

---

# Configuration Rule

Never hardcode:

API Keys

URLs

Secrets

Credentials

Company Settings

Everything must come from configuration.

---

# Logging Rule

Log only useful information.

Never log passwords.

Never log tokens.

Never log sensitive personal information.

---

# AI Rule

Artificial Intelligence must assist users.

AI must never bypass permissions.

AI must never directly modify critical data without user confirmation.

AI suggestions should always be reviewable.

---

# Module Rule

Every module owns

Database

Business Logic

Validation

Permissions

API

UI

Documentation

Tests

No module should directly modify another module's internal logic.

---

# Naming Rule

Consistency is mandatory.

The same concept must have one name across the entire project.

Example

Client

Never also call it

Customer

Organization

Account

unless the business requires different meanings.

---

# Backward Compatibility

Avoid breaking existing APIs.

Prefer versioning over breaking changes.

---

# Definition of Good Feature

A feature is complete only if

Business rules are implemented.

Permissions are respected.

Validation exists.

Errors are handled.

Logs are written.

Documentation is updated.

Tests can be added without refactoring.

---

# AI Instructions

Whenever implementing a feature:

Read the architecture.

Read the module documentation.

Read the database rules.

Never invent your own architecture.

Never violate these system rules.

Always optimize for long-term maintainability.
