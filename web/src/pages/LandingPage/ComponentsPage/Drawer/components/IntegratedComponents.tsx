import { Flex } from '@/components/common';
import CodeBlock from '@/components/common/CodeBlock';
import Drawer from '@/components/common/Drawer';
import DrawerImageHeader from '@/components/common/Drawer/DrawerImageHeader';
import DrawerTextHeader from '@/components/common/Drawer/DrawerTextHeader';
import { Box, Button } from '@mui/material';
import React from 'react';
import ComponentHeader from '../../components/ComponentHeader';
import ExampleWrapper from '../../components/ExampleWrapper';
import PropHandler from '../../components/PropHandler';
import { drawerTextHeaderProps } from '../../data/props';

import appLogoDark from '@/assets/logo_dark.svg';
import appLogoLight from '@/assets/logo_light.svg';
import { mode } from '@/store/reducers/theme-slice';
import { useSelector } from 'react-redux';

const IntegratedComponents: React.FC = () => {
  const drawerHeaderText = React.useRef<{
    onToggle: () => void;
    onClose: () => void;
  }>(null);
  const drawerImageHeader = React.useRef<{
    onToggle: () => void;
    onClose: () => void;
  }>(null);

  const userTheme = useSelector(mode);
  return (
    <>
      <Flex flexDirection={'column'} width={'100%'} gap={5}>
        <ComponentHeader
          title="Integrated Components"
          subtitle="Our Drawer component comes with 2 ingrated components."
          titleProps={{
            variant: 'h3',
            color: 'text.primary'
          }}
        />
        <Box>
          <ComponentHeader
            title="Example (DrawerTextHeader)"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          <ExampleWrapper>
            <Box>
              <Button onClick={() => drawerHeaderText.current?.onToggle?.()}>Open drawer</Button>
              <Drawer anchor="right" ref={drawerHeaderText} useBackDropEffects disableBackdropClick disableEscapeKeyDown>
                <Flex height={'100%'} flexDirection={'column'} width={'320px'} bgcolor="primary.main">
                  <Flex width={'100%'} p={3} justifyContent={'flex-end'}>
                    <DrawerTextHeader
                      width={'100%'}
                      title={'Example'}
                      useCloseButton
                      onClose={() => {
                        drawerHeaderText?.current?.onToggle();
                      }}
                    />
                  </Flex>
                </Flex>
              </Drawer>
            </Box>
          </ExampleWrapper>
          <CodeBlock>
            {`import Drawer from '@/components/common/Drawer';
import { Flex } from '@/components/common';
import DrawerTextHeader from '@/components/common/Drawer/DrawerTextHeader';


const Example = () => {
  const drawerHeaderText = React.useRef<{
    onToggle: () => void;
    onClose: () => void;
  }>(null);
  
  return (
    <>
      <Button onClick={() => drawerHeaderText.current?.onToggle?.()}>Open drawer</Button>
      <Drawer anchor="right" ref={drawerHeaderText} useBackDropEffects disableBackdropClick disableEscapeKeyDown>
        <Flex height={'100%'} flexDirection={'column'} width={'320px'} bgcolor="white">
          <Flex width={'100%'} p={3} justifyContent={'flex-end'}>
            <DrawerTextHeader
              width={'100%'}
              title={'Example'}
              useCloseButton
              onClose={() => {
                drawerHeaderText?.current?.onToggle();
              }}
            />
          </Flex>
        </Flex>
      </Drawer>
    </>
  )
}

export default Example`}
          </CodeBlock>
        </Box>
        <Box>
          <ComponentHeader
            title="Props"
            subtitle="Available props for DrawerTextHeader component"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          {drawerTextHeaderProps.map((prop, index) => (
            <PropHandler {...prop} key={index} />
          ))}
        </Box>
      </Flex>
      {/* Image Header */}
      <Flex flexDirection={'column'} width={'100%'} gap={5}>
        <Box>
          <ComponentHeader
            title="Example (DrawerImageHeader)"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          <ExampleWrapper>
            <Box>
              <Button onClick={() => drawerImageHeader.current?.onToggle?.()}>Open drawer</Button>
              <Drawer anchor="right" ref={drawerImageHeader} useBackDropEffects>
                <Flex height={'100%'} flexDirection={'column'} width={'320px'} bgcolor="primary.main">
                  <Flex width={'100%'} p={3} justifyContent={'flex-end'}>
                    <DrawerImageHeader
                      width={'300px'}
                      image={
                        <img
                          src={userTheme === 'dark' ? appLogoDark : appLogoLight}
                          alt="App logo"
                          style={{ width: 150, padding: 8, paddingBottom: 15 }}
                        />
                      }
                      flexGrow={0}
                    />
                  </Flex>
                </Flex>
              </Drawer>
            </Box>
          </ExampleWrapper>
          <CodeBlock>
            {`import Drawer from '@/components/common/Drawer';
import { Flex } from '@/components/common';
import DrawerImageHeader from '@/components/common/Drawer/DrawerImageHeader';

import appLogoDark from '@/assets/logo_dark.svg';
import appLogoLight from '@/assets/logo_light.svg';
import { mode } from '@/store/reducers/theme-slice';
import { useSelector } from 'react-redux';


const Example = () => {
  const drawerImageHeader = React.useRef<{
    onToggle: () => void;
    onClose: () => void;
  }>(null);

  const userTheme = useSelector(mode);
  
  return (
    <>
      <Button onClick={() => drawerImageHeader.current?.onToggle?.()}>Open drawer</Button>
      <Drawer anchor="right" ref={drawerImageHeader} useBackDropEffects disableBackdropClick disableEscapeKeyDown>
        <Flex height={'100%'} flexDirection={'column'} width={'320px'} bgcolor="white">
          <Flex width={'100%'} p={3} justifyContent={'flex-end'}>
            <DrawerImageHeader
              width={'300px'}
              image={
                <img
                  src={userTheme === 'dark' ? appLogoDark : appLogoLight}
                  alt="App logo"
                  style={{ width: 150, padding: 8, paddingBottom: 15 }}
                />
              }
              flexGrow={0}
            />
          </Flex>
        </Flex>
      </Drawer>
    </>
  )
}

export default Example`}
          </CodeBlock>
        </Box>
        <Box>
          <ComponentHeader
            title="Props"
            subtitle="Available props for DrawerImageHeader component"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          {drawerTextHeaderProps.map((prop, index) => (
            <PropHandler {...prop} key={index} />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default IntegratedComponents;
