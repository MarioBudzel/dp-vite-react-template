import { Flex } from '@/components/common';
import { ENavigationLinkTypes } from '@/enums';
import { TNavigationLink } from '@/types';

import { Typography, useTheme } from '@mui/material';
import React from 'react';
import { useLocation, useMatches, useNavigate } from 'react-router';
import DropdownHorizontal from './DropdownHorizontal';
import DropdownVertical from './DropdownVertical';

type NavigationLinkProps = {
  link: TNavigationLink;
  type?: 'horizontal' | 'vertical';
  ignoreActive?: boolean;
};

const HorizontalNavigationLink: React.FC<Omit<NavigationLinkProps, 'type'>> = ({ link, ignoreActive }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const matches = useMatches();

  const isActive = ignoreActive
    ? false
    : matches.some((match) => match.pathname === link.path || (link.path === '' && currentPath === '/'));

  return link.type === ENavigationLinkTypes.DROPDOWN ? (
    <DropdownHorizontal link={link} />
  ) : (
    <Flex
      onClick={
        !isActive
          ? () => {
              navigate(link.path);
            }
          : undefined
      }
    >
      <Typography
        sx={{
          position: 'relative',
          cursor: 'pointer',
          '&::before': {
            content: '"•"',
            color: !isActive ? 'text.secondary' : 'primary',
            position: 'absolute',
            left: '-15px',
            opacity: !isActive ? 0 : 1,
            top: '50%',
            transform: !isActive ? 'scale(0) translateY(-50%)' : 'scale(1) translateY(-50%)',
            transition: 'opacity 0.2s, transform 0.2s',
            fontSize: '20px'
          },
          '&:hover::before': {
            opacity: 1,
            transform: 'scale(1) translateY(-50%)'
          }
        }}
        fontSize={'.9rem'}
        fontWeight={isActive ? 700 : 500}
        color={!isActive ? 'text.secondary' : 'primary.main'}
        display={'flex'}
        alignItems={'center'}
        gap={1}
      >
        {link.name}
      </Typography>
    </Flex>
  );
};

const VerticalNavigationLink: React.FC<Omit<NavigationLinkProps, 'type'>> = ({ link }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const matches = useMatches();
  const theme = useTheme();

  const isActive = matches.some((match) => match.pathname === link.path || (link.path === '' && currentPath === '/'));

  return link.type === ENavigationLinkTypes.DROPDOWN ? (
    <DropdownVertical link={link} />
  ) : (
    <Flex
      onClick={
        !isActive
          ? () => {
              navigate(link.path);
            }
          : undefined
      }
      width={'100%'}
      sx={{
        cursor: 'pointer',
        transition: '0.15s ease-in-out, color .3s ease-in-out',
        color: !isActive ? 'text.secondary' : 'primary.contrastText',
        background: !isActive
          ? `radial-gradient(circle at top left, rgba(${theme.palette.primary.mainChannel}, 1), transparent var(--y, 0%))  var(--x, 100%)/ 200%`
          : `radial-gradient(circle at top left, rgba(${theme.palette.primary.mainChannel}, .9) 0%, transparent 80%)`,
        '&:hover': {
          '--x': '80%',
          '--y': '70%',
          color: !isActive ? 'primary.contrastText' : 'primary.contrastText'
        }
      }}
      paddingLeft={4}
      py={1}
    >
      <Typography fontSize={'1rem'} fontWeight={isActive ? 700 : 500}>
        {link.name}
      </Typography>
    </Flex>
  );
};

const NavigationLink: React.FC<NavigationLinkProps> = ({ link, type = 'horizontal', ignoreActive }) => {
  return type === 'horizontal' ? (
    <HorizontalNavigationLink ignoreActive={ignoreActive} link={link} />
  ) : (
    <VerticalNavigationLink link={link} />
  );
};

export default NavigationLink;
