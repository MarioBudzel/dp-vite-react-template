import { Flex } from '@/components/common';
import { SignUpForm } from '../components/SignUpForm.component';

const SignUpSplit: React.FC = () => {
  return (
    <Flex width={'100%'} flexGrow={1} flexDirection={'column'}>
      <Flex flexGrow={1} width={'100%'} justifyContent={'center'} alignItems={'center'}>
        <Flex flexDirection={'column'} px={5} gap={2}>
          <SignUpForm />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignUpSplit;
