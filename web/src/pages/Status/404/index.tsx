import { Flex } from '@/components/common';
import { Button, Typography, useTheme } from '@mui/material';
import { Squirrel } from 'lucide-react';
import { useNavigate } from 'react-router';

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Flex width={'100%'} height={'100dvh'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={0}>
      <Squirrel size={150} style={{ color: theme.palette.warning.main }} />
      <Typography fontSize={'75px'} fontWeight={'bold'} textTransform={'capitalize'} textAlign={'center'} color={'warning.light'}>
        Oh, no!
      </Typography>
      <Typography fontSize={'20px'} fontWeight={'bold'} textTransform={'capitalize'} textAlign={'center'} color={'text.primary'}>
        It looks like the page you are looking for does not exist!
      </Typography>
      <Button color="secondary" sx={{ mt: 2 }} onClick={() => navigate('/', { replace: true })}>
        Take me home
      </Button>
    </Flex>
  );
};

export default PageNotFound;
