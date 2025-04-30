import { Flex } from '@/components/common';
import BorderWrapper from '@/components/common/BorderWrapper';
import CodeBlock from '@/components/common/CodeBlock';
import { Box, Stack, Typography } from '@mui/material';
import { Info } from 'lucide-react';
import ComponentHeader from '../../components/ComponentHeader';
import ExampleWrapper from '../../components/ExampleWrapper';
import PropHandler from '../../components/PropHandler';
import { borderWrapperProps } from '../../data/props';

const BorderWrapperDocs: React.FC = () => {
  return (
    <>
      <Flex flexDirection={'column'} width={'100%'} gap={5}>
        <Box maxWidth={'100%'}>
          <ComponentHeader
            title="Import"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          <CodeBlock rounded>{`import BorderWrapper from '@/components/common/BorderWrapper';`}</CodeBlock>
        </Box>
        <Box>
          <ComponentHeader
            title="Example"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          <ExampleWrapper>
            <Flex gap={1} flexWrap={'wrap'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
              <BorderWrapper>
                <Typography>This is a simple bordered section.</Typography>
              </BorderWrapper>
              {/* Custom border and background color */}
              <BorderWrapper borderColor="primary.main" bgcolor="primary.light">
                <Typography color="primary.contrastText">Primary section</Typography>
              </BorderWrapper>
              {/* Dashed border with icon */}
              <BorderWrapper border="2px dashed" borderColor="grey.500">
                <Stack direction="row" alignItems="center" gap={1}>
                  <Info />
                  <Typography variant="body2">Dashed border with icon</Typography>
                </Stack>
              </BorderWrapper>
              {/* With shadow and hover effect */}
              <BorderWrapper
                boxShadow={3}
                sx={{
                  transition: 'box-shadow 0.3s ease-in-out',
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: 6
                  }
                }}
              >
                <Typography>Hover me!</Typography>
              </BorderWrapper>
            </Flex>
          </ExampleWrapper>
          <CodeBlock>
            {`import BorderWrapper from '@/components/common/BorderWrapper';
import { Flex } from '@/components/common';
import { Info } from 'lucide-react';
import { Stack, Typography } from '@mui/material';

const Example = () => {
  return (
    <Flex gap={1} flexWrap={'wrap'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
      <BorderWrapper>
        <Typography>This is a simple bordered section.</Typography>
      </BorderWrapper>

      {/* Custom border and background color */}
      <BorderWrapper borderColor="primary.main" bgcolor="primary.light">
        <Typography color="primary.contrastText">Primary section</Typography>
      </BorderWrapper>

      {/* Dashed border with icon */}
      <BorderWrapper border="2px dashed" borderColor="grey.500">
        <Stack direction="row" alignItems="center" gap={1}>
          <Info />
          <Typography variant="body2">Dashed border with icon</Typography>
        </Stack>
      </BorderWrapper>

      {/* With shadow and hover effect */}
      <BorderWrapper
        boxShadow={3}
        sx={{
          transition: 'box-shadow 0.3s ease-in-out',
          cursor: 'pointer',
          '&:hover': {
            boxShadow: 6
          }
        }}
      >
        <Typography>Hover me!</Typography>
      </BorderWrapper>
    </Flex>
  )
}

export default Example`}
          </CodeBlock>
        </Box>
        <Box>
          <ComponentHeader
            title="Props"
            subtitle="Available props for BorderWrapper component"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          {borderWrapperProps.map((prop, index) => (
            <PropHandler {...prop} key={index} />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default BorderWrapperDocs;
