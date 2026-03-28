# PulseStack SaaS Dashboard

A modern, responsive SaaS analytics dashboard built with React, Vite, Tailwind CSS, Recharts, and reusable component architecture.

This project includes authentication flows, protected routes, KPI dashboards, analytics visualizations, user management, subscription and billing UI, settings management, global search, notifications, dark/light mode, and responsive layouts optimized for desktop and mobile.

## Live Project Scope

This frontend includes:

- Login, signup, and forgot password flows
- Strong password validation
- Real signup-to-login support using local storage persistence
- Protected dashboard routes
- Role-based UI for admin and user views
- Dashboard overview with KPI cards and animated counters
- Analytics page with line, bar, and pie charts plus range switching
- User management with search, filters, pagination, edit/delete UI, and status toggle
- Billing page with plan cards, upgrade flow, payment history, and success feedback
- Settings page with profile, password, notifications, and theme controls
- Global search across dashboard entities
- Mock real-time notification panel
- Download report UI for CSV and PDF
- Breadcrumb navigation
- Reusable cards, tables, buttons, modals, loaders, and skeleton states
- Dark and light mode toggle
- Responsive UI, including mobile-friendly layout behavior

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Recharts
- React Router
- Framer Motion
- React Icons

## Project Structure

```text
src/
  components/
    Auth/
    Billing/
    Dashboard/
    Search/
    Settings/
    Users/
    charts/
    common/
    layout/
    notifications/
    Reports/
  context/
  data/
  hooks/
  pages/
  routes/
  services/
  styles/
  utils/
```

## Installation

1. Clone the repository
2. Open the project folder
3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Build and Lint

Run production build:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

## Demo Credentials

Default seeded accounts:

- Admin: `admin@pulsestack.dev` / `Admin@123`
- User: `user@pulsestack.dev` / `User@1234`

You can also create a new account from the signup page and then log in with the same credentials.

## Features by Module

### Authentication

- Login
- Signup
- Forgot Password
- Validation with clear feedback
- Show/hide password
- Local storage backed signup persistence

### Dashboard Overview

- KPI cards
- Animated counters
- Recent subscriptions
- Recent activity timeline
- Export-ready layout

### Analytics

- Revenue and signup trends
- Acquisition mix
- Subscription conversion
- Daily / weekly / monthly filters

### User Management

- Search
- Status filter
- Pagination
- Edit modal
- Delete action
- Active/blocked toggle

### Subscription & Billing

- Plan comparison cards
- Current subscription summary
- Payment history table
- Mock upgrade/downgrade flow

### Settings

- Profile management
- Change password
- Notification preferences
- Theme control

## Notes

- This is a frontend-focused project with mock data and client-side state handling.
- Notifications, analytics, billing, and users currently run on local mock data.
- Authentication is demo-style and stored in browser local storage for frontend simulation.

## Author

Developed as a frontend SaaS dashboard submission project.
