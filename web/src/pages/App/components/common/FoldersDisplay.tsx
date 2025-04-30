import { Flex, HorizontalScrollBox } from '@/components/common';
import BorderWrapper from '@/components/common/BorderWrapper';
import Loading from '@/components/common/Loading';
import { useGetAllFoldersQuery } from '@/store/api';
import { TFoldersResponse } from '@/types';
import { Typography } from '@mui/material';
import { Folder } from 'lucide-react';

const FoldersDisplay: React.FC = () => {
  const { data, isLoading } = useGetAllFoldersQuery({});

  if (isLoading) return <Loading />;

  if (!data?.folders) return null;

  const folders: TFoldersResponse[] = data.folders;

  return (
    <HorizontalScrollBox>
      {folders.map((folder) => (
        <BorderWrapper
          key={folder._id}
          boxShadow={1}
          borderColor={folder.color}
          py={2}
          px={2}
          minWidth={'250px'}
          display={'flex'}
          flexDirection={'column'}
          gap={2}
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
      ))}
    </HorizontalScrollBox>
  );
};

export default FoldersDisplay;
