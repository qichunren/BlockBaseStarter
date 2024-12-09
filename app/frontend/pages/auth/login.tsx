import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { useTranslation } from 'react-i18next';
import { fetchApi } from '@/utils/api';
import { useAuth } from '@/hooks/use-auth';
import { AuthLayout } from '@/components/layouts/auth-layout';

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await fetchApi('/api/login.json', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      
      login(data.token);
      
      const from = (location.state as any)?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      setError(err instanceof Error ? err.message : t('auth.login.failed'));
    }
  };

  return (
    <AuthLayout>
      <div>
        <h2 className="text-2xl font-bold mb-6">{t('auth.login.title')}</h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">{t('auth.login.email')}</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">{t('auth.login.password')}</label>
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {t('auth.login.submit')}
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login; 