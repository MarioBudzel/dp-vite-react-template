import { Flex } from '@/components/common';
import { Button, Typography, useTheme } from '@mui/material';
import { CircleOff } from 'lucide-react';
import { useNavigate } from 'react-router';

const Permission: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Flex width={'100%'} height={'100dvh'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={0} px={2}>
      <CircleOff size={150} style={{ color: theme.palette.error.main }} />
      <Typography fontSize={'75px'} fontWeight={'bold'} textTransform={'capitalize'} textAlign={'center'} color={'error.light'}>
        Oh, no!
      </Typography>
      <Typography fontSize={'20px'} fontWeight={'bold'} textTransform={'capitalize'} textAlign={'center'} color={'text.primary'}>
        It seems like you cannot view this page! (Use the Sign in page)
      </Typography>
      <Button color="secondary" sx={{ mt: 2 }} onClick={() => navigate('/', { replace: true })}>
        Take me back
      </Button>
    </Flex>
  );
};

export default Permission;
