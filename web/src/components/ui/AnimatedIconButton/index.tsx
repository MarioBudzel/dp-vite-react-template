import { TAnimationTypes } from '@/types';
import { IconButton, IconButtonProps } from '@mui/material';
import React from 'react';
import { animations } from './animations';
import { TAnimationSpeed } from './animations/rotate';

type TAnimatedIconButton = {
  animationType: TAnimationTypes;
  animationSpeed: TAnimationSpeed;
  children: React.ReactElement;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AnimatedIconButton = React.forwardRef<unknown, TAnimatedIconButton & IconButtonProps>((props, ref) => {
  const { animationType, children, animationSpeed, ...rest } = props;
  const animationsMap = animations(animationSpeed);
  return (
    <IconButton sx={animationsMap[animationType]} {...rest}>
      {children}
    </IconButton>
  );
});

export default AnimatedIconButton;
