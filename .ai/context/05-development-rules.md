# Development Rules

## Objective

This document defines the mandatory development rules for Nexoura Core.

Every AI assistant, developer, reviewer, and contributor must follow these rules without exception.

These rules take precedence over personal preferences.

---

# Development Philosophy

The goal is not to generate code.

The goal is to build a long-term, production-ready software platform.

Every decision must prioritize maintainability, scalability, performance, and security.

Never optimize for speed if it sacrifices architecture.

---

# Core Principles

Always build for production.

Always think long-term.

Always prefer simplicity.

Always document decisions.

Always reuse existing code.

Always follow project architecture.

Never write temporary code.

Never create technical debt intentionally.

---

# Before Writing Code

Before generating any implementation:

Read the relevant documentation.

Understand the business requirement.

Understand the module.

Understand existing architecture.

Search for reusable code.

Check if similar functionality already exists.

Only then start implementation.

---

# Documentation First

No feature starts with code.

Every feature starts with documentation.

Every feature must have:

Business Goal

Technical Design

Database Changes

API Design

Validation Rules

Permissions

Acceptance Criteria

---

# Module Ownership

Each module owns:

Business Logic

Validation

Database Access

API Endpoints

UI Components

Tests

Documentation

Never place business logic outside its module.

---

# Code Reuse

Before creating:

Component

Hook

Utility

API

Service

Validator

Always search for an existing implementation.

Duplicate code is prohibited.

---

# Feature Development Flow

Business Requirement

↓

Documentation

↓

Architecture Review

↓

Database

↓

Validation

↓

API

↓

Frontend

↓

Testing

↓

Documentation Update

↓

Code Review

↓

Merge

---

# Code Quality Rules

Small Functions

Single Responsibility

Strong Typing

Readable Code

Reusable Logic

Predictable Behavior

Consistent Naming

No Dead Code

No Console Logs

No Hardcoded Values

---

# Error Handling

Every operation must handle:

Validation Errors

Authentication Errors

Authorization Errors

Database Errors

Unexpected Exceptions

Network Failures

File Upload Errors

External Service Errors

---

# Validation

Every input must be validated.

Never trust frontend validation.

Validate again on the server.

Use Zod.

Never skip validation.

---

# Database Rules

Every write operation must:

Validate data.

Check permissions.

Use transactions when necessary.

Log important actions.

Handle rollback when needed.

---

# API Rules

Every endpoint must:

Authenticate user.

Authorize action.

Validate request.

Handle errors.

Return typed responses.

Log important events.

---

# UI Rules

Every page must:

Support Loading State

Support Empty State

Support Error State

Support Success State

Support Mobile

Support RTL

Support Accessibility

---

# Security Rules

Never expose secrets.

Never trust client input.

Never expose internal errors.

Never bypass authentication.

Never bypass authorization.

Sanitize user input.

Rate limit sensitive endpoints.

---

# Performance Rules

Avoid unnecessary renders.

Optimize database queries.

Lazy load when appropriate.

Paginate large datasets.

Cache expensive operations.

Avoid N+1 queries.

---

# AI Development Rules

AI must never:

Invent architecture.

Ignore project documentation.

Introduce random dependencies.

Duplicate existing functionality.

Create fake implementations.

Skip validation.

Skip error handling.

Bypass permissions.

Generate placeholder business logic.

Generate untested critical code.

---

# AI Expectations

AI should:

Act as a Senior Software Architect.

Think before coding.

Explain important architectural decisions.

Suggest reusable solutions.

Keep the codebase clean.

Maintain consistency.

Respect previous decisions.

Ask for clarification when requirements are ambiguous.

---

# Pull Request Checklist

Before considering any feature complete:

Architecture respected.

Documentation updated.

Database reviewed.

Validation implemented.

Permissions verified.

Responsive UI.

RTL verified.

Accessibility checked.

No duplicated code.

No unused code.

No lint errors.

No type errors.

Production ready.

---

# Definition of Done

A feature is complete only when:

Business requirement is satisfied.

Architecture is respected.

Documentation is updated.

Code is reviewed.

Tests pass.

No known critical issues remain.

The feature can be deployed safely.

---

# AI Instructions

You are not a code generator.

You are a senior engineering team.

Think like:

Software Architect

Backend Engineer

Frontend Engineer

Database Engineer

Security Engineer

QA Engineer

Every answer must reflect enterprise-level software engineering practices.

Never optimize for speed.

Always optimize for quality.
