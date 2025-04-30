import React from 'react';
import { UserState } from '../../types/types';
import { useLazyGetCurrentUserQuery } from '../store/api';

import Loading from '@/components/common/Loading';
import { useMaintenanceContext } from '@/hooks/useMaintenanceContext';
import * as authService from '../services/auth';

interface AuthContextType {
  user?: UserState;
  isAuthenticated: boolean;
  clearAuthData: () => void;
  saveAuthData: ({ token }) => Promise<void>;
  refetchUser?: () => Promise<void>;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = React.useState(authService.extractUserFromLocalStorage());
  const [currentUser, { isLoading }] = useLazyGetCurrentUserQuery();

  const { maintenance } = useMaintenanceContext();

  const refetchUserOnFirstMount = React.useRef(true);

  const refetchUser = React.useCallback(async () => {
    try {
      const { data } = await currentUser({});
      setUser(data?.user);
      authService.saveUserToLocalStorage(data?.user);
    } catch (error) {
      console.error(error);
      authService.clearAuthFromStorage();
      setUser(null);
    }
  }, [currentUser]);

  const clearAuthData = () => {
    authService.clearAuthFromStorage();
    setUser(null);
  };

  const saveAuthData = async ({ token }) => {
    authService.saveTokenToLocalStorage(token);
    await refetchUser();
  };

  React.useEffect(() => {
    if (user && authService.extractTokenFromLocalStorage()) refetchUser();
  }, [user, refetchUser]);

  React.useEffect(() => {
    if (refetchUserOnFirstMount.current) {
      refetchUser();
      refetchUserOnFirstMount.current = false;
    }
  });

  React.useEffect(() => {
    if (maintenance) setTimeout(() => clearAuthData(), 500);
  }, [maintenance]);

  if (isLoading) {
    return <Loading />;
  }

  return <AuthContext.Provider value={{ user, isAuthenticated: !!user, clearAuthData, saveAuthData }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
