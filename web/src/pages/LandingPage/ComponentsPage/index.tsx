import { Flex, PageTitle } from '@/components/common';
import { useTheme } from '@mui/material';
import { Outlet } from 'react-router';
import ComponentsNavigation from './components/ComponentsNavigation';
import DocsWrapper from './components/DocsWrapper';

const Components: React.FC = () => {
  const theme = useTheme();
  return (
    <Flex flexDirection={'column'} flex={'1 1 auto'} minHeight={'100dvh'} pt={'var(--landing-page-nav-height)'}>
      <Flex padding={5} bgcolor={'background.paper'} borderBottom={'1px solid'} borderColor={'secondary.dark'} boxShadow={1}>
        <PageTitle pageTitle="Components" color={'text.primary'} />
      </Flex>
      <Flex position={'relative'} flexGrow={1} height={'100%'} overflow={'hidden'}>
        <Flex
          position={'absolute'}
          height={'100%'}
          top={0}
          left={0}
          width={'var(--components-sides-width)'}
          bgcolor={'background.paper'}
          sx={{
            [theme.breakpoints.down('lg')]: {
              display: 'none'
            }
          }}
          overflow={'auto'}
          py={10}
        >
          <ComponentsNavigation />
        </Flex>
        <Flex
          position={'absolute'}
          height={'100%'}
          top={0}
          right={0}
          width={'var(--components-sides-width)'}
          bgcolor={'background.paper'}
          sx={{
            [theme.breakpoints.down('lg')]: {
              display: 'none'
            }
          }}
        />
        <Flex
          paddingLeft={'var(--components-sides-width)'}
          paddingRight={'var(--components-sides-width)'}
          width={'100%'}
          sx={{
            transition: 'margin-left 200ms ease-in-out, margin-right 200ms ease-in-out',
            [theme.breakpoints.down('lg')]: {
              paddingLeft: 0,
              paddingRight: 0
            }
          }}
        >
          <DocsWrapper>
            <Outlet />
          </DocsWrapper>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Components;
