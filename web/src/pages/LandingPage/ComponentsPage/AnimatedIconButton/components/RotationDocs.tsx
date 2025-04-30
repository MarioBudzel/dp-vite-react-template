import { Flex } from '@/components/common';
import CodeBlock from '@/components/common/CodeBlock';
import AnimatedIconButton from '@/components/ui/AnimatedIconButton';
import { Box } from '@mui/material';
import { Settings } from 'lucide-react';
import ComponentHeader from '../../components/ComponentHeader';
import ExampleWrapper from '../../components/ExampleWrapper';

const RotationDocs: React.FC = () => {
  return (
    <>
      <Flex flexDirection={'column'} width={'100%'} gap={5}>
        <ComponentHeader
          title="Rotate"
          subtitle="Rotate animation"
          titleProps={{
            variant: 'h3',
            color: 'text.primary'
          }}
        />
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
              <AnimatedIconButton animationType="rotate" animationSpeed="slow" color="primary">
                <Settings />
              </AnimatedIconButton>
              <AnimatedIconButton animationType="rotate" animationSpeed="medium" color="secondary">
                <Settings />
              </AnimatedIconButton>
              <AnimatedIconButton animationType="rotate" animationSpeed="fast" color="success">
                <Settings />
              </AnimatedIconButton>
            </Flex>
          </ExampleWrapper>
          <CodeBlock>
            {`import AnimatedIconButton from '@/components/ui/AnimatedIconButton';
import { Settings } from 'lucide-react';
import { Flex } from '@/components/common';

const Example = () => {
  return (
    <Flex gap={1} flexWrap={'wrap'} justifyContent={'center'}>
      <AnimatedIconButton animationType="rotate" animationSpeed="slow" color="primary">
        <Settings />
      </AnimatedIconButton>
      <AnimatedIconButton animationType="rotate" animationSpeed="medium" color="secondary">
        <Settings />
      </AnimatedIconButton>
      <AnimatedIconButton animationType="rotate" animationSpeed="fast" color="success">
        <Settings />
      </AnimatedIconButton>
    </Flex>
  )
}

export default Example`}
          </CodeBlock>
        </Box>
      </Flex>
    </>
  );
};

export default RotationDocs;
