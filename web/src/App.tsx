import { Box, Typography } from '@mui/material';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Flex } from './components/common';
import Modals from './components/ui/Modals';
import useDisclosure from './hooks/useDisclosure';
import { useMaintenanceContext } from './hooks/useMaintenanceContext';
import privateRoutes from './routes/privateRoutes';
import publicRoutes from './routes/publicRoutes';
import ThemeCustomization from './themes';

const App = () => {
  const router = createBrowserRouter([...publicRoutes(), ...privateRoutes()]);
  const { incomingMaintenance } = useMaintenanceContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    if (incomingMaintenance) onOpen();
  }, [incomingMaintenance, onOpen]);

  return (
    <ThemeCustomization>
      <RouterProvider router={router} />
      <Modals.Confirm
        disableCancelButton
        text={
          <Flex flexDirection={'column'}>
            <Typography>
              We will be performing a <b>scheduled maintenance in 5 minutes</b>. During this time:
            </Typography>
            <Box component={'ul'}>
              <Typography component={'li'}>
                You will be <b>automatically sign out</b>
              </Typography>
              <Typography component={'li'}>
                Every change made will be <b>lost</b>
              </Typography>
              <Typography component={'li'}>
                Data will be <b>reverted to its original state</b>
              </Typography>
            </Box>
            <Typography>Thank you for your patience 🫶</Typography>
          </Flex>
        }
        modalTitle="🔔 Scheduled Maintenance Alert 🔔"
        onClose={onClose}
        onConfirm={onClose}
        onCancel={onClose}
        isOpen={isOpen}
        confirmText="Understood"
      />
    </ThemeCustomization>
  );
};

export default App;
