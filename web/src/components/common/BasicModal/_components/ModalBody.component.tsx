import Flex from '../../Flex.component';

const ModalBody: React.FC<{ children: React.ReactNode }> = ({ children }) => <Flex flexDirection={'column'}>{children}</Flex>;

export default ModalBody;
