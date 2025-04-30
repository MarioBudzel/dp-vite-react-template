import { Flex } from '@/components/common';
import { Box, Container, useTheme } from '@mui/material';

import CodeBlock from '@/components/common/CodeBlock';
import DashedDivider from '../../components/DashedDivider';
import DocsBody from '../../components/DocsBody';
import DocsTitle from '../../components/DocsTitle';
import FileText from '../../components/FileText';

const EnvironmentVariables: React.FC = () => {
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
          <DocsTitle>Variables</DocsTitle>
          <DocsBody>
            Environment variables inside the project are handled by <FileText>Docker</FileText>. You can also create your own{' '}
            <FileText>.env</FileText> file inside the <FileText>./web</FileText> or <FileText>./api</FileText> directory respectivelly and
            continue following this guide.
          </DocsBody>
        </Box>
        <DashedDivider />
        <Box>
          <DocsTitle>Back-end variables</DocsTitle>
          <DocsBody my={2}>
            Back-end variables are defined inside the <FileText>docker-compose.yml</FileText> file, under the <FileText>api</FileText>{' '}
            service. Any new variable should follow the same syntax:
          </DocsBody>
          <CodeBlock rounded>
            {`environment:
    - NEW_VARIABLE=<your_variable_value>`}
          </CodeBlock>
        </Box>
        <DashedDivider />
        <Box>
          <DocsTitle>Front-end variables</DocsTitle>
          <DocsBody my={2}>
            Front-end variables are defined inside the <FileText>docker-compose.yml</FileText> file, under the <FileText>web</FileText>{' '}
            service. Please prefix your variables with <FileText>VITE_</FileText>:
          </DocsBody>
          <CodeBlock rounded>
            {`environment:
    - VITE_NEW_VARIABLE=<your_variable_value>`}
          </CodeBlock>
        </Box>
        <DashedDivider />
        <Box>
          <DocsTitle>Access</DocsTitle>
          <DocsBody my={2}>To access your variables use the following syntax:</DocsBody>
          <CodeBlock rounded>
            {`// Back-end
process.env.<varible_name>;

// Front-end
import.meta.env.VITE_<variable_name>;`}
          </CodeBlock>
        </Box>
      </Flex>
    </Container>
  );
};

export default EnvironmentVariables;
