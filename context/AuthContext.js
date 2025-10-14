'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const LOGIN_DURATION = 5 * 60 * 60 * 1000; // 5 hours
const VALID_CREDENTIALS = {
  username: 'admin',
  password: 'gmt@2025',
};

const PUBLIC_ROUTES = ['/login'];

const readAuthStatus = () => {
  try {
    const loginData = localStorage.getItem('userLogin');
    if (!loginData) return { isAuth: false, user: null };

    const { username, timestamp, isLoggedIn } = JSON.parse(loginData);
    const now = Date.now();

    if (now - timestamp > LOGIN_DURATION) {
      localStorage.removeItem('userLogin');
      return { isAuth: false, user: null };
    }

    if (isLoggedIn) {
      return { isAuth: true, user: { username, loginTime: new Date(timestamp) } };
    }

    return { isAuth: false, user: null };
  } catch {
    localStorage.removeItem('userLogin');
    return { isAuth: false, user: null };
  }
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // ✅ start false
  const [isLoading, setIsLoading] = useState(true); // ✅ start loading
  const [user, setUser] = useState(null);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const { isAuth, user } = readAuthStatus();

    setIsAuthenticated(isAuth);
    setUser(user);
    setIsLoading(false); // ✅ only stop loading after check

    const interval = setInterval(() => {
      const { isAuth } = readAuthStatus();
      if (!isAuth && !PUBLIC_ROUTES.includes(pathname)) {
        logout();
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [pathname]);

  const login = (username, password) => {
    if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
      const loginData = { username, timestamp: Date.now(), isLoggedIn: true };
      localStorage.setItem('userLogin', JSON.stringify(loginData));

      setIsAuthenticated(true);
      setUser({ username, loginTime: new Date() });
      router.push('/');
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('userLogin');
    setIsAuthenticated(false);
    setUser(null);
    router.push('/login');
  };

  const getRemainingTime = () => {
    try {
      const loginData = localStorage.getItem('userLogin');
      if (!loginData) return 0;

      const { timestamp } = JSON.parse(loginData);
      const now = Date.now();
      return Math.max(0, LOGIN_DURATION - (now - timestamp));
    } catch {
      return 0;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, user, login, logout, getRemainingTime }}>
      <AuthWrapper>{children}</AuthWrapper>
    </AuthContext.Provider>
  );
};

const AuthWrapper = ({ children }) => {
  const { isAuthenticated, isLoading, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

  // Still checking → show loading
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // ❌ Not authenticated & not a public route → redirect
  if (!isAuthenticated && !isPublicRoute) {
    // Important: useEffect to prevent redirect during SSR
    useEffect(() => {
      router.push('/login');
    }, [router]);

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  // ✅ Public route or authenticated
  return children;
};

export const SessionTimer = ({ getRemainingTime }) => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => setRemainingTime(getRemainingTime()), 1000);
    return () => clearInterval(timer);
  }, [getRemainingTime]);

  const formatTime = ms => {
    const h = Math.floor(ms / (1000 * 60 * 60));
    const m = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((ms % (1000 * 60)) / 1000);
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return <div className="text-sm text-gray-500">Session: {formatTime(remainingTime)}</div>;
};
