import { Typography, TypographyProps } from '@mui/material';

const DocsSubtitle: React.FC<TypographyProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Typography my={1} variant="h4" {...rest}>
      {children}
    </Typography>
  );
};

export default DocsSubtitle;
