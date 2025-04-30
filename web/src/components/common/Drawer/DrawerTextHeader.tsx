import { BoxProps, IconButton, IconButtonProps, Typography, useTheme } from '@mui/material';
import { X } from 'lucide-react';
import React from 'react';
import Flex from '../Flex.component';

type TBasicDrawerTextHeaderProps = {
  title: React.ReactElement | string;
  leftButtonIcons?: React.ReactElement<IconButtonProps>[];
  rightButtonIcons?: React.ReactElement<IconButtonProps>[];
};

type TDrawerTextHeaderProps =
  | (TBasicDrawerTextHeaderProps & {
      useCloseButton: true;
      onClose: () => void;
    })
  | (TBasicDrawerTextHeaderProps & {
      useCloseButton?: false;
      onClose?: never;
    });

const DrawerTextHeader: React.FC<
  TDrawerTextHeaderProps & Omit<BoxProps, 'flexDirection' | 'flexDir' | 'dir' | 'alignItems' | 'justifyContent'>
> = ({ useCloseButton, title, onClose, leftButtonIcons, rightButtonIcons, ...rest }) => {
  const theme = useTheme();
  return (
    <Flex px={2} {...rest} alignItems={'center'} justifyContent={'space-between'}>
      {typeof title !== 'string' ? (
        title
      ) : (
        <Typography variant="h4" color={'text.primary'}>
          {title}
        </Typography>
      )}
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

export default DrawerTextHeader;
