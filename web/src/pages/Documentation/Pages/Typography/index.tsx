import { Flex } from '@/components/common';
import { Box, Container, useTheme } from '@mui/material';

import CodeBlock from '@/components/common/CodeBlock';
import DashedDivider from '../../components/DashedDivider';
import DocsBody from '../../components/DocsBody';
import DocsSubtitle from '../../components/DocsSubtitle';
import DocsTitle from '../../components/DocsTitle';
import FileText from '../../components/FileText';

const Typography: React.FC = () => {
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
          <DocsTitle>Typography</DocsTitle>
          <DocsBody component={'div'}>
            Typography is managed by these files:
            <ul>
              <li style={{ marginBottom: '4px' }}>
                <FileText>App.css</FileText>
              </li>
              <li style={{ marginBottom: '4px' }}>
                <FileText>typography.ts</FileText>
              </li>
              <li style={{ marginBottom: '4px' }}>
                <FileText>index.tsx</FileText> inside themes directory
              </li>
              <li style={{ marginBottom: '4px' }}>
                <FileText>font-slice.ts</FileText>
              </li>
            </ul>
            <DashedDivider />
            <ul>
              <li>
                <FileText>SettingsDrawer.tsx</FileText>
              </li>
            </ul>
          </DocsBody>
        </Box>
        <DashedDivider />
        <Box>
          <DocsTitle>Adding new font</DocsTitle>
          <DocsBody mb={2}>
            First import a new font inside <FileText>App.css</FileText>. We are using Google Fonts.
          </DocsBody>
          <CodeBlock language="css" rounded>
            {`@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');`}
          </CodeBlock>
          <DocsBody my={2} component={'div'}>
            To use the font you have couple of options:
            <ol>
              <li>
                Set it as a preffered font inside redux-store: <FileText>font-slice.ts</FileText>
              </li>
              <li>Add the font to FontToggle component</li>
              <li>Hardcode the font as default</li>
            </ol>
          </DocsBody>
        </Box>
        <DashedDivider />
        <Box>
          <DocsSubtitle>1. Preffered font</DocsSubtitle>
          <DocsBody mb={2}>
            Inside <FileText>font-slice.ts</FileText> update the following line:
          </DocsBody>
          <CodeBlock language="css" rounded>
            {`const getCurrentFont = () => {
  return localStorage.getItem('preffered-font') ? localStorage.getItem('preffered-font') : \`<your_new_font>\`;
};`}
          </CodeBlock>
        </Box>
        <DashedDivider />
        <Box>
          <DocsSubtitle>2. FontToggle</DocsSubtitle>
          <DocsBody mb={2}>
            Inside <FileText>SettingsDrawer.tsx</FileText> update the following line:
          </DocsBody>
          <CodeBlock language="css" rounded>
            {`<FontToggle
  fontOptions={[
    { fontValue: "'DM Sans', sans-serif", displayName: 'DM Sans' },
    { fontValue: "'Poppins', serif", displayName: 'Poppins' },
    { fontValue: "'Montserrat', serif", displayName: 'Montserrat' },
    { fontValue: "'Oswald', serif", displayName: 'Oswald' },
    { fontValue: "'Roboto', serif", displayName: 'Roboto' },
    { fontValue: "'Rubik', serif", displayName: 'Rubik' }
    { fontValue: "'<font>', serif", displayName: '<font>'}
  ]}
/>`}
          </CodeBlock>
        </Box>
        <DashedDivider />
        <Box>
          <DocsSubtitle>3. Hardcoding</DocsSubtitle>
          <DocsBody mb={2}>
            Inside <FileText>index.tsx</FileText> (theme directory) update the following line:
          </DocsBody>
          <CodeBlock language="css" rounded>
            {`const themeTypograpgy = Typography('<your_new_font>');`}
          </CodeBlock>
        </Box>
      </Flex>
    </Container>
  );
};

export default Typography;
