import { Flex, SplitBox } from '@/components/common';
import BoxSlider, { TBoxSliderHandle } from '@/components/common/BoxSlider';
import BoxSliderChild from '@/components/common/BoxSlider/BoxSlider.Child';
import { useAuth } from '@/context/AuthContext';
import { Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import { sliderItems } from '../../data/SliderItems';
import SliderTypography from '../ui/SliderTypography';

const BannerSection: React.FC = () => {
  const sliderRef = React.useRef<TBoxSliderHandle>(null);
  const theme = useTheme();
  const { user } = useAuth();
  return (
    <>
      <Grid item xs={12} md={8}>
        <SplitBox
          maxHeight={'350px'}
          sx={{
            backgroundImage:
              'radial-gradient(circle, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 100%), url(https://i.pinimg.com/736x/33/c4/81/33c48192f3841f5dd3a1c447ec0d0449.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <Flex
            width={'50%'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'flex-start'}
            py={2}
            px={2}
            gap={1}
            sx={{
              [theme.breakpoints.down('sm')]: {
                width: '100%'
              }
            }}
          >
            <Flex width={'100%'} flexDirection={'column'} gap={0} overflow={'hidden'}>
              <Typography color={'white'} fontWeight={700} variant="h3">
                Welcome back 👋
              </Typography>
              <Typography color={'white'} fontWeight={700} variant="h3">
                {user.name} {user.surName}
              </Typography>
            </Flex>
            <Typography color={'secondary.main'} textTransform={'uppercase'} fontWeight={700}>
              Did you know?
            </Typography>
            <Typography variant="body1" color={'white'}>
              Astronauts can grow up to 2 inches taller in space because of reduced spinal compression! But once they return to Earth,
              gravity shrinks them back to normal.
            </Typography>
          </Flex>
          <Flex
            width={'50%'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'flex-end'}
            py={2}
            px={2}
            sx={{
              [theme.breakpoints.down('sm')]: {
                visibility: 'hidden',
                display: 'none'
              }
            }}
          >
            <img height={'100%'} src="https://cdn.pixabay.com/photo/2023/11/01/03/20/ai-generated-8356498_1280.png" />
          </Flex>
        </SplitBox>
      </Grid>
      <Grid item xs={12} md={4}>
        <BoxSlider minHeight={'350px'} ref={sliderRef} animationSpeed={5000}>
          {sliderItems.map((item, index) => (
            <BoxSliderChild useVignette key={index} imageUrl={item.image}>
              <SliderTypography info={item.info} title={item.title} subtitle={item.subtitle} />
            </BoxSliderChild>
          ))}
        </BoxSlider>
      </Grid>
    </>
  );
};

export default BannerSection;
