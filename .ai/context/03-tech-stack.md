# Technology Stack

## Objective

This document defines the official technology stack for Nexoura Core.

Every AI assistant, developer, or contributor must strictly follow this stack.

No technology may be changed without updating this document and the architecture documentation.

---

# Frontend

Framework

* Next.js 15 (App Router)

Language

* TypeScript (Strict Mode)

Styling

* Tailwind CSS

UI Components

* shadcn/ui

Icons

* Lucide React

Animations

* Framer Motion

Forms

* React Hook Form

Validation

* Zod

Data Fetching

* TanStack Query

Tables

* TanStack Table

Charts

* Recharts

Drag & Drop

* dnd-kit

---

# Backend

Framework

* Next.js Route Handlers

Language

* TypeScript

ORM

* Prisma ORM

Database

* PostgreSQL

Authentication

* Supabase Auth

Storage

* Supabase Storage

Realtime

* Supabase Realtime

Background Jobs

* Trigger.dev (Future)

Automation

* n8n

Email

* Resend

Payment Gateway

* Paymob

Logging

* Pino

---

# Infrastructure

Hosting

* Vercel

Database Hosting

* Supabase

Storage

* Supabase Storage

DNS

* Cloudflare

SSL

* Cloudflare

CDN

* Cloudflare

---

# Development Tools

VS Code

Cursor AI

Git

GitHub

GitHub Actions

Postman

Prisma Studio

Figma

---

# Code Quality

ESLint

Prettier

Husky

lint-staged

Commitlint

---

# Documentation

Markdown

Mermaid

OpenAPI

Swagger

---

# Testing

Vitest

Playwright

Testing Library

---

# Naming Convention

Components

PascalCase

Hooks

camelCase

Database Tables

snake_case

Columns

snake_case

Files

kebab-case

Folders

kebab-case

---

# Architecture Rules

Never replace official technologies without approval.

Always prefer existing libraries already adopted by the project.

Do not introduce duplicate packages.

Use TypeScript everywhere.

Use shared components whenever possible.

Never bypass validation.

Never bypass authentication.

---

# AI Instructions

Before generating code:

Read all project documentation.

Use only approved technologies.

Do not install unnecessary dependencies.

Keep bundle size small.

Optimize for performance.

Generate production-ready code only.

Avoid temporary implementations.

Think long-term.

Follow enterprise architecture.
