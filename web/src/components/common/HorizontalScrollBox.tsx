import { Box, BoxProps, useTheme } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import Flex from './Flex.component';

const HorizontalScrollBox: React.FC<
  {
    children?: React.ReactNode;
    disableLeftFade?: boolean;
    disableRightFade?: boolean;
    disableFade?: boolean;
    fadeColor?: string;
  } & BoxProps
> = ({ children, disableLeftFade, disableRightFade, disableFade, fadeColor, ...rest }) => {
  const theme = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [atScrollEnd, setAtScrollEnd] = React.useState<boolean>(false);
  const [atScrollStart, setAtScrollStart] = React.useState<boolean>(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollableWidth = scrollContainerRef.current.scrollWidth;
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const containerWidth = scrollContainerRef.current.clientWidth;

      if (scrollPosition === 0) {
        setAtScrollStart(true);
      } else {
        setAtScrollStart(false);
      }

      if (scrollableWidth - scrollPosition - 30 <= containerWidth) {
        setAtScrollEnd(true);
      } else {
        setAtScrollEnd(false);
      }
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <Flex minWidth={'100%'} {...rest} flexDirection={'row'} borderRadius={3} position={'relative'} flexShrink={0}>
      {!disableFade && (
        <>
          <Box
            position={'absolute'}
            width={'100px'}
            height={'100%'}
            mr={'calc(16px * -1)'}
            sx={{
              borderRadius: '0 24px 24px 0',
              top: 0,
              right: 0,
              background: `linear-gradient(90deg, rgba(0,0,0,0) 20%, ${fadeColor ?? theme.palette.background.default} 50%)`,
              opacity: atScrollEnd ? 0 : 1,
              transition: 'opacity 150ms linear',
              zIndex: 10
            }}
            display={disableRightFade ? 'none' : 'unset'}
          />
          <Box
            position={'absolute'}
            width={'100px'}
            height={'100%'}
            ml={'calc(16px * -1)'}
            sx={{
              borderRadius: '0 24px 24px 0',
              top: 0,
              left: 0,
              background: `linear-gradient(90deg, ${fadeColor ?? theme.palette.background.default} 20%, rgba(0,0,0,0) 80%)`,
              opacity: atScrollStart ? 0 : 1,
              transition: 'opacity 150ms linear',
              zIndex: 10
            }}
            display={disableLeftFade ? 'none' : 'unset'}
          />
        </>
      )}
      <Flex ref={scrollContainerRef} flexDirection={'row'} gap={2} py={3} overflow={'auto'}>
        {children}
      </Flex>
    </Flex>
  );
};

export default HorizontalScrollBox;
