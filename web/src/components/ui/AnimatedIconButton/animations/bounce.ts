import { IconButtonOwnProps } from '@mui/material';
import { TAnimationSpeed } from './rotate';

const speedMap: Record<TAnimationSpeed, string> = {
  slow: '2s',
  medium: '1.5s',
  fast: '1s'
};

export const BounceAnimation = (speed: TAnimationSpeed): IconButtonOwnProps['sx'] => {
  return {
    animation: `bounce ${speedMap[speed]} ease infinite`,
    '@keyframes bounce': {
      '0%, 20%, 50%, 80%, 100%': {
        transform: 'translateY(0)'
      },
      '40%': {
        transform: 'translateY(-4px)'
      },
      '60%': {
        transform: 'translateY(-1px)'
      }
    }
  };
};
