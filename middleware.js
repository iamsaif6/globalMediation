// middleware.js (place in root directory)
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Allow access to login page without authentication
  if (pathname == '/login') {
    return NextResponse.next();
  }

  // For all other pages, let the client-side handle authentication
  // since we're using localStorage which is not available on the server
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

// utils/auth.js - Utility functions for authentication
export const AUTH_CONFIG = {
  LOGIN_DURATION: 5 * 60 * 60 * 1000, // 5 hours in milliseconds
  VALID_CREDENTIALS: {
    username: 'admin',
    password: 'gmt@2025',
  },
};

export const checkLoginExpiry = () => {
  try {
    if (typeof window === 'undefined') return false;

    const loginData = localStorage.getItem('userLogin');
    if (!loginData) return false;

    const { timestamp } = JSON.parse(loginData);
    const now = new Date().getTime();

    return now - timestamp > AUTH_CONFIG.LOGIN_DURATION;
  } catch (error) {
    console.error('Error checking login expiry:', error);
    return true; // Assume expired on error
  }
};

export const clearExpiredLogin = () => {
  try {
    if (typeof window === 'undefined') return;

    if (checkLoginExpiry()) {
      localStorage.removeItem('userLogin');
    }
  } catch (error) {
    console.error('Error clearing expired login:', error);
  }
};
