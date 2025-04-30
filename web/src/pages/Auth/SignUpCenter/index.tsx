import { Flex } from '@/components/common';
import { useMediaQuery, useTheme } from '@mui/material';
import { SignUpForm } from '../components/SignUpForm.component';

const SignUpCenter: React.FC = () => {
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Flex
      flexGrow={1}
      width={'100%'}
      py={10}
      justifyContent={!matchSM ? 'center' : 'start'}
      flexDirection={'column'}
      gap={2}
      alignItems={'center'}
    >
      <Flex flexDirection={'column'} gap={3} px={5} bgcolor={'background.paper'} borderRadius={3} py={3} boxShadow={3}>
        <SignUpForm />
      </Flex>
    </Flex>
  );
};

export default SignUpCenter;
