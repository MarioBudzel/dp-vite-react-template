import { Flex } from '@/components/common';
import Helper from '@/components/common/Helper';
import useDisclosure from '@/hooks/useDisclosure';
import SliderTypography from '@/pages/App/components/ui/SliderTypography';
import { Box, Grid, IconButton, Typography, useTheme, Zoom } from '@mui/material';
import { Edit, Trash2 } from 'lucide-react';

const RoleButtons: React.FC = () => {
  const { isOpen: isAdmin, onToggle } = useDisclosure(true);
  const theme = useTheme();

  return (
    <Flex flexDirection={'column'} width={'100%'} height={'100%'} alignItems={'center'} gap={2} px={2}>
      <Flex width={'100%'} height={'fit-content'} justifyContent={'center'}>
        <Flex
          alignItems={'center'}
          width={'fit-content'}
          gap={2}
          py={1}
          borderRadius={3}
          bgcolor={'primary.light'}
          position={'relative'}
          zIndex={1}
          boxShadow={3}
        >
          <Typography
            zIndex={3}
            px={2}
            onClick={() => (!isAdmin ? onToggle() : undefined)}
            fontWeight={isAdmin ? 'bold' : 'unset'}
            sx={{ cursor: 'pointer' }}
          >
            Read-Write
          </Typography>
          <Typography
            zIndex={3}
            px={2}
            onClick={() => (isAdmin ? onToggle() : undefined)}
            fontWeight={!isAdmin ? 'bold' : 'unset'}
            sx={{ cursor: 'pointer' }}
          >
            Read-Only
          </Typography>
          <Box
            zIndex={2}
            position={'absolute'}
            width={'50%'}
            height={'90%'}
            bgcolor={`rgba(${theme.palette.secondary.lightChannel},.4)`}
            borderRadius={3}
            sx={{
              top: '5%',
              transform: `translate(${isAdmin ? '0%' : '100%'})`,
              transition: 'transform 170ms ease-out'
            }}
          />
        </Flex>
      </Flex>
      <Helper boxProps={{ width: 'fit-content' }} colorScheme="warning">
        This page only simulates roles behaviour. For implementation check out the docks!
      </Helper>
      <Flex flexGrow={1} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
        <Grid container rowSpacing={2} columnSpacing={2} width={'90%'}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Zoom in={true} key={index}>
              <Grid item xs={12} md={4} justifyContent={'center'} display={'flex'}>
                <Flex
                  maxWidth={'350px'}
                  flexDirection={'column'}
                  justifyContent={'space-between'}
                  borderRadius={3}
                  boxShadow={1}
                  sx={{
                    backgroundImage:
                      'radial-gradient(circle, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 100%), url(https://i.pinimg.com/736x/83/b2/5f/83b25f14d71e720692b8ca33e6bd7d04.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <Flex minHeight={'100px'} width={'100%'} gap={2} alignSelf={'flex-start'} flexDirection={'column'} py={1} px={1}>
                    <Zoom in={isAdmin}>
                      <Flex justifyContent={'flex-end'} width={'100%'}>
                        <IconButton size="small">
                          <Edit style={{ color: theme.palette.secondary.main }} size={18} />
                        </IconButton>
                        <IconButton size="small">
                          <Trash2 style={{ color: theme.palette.error.main }} size={18} />
                        </IconButton>
                      </Flex>
                    </Zoom>
                  </Flex>
                  <SliderTypography
                    info="Mollit officia culpa."
                    subtitle="Sint nostrud do est exercitation exercitation culpa."
                    title="Occaecat officia exercitation ullamco eiusmod incididunt quis reprehenderit aliqua nulla."
                  />
                </Flex>
              </Grid>
            </Zoom>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default RoleButtons;
