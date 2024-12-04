import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Switch } from './ui/switch';
import Pages1 from '../pages/pages1';
import Pages2 from '../pages/pages2';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import { useTranslation } from 'react-i18next';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import UsersPage from '../pages/users';
import { AuthProvider } from '@/contexts/auth-context';
import { useAuth } from '@/hooks/use-auth';
import PrivateRoute from '@/components/private-route';

const AppContent = () => {
  const { t, i18n } = useTranslation();
  const { isAuthenticated, logout } = useAuth();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <div className='text-4xl font-bold'>Rails React Starter</div>
        <header>
          <ul className='flex gap-4 p-4 items-center'>
            <li><a href='/'>{t('nav.home')}</a></li>
            <li><a href='/posts'>{t('nav.posts')}</a></li>
            <li><Link to='/app/pages1'>Pages1</Link></li>
            <li><Link to='/app/pages2'>Pages2</Link></li>
            {!isAuthenticated ? (
              <>
                <li><Link to='/app/login'>{t('nav.login')}</Link></li>
                <li><Link to='/app/register'>{t('nav.register')}</Link></li>
              </>
            ) : (
              <>
                <li><Link to='/app/users'>{t('nav.users')}</Link></li>
                <li>
                  <button 
                    onClick={logout}
                    className="text-red-500 hover:text-red-700"
                  >
                    {t('nav.logout')}
                  </button>
                </li>
              </>
            )}
            <li>
              <Select value={i18n.language} onValueChange={handleLanguageChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en-US">English</SelectItem>
                  <SelectItem value="zh-CN">中文</SelectItem>
                </SelectContent>
              </Select>
            </li>
            <Switch />
          </ul>
        </header>
        <Routes>
          <Route path='/app/pages1' element={<Pages1 />} />
          <Route path='/app/pages2' element={<Pages2 />} />
          <Route path='/app/login' element={<Login />} />
          <Route path='/app/register' element={<Register />} />
          <Route 
            path='/app/users' 
            element={
              <PrivateRoute>
                <UsersPage />
              </PrivateRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;