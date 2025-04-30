import Drawer, { TDrawerProps } from '@/components/common/Drawer';
import { DrawerProps, IconButton, IconButtonProps } from '@mui/material';
import React from 'react';
import AnimatedIconButton from '../AnimatedIconButton';
import { TAnimationSpeed } from '../AnimatedIconButton/animations/rotate';

type TIconDrawerProps = {
  children?: React.ReactElement;
  icon: React.ReactElement;
  animateIcon?: boolean;
  animationType?: 'rotate' | 'bounce';
  animationSpeed?: TAnimationSpeed;
  iconButtonProps?: IconButtonProps;
  drawerProps?: Omit<DrawerProps, 'open' | 'onClose'> & Omit<TDrawerProps, 'children'>;
};

const IconDrawer = React.forwardRef<unknown, TIconDrawerProps>(
  ({ children, animateIcon, animationType = 'rotate', animationSpeed = 'medium', icon, ...rest }, ref) => {
    const drawerRef = React.useRef<{
      onToggle: () => void;
    }>(null);

    React.useImperativeHandle(ref, () => ({
      onToggle: drawerRef?.current?.onToggle
    }));

    return (
      <React.Fragment>
        {animateIcon ? (
          <AnimatedIconButton
            onClick={() => drawerRef?.current?.onToggle?.()}
            animationSpeed={animationSpeed}
            animationType={animationType}
          >
            {icon}
          </AnimatedIconButton>
        ) : (
          <IconButton onClick={() => drawerRef?.current?.onToggle?.()} {...rest.iconButtonProps}>
            {icon}
          </IconButton>
        )}
        <Drawer ref={drawerRef} {...rest.drawerProps}>
          {children}
        </Drawer>
      </React.Fragment>
    );
  }
);

export default IconDrawer;
