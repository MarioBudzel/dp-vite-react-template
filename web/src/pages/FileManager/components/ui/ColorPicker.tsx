import { Flex } from '@/components/common';
import React from 'react';
import ColorItem from './ColorItem';

const colors = [
  {
    title: 'Turquoise',
    value: '#40E0D0'
  },
  {
    title: 'Emerald',
    value: '#50C878'
  },
  {
    title: 'Peter River',
    value: '#48A2DF'
  },
  {
    title: 'Wisteria',
    value: '#C9A0dC'
  },
  {
    title: 'Sun Flower',
    value: '#FAE033'
  },
  {
    title: 'Carrot',
    value: '#E9692C'
  },
  {
    title: 'Alizarin',
    value: '#E32636'
  }
];

const ColorPicker: React.FC = () => {
  return (
    <Flex gap={1} justifyContent={'center'} width={'100%'}>
      {colors.map((color, index) => (
        <ColorItem key={index} color={color} />
      ))}
    </Flex>
  );
};

export default ColorPicker;
