import { Box, BoxProps } from '@mui/material';

const BorderWrapper: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box px={2} py={2} border={'1px solid'} borderRadius={2} {...rest}>
      {children}
    </Box>
  );
};

export default BorderWrapper;
