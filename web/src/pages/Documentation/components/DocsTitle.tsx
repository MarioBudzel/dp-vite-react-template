import { Typography, TypographyProps } from '@mui/material';

const DocsTitle: React.FC<TypographyProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Typography my={2} variant="h3" fontWeight={700} {...rest}>
      {children}
    </Typography>
  );
};

export default DocsTitle;
