import { Flex } from '@/components/common';
import { Box, Container, useTheme } from '@mui/material';

import DashedDivider from '../../components/DashedDivider';
import DocsBody from '../../components/DocsBody';
import DocsTitle from '../../components/DocsTitle';
import FileText from '../../components/FileText';
import Backed from './components/Backed';
import FrontEnd from './components/FrontEnd';

const Routing: React.FC = () => {
  const theme = useTheme();
  return (
    <Container maxWidth={'sm'} disableGutters>
      <Flex
        py={5}
        maxWidth={'100%'}
        flexDirection={'column'}
        gap={3}
        sx={{
          [theme.breakpoints.down('sm')]: {
            px: 3
          }
        }}
      >
        <Box>
          <DocsTitle>Routing</DocsTitle>
          <DocsBody component={'div'}>
            Routing is handled by:
            <Box mt={2}>
              <ul>
                <li style={{ marginBottom: '4px' }}>
                  <FileText>Express.js - Router</FileText> - Back-End
                </li>
                <li style={{ marginBottom: '4px' }}>
                  <FileText>react-router</FileText> - Front-End
                </li>
              </ul>
            </Box>
          </DocsBody>
        </Box>
        <DashedDivider />
        <Backed />
        <DashedDivider />
        <FrontEnd />
      </Flex>
    </Container>
  );
};

export default Routing;
