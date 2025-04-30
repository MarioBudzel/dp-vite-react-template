import { Flex } from '@/components/common';
import { Box, Container, useTheme } from '@mui/material';

import CodeBlock from '@/components/common/CodeBlock';
import Helper from '@/components/common/Helper';
import DashedDivider from '../../components/DashedDivider';
import DocsBody from '../../components/DocsBody';
import DocsSubtitle from '../../components/DocsSubtitle';
import DocsTitle from '../../components/DocsTitle';
import FileText from '../../components/FileText';

const Colors: React.FC = () => {
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
          <DocsTitle>Colors</DocsTitle>
          <Helper colorScheme="warning">All coloros are defined using MUI Theme</Helper>
        </Box>
        <DashedDivider />
        <Box>
          <DocsSubtitle>Default colors</DocsSubtitle>
          <DocsBody mb={2}>
            To customize <b>Default Colors</b> you need to update the <FileText>DefaultColors.ts</FileText> file.
          </DocsBody>
          <CodeBlock language="json" rounded>
            {`{
  success: {
    main: '#13DEB9',
    light: '#E6FFFA',
    dark: '#02b3a9',
    contrastText: '#ffffff',
    lightChannel: '230, 255, 250'
  },
  info: {
    main: '#7684AA',
    light: 'rgb(145, 156, 187)',
    dark: 'rgb(82, 92, 118)',
    contrastText: '#ffffff',
    lightChannel: '145, 156, 187'
  },
  // Other Colors...
}`}
          </CodeBlock>
        </Box>
        <DashedDivider />
        <Box>
          <DocsSubtitle>Dark theme</DocsSubtitle>
          <DocsBody mb={2}>
            To customize <b>Dark Theme Colors</b> you need to update the <FileText>DarkThemeColors.ts</FileText> file.
          </DocsBody>
          <CodeBlock language="json" rounded>
            {`{
  name: 'BLUE_THEME',
  palette: {
    primary: {
    main: '#5D87FF',
    light: '#253662',
    dark: '#4570EA',
    contrastText: '#ffffff',
    mainChannel: '93, 135, 255',
    lightChannel: '37, 54, 98'
  },
  secondary: {
    main: '#FFD15C',
    light: 'rgb(255, 218, 124)',
    dark: 'rgb(178, 146, 64)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
    lightChannel: '255, 218, 124',
    darkChannel: '178, 146, 64'
  },
  // Other Colors...
}`}
          </CodeBlock>
        </Box>
        <DashedDivider />
        <Box>
          <DocsSubtitle>Light theme</DocsSubtitle>
          <DocsBody mb={2}>
            To customize <b>Light Theme Colors</b> you need to update the <FileText>LightThemeColors.ts</FileText> file.
          </DocsBody>
          <CodeBlock language="json" rounded>
            {`{
  name: 'BLUE_THEME',
  palette: {
    background: {
    default: '#F7FFF9',
    paper: '#fff',
    defaultChannel: '247, 255, 249',
    paperChannel: '255, 255, 255'
  },
  primary: {
    main: '#5D87FF',
    light: '#ECF2FF',
    dark: '#4570EA',
    contrastText: '#000',
    mainChannel: '93, 135, 255'
  },
  // Other Colors...
}`}
          </CodeBlock>
        </Box>
      </Flex>
    </Container>
  );
};

export default Colors;
