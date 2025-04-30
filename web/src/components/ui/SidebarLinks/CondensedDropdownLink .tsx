import { useMatches, useNavigate } from 'react-router';

import { Flex } from '@/components/common';
import { AdminButtonWrapper } from '@/components/common/ButtonWrappers';
import { TListPaths } from '@/types';
import { Box, SvgIcon, Typography, useTheme } from '@mui/material';
import { ChevronRight } from 'lucide-react';
import React from 'react';

const CondensedDropdownLink: React.FC<{ links: TListPaths }> = ({ links }) => {
  const { name, parentPath, icon, paths } = links;
  const theme = useTheme();
  const matches = useMatches();
  const isActive = matches.some((match) => match.pathname.includes(parentPath));
  const navigate = useNavigate();

  const linkRef = React.useRef(null);

  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const [popupPosition, setPopupPosition] = React.useState<{ top: number; left: number }>({ top: 0, left: 0 });

  const handleMouseEnter = () => {
    if (!linkRef.current) return;

    const rect = linkRef.current.getBoundingClientRect();

    setPopupPosition({
      top: rect.top,
      left: rect.right
    });
    setIsHovered(true);
  };

  return (
    <Flex
      ref={linkRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
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
      position={'relative'}
    >
      {icon ? (
        <SvgIcon
          inheritViewBox
          component={icon}
          style={{ fontSize: '20px', color: isActive ? theme.palette.secondary.main : theme.palette.text.secondary, fill: 'none' }}
        />
      ) : null}
      <Typography fontSize={'10px'} fontWeight={700} color={isActive ? 'secondary.main' : 'text.secondary'} textAlign={'center'}>
        {name}
      </Typography>
      <ChevronRight
        size={16}
        style={{
          position: 'absolute',
          top: '10px',
          right: '3px',
          color: isActive ? theme.palette.secondary.main : theme.palette.text.secondary,
          fill: 'none'
        }}
      />

      <Flex
        position={'fixed'}
        pl={3}
        width={'200px'}
        height={'fit-content'}
        bgcolor={'transparent'}
        top={popupPosition.top}
        left={popupPosition.left}
        sx={{
          transformOrigin: 'left center',
          transform: isHovered ? 'translateY(-40%) scale(1)' : 'translateY(-40%) scale(0)',
          cursor: 'default',
          opacity: isHovered ? 1 : 0,
          transition: 'transform 180ms cubic-bezier(.17,.67,.83,.67), opacity 180ms cubic-bezier(.17,.67,.83,.67)'
        }}
      >
        <Flex
          width={'100%'}
          height={'100%'}
          flexDirection={'column'}
          bgcolor={`rgba(${theme.palette.background.paperChannel}, .8)`}
          borderRadius={3}
          px={1}
          py={1}
          boxShadow={2}
          sx={{ backdropFilter: 'blur(20px)' }}
        >
          <Box
            position={'relative'}
            display={'flex'}
            padding={0}
            flexDirection={'column'}
            margin={0}
            gap={1}
            component={'ul'}
            sx={{
              listStyle: 'none'
            }}
          >
            {paths.map((path, index) => {
              const isSubPathActive = matches.some((match) => match.pathname === path.path);
              const isAdminPath = path.adminPath;
              return isAdminPath ? (
                <AdminButtonWrapper key={index}>
                  <Flex alignItems={'center'} position={'relative'} margin={0} component={'li'}>
                    <Typography
                      onClick={() => navigate(path.path)}
                      height={'var(--sidebar-collapse-link-height)'}
                      fontSize={'15px'}
                      pl={2}
                      width={'100%'}
                      fontWeight={700}
                      color={isSubPathActive ? 'secondary.main' : 'text.secondary'}
                      position={'relative'}
                      borderRadius={3}
                      sx={{
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        transition: 'background-color 300ms linear 0ms',
                        backgroundColor: isSubPathActive ? `rgba(${theme.palette.secondary.lightChannel}, .1)` : 'transparent',
                        '&:hover': {
                          backgroundColor: `rgba(${theme.palette.secondary.lightChannel}, .1)`
                        }
                      }}
                    >
                      {path.name}
                    </Typography>
                  </Flex>
                </AdminButtonWrapper>
              ) : (
                <Flex alignItems={'center'} position={'relative'} key={index} margin={0} component={'li'}>
                  <Typography
                    onClick={() => navigate(path.path)}
                    height={'var(--sidebar-collapse-link-height)'}
                    fontSize={'15px'}
                    pl={2}
                    width={'100%'}
                    fontWeight={700}
                    color={isSubPathActive ? 'secondary.main' : 'text.secondary'}
                    position={'relative'}
                    borderRadius={3}
                    sx={{
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      transition: 'background-color 300ms linear 0ms',
                      backgroundColor: isSubPathActive ? `rgba(${theme.palette.secondary.lightChannel}, .1)` : 'transparent',
                      '&:hover': {
                        backgroundColor: `rgba(${theme.palette.secondary.lightChannel}, .1)`
                      }
                    }}
                  >
                    {path.name}
                  </Typography>
                </Flex>
              );
            })}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CondensedDropdownLink;
