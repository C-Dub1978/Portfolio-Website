## Tech Stack & Environment
- **Core Framework:** Angular v21 (Zoneless architecture, standalone architecture by default)
- **UI Component Engine:** PrimeNG v21 exclusively. (Do NOT install Tailwind CSS, Bootstrap, or any other layout framework).
- **Component Style:** 100% Standalone Components. Never use legacy NgModules.
- **Reactivity & Async Operations:** Angular Signals (`signal`, `computed`, `effect`, `linkedSignal`) and the Angular 21 `resource()` / `rxResource()` / `rxResource()` APIs for all asynchronous operations and decoupled service integrations.
- **Component Playground:** Storybook (v8.x or v10.x compatible with Angular 21).

### Theme Toggle Implementation
- Provide a responsive theme toggle mechanism using the `ThemeToggleComponent`.
- The toggle must use Angular Signals to update the state reactively.
- The component must add or remove the `.p-dark` class on the `document.documentElement` root to trigger PrimeNG 21's internal CSS variable swaps.
- Style the button using the custom `--linearPrimarySecondary` gradient token.


## Routing & Page Specifications
The application must use **Angular Routing** to manage 9 primary views. All routes must be lazy-loaded using standalone component functions. All portfolio data-fetching must remain agnostic of any backend framework.

### 1. Route Map
- `/login` -> **Auth/Login Page**
  - Interactive login form using PrimeNG elements.
  - Hardcoded credential valuation against a mock state provider.
  - On **Success**: Automatically route the user to `/admin`.
  - On **Failure**: Block navigation and trigger a visible error message layout block (Design parameters are deferred).
- `/admin` -> **Admin Page**
  - **Strictly Protected:** Accessible *only* if authenticated via a functional `canActivate` route guard checking a centralized mock auth signal.
  - Current implementation: A blank layout canvas shell equipped with an administrative header/sidebar wrapper, ready for future feature extension.
- `/about` -> **About Me Page**
  - Narrative biographical profile, timeline layout, and core capabilities sections.
- `/blog` -> **Blog / Vlog Page**
  - Dynamic display matching standard articles and embedded visual video grid entries.
- `/music` -> **Music Page**
  - Digital content grid layout tailored for streaming tracks, playlists, or embedded audio nodes.
- `/projects` -> **Projects Page**
  - Grid interface displaying dynamic repositories, filtering categories, and project case studies.
- `/snippets` -> **Code Snippets, Tips, and Tricks Page**
  - Organized list or grid featuring code snippets, quick tips, and development syntax hacks.
- `/media` -> **Media Page**
  - Central photo and video asset gallery supporting pop-up lightbox visual previews.
- `/ai` -> **AI Page**
  - Dedicated creative section highlighting custom AI integrations, prompts, or computational art galleries.

## Component Isolation & Testing Specs
- **Storybook Setup:** Every standalone visual component created must have a corresponding `*.stories.ts` file attached directly alongside it. Ensure configurations compile within the Angular 21 context.
- **Unit & E2E Testing:** Maintain isolated testing suites utilizing Jest for localized component specs and Cypress for local interactive user workflows via the interactive runner (`cypress open`). No code-coverage boundaries or headless CI configurations are needed.

## Generated Application Architecture
When implementing features or directories, build out an isolated layout structure keeping pages separate from global configurations:
- `/src/app/core/` -> Mock AuthService, Route Guards, and Global Core Singletons.
- `/src/app/shared/` -> Global PrimeNG layout wrappers, theme-switch handlers, reusable components.
- `/src/app/features/` -> Individual subfolders maps containing components matching the 9 target routing components.

