'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthState, MOCK_USER } from '@/types/member';

interface AuthContextType extends AuthState {
  login: (method: 'phone' | 'email' | 'wechat', data?: Record<string, unknown>) => Promise<boolean>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    loading: true
  });

  useEffect(() => {
    // 检查本地存储的登录状态
    const checkAuth = () => {
      const savedUser = localStorage.getItem('tripsy_user');
      if (savedUser) {
        try {
          const user = JSON.parse(savedUser);
          setAuthState({
            isAuthenticated: true,
            user,
            loading: false
          });
        } catch {
          setAuthState({
            isAuthenticated: false,
            user: null,
            loading: false
          });
        }
      } else {
        setAuthState({
          isAuthenticated: false,
          user: null,
          loading: false
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (method: 'phone' | 'email' | 'wechat', data?: Record<string, unknown>): Promise<boolean> => {
    // 模拟登录过程
    setAuthState(prev => ({ ...prev, loading: true }));
    
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 登录成功，使用模拟用户
    const user = { ...MOCK_USER };
    user.lastLoginAt = new Date();
    
    // 保存到本地存储
    localStorage.setItem('tripsy_user', JSON.stringify(user));
    
    setAuthState({
      isAuthenticated: true,
      user,
      loading: false
    });
    
    return true;
  };

  const logout = () => {
    localStorage.removeItem('tripsy_user');
    setAuthState({
      isAuthenticated: false,
      user: null,
      loading: false
    });
  };

  const updateUser = (userData: Partial<User>) => {
    if (authState.user) {
      const updatedUser = { ...authState.user, ...userData };
      localStorage.setItem('tripsy_user', JSON.stringify(updatedUser));
      setAuthState(prev => ({
        ...prev,
        user: updatedUser
      }));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
        updateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
