import { FC } from 'react';
import { Layout } from '@/components/ui/layout/Layout';
import { Timer } from './timer/Timer';

export const Home: FC = () => {

  return (
    <Layout title='Timer'>
    {/* TODO: Editable day name*/}
      <Timer />

    </Layout>
  );
};
