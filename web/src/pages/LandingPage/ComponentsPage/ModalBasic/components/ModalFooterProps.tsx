import { Flex } from '@/components/common';
import { Box } from '@mui/material';
import ComponentHeader from '../../components/ComponentHeader';
import PropHandler from '../../components/PropHandler';
import { modalFooterProps } from '../../data/props';

const ModalFooterProps: React.FC = () => {
  return (
    <>
      <Flex flexDirection={'column'} width={'100%'} gap={5}>
        <Box>
          <ComponentHeader
            title="Props (Modal.Footer)"
            subtitle="Available props for Modal.Footer component"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          {modalFooterProps.map((prop, index) => (
            <PropHandler {...prop} key={index} />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default ModalFooterProps;
