import React from 'react';
import ComponentHeader from '../components/ComponentHeader';
import ToastifyExample from './components/ToastifyExample';

const ToastifyDocs: React.FC = () => {
  return (
    <React.Fragment>
      <ComponentHeader
        title="Toastify"
        subtitle="A react-toastify wrapper providing easy access to success and error toasts with built in configuration. This component is easily scalable"
      />
      <ToastifyExample />
    </React.Fragment>
  );
};

export default ToastifyDocs;
