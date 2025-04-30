import { Flex } from '@/components/common';
import Drawer, { TDrawerProps } from '@/components/common/Drawer';
import DrawerTextHeader from '@/components/common/Drawer/DrawerTextHeader';
import { Box, useTheme } from '@mui/material';

import React from 'react';

const InfoDrawer = React.forwardRef<unknown, TDrawerProps>((props, ref) => {
  const { children, ...rest } = props;
  const theme = useTheme();
  const drawerRef = React.useRef<{
    onToggle: () => void;
  }>(null);

  React.useImperativeHandle(ref, () => ({
    onToggle: drawerRef?.current?.onToggle
  }));

  return (
    <React.Fragment>
      <Drawer ref={drawerRef} useBackDropEffects anchor="right" {...rest}>
        <Box
          height={'100%'}
          maxWidth={'300px'}
          py={2}
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
          <DrawerTextHeader
            width={'100%'}
            title={'Info'}
            useCloseButton
            onClose={() => {
              drawerRef?.current?.onToggle();
            }}
          />
          <Flex flexDirection={'column'} px={2} gap={1} mt={3} alignItems={'center'}>
            {children}
          </Flex>
        </Box>
      </Drawer>
    </React.Fragment>
  );
});

export default InfoDrawer;
