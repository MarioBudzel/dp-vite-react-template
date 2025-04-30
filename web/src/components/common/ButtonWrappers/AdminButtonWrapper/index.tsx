import { useAuth } from '@/context/AuthContext';

const AdminButtonWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();

  if (!user) return null;
  if (!user.isAdmin) return null;

  return <>{children}</>;
};

export default AdminButtonWrapper;
