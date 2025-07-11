# graphql-country-explorer

A modern, scalable React + TypeScript application that fetches and displays country data from a GraphQL API. Built with best practices in mind—featuring Vite, Apollo Client, Redux Toolkit, React Router, GraphQL Code Generator, and Tailwind CSS.

## ⚙️ Getting Started

### Prerequisites

- Node.js ≥ 16
- npm or Yarn

### Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/Adarsh236/graphql-country-explorer.git
   cd graphql-country-explorer
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Generate GraphQL types & hooks**

   ```bash
   npm run codegen
   # or
   yarn codegen
   ```

4. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in your browser** at `http://localhost:3000`

---

## 🛠 Available Scripts

- `npm run dev` / `yarn dev`: start Vite dev server
- `npm run build` / `yarn build`: build for production
- `npm run preview` / `yarn preview`: preview production build
- `npm run codegen` / `yarn codegen`: run GraphQL Codegen
- `npm run test` / `yarn test`: run Vitest suite

---

## 🚀 Features

- **GraphQL Integration** via Apollo Client
- **Type-Safe** GraphQL hooks generated by GraphQL Code Generator
- **Global State Management** with Redux Toolkit (filter state)
- **Routing** via React Router DOM
- **Utility-First** styling with Tailwind CSS (dark/light theming support)
- **Responsive Layout** with a mobile-friendly header and menu
- **Atomic Folder** structure (primitives, widgets, displays, features)
- **Error Boundary** for caught React errors
- **Performance**: optimized filtering with `useMemo`
- **Testing** with Vitest & React Testing Library + Apollo mocks

---

## 📦 Tech Stack

| Category             | Tool / Library                 |
| -------------------- | ------------------------------ |
| Framework            | React 18                       |
| Bundler / Dev        | Vite                           |
| Language             | TypeScript                     |
| GraphQL Client       | @apollo/client                 |
| Codegen              | GraphQL Code Generator         |
| State Management     | @reduxjs/toolkit & react-redux |
| Routing              | react-router-dom (v6)          |
| Styling              | Tailwind CSS                   |
| Testing              | Vitest, @testing-library/react |
| Linting / Formatting | (Optional) ESLint, Prettier    |

---

## 🏗 Architecture & Patterns

- **Feature-Folder Pattern**: isolates domain logic under `/features/countries`.
- **Atomic Folders**:
  - `atoms/`: basic, reusable UI elements (e.g. `input.tsx`).
  - `molecules/`: composed controls (e.g. `filter-bar.tsx`).
  - `organisms/`: data-display components (e.g. `country-table.tsx`).
- **Custom Hooks**: `useCountries` wraps GraphQL query logic.
- **Typed Redux**: store configured in `app/store.ts`, typed hooks in `app/hooks.ts`.
- **Routing**: centralized in `router/router.tsx` for page navigation.
- **Error Handling**: `layout/error-boundary.tsx` wraps the app.
- **Code Generation**: GraphQL schema & operations codegen to `graphql/generated/graphql.ts`.

---

## ✨ Best Practices

- **Strict Type Safety**: leverage TypeScript and generated GraphQL types.
- **Separation of Concerns**: keep data-fetching in hooks, UI in components.
- **Reuse & Composition**: build small `primitives`, compose into `widgets` and `displays`.
- **Performance**: memoize expensive computations (`useMemo`) and key lists properly.
- **Theming**: follow utility-first Tailwind CSS, avoid inline styles.
- **Testing**: isolate logic with mocks, test UI and state transitions.

---

## 🔭 Future Improvements

- **Dark-Mode Toggle**: UI control to switch themes at runtime.
- **Pagination & Infinite Scroll** for large datasets.
- **Server-Side Rendering** (SSR) with frameworks like Next.js.
- **Accessibility** audits and ARIA enhancements.
- **CI/CD & Linting**: integrate ESLint, Prettier, and GitHub Actions.

---
