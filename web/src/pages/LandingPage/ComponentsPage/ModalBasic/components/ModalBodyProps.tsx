import { Flex } from '@/components/common';
import { Box } from '@mui/material';
import ComponentHeader from '../../components/ComponentHeader';
import PropHandler from '../../components/PropHandler';
import { modalBodyProps } from '../../data/props';

const ModalBodyProps: React.FC = () => {
  return (
    <>
      <Flex flexDirection={'column'} width={'100%'} gap={5}>
        <Box>
          <ComponentHeader
            title="Props (Modal.Body)"
            subtitle="Available props for Modal.Body component"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          {modalBodyProps.map((prop, index) => (
            <PropHandler {...prop} key={index} />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default ModalBodyProps;
