import React from 'react';
import ComponentHeader from '../components/ComponentHeader';
import IconDrawerDocs from './components/IconDrawerDocs';

const IconDrawer: React.FC = () => {
  return (
    <React.Fragment>
      <ComponentHeader
        title="Icon Drawer"
        subtitle="A wrapper component for a Drawer that can be triggered using a customizable icon button. It supports animated icons and forwards props to both the internal Drawer and IconButton."
      />
      <IconDrawerDocs />
    </React.Fragment>
  );
};

export default IconDrawer;
