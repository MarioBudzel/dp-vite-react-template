import { Flex, SimpleProgressBar } from '@/components/common';
import CodeBlock from '@/components/common/CodeBlock';
import { Box } from '@mui/material';
import React from 'react';
import ComponentHeader from '../../components/ComponentHeader';
import ExampleWrapper from '../../components/ExampleWrapper';
import PropHandler from '../../components/PropHandler';
import { simpleProgressBarProps } from '../../data/props';

const ProgressBarDocs: React.FC = () => {
  const [progress, setProgress] = React.useState<string>('0%');

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const value = parseInt(prev);
        return value >= 100 ? '0%' : `${value + 10}%`;
      });
    }, 500);
    return () => clearInterval(timer);
  }, []);
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
          <CodeBlock rounded>{`import { SimpleProgressBar } from '@/components/common';`}</CodeBlock>
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
            <Flex gap={2} width={'100%'} flexWrap={'wrap'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
              <SimpleProgressBar progress="40%" width={'100%'} px={2} />
              <SimpleProgressBar size="large" colorScheme="primary" progress="75%" width={'100%'} px={2} />
              <SimpleProgressBar progress="20%" size="medium" colorScheme="error" width="50%" px={2} />
              <SimpleProgressBar progress={progress} size="small" colorScheme="success" width={'100%'} px={2} />
            </Flex>
          </ExampleWrapper>
          <CodeBlock>
            {`import { Flex, SimpleProgressBar } from '@/components/common';
import React from 'react';

const Example = () => {
  const [progress, setProgress] = React.useState<string>('0%');

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const value = parseInt(prev);
        return value >= 100 ? '0%' : \`\${value + 10}%\`;
      });
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <Flex gap={1} flexWrap={'wrap'} justifyContent={'center'}>
      <SimpleProgressBar progress="40%" width={'100%'} px={2} />
      <SimpleProgressBar size="large" colorScheme="primary" progress="75%" width={'100%'} px={2} />
      <SimpleProgressBar progress="20%" size="medium" colorScheme="error" width="50%" px={2} />
      <SimpleProgressBar progress={progress} size="small" colorScheme="success" width={'100%'} px={2} />
    </Flex>
  )
}

export default Example`}
          </CodeBlock>
        </Box>
        <Box>
          <ComponentHeader
            title="Props"
            subtitle="Available props for SimpleProgressBar component"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          {simpleProgressBarProps.map((prop, index) => (
            <PropHandler {...prop} key={index} />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default ProgressBarDocs;
