import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="h-16 flex justify-center items-center px-6 border-b bg-white">
        <Link to="/" className="text-xl font-semibold">
          Rails React Starter
        </Link>
      </header>
      
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md px-4">
          <div className="bg-white rounded-lg shadow-md p-8">
            {children}
          </div>
          
          <div className="text-center mt-6 text-sm text-gray-600">
            {window.location.pathname === '/app/login' ? (
              <p>
                {t('auth.no_account')}{' '}
                <Link to="/app/register" className="text-blue-600 hover:underline">
                  {t('auth.register.title')}
                </Link>
              </p>
            ) : (
              <p>
                {t('auth.have_account')}{' '}
                <Link to="/app/login" className="text-blue-600 hover:underline">
                  {t('auth.login.title')}
                </Link>
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 