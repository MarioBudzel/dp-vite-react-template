import { Flex } from '@/components/common';
import { Typography } from '@mui/material';

const SliderTypography: React.FC<{ info: string; title: string; subtitle: string }> = ({ info, title, subtitle }) => {
  return (
    <Flex width={'100%'} height={'100%'} alignItems={'flex-end'} flexGrow={0}>
      <Flex
        px={2}
        py={2}
        textOverflow={'ellipsis'}
        flexDirection={'column'}
        flexGrow={1}
        sx={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 50%)'
        }}
        overflow={'hidden'}
      >
        <Typography
          textTransform={'uppercase'}
          fontWeight={700}
          color={'secondary.main'}
          width={'100%'}
          overflow={'hidden'}
          textOverflow={'ellipsis'}
          sx={{
            whiteSpace: 'nowrap'
          }}
        >
          {info}
        </Typography>
        <Typography
          width={'100%'}
          variant="h4"
          overflow={'hidden'}
          textOverflow={'ellipsis'}
          color={'white'}
          sx={{
            whiteSpace: 'nowrap'
          }}
        >
          {title}
        </Typography>
        <Typography
          width={'90%'}
          variant="subtitle1"
          overflow={'hidden'}
          textOverflow={'ellipsis'}
          color={'white'}
          sx={{
            whiteSpace: 'nowrap'
          }}
        >
          {subtitle}
        </Typography>
      </Flex>
    </Flex>
  );
};

export default SliderTypography;
