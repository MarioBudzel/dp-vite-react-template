import { BoxProps } from '@mui/material';
import React from 'react';
import Flex from '../Flex.component';

const SplitBox: React.FC<{ children: React.ReactNode } & BoxProps> = ({ children, ...rest }) => {
  const childrenCount = React.Children.count(children);

  if (childrenCount < 2) throw new Error('SplitBox works best with only 2 child elements!');
  return (
    <Flex justifyContent={'space-between'} py={2} px={2} height={'100%'} borderRadius={3} boxShadow={2} {...rest}>
      {children}
    </Flex>
  );
};

export default SplitBox;
