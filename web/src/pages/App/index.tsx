import { Flex, Toastify } from '@/components/common';
import FileUploader from '@/components/common/FileUploader';
import { useAddFilesMutation } from '@/store/api';
import { Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import BannerSection from './components/common/BannerSection';
import FoldersDisplay from './components/common/FoldersDisplay';
import RecentFilesDisplay from './components/common/RecentFilesDisplay';

const App: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [files, setFiles] = React.useState<File[]>([]);
  const [uploadFiles] = useAddFilesMutation();

  const handleFileUpload = React.useCallback(async () => {
    try {
      const formData = new FormData();
      files.forEach((file) => formData.append(file.name, file));

      const response = await uploadFiles(formData);
      if ('error' in response) throw new Error();
      Toastify.success({ label: 'Files uploaded!' });
      setFiles([]);
    } catch {
      Toastify.error({ label: 'A mysterious error has occured!' });
      setFiles([]);
    }
  }, [files, uploadFiles]);

  React.useEffect(() => {
    if (files.length === 0) return;

    handleFileUpload();
  }, [files, handleFileUpload]);

  return (
    <Flex
      overflow={'hidden'}
      width={'100%'}
      flexDirection={'column'}
      px={2}
      pb={2}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        [theme.breakpoints.down('sm')]: {
          px: 0
        }
      }}
    >
      <Grid container columnSpacing={4} rowSpacing={4} width={'100%'}>
        <BannerSection />
        <Grid item xs={12}>
          <FoldersDisplay />
        </Grid>
        <Grid item xs={12} md={8}>
          <Flex justifyContent={'space-between'} alignItems={'center'} mb={2}>
            <Typography fontSize={'15px'} fontWeight={'bold'} color={'text.secondary'}>
              Recent files
            </Typography>
            <Typography
              onClick={() => navigate('/dashboard/file-management')}
              fontSize={'15px'}
              fontWeight={'bold'}
              color={'text.secondary'}
              sx={{
                cursor: 'pointer',
                transition: 'color 200ms ease-out',
                '&:hover': {
                  textDecoration: 'underline',
                  color: 'text.primary'
                }
              }}
            >
              View All {`>`}
            </Typography>
          </Flex>
          <RecentFilesDisplay />
        </Grid>
        <Grid item xs={12} md={4}>
          <Flex justifyContent={'flex-end'} mb={2}>
            <Typography
              onClick={() => navigate('/dashboard/file-management')}
              fontSize={'15px'}
              fontWeight={'bold'}
              color={'text.secondary'}
              sx={{
                cursor: 'pointer',
                transition: 'color 200ms ease-out',
                '&:hover': {
                  textDecoration: 'underline',
                  color: 'text.primary'
                }
              }}
            >
              Upload To Folder {`>`}
            </Typography>
          </Flex>
          <FileUploader setFiles={setFiles} minHeight={'250px'} />
        </Grid>
      </Grid>
    </Flex>
  );
};

export default App;
