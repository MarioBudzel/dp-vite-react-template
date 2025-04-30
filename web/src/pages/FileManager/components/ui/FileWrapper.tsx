import { Flex } from '@/components/common';
import BorderWrapper from '@/components/common/BorderWrapper';
import { TFilesResponse } from '@/types';
import { Box, BoxProps, Typography, useTheme } from '@mui/material';
import { defaultStyles, FileIcon } from 'react-file-icon';

const FileWrapper: React.FC<{ onClick?: BoxProps['onClick']; file: TFilesResponse | undefined }> = ({ onClick, file }) => {
  const theme = useTheme();
  const extension = file.fileName.split('.').pop();
  return (
    <BorderWrapper
      borderColor={'text.disabled'}
      py={2}
      px={2}
      display={'flex'}
      flexDirection={'column'}
      gap={2}
      onClick={onClick}
      width={'350px'}
      flexShrink={0}
      boxShadow={1}
      sx={{
        cursor: 'pointer',
        transition: 'background-color 200ms ease-in-out',

        [theme.breakpoints.down('sm')]: {
          minWidth: '100%'
        }
      }}
    >
      <Flex flexDirection={'column'} gap={1}>
        <Box width={50} sx={{ aspectRatio: 1 }}>
          <FileIcon
            color={
              file.mimetype.startsWith('image')
                ? theme.palette.warning.main
                : file.mimetype.startsWith('video')
                  ? theme.palette.success.main
                  : undefined
            }
            {...defaultStyles[extension]}
          />
        </Box>
        <Flex flexDirection={'column'}>
          <Typography variant="h5" color={'text.secondary'}>
            {file.fileName}
          </Typography>
        </Flex>
        <Flex width={'100%'} justifyContent={'space-between'}>
          <Typography fontSize={'11px'} color={'text.disabled'}>
            {`Parent folder: ${file.folderName !== '-1' ? file.folderName : 'Uncategorized'}`}
          </Typography>
          <Typography fontSize={'11px'} color={'text.disabled'}>
            {`Created at: ${new Date(file.createdAt).toLocaleDateString('sk-SK').replace(/\s/g, '')}`}
          </Typography>
        </Flex>
      </Flex>
    </BorderWrapper>
  );
};

export default FileWrapper;
