import { Flex } from '@/components/common';
import CodeBlock from '@/components/common/CodeBlock';
import SingleFontToggle from '@/components/ui/FontToggle/SingleFontToggle';
import { Box } from '@mui/material';
import ComponentHeader from '../../components/ComponentHeader';
import ExampleWrapper from '../../components/ExampleWrapper';
import PropHandler from '../../components/PropHandler';
import { singleFontToggleProps } from '../../data/props';

const FontToggleDocs: React.FC = () => {
  return (
    <>
      <Flex flexDirection={'column'} width={'100%'} gap={5}>
        <ComponentHeader
          title="Single Font Toggle"
          subtitle="This components toggles the font."
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
          <CodeBlock rounded>{`import SingleFontToggle from '@/components/ui/FontToggle/SingleFontToggle';`}</CodeBlock>
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
            <SingleFontToggle font={{ fontValue: "'Poppins', serif", displayName: 'Poppins' }} />
          </ExampleWrapper>
          <CodeBlock>
            {`import SingleFontToggle from '@/components/ui/FontToggle/SingleFontToggle';

const Example = () => {
  return (
    <SingleFontToggle font={{ fontValue: "'Poppins', serif", displayName: 'Poppins' }} />
  )
}

export default Example`}
          </CodeBlock>
        </Box>
        <Box>
          <ComponentHeader
            title="Props"
            subtitle="Available props for SingleFontToggle component"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          {singleFontToggleProps.map((prop, index) => (
            <PropHandler {...prop} key={index} />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default FontToggleDocs;
