# Agent Guidelines

This document outlines the guidelines for agentic coding agents operating within this repository.

## Build, Lint, and Test Commands

- **Build:** There is no explicit build command defined in `package.json`. Development builds are typically handled by Expo CLI commands like `expo start`.
- **Lint:** To check for code style and potential issues, run:
  ```bash
  npm run lint
  ```
- **Test:** To run tests, use Jest. To run tests related to a specific file (e.g., `app/index.tsx`), use:
  ```bash
  npx jest --findRelatedTests app/index.tsx
  ```
  If no tests are found for a file, Jest will exit with code 1. Use `--passWithNoTests` to override this behavior.

## Code Style Guidelines

- **Imports:** Use standard ES module imports. Ensure imports are organized logically (e.g., third-party libraries, project components).
- **Formatting:** Adhere to the formatting rules enforced by `eslint-config-expo`. This includes indentation, spacing, and line breaks.
- **Types:** Utilize TypeScript for static typing. Ensure all variables, function parameters, and return types are appropriately typed.
- **Naming Conventions:** Follow standard JavaScript/TypeScript naming conventions: camelCase for variables and functions, PascalCase for components and classes.
- **Error Handling:** Implement robust error handling using `try...catch` blocks for asynchronous operations and potential failures. Provide meaningful error messages.
- **Cursor/Copilot Rules:**
  - Check for `.cursor/rules/` or `.cursorrules` for specific Cursor editor rules.
  - Check for `.github/copilot-instructions.md` for Copilot-specific instructions.
