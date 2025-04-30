import { Flex } from '@/components/common';
import BorderWrapper from '@/components/common/BorderWrapper';
import Helper from '@/components/common/Helper';
import useDisclosure from '@/hooks/useDisclosure';
import Permission from '@/pages/Status/Permission';
import { Box, Grid, Typography, useTheme, Zoom } from '@mui/material';

const PermissionShowcase: React.FC = () => {
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
            Admin
          </Typography>
          <Typography
            zIndex={3}
            px={2}
            onClick={() => (isAdmin ? onToggle() : undefined)}
            fontWeight={!isAdmin ? 'bold' : 'unset'}
            sx={{ cursor: 'pointer' }}
          >
            User
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
        This page only simulates permission behaviour. For implementation check out the docks!
      </Helper>
      {isAdmin ? (
        <Flex flexGrow={1} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
          <Grid container rowSpacing={2} columnSpacing={2} width={'90%'}>
            {Array.from({ length: 8 }).map((_, index) => (
              <Zoom in={isAdmin}>
                <Grid key={index} item xs={12} md={6}>
                  <BorderWrapper borderColor={'text.disabled'}>
                    <Typography sx={{ textWrap: 'wrap', wordBreak: 'break-word', whiteSpace: 'pre-wrap' }} fontWeight={'bold'}>
                      Excepteur ad ea ullamco consequat nulla. Anim mollit incididunt dolore pariatur est exercitation exercitation esse
                      adipisicing. Reprehenderit commodo ea esse et duis id do. Eu sit minim enim ex. Duis dolore adipisicing nulla deserunt
                      voluptate commodo laborum sint fugiat labore tempor.
                    </Typography>
                  </BorderWrapper>
                </Grid>
              </Zoom>
            ))}
          </Grid>
        </Flex>
      ) : (
        <Zoom in={!isAdmin}>
          <Flex flexGrow={1}>
            <Permission />
          </Flex>
        </Zoom>
      )}
    </Flex>
  );
};

export default PermissionShowcase;
