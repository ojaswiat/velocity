export const CLIENT_ROUTES = {
    HOME: "/home",
    INDEX: "/",
    LOGIN: "/login",
} as const;

export type TClientRoute = (typeof CLIENT_ROUTES)[keyof typeof CLIENT_ROUTES];
