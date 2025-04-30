import { AppBar, Container, useTheme } from '@mui/material';
import React from 'react';
import Flex from '../../../../../components/common/Flex.component';
import { LogoDisplay, Navigation } from '../../ui';
import Actions from '../../ui/Actions';

const Header: React.FC = () => {
  const theme = useTheme();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !scrolled) {
        setScrolled(true);
        return;
      }
      if (window.scrollY === 0 && scrolled) {
        setScrolled(false);
        return;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <AppBar
      position="fixed"
      sx={{
        transition: 'all 200ms ease-in-out',
        bgcolor: scrolled ? `rgba(${theme.palette.background.defaultChannel}, .8)` : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : '',
        boxShadow: scrolled ? 1 : 0,
        height: 'var(--landing-page-nav-height)'
      }}
    >
      <Container>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <LogoDisplay />
          <Navigation />
          <Actions />
        </Flex>
      </Container>
    </AppBar>
  );
};

export default Header;
