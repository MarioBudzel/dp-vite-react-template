import { Flex } from '@/components/common';
import { Box, Container, useTheme } from '@mui/material';

import docsImage from '@/assets/docs.webp';
import DashedDivider from '../../components/DashedDivider';
import DocsBody from '../../components/DocsBody';
import DocsTitle from '../../components/DocsTitle';

const Introduction: React.FC = () => {
  const theme = useTheme();
  return (
    <Container maxWidth={'sm'} disableGutters>
      <Flex
        py={5}
        width={'100%'}
        flexDirection={'column'}
        gap={3}
        sx={{
          [theme.breakpoints.down('sm')]: {
            px: 3
          }
        }}
      >
        <img
          src={docsImage}
          width={'100%'}
          style={{ borderRadius: '12px', filter: `drop-shadow(0px 0px 10px ${theme.palette.primary.main})` }}
        />
        <DashedDivider />
        <Box>
          <DocsTitle>Vite + React Template</DocsTitle>
          <DocsBody component={'div'}>
            <ul>
              <li>
                Built with <b>MUI</b> and <b>VITE</b>
              </li>
              <li>
                Includes fully <b>customizable theme</b>
              </li>
              <li>Comes with pre-prepared components for easier development</li>
            </ul>
          </DocsBody>
        </Box>
        <DashedDivider />
        <Box>
          <DocsTitle>📘 Documentation</DocsTitle>
          <DocsBody fontWeight={'bold'}>
            Alongside our comprehensive in-app documentation, you can explore the full power of our stack by diving into the official{' '}
            <a
              style={{ color: theme.palette.primary.main, textDecoration: 'underline', cursor: 'pointer' }}
              target="_blank"
              href="https://mui.com/material-ui/getting-started/"
              rel="noreferrer"
            >
              MUI
            </a>{' '}
            and{' '}
            <a
              style={{ color: theme.palette.primary.main, textDecoration: 'underline', cursor: 'pointer' }}
              target="_blank"
              href="https://vite.dev/guide/"
              rel="noreferrer"
            >
              Vite
            </a>{' '}
            documentation for even more tips, best practices, and advanced features.
          </DocsBody>
        </Box>
        <DashedDivider />
        <Box>
          <DocsTitle>🛠️ Requirements</DocsTitle>
          <DocsBody fontWeight={'bold'} component={'div'}>
            <ul>
              <li>
                <a
                  style={{ color: theme.palette.primary.main, textDecoration: 'underline', cursor: 'pointer' }}
                  target="_blank"
                  href="https://nodejs.org/en/"
                  rel="noreferrer"
                >
                  Node.js
                </a>{' '}
                &gt;= 18 or 20 (Vite compability note)
              </li>
              <li>
                <b>NPM / PNPM</b> - PNPM needs migration (recommended NPM)
              </li>
              <li>
                <b>Docker + Docker Compose (Linux)</b>
              </li>
              <li>
                <b>Docker (Windows)</b>
              </li>
            </ul>
          </DocsBody>
        </Box>
      </Flex>
    </Container>
  );
};

export default Introduction;
