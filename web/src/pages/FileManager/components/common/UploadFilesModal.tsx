import Toastify from '@/components/common/Toastify';
import Modals from '@/components/ui/Modals';
import useDisclosure from '@/hooks/useDisclosure';
import { useAddFilesMutation } from '@/store/api';
import { Box, IconButton, useTheme } from '@mui/material';
import { Plus } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { TFileUploadForm } from '../..';
import FilesUploadForm from '../ui/UploadFilesForm';

const UploadFilesModal: React.FC = () => {
  const theme = useTheme();
  const { isOpen, onToggle } = useDisclosure();
  const { trigger, getValues } = useFormContext<TFileUploadForm>();

  const [uploadFiles] = useAddFilesMutation();

  const handleSubmit = async () => {
    if (!(await trigger())) {
      onToggle();
      return Toastify.error({ label: 'Error validating form. (At least 1 file needed!)' });
    }

    try {
      const data = getValues();
      const formData = new FormData();
      if (data.folderId) {
        formData.append('folderId', data.folderId);
      }

      data.files.forEach((file) => formData.append(file.name, file));

      const response = await uploadFiles(formData);

      onToggle();
      if ('error' in response) throw new Error();
      Toastify.success({ label: 'Files uploaded!' });
    } catch {
      Toastify.error({ label: 'A mysterious error has occured!' });
    }
  };

  return (
    <Box width={'fit-content'}>
      <IconButton
        onClick={onToggle}
        size="small"
        sx={{
          boxShadow: 1,
          bgcolor: 'error.main',
          transition: 'background-color 300ms linear',
          '&:hover': {
            bgcolor: 'error.dark'
          }
        }}
      >
        <Plus strokeWidth={3} size={16} style={{ color: theme.palette.error.contrastText }} />
      </IconButton>
      <Modals.Form title="Upload Files" isOpen={isOpen} onClose={onToggle} onSubmit={handleSubmit} confirmText="Upload">
        <FilesUploadForm />
      </Modals.Form>
    </Box>
  );
};

export default UploadFilesModal;
