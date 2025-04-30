import CodeBlock from '@/components/common/CodeBlock';
import { Box } from '@mui/material';
import React from 'react';
import ComponentHeader from '../components/ComponentHeader';
import ConfirmDocs from './components/ConfirmDocs';
import FormDocs from './components/FormDocs';

const ModalVariations: React.FC = () => {
  return (
    <React.Fragment>
      <ComponentHeader title="Modal (Variations)" subtitle="Pre-defined Modal components for basic usage" />
      <Box maxWidth={'100%'}>
        <ComponentHeader
          title="Import"
          titleProps={{
            variant: 'h4',
            color: 'text.primary'
          }}
          rootProps={{ mb: 2 }}
        />
        <CodeBlock rounded>{`import Modals from '@/components/ui/Modals';`}</CodeBlock>
      </Box>
      <ConfirmDocs />
      <FormDocs />
    </React.Fragment>
  );
};

export default ModalVariations;
