import { Flex, SimpleProgressBar } from '@/components/common';
import BorderWrapper from '@/components/common/BorderWrapper';
import { Grid, SvgIcon, Typography, useTheme } from '@mui/material';
import { Folder } from 'lucide-react';
import FolderDisplay from './components/FolderDisplay';
import FormatsTable from './TableTest';

const folders = [
  {
    name: 'Files',
    size: 1.5,
    maxSize: 3
  },
  {
    name: 'Images',
    size: 3.5,
    maxSize: 5
  },
  {
    name: 'DPMI',
    size: 1.8,
    maxSize: 2
  }
];

const File: React.FC = () => {
  const theme = useTheme();
  return (
    <Flex
      width={'100%'}
      flexDirection={'column'}
      px={2}
      sx={{
        [theme.breakpoints.down('sm')]: {
          px: 0
        }
      }}
    >
      <Grid container width={'100%'} columnSpacing={3}>
        {folders.map((folder, index) => {
          const percentage = Math.floor((folder.size / folder.maxSize) * 100);
          const colorScheme = percentage > 80 ? 'error' : percentage > 65 ? 'warning' : 'primary';
          return (
            <Grid key={index} item xs={6} md={4} py={2}>
              <BorderWrapper
                display={'flex'}
                flexDirection={'column'}
                gap={2}
                borderRadius={3}
                borderColor={'transparent'}
                boxShadow={3}
                py={3}
                px={3}
                bgcolor={`rgba(${theme.palette.background.paperChannel}, .7)`}
              >
                <Flex flexDirection={'column'} gap={0}>
                  <SvgIcon component={Folder} fontSize="large" sx={{ color: theme.palette.secondary.main }} />
                  <Typography fontWeight={700} color={'secondary.main'} fontSize={'18px'}>
                    {folder.name}
                  </Typography>
                </Flex>
                <SimpleProgressBar colorScheme={colorScheme} progress={`${percentage}%`} />
                <Flex width={'100%'} justifyContent={'flex-end'}>
                  <Typography fontWeight={700} color={'text.secondary'} fontSize={'12px'}>
                    {folder.size} GB / {folder.maxSize} GB
                  </Typography>
                </Flex>
              </BorderWrapper>
            </Grid>
          );
        })}
        <Grid item xs={12} md={6}>
          <BorderWrapper
            display={'flex'}
            flexDirection={'column'}
            gap={2}
            borderRadius={3}
            borderColor={'transparent'}
            minHeight={'2000px'}
          >
            <FolderDisplay />
            <FormatsTable />
          </BorderWrapper>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </Flex>
  );
};

export default File;
