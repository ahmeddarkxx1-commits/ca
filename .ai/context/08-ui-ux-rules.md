# UI / UX Rules

## Objective

This document defines the official design system and user experience standards for Nexoura Core.

Every page, component, dialog, form, table, chart, and dashboard must follow these rules.

Consistency is mandatory.

---

# Design Philosophy

The interface should feel:

Professional

Modern

Clean

Fast

Minimal

Enterprise Grade

The goal is productivity, not decoration.

---

# Design Principles

Simple before complex.

Readable before beautiful.

Functional before decorative.

Consistency over creativity.

Every action should be obvious.

Every screen should reduce user effort.

---

# Design Language

Use a modern SaaS dashboard style.

Inspired by:

* Linear
* Notion
* Vercel
* Stripe Dashboard
* GitHub
* Raycast

Avoid cluttered interfaces.

---

# Theme

Support

Light Mode

Dark Mode

System Theme

Theme switching must be instant.

---

# Color System

Use semantic colors.

Primary

Secondary

Success

Warning

Danger

Info

Muted

Never hardcode colors inside components.

Use design tokens only.

---

# Typography

Use one font family.

Hierarchy

Heading 1

Heading 2

Heading 3

Body

Caption

Label

Keep line-height comfortable.

Never use tiny unreadable text.

---

# Spacing

Use an 8px spacing system.

Examples

8

16

24

32

40

48

64

Avoid random spacing.

---

# Layout

Desktop First

Responsive

Mobile Friendly

Tablet Friendly

Large Screens Supported

---

# Navigation

Main Sidebar

Top Navigation

Breadcrumb

Quick Search

Command Palette (Future)

---

# Components

All UI must use reusable components.

Buttons

Inputs

Cards

Dialogs

Dropdowns

Badges

Tables

Charts

Forms

Tabs

Pagination

Toast

Skeleton

Empty State

Loading State

Error State

---

# Forms

Every form must support

Validation

Loading

Success

Error

Disabled State

Keyboard Navigation

Auto Focus when appropriate

---

# Tables

Every data table should support

Search

Filtering

Sorting

Pagination

Column Visibility

Export (Future)

Responsive Layout

Bulk Actions when needed

---

# Dashboard

Every dashboard should provide

KPIs

Charts

Recent Activity

Quick Actions

Notifications

Pending Tasks

Upcoming Events

---

# Empty States

Never show a blank page.

Explain why there is no data.

Provide an action.

Example

"No projects yet"

Button

Create Project

---

# Loading States

Never display blank content while loading.

Use Skeleton components.

Avoid layout shifts.

---

# Error States

Explain the error.

Suggest a solution.

Provide Retry action.

Never expose technical details.

---

# Accessibility

Keyboard Navigation

Screen Reader Support

Focus States

Sufficient Contrast

Semantic HTML

Accessible Forms

---

# RTL / LTR

Every page must support

Arabic (RTL)

English (LTR)

No layout should break when switching direction.

---

# Performance

Lazy load heavy components.

Optimize images.

Virtualize large lists.

Reduce unnecessary re-renders.

---

# Notifications

Use toast notifications for

Success

Warning

Error

Information

Keep messages short.

---

# Modal Rules

Avoid multiple nested dialogs.

Confirmation required for destructive actions.

Support keyboard shortcuts.

---

# Mobile Experience

Sidebar becomes drawer.

Tables become cards when necessary.

Touch-friendly controls.

Minimum tap target size.

---

# AI Instructions

When generating UI:

Follow the existing design system.

Reuse existing components.

Never invent a new style.

Keep spacing consistent.

Support RTL.

Support Dark Mode.

Generate responsive layouts.

Prefer simplicity over complexity.

Think like a Senior Product Designer.

Never sacrifice usability for visual effects.
