import { Flex } from '@/components/common';
import { SvgIcon, Typography, useTheme } from '@mui/material';
import { useMatches, useNavigate } from 'react-router';

import { AdminButtonWrapper } from '@/components/common/ButtonWrappers';
import { TSidebarPaths } from '@/types';

export type TDefaultLinkProps = {
  path: TSidebarPaths;
  useDocsRoutes?: boolean;
};

const DefaultLink: React.FC<TDefaultLinkProps> = ({ path, useDocsRoutes }) => {
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
        py={1}
        px={1}
        gap={2}
        justifyContent={'flex-start'}
        alignItems={'center'}
        style={{ cursor: 'pointer' }}
        borderRadius={3}
        sx={{
          transition: 'background-color 300ms linear 0ms',
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
            style={{ color: isActive ? theme.palette.secondary.main : theme.palette.text.secondary, fill: 'none' }}
          />
        ) : null}
        <Typography fontSize={'16px'} fontWeight={700} color={isActive ? 'secondary.main' : 'text.secondary'}>
          {path.name}
        </Typography>
      </Flex>
    </AdminButtonWrapper>
  ) : (
    <Flex
      onClick={() => navigate(path.path)}
      width={'100%'}
      py={useDocsRoutes ? 0.5 : 1}
      px={1}
      gap={2}
      justifyContent={'flex-start'}
      alignItems={'center'}
      style={{ cursor: 'pointer' }}
      borderRadius={3}
      sx={{
        transition: 'background-color 300ms linear 0ms',
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
          style={{ color: isActive ? theme.palette.secondary.main : theme.palette.text.secondary, fill: 'none' }}
        />
      ) : null}
      <Typography fontSize={useDocsRoutes ? '11px' : '16px'} fontWeight={700} color={isActive ? 'secondary.main' : 'text.secondary'}>
        {path.name}
      </Typography>
    </Flex>
  );
};

export default DefaultLink;
