import { BasicModal, Flex } from '@/components/common';
import { ModalProps } from '@/types';
import { Box, Button } from '@mui/material';
import React from 'react';

export interface ConfirmModalProps extends ModalProps {
  text: string | React.ReactNode;
  onConfirm: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel?: () => void;
  modalTitle?: string;
  confirmText?: string;
  disableCancelButton?: boolean;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  text,
  onConfirm,
  onCancel,
  modalTitle,
  confirmText,
  disableCancelButton
}) => {
  return (
    <BasicModal isOpen={isOpen} onClose={onClose}>
      <BasicModal.Title>{modalTitle ?? 'Are you sure?'}</BasicModal.Title>
      <BasicModal.CloseButton onClick={onClose} />
      <BasicModal.Body>
        <Box maxWidth={'350px'}>{text}</Box>
      </BasicModal.Body>
      <BasicModal.Footer>
        <Flex width={'100%'} justifyContent={'flex-end'} gap={2}>
          {disableCancelButton ? null : (
            <Button variant="text" onClick={onCancel} sx={{ color: 'text.secondary' }}>
              Cancel
            </Button>
          )}
          <Button
            variant="contained"
            onClick={(e) => {
              onConfirm(e);
            }}
            sx={{ fontWeight: 'bold', backgroundColor: 'background.primary', color: 'text.onPrimary' }}
          >
            {confirmText ?? 'Accept'}
          </Button>
        </Flex>
      </BasicModal.Footer>
    </BasicModal>
  );
};

export default ConfirmModal;
