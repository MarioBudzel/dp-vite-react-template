import { BoxProps, IconButton, IconButtonProps, useTheme } from '@mui/material';
import { X } from 'lucide-react';
import React from 'react';
import Flex from '../Flex.component';

type TBasicDrawerImageHeaderProps = {
  image: React.ReactElement<HTMLImageElement>;
  leftButtonIcons?: React.ReactElement<IconButtonProps>[];
  rightButtonIcons?: React.ReactElement<IconButtonProps>[];
};

type TDrawerImageHeaderProps =
  | (TBasicDrawerImageHeaderProps & {
      useCloseButton: true;
      onClose: () => void;
    })
  | (TBasicDrawerImageHeaderProps & {
      useCloseButton?: false;
      onClose?: never;
    });

const DrawerImageHeader: React.FC<
  TDrawerImageHeaderProps & Omit<BoxProps, 'flexDirection' | 'flexDir' | 'dir' | 'alignItems' | 'justifyContent'>
> = ({ useCloseButton, image, onClose, leftButtonIcons, rightButtonIcons, ...rest }) => {
  const theme = useTheme();
  return (
    <Flex px={2} {...rest} alignItems={'center'} justifyContent={'space-between'}>
      {image}
      {useCloseButton ? (
        <Flex gap={1} alignItems={'center'}>
          {leftButtonIcons ? leftButtonIcons.map((icon, index) => <React.Fragment key={index}>{icon}</React.Fragment>) : null}
          <IconButton onClick={onClose}>
            <X color={theme.palette.text.primary} size={20} />
          </IconButton>
          {rightButtonIcons ? rightButtonIcons.map((icon, index) => <React.Fragment key={index}>{icon}</React.Fragment>) : null}
        </Flex>
      ) : null}
    </Flex>
  );
};

export default DrawerImageHeader;
