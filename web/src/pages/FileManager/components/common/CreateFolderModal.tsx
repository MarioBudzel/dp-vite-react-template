import Modals from '@/components/ui/Modals';
import useDisclosure from '@/hooks/useDisclosure';
import { Box, IconButton, useTheme } from '@mui/material';
import { Plus } from 'lucide-react';
import React from 'react';
import FolderCreateForm from '../ui/FolderCreateForm';

const CreateFolderModal: React.FC = () => {
  const theme = useTheme();
  const { isOpen, onToggle } = useDisclosure();

  const folderRef = React.useRef<{
    onSubmit: () => Promise<void> | undefined;
    returnData: () => Promise<{
      title: string;
      color: string;
    }>;
  }>(null);

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
      <Modals.Form
        title="Create Folder"
        isOpen={isOpen}
        onClose={onToggle}
        onSubmit={async () => {
          const data = await folderRef.current?.returnData?.();
          if (!data) return;

          await folderRef.current?.onSubmit?.();
          onToggle();
        }}
        confirmText="Create"
      >
        <FolderCreateForm ref={folderRef} />
      </Modals.Form>
    </Box>
  );
};

export default CreateFolderModal;
