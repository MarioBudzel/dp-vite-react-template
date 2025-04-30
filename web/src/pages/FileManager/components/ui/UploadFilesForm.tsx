import { Flex, HorizontalScrollBox } from '@/components/common';
import BorderWrapper from '@/components/common/BorderWrapper';
import FileUploader from '@/components/common/FileUploader';
import Helper from '@/components/common/Helper';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Lightbulb, ShieldAlert, X } from 'lucide-react';
import React from 'react';
import { FileIcon } from 'react-file-icon';
import { useFormContext } from 'react-hook-form';
import { TFileUploadForm } from '../..';
import FoldersSelect from './FoldersSelect';

const FilesUploadForm = () => {
  const [files, setFiles] = React.useState<File[]>([]);
  const theme = useTheme();
  const { setValue } = useFormContext<TFileUploadForm>();

  React.useEffect(() => {
    setValue('files', files);
  }, [files, setValue]);

  return (
    <Flex flexDirection={'column'} gap={2} width={'100%'}>
      <Helper icon={<Lightbulb />} colorScheme="warning">
        <span style={{ fontWeight: 700 }}>Notice: </span>
        Any changes made will be removed in 5 minutes!
      </Helper>
      <Helper icon={<ShieldAlert />} colorScheme="error">
        <span style={{ fontWeight: 700 }}>Warning: </span>
        Every new item is visible to other users. Do not share any personal information!
      </Helper>
      <FoldersSelect />
      <FileUploader setFiles={setFiles} minHeight={'250px'} maxHeight={'250px'} />
      {files.length !== 0 ? (
        <Flex width={'100%'} justifyContent={'center'}>
          <HorizontalScrollBox maxWidth={'300px'}>
            {files.map((file, index) => {
              return (
                <BorderWrapper
                  key={index}
                  borderColor={'success.main'}
                  boxShadow={1}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  minWidth={'fit-content'}
                  py={1}
                  px={1}
                  gap={2}
                >
                  <Flex gap={1} alignItems={'center'}>
                    <Box width={'15px'} height={'15px'}>
                      <FileIcon color={theme.palette.success.main} />
                    </Box>
                    <Typography>{file.name}</Typography>
                  </Flex>
                  <IconButton
                    size="small"
                    onClick={() => {
                      setFiles((prev) => {
                        const filtered = prev.filter((_, idx) => idx !== index);
                        return filtered;
                      });
                    }}
                  >
                    <X size={15} style={{ color: theme.palette.success.light }} />
                  </IconButton>
                </BorderWrapper>
              );
            })}
          </HorizontalScrollBox>
        </Flex>
      ) : null}
    </Flex>
  );
};

export default FilesUploadForm;
