import { Flex } from '@/components/common';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const ExampleWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      bgcolor={'background.paper'}
      border={'1px solid'}
      borderColor={'primary.main'}
      sx={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
      py={2}
    >
      {children}
    </Flex>
  );
};

export default ExampleWrapper;
