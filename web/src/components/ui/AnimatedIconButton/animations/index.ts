import { TAnimationTypes } from '@/types';
import { IconButtonOwnProps } from '@mui/material';
import { BounceAnimation } from './bounce';
import { RotateAnimation, TAnimationSpeed } from './rotate';

export const animations = (speed: TAnimationSpeed): { [K in TAnimationTypes]: IconButtonOwnProps['sx'] } => ({
  bounce: BounceAnimation(speed),
  rotate: RotateAnimation(speed)
});
