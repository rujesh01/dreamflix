/**
 * Base prefix for all authentication related API endpoints
 * Example: /api/auth/login, /api/auth/signup
 */
export const AuthPrefix = "/api/auth";

/**
 * Array of public routes that don't require authentication
 * These routes are accessible to all users without logging in
 */
export const PublicRoute = ["/"];

/**
 * Array of authentication-related routes
 * These routes handle user authentication flows:
 * - /login: User login page
 * - /signup: New user registration page
 */
export const AuthRoutes = [
    '/login',
    '/sign-up',
]