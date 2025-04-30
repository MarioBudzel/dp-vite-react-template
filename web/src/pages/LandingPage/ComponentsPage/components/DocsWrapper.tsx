import { Flex } from '@/components/common';
import { Container, useTheme } from '@mui/material';
import DocsFooter from '../components/DocsFooter';

const DocsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme();
  return (
    <Container
      maxWidth={'sm'}
      sx={{
        overflow: 'hidden',
        py: 5,
        gap: 10,
        [theme.breakpoints.down('sm')]: {
          px: 2
        }
      }}
    >
      <Flex flexDirection={'column'} gap={10}>
        {children}
        <DocsFooter />
      </Flex>
    </Container>
  );
};

export default DocsWrapper;
