import { BasicModal, Flex } from '@/components/common';
import CodeBlock from '@/components/common/CodeBlock';
import useDisclosure from '@/hooks/useDisclosure';
import { Box, Button } from '@mui/material';
import ComponentHeader from '../../components/ComponentHeader';
import ExampleWrapper from '../../components/ExampleWrapper';

const BasicModalDocs: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
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
          <CodeBlock rounded>{`import { BasicModal } from '@/components/common';`}</CodeBlock>
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
            <Button onClick={onToggle}>Open modal</Button>
            <BasicModal isOpen={isOpen} onClose={onToggle}>
              <BasicModal.Title>My Modal Title</BasicModal.Title>
              <BasicModal.CloseButton onClick={onToggle} />
              <BasicModal.Body>
                <p>This is the modal body content.</p>
              </BasicModal.Body>
              <BasicModal.Footer>
                <Button onClick={onToggle}>Close</Button>
              </BasicModal.Footer>
            </BasicModal>
          </ExampleWrapper>
          <CodeBlock>
            {`import { BasicModal } from '@/components/common';;
import useDisclosure from '@/hooks/useDisclosure';
import { Button } from '@mui/material';

const Example = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Button onClick={onToggle}>Open modal</Button>
      <BasicModal isOpen={isOpen} onClose={onToggle}>
        <BasicModal.Title>My Modal Title</BasicModal.Title>
        <BasicModal.CloseButton onClick={onToggle} />
        <BasicModal.Body>
          <p>This is the modal body content.</p>
        </BasicModal.Body>
        <BasicModal.Footer>
          <Button onClick={onToggle}>Close</Button>
        </BasicModal.Footer>
      </BasicModal>
    </>
  )
}

export default Example`}
          </CodeBlock>
        </Box>
      </Flex>
    </>
  );
};

export default BasicModalDocs;
