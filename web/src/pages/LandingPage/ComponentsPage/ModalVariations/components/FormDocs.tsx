import { Flex } from '@/components/common';
import CodeBlock from '@/components/common/CodeBlock';
import Modals from '@/components/ui/Modals';
import useDisclosure from '@/hooks/useDisclosure';
import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import ComponentHeader from '../../components/ComponentHeader';
import ExampleWrapper from '../../components/ExampleWrapper';
import PropHandler from '../../components/PropHandler';
import { formModalProps } from '../../data/props';

const FormDocs: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [name, setName] = React.useState<string>('');

  const handleSave = () => {
    onToggle();
    alert(name);
    setName('');
  };
  return (
    <>
      <Flex flexDirection={'column'} width={'100%'} gap={5}>
        <ComponentHeader
          title="Form"
          subtitle="Simple Form Modal. Works with react-hook-form"
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
            <Button onClick={onToggle}>Open modal</Button>
            <Modals.Form
              isOpen={isOpen}
              onClose={onToggle}
              onSubmit={handleSave}
              title="Create New Item"
              confirmText="Save"
              cancelText="Cancel"
              disableConfirm={!name}
            >
              {/* Form Fields */}
              <TextField fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </Modals.Form>
          </ExampleWrapper>
          <CodeBlock>
            {`import Modals from '@/components/ui/Modals';
import useDisclosure from '@/hooks/useDisclosure';
import { Button, TextField } from '@mui/material';

import React from 'react';

const Example = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [name, setName] = React.useState<string>('');

  const handleSave = () => {
    onToggle();
    alert(name);
    setName('');
  };

  return (
    <>
      <Button onClick={onToggle}>Open modal</Button>
      <Modals.Form
        isOpen={isOpen}
        onClose={onToggle}
        onSubmit={handleSave}
        title="Create New Item"
        confirmText="Save"
        cancelText="Cancel"
        disableConfirm={!name}
      >
        {/* Form Fields */}
        <TextField fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      </Modals.Form>
    </>
  )
}

export default Example`}
          </CodeBlock>
        </Box>
        <Box>
          <ComponentHeader
            title="Props"
            subtitle="Available props for Modals.Form component"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          {formModalProps.map((prop, index) => (
            <PropHandler {...prop} key={index} />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default FormDocs;
