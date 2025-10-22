export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser();
    const isAuthenticated = user.value !== null;

    // If going to /home and not authenticated, redirect to /login
    if (to.path === CLIENT_ROUTES.HOME && !isAuthenticated) {
        return navigateTo(CLIENT_ROUTES.LOGIN);
    }
});
