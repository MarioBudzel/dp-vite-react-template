import { IconButtonOwnProps } from '@mui/material';

export type TAnimationSpeed = 'slow' | 'medium' | 'fast';

const speedMap: Record<TAnimationSpeed, string> = {
  slow: '10s',
  medium: '5s',
  fast: '2s'
};

export const RotateAnimation = (speed: TAnimationSpeed): IconButtonOwnProps['sx'] => {
  return {
    animation: `rotate ${speedMap[speed]}  linear infinite`,
    '@keyframes rotate': {
      '0%': {
        transform: 'rotate(0deg)'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    }
  };
};
