import { Flex } from '@/components/common';
import Helper from '@/components/common/Helper';
import { useMediaQuery, useTheme } from '@mui/material';
import { SignInForm } from '../components/SignInForm.component';

const SignInCenter: React.FC = () => {
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
        <SignInForm />
        <Helper boxProps={{ boxShadow: 1 }} colorScheme="secondary">
          Use <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>admin@admin.com</span> and{' '}
          <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>admin1</span> to sign in!
        </Helper>
      </Flex>
    </Flex>
  );
};

export default SignInCenter;
