import { Flex } from '@/components/common';
import { Box, Container, useTheme } from '@mui/material';

import CodeBlock from '@/components/common/CodeBlock';
import Helper from '@/components/common/Helper';
import DashedDivider from '../../components/DashedDivider';
import DocsBody from '../../components/DocsBody';
import DocsSubtitle from '../../components/DocsSubtitle';
import DocsTitle from '../../components/DocsTitle';

import docsImage from '@/assets/docs.webp';

const Setup: React.FC = () => {
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
          <DocsTitle>Setup</DocsTitle>
          <Helper colorScheme="warning">This page details the setup for a new project</Helper>
        </Box>
        <DashedDivider />
        <Box>
          <DocsSubtitle>1. Environment</DocsSubtitle>
          <DocsBody component={'div'}>
            <ul>
              <li>Node.js</li>
              <li>Vite</li>
              <li>React</li>
              <li>Docker (+ Docker compose - Linux)</li>
            </ul>
          </DocsBody>
        </Box>
        <DashedDivider />
        <Box>
          <DocsSubtitle>2. Clone the project</DocsSubtitle>
          <DocsBody mb={2}>
            Clone the project using <b>GIT</b> or{' '}
            <a
              style={{ color: theme.palette.primary.main, textDecoration: 'underline', cursor: 'pointer' }}
              target="_blank"
              href="https://github.com/MarioBudzel/dp-vite-react-template"
              rel="noreferrer"
            >
              download
            </a>{' '}
            it from github.com and extract the files to your designated location.
          </DocsBody>

          <CodeBlock language="bash" rounded>
            {'git clone https://github.com/MarioBudzel/dp-vite-react-template.git'}
          </CodeBlock>
        </Box>
        <DashedDivider />
        <Box>
          <DocsSubtitle>3. Install dependecies</DocsSubtitle>
          <DocsBody mb={2}>After cloning the project you need to install the required dependencies for API and for WEB.</DocsBody>
          <DocsBody mb={2} fontWeight={'bold'}>
            Directory - web
          </DocsBody>
          <CodeBlock language="bash" rounded>
            {`cd <project_folder_name>
cd web

<sudo - Linux> npm install`}
          </CodeBlock>
          <DocsBody my={2} fontWeight={'bold'}>
            Directory - api
          </DocsBody>
          <CodeBlock language="bash" rounded>
            {`# Starting from 
# <project_folder_name>/web
cd ..
cd api

<sudo - Linux> npm install`}
          </CodeBlock>
        </Box>
        <DashedDivider />
        <Box>
          <DocsSubtitle>4. Create volumes directory</DocsSubtitle>
          <DocsBody mb={2}>After installing the dependecies you need to create volumes directory inside project root directory.</DocsBody>
          <DocsBody mb={2} fontWeight={'bold'}>
            Directory - web
          </DocsBody>
          <CodeBlock language="bash" rounded>
            {`# Starting inside
# <project_folder_name> directory

<Linux> mkdir volumes
<Linux> cd volumes
<Linux> mkdir mongoApi
`}
          </CodeBlock>
        </Box>
        <DashedDivider />
        <Box>
          <DocsSubtitle>5. Running Docker</DocsSubtitle>
          <DocsBody mb={2}>Now you are ready to run your docker-compose command.</DocsBody>
          <DocsBody my={2} fontWeight={'bold'}>
            Directory - {`<project_folder_name>`}
          </DocsBody>
          <CodeBlock language="bash" rounded>
            {`# Inside the 
# <project_folder_name> directory
# (Where your docker-compose.yml
# file is located)

<sudo - Linux> docker-compose up
# or docker compose up
`}
          </CodeBlock>
          <DocsBody my={2} fontWeight={'bold'}>
            Subsequent starting of the project:
          </DocsBody>
          <CodeBlock language="bash" rounded>
            {`# Inside the 
# <project_folder_name> directory
# (Where your docker-compose.yml
# file is located)

<sudo - Linux> docker-compose up
# or docker compose up
`}
          </CodeBlock>
        </Box>
        <Box>
          <DocsSubtitle>6. Try it out</DocsSubtitle>
          <DocsBody mb={2}>
            After Docker finishes, you should be able to navigate to <b>http://localhost:5173</b> inside your browser.
          </DocsBody>
          <DocsBody mb={2}>You should see:</DocsBody>
          <img src={docsImage} width={'100%'} style={{ borderRadius: '12px' }} />
        </Box>
      </Flex>
    </Container>
  );
};

export default Setup;
