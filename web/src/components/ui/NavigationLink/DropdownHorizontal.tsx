import { Flex } from '@/components/common';
import { TCategory, TNavigationLink } from '@/types';
import { Box, Divider, Typography, useTheme } from '@mui/material';
import { ChevronDown } from 'lucide-react';
import React from 'react';
import NavigationLink from '.';

const SingleCategoryDisplay: React.FC<{ category: TCategory }> = ({ category }) => {
  const { paths, title } = category;

  return (
    <Flex height={'100%'} flexDirection={'column'} gap={3} py={3} pr={10} pl={4}>
      <Typography variant="h5">{title}</Typography>
      <Box display={'flex'} flexDirection={'column'} gap={1} pl={1} minWidth={'200px'}>
        {paths?.map((path, index) => <NavigationLink ignoreActive key={index} link={path} type="horizontal" />)}
      </Box>
    </Flex>
  );
};

const DropdownHorizontal: React.FC<{ link: TNavigationLink }> = ({ link }) => {
  const theme = useTheme();
  const { categories } = link;

  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const toggleHover = () => setIsHovered((prev) => !prev);

  React.useEffect(() => {
    if (isHovered) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isHovered]);

  return (
    <Flex onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <Typography
        sx={{
          position: 'relative',
          cursor: 'pointer',
          '&::before': {
            content: '"•"',
            color: !isHovered ? 'text.secondary' : 'primary',
            position: 'absolute',
            left: '-15px',
            opacity: !isHovered ? 0 : 1,
            top: '50%',
            transform: !isHovered ? 'scale(0) translateY(-50%)' : 'scale(1) translateY(-50%)',
            transition: 'opacity 0.2s, transform 0.2s',
            fontSize: '20px'
          }
        }}
        fontSize={'.9rem'}
        fontWeight={isHovered ? 700 : 500}
        color={!isHovered ? 'text.secondary' : 'primary.main'}
        display={'flex'}
        alignItems={'center'}
        gap={1}
      >
        {link.name}
        <ChevronDown
          size={14}
          style={{
            transition: 'transform .3s ease-in-out',
            transform: isHovered ? 'rotate(180deg)' : 'rotate(0)'
          }}
        />
      </Typography>
      <Flex
        justifyContent={'center'}
        position={'fixed'}
        top={'calc(72px/2)'}
        paddingTop={'25px'}
        left={0}
        width={'100%'}
        bgcolor={`transparent`}
        sx={{
          transition: 'opacity .3s cubic-bezier(.17,.67,.83,.67)',
          opacity: isHovered ? 1 : 0,
          visibility: isVisible ? 'visible' : 'hidden'
        }}
        zIndex={2500}
      >
        <Flex
          bgcolor={`rgba(${theme.palette.primary.lightChannel}, .7)`}
          borderRadius={7}
          sx={{
            backdropFilter: 'blur(25px)',
            boxShadow: 1,
            borderWidth: '0 1px 0 1px',
            borderColor: `rgba(${theme.palette.secondary.lightChannel}, .4)`,
            borderStyle: 'solid'
          }}
          width={'fit-content'}
          justifyContent={'center'}
        >
          {categories?.map((category, index) => (
            <React.Fragment key={index}>
              <SingleCategoryDisplay key={index} category={category} />
              {index !== categories.length - 1 ? (
                <Divider
                  orientation="vertical"
                  sx={{
                    bgcolor: `rgba(${theme.palette.secondary.lightChannel}, .4)`
                  }}
                />
              ) : null}
            </React.Fragment>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DropdownHorizontal;
