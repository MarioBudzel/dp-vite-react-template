import { Flex } from '@/components/common';
import CodeBlock from '@/components/common/CodeBlock';
import IconDrawer from '@/components/ui/Drawers/IconDrawer';
import { Box, useTheme } from '@mui/material';
import { Settings } from 'lucide-react';
import React from 'react';
import ComponentHeader from '../../components/ComponentHeader';
import ExampleWrapper from '../../components/ExampleWrapper';
import PropHandler from '../../components/PropHandler';
import { iconDrawerProps } from '../../data/props';

const IconDrawerDocs: React.FC = () => {
  const theme = useTheme();
  const drawerRef = React.useRef<{
    onToggle: () => void;
  }>(null);
  return (
    <>
      <Flex flexDirection={'column'} width={'100%'} gap={5}>
        <ComponentHeader
          title="Simple Theme Toggle"
          subtitle="This components toggles theme mode."
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
          <CodeBlock rounded>{`import IconDrawer from '@/components/ui/Drawers/IconDrawer';`}</CodeBlock>
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
            <Flex gap={1} flexWrap={'wrap'} justifyContent={'center'}>
              <IconDrawer
                ref={drawerRef}
                icon={<Settings color={theme.palette.text.primary} size={24} />}
                animateIcon
                animationSpeed="medium"
                animationType="rotate"
                iconButtonProps={{}}
                drawerProps={{ useBackDropEffects: true, anchor: 'right' }}
              >
                <Flex height={'100%'} flexDirection={'column'} width={'320px'} bgcolor="white"></Flex>
              </IconDrawer>
              <IconDrawer
                ref={drawerRef}
                icon={<Settings color={theme.palette.text.primary} size={24} />}
                iconButtonProps={{}}
                drawerProps={{ useBackDropEffects: true, anchor: 'right' }}
              >
                <Flex height={'100%'} flexDirection={'column'} width={'320px'} bgcolor="white"></Flex>
              </IconDrawer>
            </Flex>
          </ExampleWrapper>
          <CodeBlock>
            {`import IconDrawer from '@/components/ui/Drawers/IconDrawer';
import { Settings } from 'lucide-react';
import { Flex } from '@/components/common';

const Example = () => {
  const drawerRef = React.useRef<{
    onToggle: () => void;
  }>(null);

  return (
    <Flex gap={1} flexWrap={'wrap'} justifyContent={'center'}>
      <IconDrawer
        ref={drawerRef}
        icon={<Settings color={theme.palette.text.primary} size={24} />}
        animateIcon
        animationSpeed="medium"
        animationType="rotate"
        iconButtonProps={{}}
        drawerProps={{ useBackDropEffects: true, anchor: 'right' }}
      >
        <Flex height={'100%'} flexDirection={'column'} width={'320px'} bgcolor="white"></Flex>
      </IconDrawer>
      <IconDrawer
        ref={drawerRef}
        icon={<Settings color={theme.palette.text.primary} size={24} />}
        iconButtonProps={{}}
        drawerProps={{ useBackDropEffects: true, anchor: 'right' }}
      >
        <Flex height={'100%'} flexDirection={'column'} width={'320px'} bgcolor="white"></Flex>
      </IconDrawer>
    </Flex>
  )
}

export default Example`}
          </CodeBlock>
        </Box>
        <ComponentHeader
          title="More Information"
          subtitle="For more information chekout the Drawer docs."
          titleProps={{
            variant: 'h3',
            color: 'text.primary'
          }}
        />
        <Box>
          <ComponentHeader
            title="Props"
            subtitle="Available props for IconDrawer component"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          {iconDrawerProps.map((prop, index) => (
            <PropHandler {...prop} key={index} />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default IconDrawerDocs;
