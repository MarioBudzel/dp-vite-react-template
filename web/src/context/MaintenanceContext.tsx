import React from 'react';

import { io } from 'socket.io-client';

export const MaintenanceContext = React.createContext<{
  maintenance: boolean;
  incomingMaintenance: boolean;
}>({ maintenance: null, incomingMaintenance: null });

export const MaintenanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [socket, setSocket] = React.useState(null);
  const [maintenance, setMaintenance] = React.useState<boolean>(false);
  const [incomingMaintenance, setIncomingMaintenance] = React.useState<boolean>(false);

  console.log(maintenance);

  React.useEffect(() => {
    const newSocket = io('http://localhost:5173', {
      path: '/socket',
      transports: ['websocket', 'polling'],
      closeOnBeforeunload: true,
      autoConnect: false
    });
    setSocket(newSocket);

    const handleMaintenance = () => {
      console.log('Maintenance on');
      setMaintenance(() => true);
    };
    const handleMaintenanceOver = () => {
      console.log('Maintenance off');
      setMaintenance(() => false);
      setIncomingMaintenance(() => false);
    };
    const handleIncomingMaintenance = () => {
      console.log('Incoming maintenance');
      setIncomingMaintenance(() => true);
    };

    newSocket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    newSocket.on('maintenance', handleMaintenance);
    newSocket.on('maintenance_over', handleMaintenanceOver);
    newSocket.on('incoming_maintenance', handleIncomingMaintenance);

    newSocket.on('minute_update', (data) => {
      console.log(data);
    });

    return () => {
      newSocket.close();
      newSocket.disconnect();
      newSocket.off('maintenance', handleMaintenance);
      newSocket.off('maintenance_over', handleMaintenanceOver);
      newSocket.off('incoming_maintenance', handleIncomingMaintenance);
    };
  }, []);

  React.useEffect(() => {
    const connectSocket = () => {
      if (socket) {
        socket.connect();
        console.log('Socket connected after window load');
      }
    };

    if (document.readyState === 'complete') {
      connectSocket();
    } else {
      window.addEventListener('load', connectSocket);
    }

    return () => {
      window.removeEventListener('load', connectSocket);
    };
  }, [socket]);

  return <MaintenanceContext.Provider value={{ maintenance, incomingMaintenance }}>{children}</MaintenanceContext.Provider>;
};
