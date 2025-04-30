import { mode } from '@/store/reducers/theme-slice';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import appLogoDark from '@/assets/logo_dark.svg';
import appLogoLight from '@/assets/logo_light.svg';
import { Flex } from '@/components/common';
import SimpleToggle from '@/components/ui/ThemeToggles/SimpleToggle';
import Collapsed from '../SideBar/Collapsed';

const AppBar: React.FC = () => {
  const userTheme = useSelector(mode);
  const navigate = useNavigate();

  return (
    <Box
      component={'header'}
      sx={{
        zIndex: 15,
        bgcolor: 'background.paper',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 'var(--dashboard-header-height)',
        px: 2
      }}
    >
      <Box
        sx={{
          cursor: 'pointer'
        }}
        onClick={() => {
          navigate('/');
        }}
      >
        <img src={userTheme === 'dark' ? appLogoDark : appLogoLight} alt="App logo" style={{ width: 150, padding: 8, paddingBottom: 15 }} />
      </Box>
      <Flex alignItems={'center'} gap={2}>
        <SimpleToggle />
        <Collapsed />
      </Flex>
    </Box>
  );
};

export default AppBar;
