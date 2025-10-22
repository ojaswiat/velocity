# Velocity ⚡

A streamlined, production-ready Nuxt template for building modern web applications with Bun, featuring Supabase authentication with GitHub OAuth.

## ✨ Features

- **🚀 Nuxt 4** - The latest version of the progressive Vue framework
- **⚡ Bun** - Lightning-fast JavaScript runtime and package manager
- **🔐 Supabase Auth** - Pre-configured GitHub OAuth authentication
- **🎨 UnoCSS** - Instant on-demand atomic CSS engine with Roboto font pre-configured
- **🗃️ Pinia** - Intuitive, type-safe state management for Vue
- **📏 ESLint** - Comprehensive linting with security plugins
- **🎯 TypeScript** - Full type safety out of the box
- **📦 Auto Imports** - Auto-import components, composables, and more
- **🏗️ Organized Structure** - Pre-configured directories for components, stores, services, utils, and more
- **🛡️ Auth Middleware** - Automatic route protection and authentication checks

## 📁 Project Structure

```
velocity/
├── app/
│   ├── components/      # Auto-imported Vue components
│   │   ├── AppHeader.vue    # Navigation header with auth
│   │   └── Logo.vue         # App logo component
│   ├── composables/     # Auto-imported composables
│   │   ├── useAuth.ts       # Authentication composable
│   │   └── useSupabase.ts   # Supabase client composable
│   ├── libs/            # Shared libraries
│   ├── middleware/      # Route middleware
│   │   └── auth.global.ts   # Global auth middleware
│   ├── pages/           # File-based routing
│   │   ├── index.vue        # Landing page
│   │   ├── login.vue        # Login page with GitHub OAuth
│   │   └── home.vue         # Protected home page
│   ├── plugins/         # Nuxt plugins
│   │   └── auth.client.ts   # Auth state initialization
│   ├── services/        # Business logic services
│   ├── stores/          # Pinia stores (auto-imported)
│   ├── utils/           # Utility functions
│   └── app.vue          # Root component
├── lib/
│   └── constants.ts     # App constants and routes
├── public/              # Static assets
├── env                  # Environment variables template
├── .env                 # Your local environment variables (create this)
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

1. **Clone and Install Dependencies**

```bash
# Install dependencies
bun install
```

2. **Set Up Supabase Authentication**

This template uses Supabase for authentication with GitHub OAuth. Follow these steps to configure it:

#### Step 1: Create a Supabase Project

1. Go to [Supabase](https://supabase.com) and sign up/log in
2. Click "New Project"
3. Fill in your project details:
    - **Project Name**: Choose a name for your project
    - **Database Password**: Create a secure password
    - **Region**: Select the region closest to you
4. Click "Create new project" and wait for it to initialize

#### Step 2: Get Your Supabase Credentials

1. In your Supabase project dashboard, go to **Settings** (⚙️ icon on the left sidebar)
2. Click on **API** in the settings menu
3. You'll find two important values:
    - **Project URL**: This is your `NUXT_PUBLIC_SUPABASE_URL`
    - **anon/public key**: This is your `NUXT_PUBLIC_SUPABASE_KEY`
4. Copy these values for the next step

#### Step 3: Configure Environment Variables

1. Create a `.env` file in the root of your project by copying the `env` file:

    ```bash
    cp env .env
    ```

2. Open `.env` and replace the placeholder values with your actual Supabase credentials:
    ```bash
    NUXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
    NUXT_PUBLIC_SUPABASE_KEY=your-anon-key-here
    ```

#### Step 4: Set Up GitHub OAuth Provider

1. **Create a GitHub OAuth App**:
    - Go to [GitHub Developer Settings](https://github.com/settings/developers)
    - Click "OAuth Apps" → "New OAuth App"
    - Fill in the application details:
        - **Application name**: Your app name (e.g., "Velocity App")
        - **Homepage URL**: `http://localhost:3000` (for development)
        - **Authorization callback URL**: `https://your-project-ref.supabase.co/auth/v1/callback`
            - Replace `your-project-ref` with your actual Supabase project reference
            - You can find this in your Supabase Dashboard under Settings → API → URL
    - Click "Register application"

2. **Get GitHub OAuth Credentials**:
    - After creating the app, you'll see:
        - **Client ID**: Copy this
        - **Client Secret**: Click "Generate a new client secret" and copy it

