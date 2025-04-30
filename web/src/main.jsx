import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider as ReduxProvider } from 'react-redux';

import App from './App';

import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/AuthContext.tsx';
import { MaintenanceProvider } from './context/MaintenanceContext';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <MaintenanceProvider>
      <ReduxProvider store={store}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ReduxProvider>
    </MaintenanceProvider>
  </React.StrictMode>
);
