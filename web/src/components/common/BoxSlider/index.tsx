import { Box, BoxProps, IconButton, useTheme } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect } from 'react';
import Flex from '../Flex.component';
import BoxSliderChild from './BoxSlider.Child';

export type TBoxSliderHandle = {
  getCurrentViewIndex: () => number;
};

const BoxSlider = React.forwardRef<TBoxSliderHandle, { animationSpeed?: number; children: React.ReactNode } & BoxProps>(
  ({ animationSpeed = 3000, children, ...rest }, ref) => {
    const theme = useTheme();
    const [viewIndex, setViewIndex] = React.useState<number>(0);
    const [isHovered, setIsHovered] = React.useState<boolean>(false);
    const [moveTranslateToEnd, setMoveTranslateToEnd] = React.useState<boolean>(false);
    const [moveFirstElementToTheEnd, setMoveFirstElementToTheEnd] = React.useState<boolean>(false);
    const childrenCount = React.Children.count(children);

    const [resetTranslate, setResetTranslate] = React.useState<boolean>(false);

    if (React.Children.toArray(children).some((child) => !React.isValidElement(child) || child.type !== BoxSliderChild))
      throw new Error('Box Slider children need to be BoxSlider.Child components!');
    if (childrenCount < 2) throw new Error('Box Slider needs at least 2 child elements to work properly!');

    useEffect(() => {
      if (isHovered) return;
      const interval = setInterval(() => {
        setViewIndex((prevCount) => (prevCount > childrenCount - 1 ? 0 : prevCount + 1));
      }, animationSpeed);

      return () => clearInterval(interval);
    }, [isHovered, childrenCount, animationSpeed]);

    const handleTransitionEnd = () => {
      setMoveFirstElementToTheEnd(false);
      if (viewIndex === childrenCount) {
        setResetTranslate(true);
        setViewIndex(0);
        setTimeout(() => {
          setResetTranslate(false);
        }, 50);
      }
    };

    const handleNext = () => {
      setViewIndex((prev) => prev + 1);
      setTimeout(() => {
        if (viewIndex === childrenCount) setViewIndex(0);
      }, 50);
    };
    const handlePrevious = () => {
      setViewIndex((prev) => {
        if (prev === 0) {
          setMoveFirstElementToTheEnd(true);
          setMoveTranslateToEnd(true);
          setTimeout(() => setMoveTranslateToEnd(false), 50);
        }
        return prev === 0 ? childrenCount - 1 : prev - 1;
      });
    };
    const handleIndicatorClick = (index: number) => {
      if (viewIndex === childrenCount - 1 && index === 0) return handleNext();
      if (viewIndex === 0 && index === childrenCount - 1) return handlePrevious();
      setViewIndex(index);
    };

    React.useImperativeHandle(ref, () => ({
      getCurrentViewIndex: () => viewIndex
    }));

    return (
      <Flex
        {...rest}
        maxWidth={'100%'}
        height={'100%'}
        borderRadius={3}
        flexGrow={1}
        boxShadow={2}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box
          maxWidth={'100%'}
          width={'100%'}
          sx={{
            height: '100%',
            position: 'relative',
            overflow: 'hidden'
          }}
          borderRadius={3}
        >
          <Flex
            maxWidth={'100%'}
            zIndex={1}
            py={0}
            width={'100%'}
            position={'absolute'}
            top={0}
            left={0}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Flex gap={1} px={2} flexGrow={0}>
              {React.Children.map(children, (_, index) => {
                const isActive = index === 0 ? Boolean(index === viewIndex || viewIndex === childrenCount) : Boolean(index === viewIndex);
                return (
                  <Box
                    onClick={() => handleIndicatorClick(index)}
                    key={index}
                    width={'8px'}
                    height={'8px'}
                    borderRadius={'50%'}
                    bgcolor={isActive ? 'secondary.main' : `rgba(${theme.palette.secondary.lightChannel}, .7)`}
                    boxShadow={2}
                    sx={{
                      cursor: 'pointer',
                      transformOrigin: 'center center',
                      transform: isActive ? 'scale(1)' : 'scale(.7)',
                      transition: 'background-color .2s cubic-bezier(.17,.67,.83,.67), transform .3s cubic-bezier(.17,.67,.83,.67)',
                      '&:hover': {
                        transform: 'scale(1)'
                      }
                    }}
                  />
                );
              })}
            </Flex>
            <Flex
              display={'inline-flex'}
              gap={1}
              px={2}
              alignItems={'center'}
              sx={{
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 200ms linear'
              }}
            >
              <IconButton aria-label="previous" onClick={handlePrevious}>
                <ChevronLeft style={{ color: 'white' }} />
              </IconButton>
              <IconButton aria-label="next" onClick={handleNext}>
                <ChevronRight style={{ color: 'white' }} />
              </IconButton>
            </Flex>
          </Flex>
          <Box
            maxWidth={'100%'}
            component={'ul'}
            sx={{
              display: 'flex',
              backfaceVisibility: 'hidden',
              margin: 0,
              listStyleType: 'none',
              height: '100%',
              padding: 0,
              transform: `translate3d(${moveTranslateToEnd ? -100 * childrenCount : resetTranslate ? 0 : -100 * viewIndex}%, 0, 0)`,
              transition: !moveTranslateToEnd && !resetTranslate ? '.3s cubic-bezier(.22,.02,.46,.87)' : 'none'
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {React.Children.map(children, (child, index) =>
              index === 0 ? (
                <Box
                  maxWidth={'inherit'}
                  component={'li'}
                  sx={{
                    display: 'block',
                    position: 'relative',
                    minWidth: 0,
                    flex: '0 0 100%',
                    transform: moveFirstElementToTheEnd
                      ? `translate3d(${100 * childrenCount}%, 0, 0)`
                      : viewIndex === childrenCount
                        ? `translate3d(${resetTranslate ? 0 : 100 * viewIndex}%, 0, 0)`
                        : ''
                  }}
                >
                  {child}
                </Box>
              ) : (
                <Box
                  component={'li'}
                  sx={{
                    display: 'block',
                    position: 'relative',
                    minWidth: 0,
                    flex: '0 0 100%'
                  }}
                >
                  {child}
                </Box>
              )
            )}
          </Box>
        </Box>
      </Flex>
    );
  }
);

export default BoxSlider;
