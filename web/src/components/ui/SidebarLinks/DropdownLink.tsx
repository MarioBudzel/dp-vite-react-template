import { Flex } from '@/components/common';
import { AdminButtonWrapper } from '@/components/common/ButtonWrappers';
import useDisclosure from '@/hooks/useDisclosure';
import { TListPaths } from '@/types';
import { Box, Collapse, SvgIcon, Typography, useTheme } from '@mui/material';
import { ChevronRight } from 'lucide-react';
import React from 'react';

import { matchPath, useMatches, useNavigate } from 'react-router';

const DropdownLink: React.FC<{ links: TListPaths }> = ({ links }) => {
  const theme = useTheme();
  const matches = useMatches();

  const { paths, parentPath, icon, name } = links;

  const isActive = matches.some((match) => match.pathname.includes(parentPath));
  const { isOpen, onToggle } = useDisclosure(isActive);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!matches.some((match) => match.pathname.includes(parentPath)) && isOpen) {
      onToggle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matches, parentPath]);

  return (
    <Box>
      <Flex
        onClick={onToggle}
        width={'100%'}
        py={1}
        px={1}
        gap={2}
        justifyContent={'space-between'}
        alignItems={'center'}
        style={{ cursor: 'pointer' }}
        borderRadius={3}
        sx={{
          transition: 'background-color 300ms linear 0ms',
          backgroundColor: isActive
            ? `rgba(${theme.palette.secondary.lightChannel}, .1)`
            : isOpen
              ? `rgba(${theme.palette.secondary.lightChannel}, .1)`
              : 'transparent',
          '&:hover': {
            backgroundColor: `rgba(${theme.palette.secondary.lightChannel}, .1)`
          }
        }}
      >
        <Flex gap={2}>
          {icon ? (
            <SvgIcon
              inheritViewBox
              component={icon}
              style={{ color: isActive ? theme.palette.secondary.main : theme.palette.text.secondary, fill: 'none' }}
            />
          ) : null}
          <Typography fontSize={'16px'} fontWeight={700} color={isActive ? 'secondary.main' : 'text.secondary'}>
            {name}
          </Typography>
        </Flex>
        <ChevronRight
          size={18}
          style={{
            color: isActive ? theme.palette.secondary.main : theme.palette.text.secondary,
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 300ms cubic-bezier(.17,.67,.83,.67)'
          }}
        />
      </Flex>
      <Collapse in={isOpen} sx={{ pl: 'calc(var(--sidebar-padding-link) + calc(1.5rem / 2))' }}>
        <Box
          position={'relative'}
          display={'flex'}
          flexDirection={'column'}
          gap={1}
          margin={0}
          paddingLeft={'var(--sidebar-bullet-width)'}
          component={'ul'}
          sx={{
            listStyle: 'none',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: '2px',
              top: 0,
              left: 0,
              bottom: 'calc(var(--sidebar-collapse-link-height) - 2px - var(--sidebar-bullet-width)/2)',
              bgcolor: theme.palette.secondary.light
            }
          }}
        >
          {paths.map((path, index) => {
            const isSubPathActive = matches.some((match) => matchPath(`${path.path}/*`, match.pathname));
            const isAdminPath = path.adminPath;
            return isAdminPath ? (
              <AdminButtonWrapper key={index}>
                <Flex alignItems={'center'} position={'relative'} margin={0} mt={1} component={'li'}>
                  <Typography
                    onClick={() => navigate(path.path)}
                    height={'var(--sidebar-collapse-link-height)'}
                    pl={1}
                    fontSize={'15px'}
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
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        width: 'calc(var(--sidebar-bullet-width) / 1.2)',
                        height: 'var(--sidebar-bullet-width)',
                        bgcolor: 'transparent',
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: '7px',
                        borderWidth: '0 0 2px 2px',
                        borderColor: theme.palette.secondary.light,
                        borderStyle: 'solid',
                        transform: 'translate(calc(var(--sidebar-bullet-width) * -1), calc(var(--sidebar-bullet-width) * -0.5))'
                      }
                    }}
                  >
                    {path.name}
                  </Typography>
                </Flex>
              </AdminButtonWrapper>
            ) : (
              <Flex alignItems={'center'} position={'relative'} key={index} margin={0} mt={1} component={'li'}>
                <Typography
                  onClick={() => navigate(path.path)}
                  height={'var(--sidebar-collapse-link-height)'}
                  pl={1}
                  fontSize={'15px'}
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
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      width: 'calc(var(--sidebar-bullet-width) / 1.2)',
                      height: 'var(--sidebar-bullet-width)',
                      bgcolor: 'transparent',
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: '7px',
                      borderWidth: '0 0 2px 2px',
                      borderColor: theme.palette.secondary.light,
                      borderStyle: 'solid',
                      transform: 'translate(calc(var(--sidebar-bullet-width) * -1), calc(var(--sidebar-bullet-width) * -0.5))'
                    }
                  }}
                >
                  {path.name}
                </Typography>
              </Flex>
            );
          })}
        </Box>
      </Collapse>
    </Box>
  );
};

export default DropdownLink;
