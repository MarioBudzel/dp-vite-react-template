import { Flex } from '@/components/common';
import CodeBlock from '@/components/common/CodeBlock';
import LargeToggle from '@/components/ui/ThemeToggles/LargeToggle';
import { Box } from '@mui/material';
import ComponentHeader from '../../components/ComponentHeader';
import ExampleWrapper from '../../components/ExampleWrapper';
import PropHandler from '../../components/PropHandler';
import { largeToggleProps } from '../../data/props';

const LargeThemeToggleDocs: React.FC = () => {
  return (
    <>
      <Flex flexDirection={'column'} width={'100%'} gap={5}>
        <ComponentHeader
          title="Large Theme Toggle"
          subtitle="This components controls the theme mode. It is designed as large buttons."
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
          <CodeBlock rounded>{`import LargeToggle from '@/components/ui/ThemeToggles/LargeToggle';`}</CodeBlock>
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
              <LargeToggle singleThemeToggle themeControl="dark" />
              <LargeToggle singleThemeToggle themeControl="light" />
              <LargeToggle singleThemeToggle themeControl="system" />
            </Flex>
          </ExampleWrapper>
          <CodeBlock>
            {`import LargeToggle from '@/components/ui/ThemeToggles/LargeToggle';
import { Flex } from '@/components/common';

const Example = () => {
  return (
    <>
      <LargeToggle singleThemeToggle themeControl="dark" />
      <LargeToggle singleThemeToggle themeControl="light" />
      <LargeToggle singleThemeToggle themeControl="system" />
    </>
  )
}

export default Example`}
          </CodeBlock>
        </Box>
        <Box>
          <ComponentHeader
            title="Props"
            subtitle="Available props for LargeThemeToggle component"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          {largeToggleProps.map((prop, index) => (
            <PropHandler {...prop} key={index} />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default LargeThemeToggleDocs;
