# Security Rules

## Objective

This document defines the mandatory security standards for Nexoura Core.

Security is a core architecture requirement, not an optional feature.

Every AI assistant, developer, and contributor must follow these rules.

---

# Security Philosophy

Security is built into the system from the beginning.

Never add security later.

Every feature must be secure by design.

---

# Authentication

Use Supabase Authentication.

Never implement custom password authentication.

Support:

* Email Login
* Password Reset
* Email Verification
* Session Management

Future Support

* Google Login
* GitHub Login
* Microsoft Login
* Two Factor Authentication (2FA)

---

# Authorization

Authentication is NOT authorization.

Every action must verify permissions.

Never rely on frontend permission checks.

Always verify permissions on the server.

---

# Role Based Access Control (RBAC)

Every user belongs to one or more roles.

Examples

Super Admin

Owner

Admin

Sales

HR

Finance

Developer

Client

Each role owns permissions.

Permissions control access.

Never hardcode permissions.

---

# Password Policy

Minimum 12 characters.

Require:

Uppercase

Lowercase

Number

Special Character

Never store plain text passwords.

Passwords are managed only through Supabase Auth.

---

# Session Management

Use secure sessions.

Automatically expire inactive sessions.

Allow logout from all devices.

Store minimal session information.

---

# API Security

Every protected endpoint must:

Authenticate user.

Authorize action.

Validate request.

Sanitize input.

Log critical operations.

Return standardized errors.

---

# Input Validation

Validate every input.

Use Zod schemas.

Reject invalid data immediately.

Never trust client-side validation.

---

# SQL Injection

Always use Prisma ORM.

Never concatenate SQL strings.

Always use parameterized queries.

---

# XSS Protection

Escape user-generated content.

Sanitize HTML.

Never render unsafe HTML.

Use React safely.

---

# CSRF Protection

Protect state-changing requests.

Use secure authentication flows.

Verify request origins when required.

---

# CORS

Allow only trusted origins.

Never use wildcard origins in production.

---

# Secrets Management

Never hardcode:

API Keys

Database URLs

JWT Secrets

Private Keys

Use environment variables only.

---

# Environment Variables

Never expose server secrets to the client.

Separate:

Development

Staging

Production

---

# File Upload Security

Validate:

File Type

File Size

Mime Type

Reject executable files.

Future:

Virus Scanning

---

# Encryption

Always use HTTPS.

Encrypt sensitive data at rest when applicable.

Never expose sensitive identifiers unnecessarily.

---

# Audit Logs

Log:

Login

Logout

Role Changes

Permission Changes

Invoice Updates

Payment Events

Project Deletion

Settings Changes

Never log:

Passwords

Access Tokens

Refresh Tokens

Secrets

---

# Rate Limiting

Apply limits to:

Login

Register

Password Reset

AI Endpoints

Public APIs

Webhook Endpoints

---

# Multi-Tenant Isolation

Every request must verify:

company_id

Users must never access another company's data.

---

# Error Handling

Never expose:

Stack Traces

Database Errors

Internal Paths

Secrets

Return user-friendly error messages.

Log technical details internally.

---

# Security Headers

Use standard security headers:

Content-Security-Policy

X-Frame-Options

X-Content-Type-Options

Referrer-Policy

Permissions-Policy

Strict-Transport-Security

---

# Dependency Security

Regularly update dependencies.

Monitor known vulnerabilities.

Remove unused packages.

---

# Backup & Recovery

Automate database backups.

Encrypt backups.

Test restore procedures regularly.

---

# AI Safety

AI must never:

Bypass permissions.

Access unauthorized data.

Modify critical records without confirmation.

Reveal secrets.

Generate insecure code intentionally.

---

# AI Instructions

When generating code:

Assume production environment.

Validate every request.

Authenticate every protected endpoint.

Authorize every protected action.

Never expose secrets.

Follow OWASP best practices.

Prefer secure defaults.

If unsure, choose the more secure implementation.
