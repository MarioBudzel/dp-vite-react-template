import CodeBlock from '@/components/common/CodeBlock';
import { Box } from '@mui/material';
import React from 'react';
import ComponentHeader from '../components/ComponentHeader';
import PropHandler from '../components/PropHandler';
import { animatedIconButtonProps } from '../data/props';
import BounceDocs from './components/BounceDocs';
import RotationDocs from './components/RotationDocs';

const AnimatedIconButton: React.FC = () => {
  return (
    <React.Fragment>
      <ComponentHeader title="Animated Icon Button" subtitle="Icon button with animations!" />
      <Box maxWidth={'100%'}>
        <ComponentHeader
          title="Import"
          titleProps={{
            color: 'text.primary'
          }}
          rootProps={{ mb: 2 }}
        />
        <CodeBlock rounded>{`import AnimatedIconButton from '@/components/ui/AnimatedIconButton';`}</CodeBlock>
      </Box>
      <RotationDocs />
      <BounceDocs />
      <Box>
        <ComponentHeader
          title="Props"
          subtitle="Available props for AnimatedIconButton component"
          titleProps={{
            variant: 'h4',
            color: 'text.primary'
          }}
          rootProps={{ mb: 2 }}
        />
        {animatedIconButtonProps.map((prop, index) => (
          <PropHandler {...prop} key={index} />
        ))}
      </Box>
    </React.Fragment>
  );
};

export default AnimatedIconButton;
