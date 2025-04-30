import React from 'react';
import { toast, ToastOptions } from 'react-toastify';

const toastOptions: ToastOptions<unknown | undefined> = {
  position: 'top-right',
  autoClose: 3000,
  closeButton: false
};

const Toastify: {
  success: React.FC<{ label: string }>;
  error: React.FC<{ label: string }>;
} = () => {
  return <></>;
};

Toastify.success = ({ label }) => {
  return toast(label, {
    ...toastOptions,
    type: 'success'
  });
};

Toastify.error = ({ label }) => {
  return toast(label, {
    ...toastOptions,
    type: 'error'
  });
};

export default Toastify;
