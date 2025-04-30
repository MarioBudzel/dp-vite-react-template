import { Flex } from '@/components/common';
import { Box, Container, useTheme } from '@mui/material';

import CodeBlock from '@/components/common/CodeBlock';
import DocsTitle from '../../components/DocsTitle';

const ProjectStructure: React.FC = () => {
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
          <DocsTitle>Project Structure</DocsTitle>
          <CodeBlock rounded language="bash">{`
├── api/ - Express API
│   ├── seed/
│   ├── src/
│   ├── uploads/
│   ├── app.js
│   ├── Dockerfile
│   ├── Dockerfile.dev
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── nginx/ - NGINX configuration
├── volumes/ - MongoDB files
├── web/ - VITE Front-end
│   ├── nginx/ - PROD configuration
│   ├── public/
│   ├── src/
│   ├── types/
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── .prettierrc
│   ├── Dockerfile
│   ├── Dockerfile.dev
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.js
├── .gitignore
├── docker-compose.override.yml
└── docker-compose.yml
`}</CodeBlock>
        </Box>
      </Flex>
    </Container>
  );
};

export default ProjectStructure;
