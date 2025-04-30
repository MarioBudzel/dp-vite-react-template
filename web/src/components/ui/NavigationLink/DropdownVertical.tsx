import { Flex } from '@/components/common';
import useDisclosure from '@/hooks/useDisclosure';
import { TCategory, TNavigationLink } from '@/types';
import { Collapse, Typography, useTheme } from '@mui/material';
import { ChevronDown } from 'lucide-react';
import React from 'react';
import NavigationLink from '.';

const SingleCategoryDisplay: React.FC<{ category: TCategory }> = ({ category }) => {
  const { paths, title } = category;
  return (
    <React.Fragment>
      <Typography variant="subtitle1" fontWeight={700} color={'secondary.dark'} textTransform={'uppercase'}>
        {title}
      </Typography>
      <Flex flexDirection="column" gap={1} pl={2}>
        {paths?.map((path, index) => <NavigationLink ignoreActive key={index} link={path} type="horizontal" />)}
      </Flex>
    </React.Fragment>
  );
};

const DropdownVertical: React.FC<{ link: TNavigationLink }> = ({ link }) => {
  const { categories } = link;
  const theme = useTheme();

  const { isOpen: isActive, onToggle } = useDisclosure();

  return (
    <React.Fragment>
      <Flex
        onClick={onToggle}
        width={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
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
        px={4}
        py={1}
      >
        <Typography fontSize={'1rem'} fontWeight={isActive ? 700 : 500}>
          {link.name}
        </Typography>
        <ChevronDown
          size={18}
          style={{
            transition: 'transform .3s ease-in-out',
            transform: isActive ? 'rotate(180deg)' : 'rotate(0)'
          }}
        />
      </Flex>
      <Collapse in={isActive}>
        <Flex flexDirection={'column'} gap={2} width={'100%'} bgcolor={'inherit'} px={4} py={1}>
          {categories?.map((category, index) => <SingleCategoryDisplay category={category} key={index} />)}
        </Flex>
      </Collapse>
    </React.Fragment>
  );
};

export default DropdownVertical;
