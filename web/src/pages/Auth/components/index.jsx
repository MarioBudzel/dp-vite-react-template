import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { mode } from '../../../store/reducers/theme-slice';

import { Outlet } from 'react-router';

import bgImageDark from '../../../assets/square-grid-dark.svg';

const AuthPage = () => {
  const userMode = useSelector(mode);
  const darkMode = Boolean(userMode === 'dark');
  const theme = useTheme();

  const matchMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchUpLG = useMediaQuery(theme.breakpoints.up('lg'));

  const getWidth = () => {
    let width = '100%';
    if (!matchSM) {
      width = matchUpLG || matchMD ? '65%' : '100%';
    }
    return width;
  };

  return (
    <>
      <Box
        sx={{
          minHeight: '100dvh',
          backgroundImage: `url(${darkMode ? bgImageDark : undefined})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: '100px',
          paddingBottom: '100px'
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <Grid container height={'100%'} display={'flex'} justifyContent={'center'}>
            {!matchMD && (
              <Grid item display={'flex'} flexDirection={'column'} alignItems={'flex-start'} sm={12} md={6}>
                <Post
                  title={'Demo authentication'}
                  text={'This is a demo authentication page with Formik forms and Yup validation.'}
                  width={'45%'}
                  my={3}
                />
                <Post
                  title={'Login'}
                  text={'You can try out the login system by logging in as a default admin user:\nEmail: admin@admin.com\nPassword: admin1'}
                  width={'45%'}
                  my={3}
                />
                <Post
                  title={'Register'}
                  text={
                    'You can create a new user by using the register form. Try the email notifications by checking the Send email checkbox.'
                  }
                  width={'45%'}
                  my={3}
                />
              </Grid>
            )}
            <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} sm={12} md={6} width={'100%'}>
              <Box
                minHeight={'50%'}
                width={getWidth()}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                sx={{
                  bgcolor: theme.palette.background.surfaceContainerLowest,
                  borderRadius: '2%',
                  filter: `drop-shadow(0px 0px 10px ${theme.palette.background.background})`,
                  py: 8,
                  px: !matchSM ? 8 : 3
                }}
                border={`1px solid ${theme.palette.background.surfaceContainer}`}
              >
                <Outlet />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

const Post = ({ title, text, my, width }) => {
  return (
    <Box my={my} width={width}>
      <Typography variant="h3">{title}</Typography>
      <Typography style={{ whiteSpace: 'pre-line' }} variant="body1">
        {text}
      </Typography>
    </Box>
  );
};

export default AuthPage;