3. **Configure GitHub Provider in Supabase**:
    - Go to your Supabase project dashboard
    - Navigate to **Authentication** → **Providers**
    - Find **GitHub** in the list and enable it
    - Paste your GitHub OAuth credentials:
        - **Client ID**: Paste the Client ID from GitHub
        - **Client Secret**: Paste the Client Secret from GitHub
    - Click "Save"

#### Step 5: Configure Site URL (Important for Production)

1. In Supabase Dashboard, go to **Authentication** → **URL Configuration**
2. Set your **Site URL**:
    - For development: `http://localhost:3000`
    - For production: Your actual domain (e.g., `https://yourdomain.com`)
3. Add **Redirect URLs**:
    - Add `http://localhost:3000/**` for development
    - Add your production URLs when deploying

### Running the Application

```bash
# Start development server
bun dev

# Build for production
bun build

# Preview production build
bun preview
```

The app will be available at `http://localhost:3000`

### Testing Authentication

1. Navigate to `http://localhost:3000`
2. Click on "Log In" in the header or "Get Started" button
3. Click "Continue with GitHub"
4. Authorize the application on GitHub
5. You'll be redirected back to the app and logged in
6. You can now access the `/home` page

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

## 🔐 Authentication

The template includes a complete authentication flow using Supabase and GitHub OAuth:

### Available Auth Composables

```typescript
const { isAuthenticated, setUser, signIn, signOut, user } = useAuth();

// user: Ref<User | null> - Current authenticated user
// isAuthenticated: ComputedRef<boolean> - Authentication status
// signIn() - Initiate GitHub OAuth login
// signOut() - Sign out the current user
// setUser() - Refresh user state from Supabase
```

### Protected Routes

The global auth middleware (`app/middleware/auth.global.ts`) automatically:

- Redirects authenticated users from `/login` to `/home`
- Redirects unauthenticated users from `/home` to `/login`
- Allows public access to the landing page (`/`)

### Adding More Protected Routes

To protect additional routes, modify `app/middleware/auth.global.ts`:

```typescript
export default defineNuxtRouteMiddleware((to) => {
    const { isAuthenticated } = useAuth();

    // Add your protected routes here
    const protectedRoutes = [CLIENT_ROUTES.HOME, "/dashboard", "/profile"];

    if (protectedRoutes.includes(to.path) && !isAuthenticated.value) {
        return navigateTo(CLIENT_ROUTES.LOGIN);
    }
});
```

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

## 🚢 Deploying to Production

When deploying to production:

1. **Update GitHub OAuth App**:
    - Go to your GitHub OAuth App settings
    - Add your production domain to **Homepage URL**
    - Add `https://your-project-ref.supabase.co/auth/v1/callback` to **Authorization callback URL**

2. **Update Supabase Settings**:
    - In Supabase Dashboard → Authentication → URL Configuration
    - Update **Site URL** to your production domain
    - Add your production domain to **Redirect URLs**

3. **Set Environment Variables**:
    - Set `NUXT_PUBLIC_SUPABASE_URL` in your hosting platform
    - Set `NUXT_PUBLIC_SUPABASE_KEY` in your hosting platform

4. **Build and Deploy**:
    ```bash
    bun build
    ```

## 🔧 Troubleshooting

### "Invalid redirect URL" error

- Ensure your redirect URL in GitHub OAuth app matches: `https://your-project-ref.supabase.co/auth/v1/callback`
- Check that the URL is added to Supabase redirect URLs list

### "Missing Supabase credentials" error

- Verify your `.env` file exists and contains the correct values
- Restart your dev server after creating/updating `.env`

### Authentication not working

- Check browser console for errors
- Verify Supabase project is active
- Ensure GitHub OAuth provider is enabled in Supabase

## 📖 Learn More

- [Nuxt Documentation](https://nuxt.com/docs)
- [Bun Documentation](https://bun.sh/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth with GitHub](https://supabase.com/docs/guides/auth/social-login/auth-github)
- [UnoCSS Documentation](https://unocss.dev)
- [Pinia Documentation](https://pinia.vuejs.org)

## 📄 License

MIT License © 2025

---

Built with ♥️ using Nuxt, Bun, and modern web technologies.
