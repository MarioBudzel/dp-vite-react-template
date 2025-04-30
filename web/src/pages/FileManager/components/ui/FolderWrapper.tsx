import { Flex } from '@/components/common';
import BorderWrapper from '@/components/common/BorderWrapper';
import { hexToRgb } from '@/lib/util';
import { TFoldersResponse } from '@/types';
import { BoxProps, Typography, useTheme } from '@mui/material';
import { Folder } from 'lucide-react';

const FolderWrapper: React.FC<{ onClick?: BoxProps['onClick']; folder: TFoldersResponse | undefined }> = ({ onClick, folder }) => {
  const rgb = hexToRgb(folder?.color);
  const theme = useTheme();
  return (
    <BorderWrapper
      borderColor={folder.color}
      py={2}
      px={2}
      display={'flex'}
      flexDirection={'column'}
      gap={3}
      onClick={onClick}
      minWidth={'250px'}
      flexShrink={0}
      boxShadow={1}
      sx={{
        cursor: 'pointer',
        transition: 'background-color 200ms ease-in-out',
        '&:hover': {
          bgcolor: `rgba(${rgb}, .1)`
        },
        [theme.breakpoints.down('sm')]: {
          minWidth: '100%'
        }
      }}
    >
      <Flex alignItems={'center'} gap={1}>
        <Folder color={folder.color} fill={folder.color} size={45} style={{ filter: `drop-shadow(0px 0px 2px ${folder.color})` }} />
        <Flex flexDirection={'column'}>
          <Typography variant="h5" color={'text.secondary'}>
            {folder.title}
          </Typography>
          <Typography fontSize={'11px'} color={'text.disabled'}>
            {`Created at: ${new Date(folder.createdAt).toLocaleDateString('sk-SK').replace(/\s/g, '')}`}
          </Typography>
        </Flex>
      </Flex>
      <Flex width={'100%'} justifyContent={'flex-end'}>
        <Typography fontWeight={700} color={'text.disabled'} fontSize={'10px'}>
          {folder.totalSize} • {folder.filesCount} files
        </Typography>
      </Flex>
    </BorderWrapper>
  );
};

export default FolderWrapper;
