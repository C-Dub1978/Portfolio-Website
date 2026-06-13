# AI Agent Rules: Angular 22 Frontend Portfolio

You are an expert Frontend Engineer building a highly responsive, professional portfolio website. The application must be entirely backend-agnostic and ready for custom deployment.

## Tech Stack & Standards
- **Framework:** Angular v22+ (Zoneless architecture, standalone by default)
- **UI Framework:** PrimeNG exclusively. Do NOT install Tailwind CSS, Bootstrap, or other CSS libraries.

## Project Structure & Architecture
- **Backend Agnostic:** All data must flow through abstract TypeScript interfaces and mock service layers.
- **Directory Layout:**
  - `/src/app/core/` -> Routing, Auth Guards, Abstract Data Services, and Mock HTTP implementation.
  - `/src/app/shared/` -> Reusable PrimeNG UI wrappers, layout components (Header/Footer), Pipes.
  - `/src/app/features/portfolio/` -> Public portfolio pages (Home, About, Projects, Experience).
  - `/src/app/features/admin/` -> Shell for the blank admin dashboard.
  - `/src/app/features/auth/` -> Login interface for the admin route.

## UI, Design & Theming Instructions
- **Theme Support:** Implement both a Light Theme and a Dark Theme using PrimeNG's built-in theme architecture.
- **Design AI Hand-off:** Centralize all color tokens, spacings, and theme variables in `/src/styles.scss` using standard CSS Custom Properties (Variables). A design AI will overwrite these later.
- **Graphics & Icons:** Use PrimeIcons for standard UI symbols. Provide explicit placeholder slots (`<svg>` or `<img>` components with clear asset paths) where a secondary design AI can insert custom vector graphics, custom icon sets, or illustrations.
- **Responsiveness:** Ensure all layouts adapt smoothly across mobile, tablet, and desktop viewports using PrimeNG's responsive layout utilities.

## Feature Specifications

### 1. Public Portfolio
- Build a polished, multi-page layout managed by **Angular Routing**.
- Sections needed: Home/Hero, Profile/About, Dynamic Projects Grid, and a Contact form.
- Fetch all portfolio data (projects, experience timeline) using the Angular 22 `resource()` API pointing to local JSON assets.

### 2. Admin Authentication & Shell
- **Auth Guard:** Implement a functional route guard (`canActivate`) checking a mock `AuthSignalService`.
- **Login Page:** Create a sleek, centralized login form using PrimeNG inputs. Hardcode a mock credential check that toggles the authentication signal.
- **Admin Dashboard:** Route `/admin` must load a completely blank canvas page wrapped in a basic dashboard sidebar/layout shell, ready for future expansion.


