import { Flex } from '@/components/common';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router';

import logo from '@/assets/logo.svg';
import SimpleToggle from '@/components/ui/ThemeToggles/SimpleToggle';
import { ChevronLeft } from 'lucide-react';

const AuthLayout: React.FC = () => {
  const theme = useTheme();
  const location = useLocation();
  const isSplit = location.pathname.includes('left') || location.pathname.includes('right');
  const isLeft = location.pathname.endsWith('/left');
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));

  const navigate = useNavigate();
  return (
    <Box height={'100dvh'} maxHeight={'100dvh'} width={'100dvw'}>
      {isSplit ? (
        <Flex width={'100%'} height={'100%'} flexDirection={isLeft ? 'row-reverse' : 'row'}>
          <Flex
            flexDirection={'column'}
            width={'calc(100dvw - 450px)'}
            bgcolor={'background.background'}
            height={'100%'}
            visibility={!matchSM ? 'visible' : 'hidden'}
            display={!matchSM ? 'flex' : 'none'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <img
              src={logo}
              alt="App logo"
              style={{
                width: 300,
                filter: `drop-shadow(0px 0px 25px rgba(${theme.palette.secondary.lightChannel}, .3))`
              }}
            />
          </Flex>
          <Flex flexGrow={1} bgcolor={'background.paper'} flexDirection={'column'} boxShadow={3}>
            <Flex justifyContent={'space-between'} alignItems={'center'} py={2} px={1} width={'100%'}>
              <Flex gap={1} alignItems={'center'} sx={{ cursor: 'pointer' }} onClick={() => navigate('/', { replace: true })}>
                <ChevronLeft size={16} />
                <Typography>Home</Typography>
              </Flex>
              <SimpleToggle />
            </Flex>
            <Outlet />
          </Flex>
        </Flex>
      ) : (
        <Flex flexGrow={1} bgcolor={'background.default'} flexDirection={'column'} boxShadow={3} height={'100%'}>
          <Flex position={'fixed'} justifyContent={'space-between'} alignItems={'center'} py={2} px={1} width={'100%'}>
            <Flex gap={1} alignItems={'center'} sx={{ cursor: 'pointer' }} onClick={() => navigate('/', { replace: true })}>
              <ChevronLeft size={16} />
              <Typography>Home</Typography>
            </Flex>
            <SimpleToggle />
          </Flex>
          <Outlet />
        </Flex>
      )}
    </Box>
  );
};

export default AuthLayout;
