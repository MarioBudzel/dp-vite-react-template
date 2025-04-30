import { Flex } from '@/components/common';
import Helper from '@/components/common/Helper';
import { SignInForm } from '../components/SignInForm.component';

const SignInSplit: React.FC = () => {
  return (
    <Flex width={'100%'} flexGrow={1} flexDirection={'column'}>
      <Flex flexGrow={1} width={'100%'} justifyContent={'center'} alignItems={'center'}>
        <Flex flexDirection={'column'} px={5} gap={2}>
          <SignInForm />
        </Flex>
      </Flex>
      <Flex px={2} py={2} width={'100%'}>
        <Helper boxProps={{ boxShadow: 1 }} colorScheme="secondary">
          Use <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>admin@admin.com</span> and{' '}
          <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>admin1</span> to sign in!
        </Helper>
      </Flex>
    </Flex>
  );
};

export default SignInSplit;
