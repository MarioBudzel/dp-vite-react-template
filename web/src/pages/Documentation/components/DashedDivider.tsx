import { Box, BoxProps } from '@mui/material';

const DashedDivider: React.FC<Omit<BoxProps, 'children'>> = (props) => {
  return <Box borderBottom={'1px dashed'} borderColor={'text.disabled'} {...props} />;
};

export default DashedDivider;
