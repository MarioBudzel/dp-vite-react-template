import CodeBlock from '@/components/common/CodeBlock';
import { Box } from '@mui/material';
import React from 'react';
import ComponentHeader from '../components/ComponentHeader';
import BackdropDismissable from './components/BackdropsDismissable';
import DrawerBasics from './components/DrawerBasicDocs';
import IntegratedComponents from './components/IntegratedComponents';

const DrawerDocs: React.FC = () => {
  return (
    <React.Fragment>
      <ComponentHeader title="Drawer" subtitle="Basic drawer, allowing fully customizable implementation" />
      <Box maxWidth={'100%'}>
        <ComponentHeader
          title="Import"
          titleProps={{
            variant: 'h4',
            color: 'text.primary'
          }}
          rootProps={{ mb: 2 }}
        />
        <CodeBlock rounded>{`import Drawer from '@/components/common/Drawer';`}</CodeBlock>
      </Box>
      <DrawerBasics />
      <BackdropDismissable />
      <IntegratedComponents />
    </React.Fragment>
  );
};

export default DrawerDocs;
