'use client';

import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function useAuth() {
  const { user, isLoading, error } = useUser();
  const router = useRouter();

  const login = () => {
    router.push('/api/auth/login');
  };

  const logout = () => {
    router.push('/api/auth/logout');
  };

  const useRequireAuth = (redirectTo = '/api/auth/login') => {
    useEffect(() => {
      if (!isLoading && !user) {
        router.push(redirectTo);
      }
    }, [user, isLoading, router, redirectTo]);
  };

  return {
    user,
    isLoading,
    error,
    isAuthenticated: !!user,
    login,
    logout,
    useRequireAuth,
  };
} 