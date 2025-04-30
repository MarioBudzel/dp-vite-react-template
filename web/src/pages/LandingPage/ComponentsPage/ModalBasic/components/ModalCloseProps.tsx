import { Flex } from '@/components/common';
import { Box } from '@mui/material';
import ComponentHeader from '../../components/ComponentHeader';
import PropHandler from '../../components/PropHandler';
import { modalCloseButtonProps } from '../../data/props';

const ModalCloseProps: React.FC = () => {
  return (
    <>
      <Flex flexDirection={'column'} width={'100%'} gap={5}>
        <Box>
          <ComponentHeader
            title="Props (Modal.CloseButton)"
            subtitle="Available props for Modal.CloseButton component"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          {modalCloseButtonProps.map((prop, index) => (
            <PropHandler {...prop} key={index} />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default ModalCloseProps;
