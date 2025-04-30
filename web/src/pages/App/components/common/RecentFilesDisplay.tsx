import { Flex } from '@/components/common';
import BorderWrapper from '@/components/common/BorderWrapper';
import Loading from '@/components/common/Loading';
import { useGetRecentFilesQuery } from '@/store/api';
import { Box, Typography, useTheme } from '@mui/material';
import { Folder } from 'lucide-react';
import { defaultStyles, FileIcon } from 'react-file-icon';

const RecentFilesDisplay: React.FC = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetRecentFilesQuery({});

  if (isLoading) return <Loading />;

  if (!data?.files) return null;

  const files: { createdAt: string; fileName: string; fileSize: string; folderName: string }[] = data.files;

  return (
    <Flex flexDirection={'column'} gap={1}>
      {files.map((file, index) => {
        const extension = file.fileName.split('.').pop();
        const styles = defaultStyles[extension];
        return (
          <BorderWrapper
            key={index}
            borderRadius={3}
            borderColor={'success.main'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            boxShadow={1}
            py={1}
            gap={2}
          >
            <Flex
              gap={2}
              alignItems={'center'}
              width={'40%'}
              overflow={'hidden'}
              sx={{
                [theme.breakpoints.down('sm')]: {
                  flexGrow: 1
                }
              }}
            >
              <Box minWidth={30} maxWidth={30} sx={{ aspectRatio: 1 }}>
                <FileIcon extension={extension} color={theme.palette.warning.main} {...styles} />
              </Box>
              <Flex flexDirection={'column'}>
                <Typography fontWeight={'bold'} color={'info.main'} whiteSpace={'nowrap'} textOverflow={'ellipsis'} overflow={'hidden'}>
                  {file.fileName}
                </Typography>
                <Typography
                  fontWeight={'bold'}
                  color={'text.disabled'}
                  whiteSpace={'nowrap'}
                  textOverflow={'ellipsis'}
                  overflow={'hidden'}
                  fontSize={'10px'}
                >
                  {`Created at: ${new Date(file.createdAt).toLocaleDateString('sk-SK').replace(/\s/g, '')}`}
                </Typography>
              </Flex>
            </Flex>
            <Flex
              alignItems={'center'}
              width={'30%'}
              justifyContent={'flex-end'}
              sx={{
                [theme.breakpoints.down('sm')]: {
                  display: 'none',
                  width: '0%'
                }
              }}
            >
              <Typography fontWeight={'bold'} color={'info.main'} whiteSpace={'nowrap'} textOverflow={'ellipsis'} overflow={'hidden'}>
                {file.fileSize}
              </Typography>
            </Flex>
            <Flex
              gap={1}
              alignItems={'center'}
              width={'30%'}
              justifyContent={'flex-end'}
              sx={{
                [theme.breakpoints.down('sm')]: {
                  width: 'fit-content'
                }
              }}
            >
              <Folder style={{ color: theme.palette.info.main }} display={file.folderName === '-1' ? 'none' : 'unset'} />
              <Typography fontWeight={'bold'} color={'info.main'} whiteSpace={'nowrap'} textOverflow={'ellipsis'} overflow={'hidden'}>
                {file.folderName === '-1' ? 'Uncategorized' : file.folderName}
              </Typography>
            </Flex>
          </BorderWrapper>
        );
      })}
    </Flex>
  );
};

export default RecentFilesDisplay;
