<div align="center">

# React Native Template Expo

**Production-ready React Native starter with Expo SDK 55, New Architecture, and
TypeScript**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/Node-24+-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![pnpm](https://img.shields.io/badge/pnpm-10+-F69220?logo=pnpm&logoColor=white)](https://pnpm.io)
[![Expo](https://img.shields.io/badge/Expo-SDK_55-000020?logo=expo&logoColor=white)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React_Native-0.83-61DAFB?logo=react&logoColor=white)](https://reactnative.dev)

Part of the [@teo-garcia/templates](https://github.com/teo-garcia/templates)
ecosystem

</div>

---

## Features

| Category         | Technologies                                                |
| ---------------- | ----------------------------------------------------------- |
| **Framework**    | Expo SDK 55 · React Native 0.83 · New Architecture only     |
| **Navigation**   | Expo Router v4 with file-based routing                      |
| **UI**           | React 19.2 · NativeWind v5 (Tailwind) · Lucide React Native |
| **Data**         | TanStack Query v5 for server state                          |
| **Type Safety**  | TypeScript strict mode                                      |
| **Testing**      | Jest + jest-expo + Testing Library for React Native         |
| **Code Quality** | ESLint, Prettier, Husky, lint-staged, commitlint            |
| **CI**           | GitHub Actions — lint, typecheck, test, security audit      |

## Requirements

- Node.js 24+
- pnpm 10+
- Expo CLI: `npm install -g expo-cli` (or use `npx expo`)
- For iOS: Xcode 16+ (macOS only)
- For Android: Android Studio + JDK 17+

## Quick Start

```bash
npx degit teo-garcia/react-native-template-expo my-app
cd my-app
cp .env.example .env
pnpm install
pnpm dev
```

Press `i` for iOS simulator, `a` for Android emulator, or `w` for web.

## Environment Setup

| Variable                   | Description                     | Default                 |
| -------------------------- | ------------------------------- | ----------------------- |
| `EXPO_PUBLIC_API_BASE_URL` | Backend API base URL            | `http://localhost:3000` |
| `EXPO_PUBLIC_LOG_LEVEL`    | Log verbosity (debug/info/warn) | `info`                  |

All `EXPO_PUBLIC_*` variables are inlined at build time by Metro.

## Project Structure

```
app/
├── _layout.tsx                # Root layout (providers, Stack navigator)
├── index.tsx                  # Home screen
└── +not-found.tsx             # 404 screen
components/
├── collapsible/               # Collapsible section
├── external-link/             # Cross-platform external link
├── haptic-tab/                # Tab button with haptic feedback
├── parallax-scroll-view/      # Reanimated parallax header scroll
├── tab-bar-background/        # Native blur / solid tab bar fill
├── themed-text/               # Theme-aware Text
└── themed-view/               # Theme-aware View
                               # Each folder: component.tsx + component.test.tsx
features/
└── health/                    # TanStack Query example (health check)
lib/
├── api/                       # API client + query client setup
├── constants/                 # Colors and theme tokens
├── hooks/                     # useColorScheme, useThemeColor
└── test/                      # Custom render with providers
```

## Scripts

| Command              | Description                                         |
| -------------------- | --------------------------------------------------- |
| `pnpm dev`           | Start Metro bundler (choose platform interactively) |
| `pnpm dev:ios`       | Start and open iOS simulator                        |
| `pnpm dev:android`   | Start and open Android emulator                     |
| `pnpm dev:web`       | Start Expo web (Metro + browser)                    |
| `pnpm build`         | Export Expo web bundle (static output → `dist/`)    |
| `pnpm build:ios`     | EAS Build for iOS                                   |
| `pnpm build:android` | EAS Build for Android                               |
| `pnpm test`          | Run Jest tests                                      |
| `pnpm test:watch`    | Run Jest in watch mode                              |
| `pnpm coverage`      | Run Jest with coverage                              |
| `pnpm lint:es`       | Lint and fix with ESLint                            |
| `pnpm lint:es:check` | Check ESLint without fixing                         |
| `pnpm lint:ts`       | TypeScript type check                               |
| `pnpm format`        | Format with Prettier                                |
| `pnpm format:check`  | Check formatting                                    |
| `pnpm check`         | Run full pipeline (lint + types + format + test)    |

## Shared Configs

- [`@teo-garcia/eslint-config-shared`](https://github.com/teo-garcia/eslint-config-shared)
  — ESLint rules (base + react-native)
- [`@teo-garcia/prettier-config-shared`](https://github.com/teo-garcia/prettier-config-shared)
  — Prettier formatting
- [`@teo-garcia/tsconfig-shared`](https://github.com/teo-garcia/tsconfig-shared)
  — TypeScript settings (expo preset)

## Related Templates

| Template                                                                             | Description                      |
| ------------------------------------------------------------------------------------ | -------------------------------- |
| [react-template-next](https://github.com/teo-garcia/react-template-next)             | Next.js SSR fullstack template   |
| [react-template-rr](https://github.com/teo-garcia/react-template-rr)                 | React Router + Vite SPA template |
| [nest-template-monolith](https://github.com/teo-garcia/nest-template-monolith)       | NestJS backend API               |
| [fastapi-template-monolith](https://github.com/teo-garcia/fastapi-template-monolith) | FastAPI backend API              |

## License

MIT

---

<div align="center">
  <sub>Built by <a href="https://github.com/teo-garcia">teo-garcia</a></sub>
</div>
