import { Flex } from '@/components/common';
import CodeBlock from '@/components/common/CodeBlock';
import Drawer from '@/components/common/Drawer';
import { Box, Button, IconButton } from '@mui/material';
import { X } from 'lucide-react';
import React from 'react';
import ComponentHeader from '../../components/ComponentHeader';
import ExampleWrapper from '../../components/ExampleWrapper';

const BackdropDismissable: React.FC = () => {
  const drawerRef = React.useRef<{
    onToggle: () => void;
    onClose: () => void;
  }>(null);
  return (
    <>
      <Flex flexDirection={'column'} width={'100%'} gap={5}>
        <ComponentHeader
          title="Backdrop effects"
          subtitle="Drawer with applied backdrop effects. This drawer is not dismissable."
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
            <Box>
              <Button onClick={() => drawerRef.current?.onToggle?.()}>Open drawer</Button>
              <Drawer anchor="right" ref={drawerRef} useBackDropEffects disableBackdropClick disableEscapeKeyDown>
                <Flex height={'100%'} flexDirection={'column'} width={'320px'} bgcolor="white">
                  <Flex width={'100%'} p={3} justifyContent={'flex-end'}>
                    <IconButton onClick={() => drawerRef.current?.onClose?.()} color="primary">
                      <X />
                    </IconButton>
                  </Flex>
                </Flex>
              </Drawer>
            </Box>
          </ExampleWrapper>
          <CodeBlock>
            {`import Drawer from '@/components/common/Drawer';
import { X } from 'lucide-react';
import { Flex } from '@/components/common';
import { IconButton } from '@mui/material';


const Example = () => {
  const drawerRef = React.useRef<{
    onToggle: () => void;
    onClose: () => void;
  }>(null);
  
  return (
    <>
      <Button onClick={() => drawerRef.current?.onToggle?.()}>Open drawer</Button>
      <Drawer anchor="right" ref={drawerRef} useBackDropEffects disableBackdropClick disableEscapeKeyDown>
        <Flex height={'100%'} flexDirection={'column'} width={'320px'} bgcolor="white">
          <Flex width={'100%'} p={3} justifyContent={'flex-end'}>
            <IconButton onClick={() => drawerRef.current?.onClose?.()} color="primary">
              <X />
            </IconButton>
          </Flex>
        </Flex>
      </Drawer>
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

export default BackdropDismissable;
