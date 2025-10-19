# Velocity ⚡

A streamlined, production-ready Nuxt template for building modern web applications with Bun.

## ✨ Features

- **🚀 Nuxt 4** - The latest version of the progressive Vue framework
- **⚡ Bun** - Lightning-fast JavaScript runtime and package manager
- **🎨 UnoCSS** - Instant on-demand atomic CSS engine with Roboto font pre-configured
- **🗃️ Pinia** - Intuitive, type-safe state management for Vue
- **📏 ESLint** - Comprehensive linting with security plugins
- **🎯 TypeScript** - Full type safety out of the box
- **📦 Auto Imports** - Auto-import components, composables, and more
- **🏗️ Organized Structure** - Pre-configured directories for components, stores, services, utils, and more

## 📁 Project Structure

```
velocity/
├── app/
│   ├── components/      # Auto-imported Vue components
│   ├── composables/     # Auto-imported composables
│   ├── libs/            # Shared libraries
│   ├── middleware/      # Route middleware
│   ├── pages/           # File-based routing
│   ├── services/        # Business logic services
│   ├── stores/          # Pinia stores (auto-imported)
│   ├── utils/           # Utility functions
│   └── app.vue          # Root component
├── public/              # Static assets
├── eslint.config.mjs    # ESLint configuration
├── nuxt.config.ts       # Nuxt configuration
├── uno.config.ts        # UnoCSS configuration
└── package.json         # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

Make sure you have [Bun](https://bun.sh) installed:

```bash
curl -fsSL https://bun.sh/install | bash
```

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun build

# Preview production build
bun preview
```

## 📝 Available Scripts

```bash
# Development
bun dev              # Start dev server
bun dev:prepare      # Prepare Nuxt

# Building
bun build           # Build for production
bun generate        # Generate static site
bun preview         # Preview production build

# Linting
bun lint            # Run ESLint
bun lint:fix        # Fix ESLint issues
bun lint:d          # Debug ESLint
bun lint:inspect    # Inspect ESLint config

# Type Checking
bun typecheck       # Type check with Vue TSC

# Cleaning
bun clean           # Clean build artifacts
```

## 🎨 UnoCSS

The template comes pre-configured with UnoCSS and the Roboto font. You can customize the configuration in `uno.config.ts`.

## 🗃️ State Management

Pinia stores are auto-imported from the `app/stores/` directory. See `app/stores/CounterStore.ts` for an example using the composition API pattern.

## 📏 ESLint Configuration

The template includes a comprehensive ESLint setup with:

- **@antfu/eslint-config** - Anthony Fu's opinionated ESLint config
- **Security plugins** - eslint-plugin-security & eslint-plugin-security-node
- **Promise best practices** - eslint-plugin-promise
- **ES version restrictions** - eslint-plugin-es-x
- **Nuxt-specific rules** - @nuxt/eslint

The configuration follows best practices with:

- 4-space indentation
- Double quotes
- Semicolons
- Comprehensive Vue formatting rules

## 🏗️ Auto Imports

The following directories have auto-imports enabled:

- `app/components/**` - Vue components
- `app/composables/**` - Composables
- `app/libs/**/*` - Library functions
- `app/services/**` - Service modules
- `app/stores/**` - Pinia stores
- `app/middleware/**` - Middleware functions
- `app/utils/**` - Utility functions

## 📖 Learn More

- [Nuxt Documentation](https://nuxt.com/docs)
- [Bun Documentation](https://bun.sh/docs)
- [UnoCSS Documentation](https://unocss.dev)
- [Pinia Documentation](https://pinia.vuejs.org)

## 📄 License

MIT License © 2025

---

Built with ♥️ using Nuxt, Bun, and modern web technologies.
