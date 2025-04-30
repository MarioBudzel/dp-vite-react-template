import React from 'react';
import ComponentHeader from '../components/ComponentHeader';
import ProgressBarDocs from './components/ProgressBarDocs';

const ProgressBar: React.FC = () => {
  return (
    <React.Fragment>
      <ComponentHeader title="Simple Progress Bar" subtitle="Simple progress bar" />
      <ProgressBarDocs />
    </React.Fragment>
  );
};

export default ProgressBar;
