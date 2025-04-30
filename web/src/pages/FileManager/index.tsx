import { Flex, PageTitle } from '@/components/common';
import Helper from '@/components/common/Helper';
import { FileUploadValidator } from '@/validator/fileUpload';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import FilesList from './components/common/FilesList';
import FoldersList from './components/common/FoldersList';

export type TFileUploadForm = z.infer<typeof FileUploadValidator>;
const FileManager: React.FC = () => {
  const form = useForm<TFileUploadForm>({
    mode: 'onChange',
    resolver: zodResolver(FileUploadValidator),
    defaultValues: {
      files: [],
      folderId: ''
    }
  });
  return (
    <Flex flexDirection={'column'} p={2} gap={7}>
      <PageTitle pageTitle="File Management">
        <Helper colorScheme="error" boxProps={{ width: 'fit-content' }}>
          <b>Notice:</b> File deletion is not available to preserve automatic database reset!
        </Helper>
      </PageTitle>
      <FoldersList />
      <Box border={'1px dashed'} borderColor={'text.disabled'} />
      <FormProvider {...form}>
        <FilesList />
      </FormProvider>
    </Flex>
  );
};

export default FileManager;
