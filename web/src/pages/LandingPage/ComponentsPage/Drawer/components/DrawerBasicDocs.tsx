import { Flex } from '@/components/common';
import CodeBlock from '@/components/common/CodeBlock';
import Drawer from '@/components/common/Drawer';
import { Box, IconButton } from '@mui/material';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';
import React from 'react';
import ComponentHeader from '../../components/ComponentHeader';
import ExampleWrapper from '../../components/ExampleWrapper';
import PropHandler from '../../components/PropHandler';
import { drawerProps } from '../../data/props';

const DrawerBasics: React.FC = () => {
  const bottomRef = React.useRef<{
    onToggle: () => void;
  }>(null);
  const topRef = React.useRef<{
    onToggle: () => void;
  }>(null);
  const leftRef = React.useRef<{
    onToggle: () => void;
  }>(null);
  const rightRef = React.useRef<{
    onToggle: () => void;
  }>(null);
  return (
    <>
      <Flex flexDirection={'column'} width={'100%'} gap={5}>
        <ComponentHeader
          title="Basic Drawer"
          subtitle="Basic drawer with no additional configuration"
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
            <Flex gap={1} flexWrap={'wrap'} justifyContent={'center'}>
              <Box>
                <IconButton onClick={() => bottomRef.current?.onToggle?.()} color="primary">
                  <ChevronUp />
                </IconButton>
                <Drawer anchor="bottom" ref={bottomRef}>
                  <Flex height={'320px'} flexDirection={'column'} width={'100%'} bgcolor="white"></Flex>
                </Drawer>
              </Box>
              <Box>
                <IconButton onClick={() => topRef.current?.onToggle?.()} color="secondary">
                  <ChevronDown />
                </IconButton>
                <Drawer anchor="top" ref={topRef}>
                  <Flex height={'320px'} flexDirection={'column'} width={'100%'} bgcolor="white"></Flex>
                </Drawer>
              </Box>
              <Box>
                <IconButton onClick={() => leftRef.current?.onToggle?.()} color="secondary">
                  <ChevronRight />
                </IconButton>
                <Drawer anchor="left" ref={leftRef}>
                  <Flex height={'100%'} flexDirection={'column'} width={'320px'} bgcolor="white"></Flex>
                </Drawer>
              </Box>
              <Box>
                <IconButton onClick={() => rightRef.current?.onToggle?.()} color="secondary">
                  <ChevronLeft />
                </IconButton>
                <Drawer anchor="right" ref={rightRef}>
                  <Flex height={'100%'} flexDirection={'column'} width={'320px'} bgcolor="white"></Flex>
                </Drawer>
              </Box>
            </Flex>
          </ExampleWrapper>
          <CodeBlock>
            {`import Drawer from '@/components/common/Drawer';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';
import { Flex } from '@/components/common';
import { Box, IconButton } from '@mui/material';


const Example = () => {
  const bottomRef = React.useRef<{
    onToggle: () => void;
  }>(null);
  const topRef = React.useRef<{
    onToggle: () => void;
  }>(null);
  const leftRef = React.useRef<{
    onToggle: () => void;
  }>(null);
  const rightRef = React.useRef<{
    onToggle: () => void;
  }>(null);

  return (
    <Flex gap={1} flexWrap={'wrap'} justifyContent={'center'}>
      <Box>
        <IconButton onClick={() => bottomRef.current?.onToggle?.()} color="primary">
          <ChevronUp />
        </IconButton>
        <Drawer anchor="bottom" ref={bottomRef}>
          <Flex height={'320px'} flexDirection={'column'} width={'100%'} bgcolor="white"></Flex>
        </Drawer>
      </Box>
      <Box>
        <IconButton onClick={() => topRef.current?.onToggle?.()} color="secondary">
          <ChevronDown />
        </IconButton>
        <Drawer anchor="top" ref={topRef}>
          <Flex height={'320px'} flexDirection={'column'} width={'100%'} bgcolor="white"></Flex>
        </Drawer>
      </Box>
      <Box>
        <IconButton onClick={() => leftRef.current?.onToggle?.()} color="secondary">
          <ChevronRight />
        </IconButton>
        <Drawer anchor="left" ref={leftRef}>
          <Flex height={'100%'} flexDirection={'column'} width={'320px'} bgcolor="white"></Flex>
        </Drawer>
      </Box>
      <Box>
        <IconButton onClick={() => rightRef.current?.onToggle?.()} color="secondary">
          <ChevronLeft />
        </IconButton>
        <Drawer anchor="right" ref={rightRef}>
          <Flex height={'100%'} flexDirection={'column'} width={'320px'} bgcolor="white"></Flex>
        </Drawer>
      </Box>
    </Flex>
  )
}

export default Example`}
          </CodeBlock>
        </Box>
        <Box>
          <ComponentHeader
            title="Props"
            subtitle="Available props for Drawer component"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          {drawerProps.map((prop, index) => (
            <PropHandler {...prop} key={index} />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default DrawerBasics;
