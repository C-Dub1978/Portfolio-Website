## Angular Guidelines
You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

## Tech Stack Context
- **Core Framework:** Angular v21 (Zoneless architecture, standalone by default)
- **UI Engine:** PrimeNG v21 Styled Mode


## TypeScript Best Practices
- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain, only use any if there is absolutely no other option.

## Angular Best Practices
- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Do NOT set `changeDetection: ChangeDetectionStrategy.OnPush` explicitly.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Accessibility Requirements
- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

For concrete architectural patterns, reference the example files located in `_examples/`.

## UI & PrimeNG 21 Theming
- **Theming Context:** Rely strictly on PrimeNG 21 Styled Mode configurations via design presets.
- **Light/Dark 2-Way Toggle:** Implement the visual light/dark controller using a textless 2-way visual switcher component (such as `p-toggleSwitch`) that reactively updates state via Signals.
- **Isolation:** Style properties and overwrites must layer directly onto native CSS Custom Properties (`--primary`, `--surface-card`, etc.) housed in `src/styles.scss`.
- **Placeholder Layout Nodes:** Always supply empty visual markup templates or raw `<svg>` definitions equipped with descriptive layout element classes so a secondary design AI can insert graphic visuals directly.

## State Management & Async Operations (Angular 21 Resource API)
- Use signals for local component state (`signal()`).
- Use `computed()` or `linkedSignal()` for derived state.
- Keep state transformations pure and predictable. Do NOT use `mutate` on signals; use `update` or `set` instead.
- **Async & HTTP Mocking:** Use the Angular 21 `resource()`, `httpResource()`, and `rxResource()` APIs for all asynchronous operations and API mocking.
- **Syntax Mapping:** When building a resource, pass the resource options object using the Angular 21 `params` parameter (do NOT use the old `request` key name).
- Do NOT use `mutate` on signals, use `update` or `set` instead.

```typescript
// Angular 21 Resource API Specification Example
import { Component, inject, signal } from '@angular/core';
import { resource } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project-grid',
  template: `
    @if (projects.isLoading()) { <p-progressSpinner /> }
    @else {
      @for (item of projects.value(); track item.id) {
        <p-card [header]="item.title">...</p-card>
      }
    }
  `
})
export class ProjectGridComponent {
  private projectService = inject(ProjectService);
  categoryFilter = signal('web-apps');

  // Modern Angular 21 resource definition pattern
  projects = resource({
    params: () => ({ category: this.categoryFilter() }), // Uses modern 'params' property
    loader: ({ params }) => this.projectService.fetchMockProjects(params.category)
  });
}
```

## Component Architecture rules
- Keep components small and focused on a single responsibility.
- Use `input()`, `output()`, and `model()` signal functions exclusively. Never use legacy decorators (`@Input`, `@Output`).
- Prefer inline templates for small components (under 30 lines), external templates relative to the TS file for larger views.
- Prefer Signal Forms (`@angular/forms/signals`) for forms where applicable, or fall back to native Reactive Forms. Never use template-driven forms.
- Do NOT use `ngClass` or `ngStyle`; use standard modern native HTML attribute/class bindings instead.
- **Dependency Injection:** Use the functional `inject()` function exclusively. Never use constructor injection.
- **Route Guard Mapping:** Functional router guards checking the global `AuthSignalService` must read session parameters synchronously via signals.
- When generating components, always use the smart (container) vs. dumb (presentational) component pattern. Strictly follow the implementation rules outlined in the [Smart vs. Presentation Components](#smart-vs-presentation-components) section below.
- **Dependency Injection:** Use the functional `inject()` function exclusively. Never use constructor injection.
- **Route Guard Mapping:** Functional router guards checking the global `AuthSignalService` must read session parameters synchronously via signals to dynamic header menu bars.

```typescript
// Functional Route Guard Example
import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthSignalService } from '../services/auth-signal.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthSignalService);
  const router = inject(Router);

  // Synchronous functional check evaluating state signals
  if (authService.isAuthenticated()) {
    return true;
  }

  router.navigate(['/landing']);
  return false;
};
```

## Smart vs. Presentation Components

### 1. Smart Components (Containers)
- **Role:** Manage state, handle data streams, and interact with services/facades.
- MUST inject services or facades using the functional `inject()` pattern.
- MUST pass data down to presentation components using Angular Signals or native value mappings.
- MUST listen to events emitted by presentation components to trigger routing or state variations.
- MUST NOT contain complex UI styling or layout logic.

### 2. Presentation Components (Dumb)
- **Role:** Focus purely on how things look and behave visually.
- **Rules:**
- MUST receive all incoming data via modern `input()` signals.
- MUST emit all user actions or state changes upward via modern `output()` emitters.
- MUST NOT inject services, stores, or APIs directly.

## Templates
- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.

## Services
- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection
"For concrete architectural patterns, reference the example files located in _examples/."
