# ProfessionalServices

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

## Tech Stack
- **Angular 17** (Standalone Components)
- **Angular Material** (UI Components)
- **Bootstrap 5** (Layout & Utilities)
- **Bootstrap Icons**
- **SCSS** (Styling)

## Coding Standards
- **Linter**: ESLint (via `@angular-eslint`) for maintaining code quality.
- **Formatter**: Prettier for consistent code styling.
- **Strict Mode**: Strict TypeScript checking enabled in `tsconfig.json`.
- **Standalone**: All components are standalone by default, following the modern Angular pattern.

## Security Standards
- **Content Security Policy (CSP)**: Implemented in `index.html` to prevent XSS and unauthorized resource loading.
- **Dependency Audit**: Regular security audits via `npm audit`.
- **Sanitization**: Built-in Angular sanitization used for all DOM interactions.
- **Secure Headers**: Security-focused meta tags included in the main template.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
