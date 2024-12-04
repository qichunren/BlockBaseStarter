import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchApi } from '@/utils/api';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface User {
  id: number;
  email: string;
  created_at: string;
}

interface Meta {
  count: number;
  page: number;
  pages: number;
  from: number;
  to: number;
  items: number;
  prev: number | null;
  next: number | null;
  series: number[];
}

const UsersPage = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState<User[]>([]);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUsers = async (page = 1) => {
    try {
      setLoading(true);
      const data = await fetchApi(`/api/v1/users.json?page=${page}&per_page=10`);
      setUsers(data.users);
      setMeta(data.meta);
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : t('fetch_error'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handlePageChange = (page: number) => {
    fetchUsers(page);
  };

  if (loading) return <div className="text-center p-4">{t('common.loading')}</div>;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">{t('users.title')}</h1>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t('users.email')}</TableHead>
            <TableHead>{t('users.created_at')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {new Date(user.created_at).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {meta && (
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            {t('pagination.showing', {
              from: meta.from,
              to: meta.to,
              total: meta.count
            })}
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(meta.page - 1)}
              disabled={meta.page === 1}
              className="px-3 py-1 rounded border disabled:opacity-50"
            >
              {t('pagination.previous')}
            </button>
            
            <span className="px-3 py-1">
              {t('pagination.page', {
                current: meta.page,
                total: meta.pages
              })}
            </span>
            
            <button
              onClick={() => handlePageChange(meta.page + 1)}
              disabled={meta.page === meta.pages}
              className="px-3 py-1 rounded border disabled:opacity-50"
            >
              {t('pagination.next')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPage; 