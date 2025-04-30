import { Flex } from '@/components/common';
import { Box, Container, useTheme } from '@mui/material';

import DashedDivider from '../../components/DashedDivider';
import DocsBody from '../../components/DocsBody';
import DocsSubtitle from '../../components/DocsSubtitle';
import DocsTitle from '../../components/DocsTitle';
import FileText from '../../components/FileText';

const Logo: React.FC = () => {
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
          <DocsTitle>Logo</DocsTitle>
          <DocsBody component={'div'}>
            To customize your logo:
            <ul>
              <li style={{ marginBottom: '4px' }}>
                Update the logo .svgs inside <FileText>./web/src/assets</FileText>
              </li>
              <li style={{ marginBottom: '4px' }}>
                Update the favicon inside <FileText>./web/public</FileText>
              </li>
            </ul>
          </DocsBody>
        </Box>
        <DashedDivider />
        <Box>
          <DocsSubtitle>Dark Theme Logo</DocsSubtitle>
          <DocsBody mb={2}>
            Update or replace <FileText>logo_dark.svg</FileText> inside <FileText>./web/src/assets</FileText>.
          </DocsBody>
        </Box>
        <DashedDivider />
        <Box>
          <DocsSubtitle>Light Theme Logo</DocsSubtitle>
          <DocsBody mb={2}>
            Update or replace <FileText>logo_light.svg</FileText> inside <FileText>./web/src/assets</FileText>.
          </DocsBody>
        </Box>
        <DashedDivider />
        <Box>
          <DocsSubtitle>Favicon</DocsSubtitle>
          <DocsBody mb={2}>
            Update or replace <FileText>logo.svg</FileText> inside <FileText>./web/public</FileText>.
          </DocsBody>
        </Box>
      </Flex>
    </Container>
  );
};

export default Logo;
