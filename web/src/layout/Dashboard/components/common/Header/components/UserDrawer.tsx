import { Flex, UserCard } from '@/components/common';
import DrawerTextHeader from '@/components/common/Drawer/DrawerTextHeader';
import IconDrawer from '@/components/ui/Drawers/IconDrawer';
import { useAuth } from '@/context/AuthContext';
import { useGetCurrentUserQuery } from '@/store/api';
import { Fab, Typography, useTheme } from '@mui/material';
import { LogOut } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';

const UserDrawer: React.FC = () => {
  const { clearAuthData } = useAuth();
  const { data } = useGetCurrentUserQuery({});

  const user = data?.user ?? {};

  const drawerRef = React.useRef<{
    onToggle: () => void;
  }>(null);

  const theme = useTheme();
  const navigate = useNavigate();

  const handleLogOut = () => {
    clearAuthData();
    navigate('/', { replace: true });
  };

  return (
    <IconDrawer
      drawerProps={{ useBackDropEffects: true, anchor: 'right' }}
      ref={drawerRef}
      icon={<UserCard.ProfilePicture imageUrl={user?.profilePicturePath} size="small" />}
    >
      <Flex
        height={'100%'}
        flexDirection={'column'}
        maxWidth={'320px'}
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
          title={''}
          useCloseButton
          onClose={() => {
            drawerRef?.current?.onToggle();
          }}
        />
        <Flex flexDirection={'column'} flexGrow={0} gap={1} px={2} mt={3} alignItems={'center'}>
          <Flex flexDirection={'column'} alignItems={'center'} px={8} height={'fit-content'} py={2} flexGrow={0}>
            <UserCard.ProfilePicture imageUrl={user?.profilePicturePath} />
            <Typography variant="h5" fontWeight={'bold'}>
              {user.fullName}
            </Typography>
            <Typography color={'text.disabled'} fontSize={'12px'}>
              {user.email}
            </Typography>
          </Flex>
        </Flex>
        <Flex
          width={'100%'}
          bgcolor={'background.paper'}
          flexGrow={1}
          justifyContent={'center'}
          alignItems={'center'}
          px={3}
          borderTop={'1px dashed'}
          borderBottom={'1px dashed'}
        >
          <Typography variant="h2" color={'text.secondary'} textAlign={'center'} fontStyle={'italic'}>
            You can add your own content here
          </Typography>
        </Flex>
        <Flex width={'100%'} py={2} px={3} justifyContent={'center'}>
          <Fab
            variant="extended"
            color="error"
            sx={{
              width: '100%',
              height: 'fit-content',
              py: 1,
              boxShadow: 1
            }}
            onClick={handleLogOut}
          >
            <Flex gap={1} alignItems={'center'}>
              <LogOut size={16} />
              <Typography fontWeight={'bold'} fontSize={'13px'}>
                Sign Out
              </Typography>
            </Flex>
          </Fab>
        </Flex>
      </Flex>
    </IconDrawer>
  );
};

export default UserDrawer;
