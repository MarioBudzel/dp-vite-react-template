import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

const DocsBody: React.FC<TypographyProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <Typography variant="body1" {...rest}>
      {children}
    </Typography>
  );
};

export default DocsBody;
