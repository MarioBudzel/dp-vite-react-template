import { Typography, TypographyOwnProps } from '@mui/material';
import Crumbs from './Crumbs';
import Flex from './Flex.component';

const PageTitle: React.FC<{ children?: React.ReactNode; pageTitle: string } & TypographyOwnProps> = ({ children, pageTitle, ...rest }) => {
  return (
    <Flex flexDirection={'column'} gap={2}>
      <Typography variant="h3" fontWeight={'bold'} {...rest}>
        {pageTitle}
      </Typography>
      <Crumbs />
      {children}
    </Flex>
  );
};

export default PageTitle;
