import { Flex } from '@/components/common';
import { Outlet } from 'react-router';
import { Header } from './components/common';

const LandingPageV2: React.FC = () => {
  return (
    <Flex
      component={'main'}
      sx={{
        flexDirection: 'column',
        flex: '1 1 auto',
        minHeight: '100dvh',
        height: '100%',
        maxWidth: '100dvW'
      }}
    >
      <Header />
      <Outlet />
    </Flex>
  );
};

export default LandingPageV2;
