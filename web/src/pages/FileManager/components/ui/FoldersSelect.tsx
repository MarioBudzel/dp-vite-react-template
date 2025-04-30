import { StyledFormControl } from '@/components/common/Form/StyledFormControl.component';
import { useGetAllFoldersQuery } from '@/store/api';
import { MenuItem, Select, useTheme } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TFileUploadForm } from '../..';

const FoldersSelect: React.FC = () => {
  const { control } = useFormContext<TFileUploadForm>();
  const theme = useTheme();

  const { data } = useGetAllFoldersQuery({});

  const folders: { _id: string; title: string; color: string; createdAt: string }[] = React.useMemo(() => data?.folders ?? [], [data]);

  const foldersOptions = React.useMemo(
    () =>
      folders.map((folder) => ({
        label: folder.title,
        value: folder._id
      })),
    [folders]
  );

  return (
    <StyledFormControl formularPath={'folderId'} title="Folder">
      <Controller
        control={control}
        name={'folderId'}
        render={({ field: { onChange, value } }) => (
          <Select
            style={{
              backgroundColor: theme.palette.background.paper
            }}
            sx={{
              '.MuiSvgIcon-root ': {
                fill: `${theme.palette.text.primary}!important`
              },
              boxShadow: 1
            }}
            value={value}
            onChange={onChange}
            MenuProps={{ sx: { zIndex: 10000 } }}
            displayEmpty
          >
            <MenuItem value={''}>None</MenuItem>
            {foldersOptions.map((option, index) => (
              <MenuItem value={option.value} key={index}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </StyledFormControl>
  );
};

export default FoldersSelect;
