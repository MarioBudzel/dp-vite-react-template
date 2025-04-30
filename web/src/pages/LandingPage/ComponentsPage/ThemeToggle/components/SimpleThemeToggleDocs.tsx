import { Flex } from '@/components/common';
import CodeBlock from '@/components/common/CodeBlock';
import SimpleToggle from '@/components/ui/ThemeToggles/SimpleToggle';
import { Box } from '@mui/material';
import ComponentHeader from '../../components/ComponentHeader';
import ExampleWrapper from '../../components/ExampleWrapper';

const SimpleThemeToggleDocs: React.FC = () => {
  return (
    <>
      <Flex flexDirection={'column'} width={'100%'} gap={5}>
        <ComponentHeader
          title="Simple Theme Toggle"
          subtitle="This components toggles theme mode."
          titleProps={{
            variant: 'h3',
            color: 'text.primary'
          }}
        />
        <Box maxWidth={'100%'}>
          <ComponentHeader
            title="Import"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          <CodeBlock rounded>{`import SimpleToggle from '@/components/ui/ThemeToggles/SimpleToggle';`}</CodeBlock>
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
            <SimpleToggle />
          </ExampleWrapper>
          <CodeBlock>
            {`import SimpleToggle from '@/components/ui/ThemeToggles/SimpleToggle';

const Example = () => {
  return (
    <SimpleToggle />
  )
}

export default Example`}
          </CodeBlock>
        </Box>
      </Flex>
    </>
  );
};

export default SimpleThemeToggleDocs;
