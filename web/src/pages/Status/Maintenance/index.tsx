import { Flex } from '@/components/common';
import { Button, Typography, useTheme } from '@mui/material';
import { Wrench } from 'lucide-react';
import { useNavigate } from 'react-router';

const Maintenance: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Flex width={'100%'} height={'100dvh'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={0} px={2}>
      <Wrench size={150} style={{ color: theme.palette.info.main }} />
      <Typography fontSize={'75px'} fontWeight={'bold'} textTransform={'capitalize'} textAlign={'center'} color={'info.light'}>
        Do not worry!
      </Typography>
      <Typography fontSize={'20px'} fontWeight={'bold'} textTransform={'capitalize'} textAlign={'center'} color={'text.primary'}>
        We are working on it. This page will be available soon!
      </Typography>
      <Button color="secondary" sx={{ mt: 2 }} onClick={() => navigate('/', { replace: true })}>
        Take me home
      </Button>
    </Flex>
  );
};

export default Maintenance;
