import Flex from '@/components/common/Flex.component';
import { BoxProps } from '@mui/material';

const CardActions: React.FC<{ children: React.ReactNode } & BoxProps> = ({ children, ...rest }) => {
  return (
    <Flex gap={2} alignItems={'center'} justifyContent={'flex-end'} width={'100%'} {...rest}>
      {children}
    </Flex>
  );
};

export default CardActions;
