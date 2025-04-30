import { Flex } from '@/components/common';
import { Button, Typography, useTheme } from '@mui/material';
import { CircleX } from 'lucide-react';
import { useNavigate } from 'react-router';

const Error: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Flex width={'100%'} height={'100dvh'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={0} px={2}>
      <CircleX size={150} style={{ color: theme.palette.error.main }} />
      <Typography fontSize={'75px'} fontWeight={'bold'} textTransform={'capitalize'} textAlign={'center'} color={'error.light'}>
        Ooops
      </Typography>
      <Typography fontSize={'20px'} fontWeight={'bold'} textTransform={'capitalize'} textAlign={'center'} color={'text.primary'}>
        It looks like something went wrong!
      </Typography>
      <Button color="secondary" sx={{ mt: 2 }} onClick={() => navigate('/', { replace: true })}>
        Take me home
      </Button>
    </Flex>
  );
};

export default Error;
