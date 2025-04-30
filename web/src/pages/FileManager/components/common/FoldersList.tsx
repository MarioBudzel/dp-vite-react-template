import { Flex, Toastify } from '@/components/common';
import Loading from '@/components/common/Loading';
import { downloadFile } from '@/lib/util';
import { useGetAllFoldersQuery } from '@/store/api';
import { TFoldersResponse } from '@/types';
import { Box, Fab, Typography, useTheme } from '@mui/material';
import { Folder } from 'lucide-react';
import React from 'react';
import FolderWrapper from '../ui/FolderWrapper';
import InfoDrawer from '../ui/InfoDrawer';
import CreateFolderModal from './CreateFolderModal';

import api from '@/api/api';

const FoldersList: React.FC = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetAllFoldersQuery({});

  const [clickedFolder, setClickedFolder] = React.useState<TFoldersResponse | undefined>(undefined);
  const [downloading, setDownloading] = React.useState<boolean>(false);

  const drawerRef = React.useRef<{
    onToggle: () => void;
  }>(null);

  const handleFileDownload = async () => {
    setDownloading(true);
    try {
      const response = await api.get(`/file/downloadFolder/${clickedFolder?._id}`, {
        responseType: 'blob'
      });
      if (!response.data) throw new Error();
      const success = downloadFile(response.data, response.headers['Content-Type'] as string, `${clickedFolder?.title}.zip`);

      if (!success) throw new Error();

      Toastify.success({ label: 'Folder downloaded!' });
    } catch {
      Toastify.error({ label: 'Oh no a mysterious error has occured!' });
    }
    setDownloading(false);
  };

  if (isLoading) return <Loading />;

  const folders: TFoldersResponse[] = data?.folders ?? [];

  return (
    <Flex flexDirection={'column'} gap={2}>
      <Flex flexDirection={'column'}>
        <Flex gap={2} alignItems={'center'}>
          <Typography variant="h4">Folders</Typography>
          <CreateFolderModal />
        </Flex>
        <Typography
          fontWeight={'bold'}
          fontSize={'13px'}
          color={'text.disabled'}
        >{`${folders.length} ${folders.length === 1 ? 'folder' : 'folders'}`}</Typography>
      </Flex>
      <Flex gap={2} flexWrap={'wrap'} sx={{ [theme.breakpoints.down('sm')]: { justifyContent: 'center' } }}>
        {folders.map((folder) => (
          <FolderWrapper
            key={folder._id}
            folder={folder}
            onClick={() => {
              drawerRef?.current?.onToggle?.();
              setClickedFolder(folder);
            }}
          />
        ))}
      </Flex>
      <InfoDrawer ref={drawerRef}>
        <Flex flexGrow={1} flexDirection={'column'} minWidth={'250px'} gap={2}>
          <Flex flexDirection={'column'}>
            <Folder
              color={clickedFolder?.color}
              fill={clickedFolder?.color}
              size={75}
              style={{ filter: `drop-shadow(0px 0px 2px ${clickedFolder?.color})` }}
            />
            <Typography variant="h4" color={'text.secondary'}>
              {clickedFolder?.title}
            </Typography>
          </Flex>
          <Box border={'1px dashed'} borderColor={'text.disabled'} />
          <Typography variant="h5" color={'text.primary'}>
            Properties
          </Typography>
          <Flex flexDirection={'column'} gap={1}>
            <Flex justifyContent={'space-between'}>
              <Typography variant="subtitle1" color={'text.secondary'}>
                Size:
              </Typography>
              <Typography variant="subtitle1" color={'text.secondary'}>
                {clickedFolder?.totalSize}
              </Typography>
            </Flex>
            <Flex justifyContent={'space-between'}>
              <Typography variant="subtitle1" color={'text.secondary'}>
                File count:
              </Typography>
              <Typography variant="subtitle1" color={'text.secondary'}>
                {clickedFolder?.filesCount}
              </Typography>
            </Flex>
            <Flex justifyContent={'space-between'}>
              <Typography variant="subtitle1" color={'text.secondary'}>
                Created at:
              </Typography>
              <Typography variant="subtitle1" color={'text.secondary'}>
                {new Date(clickedFolder?.createdAt).toLocaleDateString('sk-SK').replace(/\s/g, '')}
              </Typography>
            </Flex>
          </Flex>
          <Box border={'1px dashed'} borderColor={'text.disabled'} />
          {!downloading ? (
            <Fab
              color="secondary"
              variant="extended"
              sx={{ fontWeight: 'bold', height: 'fit-content', py: 1 }}
              onClick={handleFileDownload}
            >
              Download all files
            </Fab>
          ) : (
            <Flex justifyContent={'center'}>
              <Box width={'100px'} sx={{ aspectRatio: 1 }}>
                <Loading loaderSize={50} />
              </Box>
            </Flex>
          )}
        </Flex>
      </InfoDrawer>
    </Flex>
  );
};

export default FoldersList;
