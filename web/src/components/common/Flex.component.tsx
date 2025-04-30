import { Box, BoxProps } from '@mui/material';
import React from 'react';

export type TFlexProps = {
  children?: React.ReactNode;
} & BoxProps;

const Flex = React.forwardRef<unknown, TFlexProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box display={'flex'} {...rest} ref={ref}>
      {children}
    </Box>
  );
});

export default Flex;
