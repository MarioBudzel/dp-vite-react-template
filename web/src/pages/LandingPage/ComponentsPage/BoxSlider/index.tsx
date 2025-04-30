import React from 'react';
import ComponentHeader from '../components/ComponentHeader';
import BoxSliderDocs from './components/BoxSliderDocs';

const BoxSlider: React.FC = () => {
  return (
    <React.Fragment>
      <ComponentHeader
        title="Box Slider"
        subtitle="BoxSlider is a carousel-like component that displays multiple child elements (wrapped in BoxSlider.Child)"
      />
      <BoxSliderDocs />
    </React.Fragment>
  );
};

export default BoxSlider;
