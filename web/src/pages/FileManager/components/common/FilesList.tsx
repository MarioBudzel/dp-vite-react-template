import { Flex, Toastify } from '@/components/common';
import Loading from '@/components/common/Loading';
import { downloadFile, getBaseURL } from '@/lib/util';
import { useGetAllFilesQuery } from '@/store/api';
import { TFilesResponse } from '@/types';
import { Box, Fab, Typography, useTheme } from '@mui/material';
import React from 'react';
import { defaultStyles, FileIcon } from 'react-file-icon';
import FileWrapper from '../ui/FileWrapper';
import InfoDrawer from '../ui/InfoDrawer';
import UploadFilesModal from './UploadFilesModal';

import api from '@/api/api';

const FilesList: React.FC = () => {
  const { data, isLoading } = useGetAllFilesQuery({});
  const theme = useTheme();
  const [clickedFile, setClickedFile] = React.useState<TFilesResponse | undefined>(undefined);
  const [downloading, setDownloading] = React.useState<boolean>(false);

  const drawerRef = React.useRef<{
    onToggle: () => void;
  }>(null);

  const handleFileDownload = async () => {
    setDownloading(true);
    try {
      const response = await api.get(`/file/downloadSingle/${clickedFile?._id}`, {
        responseType: 'blob'
      });
      if (!response.data) throw new Error();
      const success = downloadFile(response.data, response.headers['Content-Type'] as string, clickedFile?.fileName);

      if (!success) throw new Error();

      Toastify.success({ label: 'File downloaded!' });
    } catch {
      Toastify.error({ label: 'Oh no a mysterious error has occured!' });
    }
    setDownloading(false);
  };

  if (isLoading) return <Loading />;

  const files: TFilesResponse[] = data?.files ?? [];

  return (
    <Flex flexDirection={'column'} gap={2}>
      <Flex flexDirection={'column'}>
        <Flex gap={2} alignItems={'center'}>
          <Typography variant="h4">Files</Typography>
          <UploadFilesModal />
        </Flex>
        <Typography
          fontWeight={'bold'}
          fontSize={'13px'}
          color={'text.disabled'}
        >{`${files.length} ${files.length === 1 ? 'file' : 'files'}`}</Typography>
      </Flex>
      <Flex gap={2} flexWrap={'wrap'}>
        {files.map((file) => (
          <FileWrapper
            file={file}
            key={file._id}
            onClick={() => {
              drawerRef?.current?.onToggle?.();
              setClickedFile(file);
            }}
          />
        ))}
      </Flex>
      <InfoDrawer ref={drawerRef}>
        <Flex flexGrow={1} flexDirection={'column'} minWidth={'250px'} maxWidth={'280px'} gap={2}>
          <Flex flexDirection={'column'} alignItems={'center'} gap={1}>
            {!clickedFile?.mimetype.startsWith('image') || clickedFile?.fileName.endsWith('psd') ? (
              <Box width={75}>
                <FileIcon
                  color={
                    clickedFile?.mimetype.startsWith('image')
                      ? theme.palette.warning.main
                      : clickedFile?.mimetype.startsWith('video')
                        ? theme.palette.success.main
                        : undefined
                  }
                  {...defaultStyles[clickedFile?.fileName.split('.').pop()]}
                />
              </Box>
            ) : (
              <img
                style={{
                  maxWidth: '200px',
                  borderRadius: '8px',
                  boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)'
                }}
                alt={clickedFile?.fileName}
                src={`${getBaseURL()}/${clickedFile?.path}`}
              />
            )}
            <Typography variant="h4" color={'text.secondary'} width={'100%'}>
              {clickedFile?.fileName}
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
                {clickedFile?.fileSize}
              </Typography>
            </Flex>
            <Flex justifyContent={'space-between'}>
              <Typography variant="subtitle1" color={'text.secondary'}>
                Parent folder:
              </Typography>
              <Typography variant="subtitle1" color={'text.secondary'}>
                {clickedFile?.folderName !== '-1' ? clickedFile?.folderName : 'Uncategorized'}
              </Typography>
            </Flex>
            <Flex justifyContent={'space-between'}>
              <Typography variant="subtitle1" color={'text.secondary'}>
                Created at:
              </Typography>
              <Typography variant="subtitle1" color={'text.secondary'}>
                {new Date(clickedFile?.createdAt).toLocaleDateString('sk-SK').replace(/\s/g, '')}
              </Typography>
            </Flex>
          </Flex>
          <Box border={'1px dashed'} borderColor={'text.disabled'} />
          {!downloading ? (
            <Fab
              onClick={handleFileDownload}
              color="secondary"
              variant="extended"
              sx={{ fontWeight: 'bold', height: 'fit-content', py: 1 }}
            >
              Download file
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

export default FilesList;
