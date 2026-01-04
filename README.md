# Velocity ⚡

A streamlined, production-ready Nuxt template for building modern web applications with Bun, featuring Supabase authentication with GitHub OAuth using the official **@nuxtjs/supabase** module.

## ✨ Features

- **🚀 Nuxt 4** - The latest version of the progressive Vue framework
- **⚡ Bun** - Lightning-fast JavaScript runtime and package manager
- **🔐 Supabase Auth** - Pre-configured GitHub OAuth authentication with @nuxtjs/supabase
- **🎨 UnoCSS** - Instant on-demand atomic CSS engine with Roboto font pre-configured
- **🗃️ Pinia** - Intuitive, type-safe state management for Vue
- **📏 ESLint** - Comprehensive linting with security plugins
- **🎯 TypeScript** - Full type safety out of the box
- **📦 Auto Imports** - Auto-import components, composables, and Supabase utilities
- **🏗️ Organized Structure** - Pre-configured directories for components, stores, services, utils, and more
- **🛡️ Auth Middleware** - Automatic route protection and authentication checks

## 📁 Project Structure

```
velocity/
├── app/
│   ├── components/        # Auto-imported Vue components
│   │   ├── AppHeader.vue  # Navigation header with auth
│   │   ├── AppFooter.vue  # Footer component
│   │   ├── Counter.vue    # Demo counter component
│   │   └── Logo.vue       # Brand logo component
│   ├── layouts/           # Nuxt layouts
│   │   └── default.vue    # Default layout with header/footer
│   ├── middleware/        # Route middleware
│   │   └── auth.global.ts # Global auth protection
│   ├── pages/             # File-based routing
│   │   ├── index.vue      # Landing page
│   │   ├── login.vue      # Login with GitHub OAuth
│   │   └── home.vue       # Protected home page
│   └── stores/            # Pinia stores
│       └── CounterStore.ts
├── lib/
│   └── constants.ts       # App constants and routes
├── env                    # Environment variables template
├── .env                 # Your local environment variables (create this)
└── nuxt.config.ts         # Nuxt configuration with @nuxtjs/supabase
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

This template uses Supabase for authentication with GitHub OAuth via the official **@nuxtjs/supabase** module.

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
    - **Project URL**: This is your `SUPABASE_URL`
    - **anon/public key**: This is your `SUPABASE_KEY`
4. Copy these values for the next step

#### Step 3: Configure Environment Variables

1. Create a `.env` file in the root of your project by copying the `env` file:

    ```bash
    cp env .env
    ```

2. Open `.env` and replace the placeholder values with your actual Supabase credentials:
    ```bash
    SUPABASE_URL=https://your-project-ref.supabase.co
    SUPABASE_KEY=your-anon-key-here
    ```

**Note**: The `@nuxtjs/supabase` module automatically reads these environment variables.

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

#### Step 5: Configure Site URL and Redirect URLs

1. In Supabase Dashboard, go to **Authentication** → **URL Configuration**
2. Set your **Site URL**:
    - For development: `http://localhost:3000`
    - For production: Your actual domain (e.g., `https://yourdomain.com`)
3. Add **Redirect URLs**:
    - Add `http://localhost:3000/**` for development
    - Add `http://localhost:3000/home` specifically for the home redirect
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
5. You'll be redirected back to `/home` and logged in
6. The auth state is automatically managed by `@nuxtjs/supabase`

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
bun clean:all       # Clean everything including node_modules
```

## 🔐 Supabase GitHub Authentication

This template uses the official **@nuxtjs/supabase** module for authentication, which provides auto-imported composables and automatic session management.

### Authentication Implementation

- **`@nuxtjs/supabase` module** - Official Nuxt Supabase integration
- **`useSupabaseClient()`** - Auto-imported composable for Supabase client
- **`useSupabaseUser()`** - Auto-imported reactive user state
- **`app/middleware/auth.global.ts`** - Global route protection
- **`app/pages/login.vue`** - GitHub OAuth login page
- **`app/pages/home.vue`** - Protected home page
- **`app/components/AppHeader.vue`** - Header with login/logout buttons

### Module Configuration

The `@nuxtjs/supabase` module is configured in `nuxt.config.ts`:

```typescript
supabase: {
  redirectOptions: {
    login: '/login',      // Where to redirect when not authenticated
    callback: '/home',    // Where to redirect after successful OAuth
    exclude: ['/', '/privacy', '/terms'], // Public pages
  },
}
```

### How Authentication Works

1. **Auto-imported Composables**:
    - `useSupabaseClient()` - Access to Supabase client instance
    - `useSupabaseUser()` - Reactive user state (null when logged out)

2. **Automatic Features**:
    - Auto-refresh of auth tokens
    - Session persistence across page reloads
    - URL token cleanup after OAuth
    - Cookie-based session management

3. **Login Flow**:
    - User clicks "Continue with GitHub" on `/login`
    - Redirects to GitHub for authorization
    - GitHub redirects back with auth tokens
    - Supabase processes tokens automatically
    - User is redirected to `/home` (configured in `redirectOptions.callback`)

4. **Route Protection** (`auth.global.ts`):
    - Checks authentication status using `useSupabaseUser()`
    - Redirects to `/login` if accessing `/home` while logged out
    - Redirects to `/home` if accessing `/login` while logged in

### Usage Examples

#### Check Authentication Status

```vue
<template>
    <div v-if="user">
        Welcome, {{ user.user_metadata.name }}!
    </div>
</template>

<script setup>
const user = useSupabaseUser();
const isAuthenticated = computed(() => !!user.value);
</script>
```

#### Sign In with GitHub

```vue
<script setup>
const supabase = useSupabaseClient();

