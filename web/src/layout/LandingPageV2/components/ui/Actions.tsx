import { Flex } from '@/components/common';
import SettingsDrawer from '@/components/common/SettingsDrawer';
import { useTheme } from '@mui/material';

const Actions = () => {
  const theme = useTheme();
  return (
    <Flex
      gap={2}
      justifyContent={'flex-end'}
      sx={{
        [theme.breakpoints.up('sm')]: {
          width: '200px'
        }
      }}
    >
      <SettingsDrawer />
    </Flex>
  );
};

export default Actions;
