import { Flex } from '@/components/common';
import BoxSlider from '@/components/common/BoxSlider';
import BoxSliderChild from '@/components/common/BoxSlider/BoxSlider.Child';
import CodeBlock from '@/components/common/CodeBlock';
import { sliderItems } from '@/pages/App/data/SliderItems';
import { Box } from '@mui/material';
import React from 'react';
import ComponentHeader from '../../components/ComponentHeader';
import ExampleWrapper from '../../components/ExampleWrapper';
import PropHandler from '../../components/PropHandler';
import { boxSliderProps } from '../../data/props';

const BoxSliderDocs: React.FC = () => {
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
          <CodeBlock rounded>{`import BoxSlider from '@/components/common/BoxSlider';`}</CodeBlock>
        </Box>
        <Box maxWidth={'100%'}>
          <ComponentHeader
            title="Notice"
            subtitle="For the BoxSlider to work, it expects the child elements to be wrapped in the BoxSliderChild component"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
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
            <Box px={2} width={'100%'}>
              <BoxSlider minHeight={'350px'} animationSpeed={5000}>
                {sliderItems.map((item, index) => (
                  <BoxSliderChild flexGrow={1} minHeight={'350px'} useVignette key={index} imageUrl={item.image} />
                ))}
              </BoxSlider>
            </Box>
          </ExampleWrapper>
          <CodeBlock>
            {`import BoxSlider from '@/components/common/BoxSlider';
import BoxSliderChild from '@/components/common/BoxSlider/BoxSlider.Child';
import { Box } from '@mui/material';

const Example = () => {
  return (
    <Box px={2} width={'100%'}>
      <BoxSlider minHeight={'350px'} animationSpeed={5000}>
        {sliderItems.map((item, index) => (
          <BoxSliderChild flexGrow={1} minHeight={'350px'} useVignette key={index} imageUrl={item.image} />
        ))}
      </BoxSlider>
    </Box>
  )
}

export default Example`}
          </CodeBlock>
        </Box>
        <Box>
          <ComponentHeader
            title="Props"
            subtitle="Available props for BoxSlider component"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          {boxSliderProps.map((prop, index) => (
            <PropHandler {...prop} key={index} />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default BoxSliderDocs;
