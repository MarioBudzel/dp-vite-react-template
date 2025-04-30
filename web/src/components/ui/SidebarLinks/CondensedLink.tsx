import { useMatches, useNavigate } from 'react-router';
import { TDefaultLinkProps } from './DefaultLink';

import { Flex } from '@/components/common';
import { AdminButtonWrapper } from '@/components/common/ButtonWrappers';
import { SvgIcon, Typography, useTheme } from '@mui/material';

const CondensedLink: React.FC<TDefaultLinkProps> = ({ path }) => {
  const theme = useTheme();
  const matches = useMatches();
  const isActive = matches.some((match) => match.pathname === path.path);
  const navigate = useNavigate();

  const isAdminPath = path.adminPath;

  return isAdminPath ? (
    <AdminButtonWrapper>
      <Flex
        onClick={() => navigate(path.path)}
        width={'100%'}
        maxWidth={'calc(var(--dashboard-sidebar-min-width) - 8px)'}
        justifyContent={'center'}
        flexDirection={'column'}
        alignItems={'center'}
        style={{ cursor: 'pointer' }}
        borderRadius={3}
        sx={{
          transition: 'background-color 300ms linear 0ms',
          aspectRatio: 1,
          backgroundColor: isActive ? `rgba(${theme.palette.secondary.lightChannel}, .1)` : 'transparent',
          '&:hover': {
            backgroundColor: `rgba(${theme.palette.secondary.lightChannel}, .1)`
          }
        }}
      >
        {path.icon ? (
          <SvgIcon
            inheritViewBox
            component={path.icon}
            style={{ fontSize: '20px', color: isActive ? theme.palette.secondary.main : theme.palette.text.secondary, fill: 'none' }}
          />
        ) : null}
        <Typography fontSize={'13px'} fontWeight={700} color={isActive ? 'secondary.main' : 'text.secondary'} textAlign={'center'}>
          {path.name}
        </Typography>
      </Flex>
    </AdminButtonWrapper>
  ) : (
    <Flex
      onClick={() => navigate(path.path)}
      width={'100%'}
      maxWidth={'calc(var(--dashboard-sidebar-min-width) - 8px)'}
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems={'center'}
      style={{ cursor: 'pointer' }}
      borderRadius={3}
      sx={{
        transition: 'background-color 300ms linear 0ms',
        aspectRatio: 1,
        backgroundColor: isActive ? `rgba(${theme.palette.secondary.lightChannel}, .1)` : 'transparent',
        '&:hover': {
          backgroundColor: `rgba(${theme.palette.secondary.lightChannel}, .1)`
        }
      }}
    >
      {path.icon ? (
        <SvgIcon
          inheritViewBox
          component={path.icon}
          style={{ fontSize: '20px', color: isActive ? theme.palette.secondary.main : theme.palette.text.secondary, fill: 'none' }}
        />
      ) : null}
      <Typography fontSize={'10px'} fontWeight={700} color={isActive ? 'secondary.main' : 'text.secondary'} textAlign={'center'}>
        {path.name}
      </Typography>
    </Flex>
  );
};

export default CondensedLink;
