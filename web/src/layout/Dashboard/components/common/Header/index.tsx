import { Flex } from '@/components/common';
import SettingsDrawer from '@/components/common/SettingsDrawer';
import { Box, useTheme } from '@mui/material';
import React from 'react';
import CollapsedSideBar from './components/CollapsedSideBar';
import UserDrawer from './components/UserDrawer';

const Header: React.FC = () => {
  const theme = useTheme();
  const [userScrolled, setUserScrolled] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      setUserScrolled(scrollTop > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      component={'header'}
      sx={{
        zIndex: 15,
        display: 'flex',
        position: 'sticky',
        top: 0,
        width: '100%',
        left: 'auto',
        right: 0,
        backgroundColor: 'transparent',
        height: 'var(--dashboard-header-height)',
        '&::before': {
          content: '""',
          bgcolor: `rgba(${theme.palette.background.defaultChannel}, .7)`,
          opacity: userScrolled ? 1 : 0,
          visibility: userScrolled ? 'visible' : 'hidden',
          zIndex: -1,
          width: '100%',
          height: '100%',
          backdropFilter: 'blur(6px)',
          position: 'absolute',
          top: 0,
          left: 0,
          transition: 'opacity 120ms cubic-bezier(.17,.67,.83,.67), visibility 120ms cubic-bezier(.17,.67,.83,.67)'
        }
      }}
    >
      <Flex pl={2} width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
        <CollapsedSideBar />
        <Flex px={3} width={'100%'} justifyContent={'flex-end'} alignItems={'center'}>
          <SettingsDrawer />
          <UserDrawer />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
