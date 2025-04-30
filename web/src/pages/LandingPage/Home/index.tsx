import { Box, Container, Fab, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router';
import logo from '../../../assets/logo.svg';

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box bgcolor={'background.default'} height={'100dvh'}>
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <img
              src={logo}
              alt="App logo"
              style={{
                width: 200,
                filter: `drop-shadow(0px 0px 25px rgba(${theme.palette.secondary.lightChannel}, .3))`
              }}
            />

            <Box width={'70%'} textAlign={'center'}>
              <Typography variant="h1" sx={{ mt: 5, mb: 3 }}>
                Create, design, and test your web application
              </Typography>
              <Typography variant="body1" sx={{ mb: 5 }}>
                Create and design amazing web applications with this React and Vite Template that is fully docker ready.
              </Typography>
            </Box>
          </Box>
          <Fab
            variant="extended"
            sx={{
              bgcolor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
              transition: 'background-color color 0.2s ease-in-out',
              '&:hover': {
                bgcolor: theme.palette.secondary.light,
                color: theme.palette.secondary.contrastText
              }
            }}
            onClick={() => navigate('/docs/overview')}
          >
            <Typography variant="h4" sx={{ mx: 5 }}>
              Get started
            </Typography>
          </Fab>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
