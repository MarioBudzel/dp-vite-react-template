import { Flex } from '@/components/common';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { mode } from '../../../../store/reducers/theme-slice';

import appLogoDark from '@/assets/logo_dark.svg';
import appLogoLight from '@/assets/logo_light.svg';
import DrawerImageHeader from '@/components/common/Drawer/DrawerImageHeader';
import IconDrawer from '@/components/ui/Drawers/IconDrawer';
import { Menu } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';
import Navigation from './Navigation';

const LogoDisplay: React.FC = () => {
  const theme = useTheme();
  const userTheme = useSelector(mode);
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const drawerRef = React.useRef<{
    onToggle: () => void;
  }>(null);

  return (
    <Flex alignItems={'center'} justifyContent={'flex-start'} width={'200px'}>
      <IconDrawer
        icon={<Menu color={theme.palette.text.primary} size={24} />}
        iconButtonProps={{ sx: { display: !matchSM ? 'none' : 'unset' } }}
        drawerProps={{ useBackDropEffects: true, anchor: 'left', autoCloseCondition: !matchSM, autoCloseOnCondition: true }}
        ref={drawerRef}
      >
        <Flex
          height={'100%'}
          flexDirection={'column'}
          gap={2}
          bgcolor={`rgba(${theme.palette.background.defaultChannel}, .9)`}
          sx={{
            backgroundImage:
              'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIj4KICA8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgZmlsbD0idXJsKCNwYWludDBfcmFkaWFsXzQ0NjRfNTUzMzgpIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgogIDxkZWZzPgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDBfcmFkaWFsXzQ0NjRfNTUzMzgiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIwIDEuODE4MTJlLTA1KSByb3RhdGUoLTQ1KSBzY2FsZSgxMjMuMjUpIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2Y0NDMzNiIvPiAKICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjQ0MzM2IiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgPC9kZWZzPgo8L3N2Zz4=), url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIj4KICA8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgZmlsbD0idXJsKCNwYWludDBfcmFkaWFsXzQ0NjRfNTUzMzgpIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgogIDxkZWZzPgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDBfcmFkaWFsXzQ0NjRfNTUzMzgiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxMjApIHJvdGF0ZSgxMzApIHNjYWxlKDEyMy4yNSkiPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZEMTVDIi8+IAogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkQxNUMiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICA8L2RlZnM+Cjwvc3ZnPg==")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '50%, 50%',
            backgroundPositionX: 'right, left',
            backgroundPositionY: 'top, bottom',
            backdropFilter: 'blur(20px)'
          }}
        >
          <DrawerImageHeader
            width={'300px'}
            image={
              <img
                src={userTheme === 'dark' ? appLogoDark : appLogoLight}
                alt="App logo"
                style={{ width: 150, padding: 8, paddingBottom: 15 }}
              />
            }
            flexGrow={0}
          />
          <Flex flexGrow={1} overflow={'auto'}>
            <Navigation type="vertical" />
          </Flex>
        </Flex>
      </IconDrawer>
      <Box
        sx={{
          cursor: 'pointer'
        }}
        onClick={() => {
          navigate('/');
        }}
      >
        <img src={userTheme === 'dark' ? appLogoDark : appLogoLight} alt="App logo" style={{ width: 150, padding: 8, paddingBottom: 15 }} />
      </Box>
    </Flex>
  );
};

export default LogoDisplay;
