export default defineNuxtRouteMiddleware((to) => {
    const { isAuthenticated } = useAuth();

    // If going to /login and already authenticated, redirect to /home
    if (to.path === CLIENT_ROUTES.LOGIN && isAuthenticated.value) {
        return navigateTo(CLIENT_ROUTES.HOME);
    }

    // If going to /home and not authenticated, redirect to /login
    if (to.path === CLIENT_ROUTES.HOME && !isAuthenticated.value) {
        return navigateTo(CLIENT_ROUTES.LOGIN);
    }
});

