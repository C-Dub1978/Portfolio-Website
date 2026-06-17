## Angular Guidelines
You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

## TypeScript Best Practices
- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain, only use any if there is absolutely no other option.

## Angular Best Practices
- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Do NOT set `changeDetection: ChangeDetectionStrategy.OnPush` explicitly. `OnPush` is the default in Angular v22+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Accessibility Requirements
- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components
- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Prefer inline templates for small components
- Prefer Signal Forms (`@angular/forms/signals`) for new forms. They are stable in Angular v22+ and provide signal-based state, type-safe field access, and schema-based validation
- When not using Signal Forms, prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.
- When generating components, always use the smart (container) vs. dumb (presentational) component pattern. Strictly follow the implementation rules outlined in the [Smart vs. Presentation Components](#smart-vs-presentation-components) section below.

## Smart vs. Presentation Components

### 1. Smart Components (Containers)
- **Role:** Manage state, handle data streams, and interact with services/facades.
- **Rules:**
  - MUST inject services, stores, or facades in the constructor/inject function.
  - MUST pass data down to presentation components using the async pipe or Angular Signals.
  - MUST listen to events emitted by presentation components to trigger actions.
  - MUST NOT contain complex UI styling or layout logic.

### 2. Presentation Components (Dumb)
- **Role:** Focus purely on how things look and behave visually.
- **Rules:**
  - MUST receive all data via `@Input()` properties or `input()` signals.
  - MUST emit all user actions or state changes upward via `@Output()` properties or `output()` emitters.
  - MUST NOT inject services, stores, or APIs directly.
  - SHOULD use `ChangeDetectionStrategy.OnPush` for optimal performance.

## State Management
- Use signals for local component state
- Use `computed()` or `linkedSignal()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead
- Use the Angular 21 `resource()`, `httpResource()`, and `rxResource()` APIs for all asynchronous operations and API mocking.

## Templates
- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.

## Services
- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Prefer the `@Service` decorator over `@Injectable({providedIn: 'root'})` for new singleton services (Angular v22+)
- Use the `inject()` function instead of constructor injection
"For concrete architectural patterns, reference the example files located in _examples/."
