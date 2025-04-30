import { Flex } from '@/components/common';
import CodeBlock from '@/components/common/CodeBlock';
import Modals from '@/components/ui/Modals';
import useDisclosure from '@/hooks/useDisclosure';
import { Box, Button } from '@mui/material';
import ComponentHeader from '../../components/ComponentHeader';
import ExampleWrapper from '../../components/ExampleWrapper';
import PropHandler from '../../components/PropHandler';
import { confirmModalProps } from '../../data/props';

const ConfirmDocs: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Flex flexDirection={'column'} width={'100%'} gap={5}>
        <ComponentHeader
          title="Confirm"
          subtitle="Simple Confirm Modal"
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
            <Modals.Confirm
              isOpen={isOpen}
              onClose={onToggle}
              text="Do you want to delete this item?"
              onConfirm={onToggle}
              onCancel={onToggle}
              modalTitle="Confirm Deletion"
              confirmText="Delete"
            />
          </ExampleWrapper>
          <CodeBlock>
            {`import Modals from '@/components/ui/Modals';
import useDisclosure from '@/hooks/useDisclosure';
import { Button } from '@mui/material';

const Example = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Button onClick={onToggle}>Open modal</Button>
      <Modals.Confirm
        isOpen={isOpen}
        onClose={onToggle}
        text="Do you want to delete this item?"
        onConfirm={onToggle}
        onCancel={onToggle}
        modalTitle="Confirm Deletion"
        confirmText="Delete"
      />
    </>
  )
}

export default Example`}
          </CodeBlock>
        </Box>
        <Box>
          <ComponentHeader
            title="Props"
            subtitle="Available props for Modals.Confirm component"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          {confirmModalProps.map((prop, index) => (
            <PropHandler {...prop} key={index} />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default ConfirmDocs;
