import { Box, BoxProps, useTheme } from '@mui/material';
import Flex from './Flex.component';

type TSimpleProgressBarProps = {
  size?: 'small' | 'medium' | 'large';
  progress?: string;
  colorScheme?: 'success' | 'info' | 'error' | 'warning' | 'primary' | 'secondary';
};

const sizeMap: { [K in TSimpleProgressBarProps['size']]?: string } = {
  small: '6px',
  medium: '12px',
  large: '24px'
};

const SimpleProgressBar: React.FC<TSimpleProgressBarProps & BoxProps> = ({
  size = 'small',
  progress,
  colorScheme = 'secondary',
  ...rest
}) => {
  const theme = useTheme();
  return (
    <Flex {...rest}>
      <Box
        position={'relative'}
        width={'100%'}
        height={sizeMap[size]}
        px={sizeMap[size]}
        sx={{
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            borderRadius: '50% 0 0 50%',
            height: sizeMap[size],
            width: sizeMap[size],
            bgcolor: `rgba(${theme.palette[colorScheme].lightChannel}, .5)`
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            borderRadius: '0 50% 50% 0',
            height: sizeMap[size],
            width: sizeMap[size],
            bgcolor: `rgba(${theme.palette[colorScheme].lightChannel}, .5)`
          }
        }}
      >
        <Box width={'100%'} height={'100%'} bgcolor={`rgba(${theme.palette[colorScheme].lightChannel}, .5)`}></Box>
        <Box
          position={'absolute'}
          top={0}
          left={0}
          width={progress ?? '0%'}
          height={sizeMap[size]}
          px={sizeMap[size]}
          sx={{
            transition: 'width 300ms linear',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              borderRadius: '50% 0 0 50%',
              height: sizeMap[size],
              width: !progress || progress === '0%' ? 0 : sizeMap[size],
              bgcolor: `${colorScheme}.main`,
              transition: 'width 300ms linear'
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              borderRadius: '0 50% 50% 0',
              height: sizeMap[size],
              width: !progress || progress === '0%' ? 0 : sizeMap[size],
              bgcolor: `${colorScheme}.main`,
              transition: 'width 300ms linear',
              zIndex: 1
            }
          }}
        >
          <Box height={'100%'} width={'100%'} bgcolor={`${colorScheme}.main`} />
        </Box>
      </Box>
    </Flex>
  );
};

export default SimpleProgressBar;
