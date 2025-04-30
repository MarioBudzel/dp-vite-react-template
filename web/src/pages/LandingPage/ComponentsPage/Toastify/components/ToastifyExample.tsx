import { Flex, Toastify } from '@/components/common';
import CodeBlock from '@/components/common/CodeBlock';
import { Box, Button, useTheme } from '@mui/material';
import ComponentHeader from '../../components/ComponentHeader';
import ExampleWrapper from '../../components/ExampleWrapper';
import PropHandler from '../../components/PropHandler';
import { toastifyProps } from '../../data/props';

const ToastifyExample: React.FC = () => {
  const handleSuccess = () => {
    Toastify.success({ label: 'Success' });
  };
  const handleError = () => {
    Toastify.error({ label: 'Error' });
  };

  const theme = useTheme();
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
          <CodeBlock rounded>{`import { Toastify } from '@/components/common';`}</CodeBlock>
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
            <Flex gap={1} flexWrap={'wrap'} justifyContent={'center'}>
              <Button
                color="success"
                sx={{
                  p: 0,
                  px: 1,
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  bgcolor: `rgba(${theme.palette.success.lightChannel}, .5)`,
                  border: '1px solid',
                  borderColor: 'success.main',
                  color: 'success.main'
                }}
                onClick={handleSuccess}
              >
                Success
              </Button>
              <Button
                color="error"
                sx={{
                  p: 0,
                  px: 1,
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  bgcolor: `rgba(${theme.palette.error.lightChannel}, .5)`,
                  border: '1px solid',
                  borderColor: 'error.main',
                  color: 'error.main'
                }}
                onClick={handleError}
              >
                Error
              </Button>
            </Flex>
          </ExampleWrapper>
          <CodeBlock>
            {`import { Flex, Toastify } from '@/components/common';
import { Button, useTheme } from '@mui/material';

const Example = () => {
  const handleSuccess = () => {
    Toastify.success({ label: 'Success' });
  };
  const handleError = () => {
    Toastify.error({ label: 'Error' });
  };

  const theme = useTheme();

  return (
    <Flex gap={1} flexWrap={'wrap'} justifyContent={'center'}>
      <Button
        color="success"
        sx={{
          p: 0,
          px: 1,
          textTransform: 'uppercase',
          fontWeight: 'bold',
          bgcolor: \`rgba(${theme.palette.success.lightChannel}, .5)\`,
          border: '1px solid',
          borderColor: 'success.main',
          color: 'success.main'
        }}
        onClick={handleSuccess}
      >
        Success
      </Button>
      <Button
        color="error"
        sx={{
          ...
        }}
        onClick={handleError}
      >
        Error
      </Button>
    </Flex>
  )
}

export default Example`}
          </CodeBlock>
        </Box>
        <Box>
          <ComponentHeader
            title="Props"
            subtitle="Available props for Toastify component"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          {toastifyProps.map((prop, index) => (
            <PropHandler {...prop} key={index} />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default ToastifyExample;
