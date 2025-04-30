import React from 'react';
import ComponentHeader from '../components/ComponentHeader';
import BorderWrapperDocs from './components/BorderWrapperDocs';

const BorderWrapper: React.FC = () => {
  return (
    <React.Fragment>
      <ComponentHeader
        title="Border Wrapper"
        subtitle="A convenience component for wrapping content with consistent styling. It also allows for full control over styles"
      />
      <BorderWrapperDocs />
    </React.Fragment>
  );
};

export default BorderWrapper;
