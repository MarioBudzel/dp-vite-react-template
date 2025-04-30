import { BoxProps } from '@mui/material';
import Flex from '../Flex.component';

const BoxSliderChild: React.FC<
  { children?: React.ReactNode; useVignette?: boolean; imageUrl: string } & Omit<
    BoxProps,
    'width' | 'height' | 'position' | 'flexDirection' | 'flexDir'
  >
> = ({ children, useVignette, imageUrl, ...rest }) => {
  return (
    <Flex
      flexDirection={'column'}
      position={'relative'}
      maxWidth={'100%'}
      flexGrow={0}
      height={'100%'}
      minWidth={'100%'}
      sx={{
        backgroundImage: useVignette
          ? `radial-gradient(circle, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 100%), url(${imageUrl})`
          : `url(${imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      {...rest}
      m={0}
      margin={0}
      mr={0}
      ml={0}
      my={0}
      mt={0}
      mb={0}
    >
      {children}
    </Flex>
  );
};

export default BoxSliderChild;
