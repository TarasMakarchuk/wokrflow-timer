import { FC } from 'react';
import { Layout } from '@/components/ui/layout/Layout';
import { Button } from '@/components/ui/layout/Button';
import { useAuth } from '@/hooks/useAuth';

export const Profile: FC = () => {
  const { setUser } = useAuth();

  return (
    <Layout title='Profile'>
      <Button onPress={() => setUser(null)}>Logout</Button>
    </Layout>
  );
};
