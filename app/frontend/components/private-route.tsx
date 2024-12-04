import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // 将用户重定向到登录页面，但保存他们试图访问的URL
    return <Navigate to="/app/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute; 