async function signInWithGitHub() {
    const { error } = await supabase.auth.signInWithOAuth({
        options: {
            redirectTo: `${window.location.origin}/home`
        },
        provider: "github"
    });

    if (error) {
        console.error("Error signing in:", error);
    }
}
</script>
```

#### Sign Out

```vue
<script setup>
const supabase = useSupabaseClient();

async function handleLogout() {
    await supabase.auth.signOut();
    navigateTo("/");
}
</script>
```

#### Access Supabase Client for Database Queries

```vue
<script setup>
const supabase = useSupabaseClient();

// Fetch data from your database
const { data, error } = await supabase
    .from("your_table")
    .select("*");
</script>
```

#### Watch User Changes

```vue
<script setup>
const user = useSupabaseUser();

watch(user, (newUser) => {
    if (newUser) {
        console.info("User logged in:", newUser.email);
    } else {
        console.info("User logged out");
    }
});
</script>
```

### Protected Routes

The global auth middleware (`app/middleware/auth.global.ts`) uses `useSupabaseUser()` to check authentication:

```typescript
export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser();
    const isAuthenticated = user.value !== null;

    // If going to /login and already authenticated, redirect to /home
    if (to.path === CLIENT_ROUTES.LOGIN && isAuthenticated) {
        return navigateTo(CLIENT_ROUTES.HOME);
    }

    // If going to /home and not authenticated, redirect to /login
    if (to.path === CLIENT_ROUTES.HOME && !isAuthenticated) {
        return navigateTo(CLIENT_ROUTES.LOGIN);
    }
});
```

### Adding More Protected Routes

To protect additional routes, modify `app/middleware/auth.global.ts`:

```typescript
export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser();
    const isAuthenticated = user.value !== null;

    // Define all protected routes
    const protectedRoutes = ["/home", "/dashboard", "/profile"];

    // Redirect to login if accessing protected route while not authenticated
    if (protectedRoutes.includes(to.path) && !isAuthenticated) {
        return navigateTo("/login");
    }

    // Redirect to home if accessing login while authenticated
    if (to.path === "/login" && isAuthenticated) {
        return navigateTo("/home");
    }
});
```

## 🗃️ State Management

Pinia stores are auto-imported from the `app/stores/` directory. See `app/stores/CounterStore.ts` for an example using the composition API pattern.

```typescript
// app/stores/CounterStore.ts
export const useCounterStore = defineStore("counter", () => {
    const count = ref(0);

    function increment() {
        count.value++;
    }

    return { count, increment };
});
```

Usage in components:

```vue
<template>
    <div>Count: {{ counterStore.count }}</div>
    <button @click="counterStore.increment">
        Increment
    </button>
</template>

<script setup>
const counterStore = useCounterStore();
</script>
```

## 🎨 UnoCSS

The template comes pre-configured with UnoCSS and the Roboto font. You can customize the configuration in `uno.config.ts`.

```html
// Example utility classes
<div class="flex items-center justify-center bg-gray-950 text-white">
    <h1 class="text-4xl font-bold">Hello Velocity</h1>
</div>
```

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

Plus auto-imports from `@nuxtjs/supabase`:

- `useSupabaseClient()` - Supabase client
- `useSupabaseUser()` - Current user state
- `useSupabaseSession()` - Current session
- `useSupabaseAuthClient()` - Auth client

## 🚢 Deploying to Production

When deploying to production:

1. **Update GitHub OAuth App**:
    - Go to your GitHub OAuth App settings
    - Add your production domain to **Homepage URL**
    - Update **Authorization callback URL** to use your production Supabase URL

2. **Update Supabase Settings**:
    - In Supabase Dashboard → Authentication → URL Configuration
    - Update **Site URL** to your production domain (e.g., `https://yourdomain.com`)
    - Add your production redirect URLs (e.g., `https://yourdomain.com/**`)

3. **Set Environment Variables**:
    - Set `SUPABASE_URL` in your hosting platform
    - Set `SUPABASE_KEY` in your hosting platform

4. **Build and Deploy**:
    ```bash
    bun build
    ```

## 🔧 Troubleshooting

### "Invalid redirect URL" error

- Ensure your redirect URL in GitHub OAuth app matches: `https://your-project-ref.supabase.co/auth/v1/callback`
- Check that the URL is added to Supabase redirect URLs list in Authentication → URL Configuration

### "Missing Supabase credentials" error

- Verify your `.env` file exists and contains the correct values
- Restart your dev server after creating/updating `.env`
- Check that variable names are `SUPABASE_URL` and `SUPABASE_KEY`

### Authentication not working

- Check browser console for errors
- Verify Supabase project is active
- Ensure GitHub OAuth provider is enabled in Supabase
- Verify Site URL and Redirect URLs are configured in Supabase

### Redirect loop after login

- This can happen if middleware runs before Supabase processes the OAuth tokens
- The `@nuxtjs/supabase` module handles this automatically
- Ensure you're using `useSupabaseUser()` in your middleware (not creating custom auth state)

## 📖 Learn More

- [Nuxt Documentation](https://nuxt.com/docs)
- [Bun Documentation](https://bun.sh/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [@nuxtjs/supabase Module](https://supabase.nuxtjs.org)
- [Supabase Auth with GitHub](https://supabase.com/docs/guides/auth/social-login/auth-github)
- [UnoCSS Documentation](https://unocss.dev)
- [Pinia Documentation](https://pinia.vuejs.org)

## 📄 License

MIT License © 2025

---

Built with ♥️ using Nuxt, Bun, Supabase, and modern web technologies.
