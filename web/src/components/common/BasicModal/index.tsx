import { Modal, useTheme } from '@mui/material';
import React from 'react';

import Flex from '../Flex.component';
import ModalBody from './_components/ModalBody.component';
import ModalCloseButton from './_components/ModalCloseButton.component';
import ModalFooter from './_components/ModalFooter.component';
import ModalTitle from './_components/ModalTitle.component';

type Props = {
  children: React.ReactNode;
  position?: 'top' | 'center';
  px?: number;
  isOpen: boolean;
  onClose: () => void;
};

const BasicModal: React.FC<Props> & {
  Title: typeof ModalTitle;
  CloseButton: typeof ModalCloseButton;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
} = ({ isOpen, onClose, children, position = 'center', px = 5 }) => {
  const theme = useTheme();
  const style = {
    position: 'absolute',
    top: position === 'center' ? '50%' : '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '90dvh',
    bgcolor: 'background.default',
    boxShadow: 24,
    p: 2,
    px: px,
    overflow: 'auto',
    borderRadius: 2,
    [theme.breakpoints.down('sm')]: {
      width: '95%'
    }
  };

  const titleChildren = React.Children.toArray(children).filter((child) => React.isValidElement(child) && child.type === ModalTitle);
  const closeButton = React.Children.toArray(children).filter((child) => React.isValidElement(child) && child.type === ModalCloseButton);
  const modalBody = React.Children.toArray(children).filter((child) => React.isValidElement(child) && child.type === ModalBody);
  const modalFooter = React.Children.toArray(children).filter((child) => React.isValidElement(child) && child.type === ModalFooter);

  const handleClose = (_, reason) => {
    if (reason !== 'backdropClick') onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      disableEscapeKeyDown
      sx={{ zIndex: 10000 }}
      slotProps={{
        backdrop: { sx: { backdropFilter: 'blur(10px)' } }
      }}
    >
      <Flex sx={style} display={'flex'} flexDirection={'column'} gap={2}>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Flex flexGrow={1} justifyContent={'start'}>
            {titleChildren}
          </Flex>
          <Flex flexGrow={1} justifyContent={'end'}>
            {closeButton}
          </Flex>
        </Flex>
        {modalBody}
        {modalFooter}
      </Flex>
    </Modal>
  );
};

BasicModal.Title = ModalTitle;
BasicModal.CloseButton = ModalCloseButton;
BasicModal.Body = ModalBody;
BasicModal.Footer = ModalFooter;

export default BasicModal;
