import React from 'react';
import ComponentHeader from '../components/ComponentHeader';
import FontToggleDocs from './components/FontToggleDocs';
import LargeThemeToggleDocs from './components/LargeThemeToggleDocs';
import SimpleThemeToggleDocs from './components/SimpleThemeToggleDocs';

const ThemeToggles: React.FC = () => {
  return (
    <React.Fragment>
      <ComponentHeader title="Theme Toggles" subtitle="Theme toggles are used to control the theme of the entire app." />
      <LargeThemeToggleDocs />
      <SimpleThemeToggleDocs />
      <FontToggleDocs />
    </React.Fragment>
  );
};

export default ThemeToggles;
