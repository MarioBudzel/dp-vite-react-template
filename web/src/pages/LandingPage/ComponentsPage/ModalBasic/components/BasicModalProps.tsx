import { Flex } from '@/components/common';
import { Box } from '@mui/material';
import ComponentHeader from '../../components/ComponentHeader';
import PropHandler from '../../components/PropHandler';
import { basicModalProps } from '../../data/props';

const BasicModalProps: React.FC = () => {
  return (
    <>
      <Flex flexDirection={'column'} width={'100%'} gap={5}>
        <Box>
          <ComponentHeader
            title="Props (Modal)"
            subtitle="Available props for Modal component"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          {basicModalProps.map((prop, index) => (
            <PropHandler {...prop} key={index} />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default BasicModalProps;
