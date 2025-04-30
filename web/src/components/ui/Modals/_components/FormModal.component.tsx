import { BasicModal, Flex } from '@/components/common';
import { ModalProps } from '@/types';
import { Button } from '@mui/material';

interface FormModalProps extends ModalProps {
  onSubmit: () => void;
  title: string;
  confirmText?: string;
  children: React.ReactNode;
  disableConfirm?: boolean;
  cancelCustomEvent?: () => void;
  cancelText?: string;
}

const FormModal: React.FC<FormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  confirmText,
  disableConfirm = false,
  children,
  cancelCustomEvent = undefined,
  cancelText = 'Close'
}) => {
  return (
    <BasicModal isOpen={isOpen} onClose={onClose}>
      <BasicModal.CloseButton onClick={onClose} />
      <BasicModal.Title>{title}</BasicModal.Title>
      <BasicModal.Body>{children}</BasicModal.Body>
      <BasicModal.Footer>
        <Flex width={'100%'} justifyContent={'flex-end'} gap={2}>
          <Button
            variant="text"
            onClick={() => {
              if (cancelCustomEvent) return cancelCustomEvent();
              onClose();
            }}
            sx={{ color: 'text.secondary' }}
          >
            {cancelText}
          </Button>
          <Button
            variant="contained"
            onClick={onSubmit}
            disabled={disableConfirm}
            sx={{
              transition: 'background-color 200ms linear',
              fontWeight: 'bold',
              backgroundColor: 'secondary.main',
              color: 'secondary.contrastText',
              '&:hover': {
                backgroundColor: 'secondary.dark'
              }
            }}
          >
            {confirmText ?? 'Create'}
          </Button>
        </Flex>
      </BasicModal.Footer>
    </BasicModal>
  );
};

export default FormModal;
