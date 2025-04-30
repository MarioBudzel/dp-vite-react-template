import { CircularProgress, useTheme } from '@mui/material';
import Flex from './Flex.component';

import logo from '@/assets/logo.svg';

const Loading: React.FC<{ loaderSize?: number }> = ({ loaderSize = 100 }) => {
  const theme = useTheme();
  return (
    <Flex width={'100%'} height={'100%'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} position={'relative'}>
      <Flex width={'100%'} height={'100%'} position={'absolute'} top={0} left={0} justifyContent={'center'} alignItems={'center'}>
        <CircularProgress color="secondary" size={`${loaderSize}px`} />
      </Flex>
      <img
        src={logo}
        alt="App logo"
        style={{
          width: loaderSize / 2,
          filter: `drop-shadow(0px 0px 25px rgba(${theme.palette.secondary.lightChannel}, .3))`
        }}
      />
    </Flex>
  );
};

export default Loading;
