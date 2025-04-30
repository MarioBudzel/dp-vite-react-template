import { Flex, HorizontalScrollBox, Toastify } from '@/components/common';
import BorderWrapper from '@/components/common/BorderWrapper';
import FileUploader from '@/components/common/FileUploader';
import { StyledFormControl } from '@/components/common/Form/StyledFormControl.component';
import Helper from '@/components/common/Helper';
import { FolderValidation } from '@/validator/folderCreate';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, IconButton, OutlinedInput, SvgIcon, Typography, useTheme } from '@mui/material';
import { Folder, Lightbulb, ShieldAlert, X } from 'lucide-react';
import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import ColorPicker from './ColorPicker';

import { useAddFilesMutation, useCreateFolderMutation } from '@/store/api';
import { FileIcon } from 'react-file-icon';

type Folder = {
  folder?: z.infer<typeof FolderValidation> & { id: string };
};

const FolderCreateForm = React.forwardRef<
  {
    onSubmit: () => Promise<void> | undefined;
    returnData: () => Promise<{
      title: string;
      color: string;
    }>;
  },
  Folder
>(({ folder }, ref) => {
  const theme = useTheme();
  const [files, setFiles] = React.useState<File[]>([]);

  const [createFolder] = useCreateFolderMutation();
  const [addFiles] = useAddFilesMutation();

  const form = useForm<{
    title: string;
    color: string;
  }>({
    mode: 'onChange',
    resolver: zodResolver(FolderValidation),
    defaultValues: {
      color: '#40E0D0',
      title: ''
    }
  });

  const { control, getValues, trigger, watch } = form;

  const selectedColor = watch('color');

  const returnData = async () => {
    if (!(await trigger())) return undefined;
    return getValues();
  };

  const handleSubmit = async () => {
    try {
      const data = getValues();
      const response = await createFolder(data);
      if ('error' in response) throw new Error();

      const folderId = response.data.folderId;
      if (files.length === 0) return;

      const formData = new FormData();
      formData.append('folderId', folderId);

      files.forEach((file) => {
        formData.append(file.name, file);
      });

      await addFiles(formData);
    } catch {
      Toastify.error({ label: 'A mysterious error has occured!' });
    }
  };

  React.useImperativeHandle(ref, () => ({
    onSubmit: folder ? undefined : handleSubmit,
    returnData: returnData
  }));
  return (
    <FormProvider {...form}>
      <Flex flexDirection={'column'} gap={2} width={'100%'}>
        <Helper icon={<Lightbulb />} colorScheme="warning">
          <span style={{ fontWeight: 700 }}>Notice: </span>
          Any changes made will be removed in 5 minutes!
        </Helper>
        <Helper icon={<ShieldAlert />} colorScheme="error">
          <span style={{ fontWeight: 700 }}>Warning: </span>
          Every new item is visible to other users. Do not share any personal information!
        </Helper>
        <StyledFormControl formularPath={'title'} isRequired title="Title">
          <Controller
            control={control}
            name={'title'}
            render={({ field: { onChange, value, onBlur } }) => (
              <OutlinedInput
                placeholder="Folder"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                style={{
                  backgroundColor: theme.palette.background.paper
                }}
              />
            )}
          />
        </StyledFormControl>
        <StyledFormControl formularPath={'color'} isRequired title="Color">
          <ColorPicker />
        </StyledFormControl>
        <Flex width={'100%'} justifyContent={'center'}>
          <SvgIcon
            component={Folder}
            sx={{ color: selectedColor, fontSize: '3rem', filter: `drop-shadow(0px 0px 5px ${selectedColor})` }}
          />
        </Flex>
        <FileUploader setFiles={setFiles} minHeight={'200px'} />
      </Flex>
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
                      setFiles((prev) => prev.filter((_, idx) => idx !== index));
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
    </FormProvider>
  );
});

export default FolderCreateForm;
