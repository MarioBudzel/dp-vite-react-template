import { Flex } from '@/components/common';
import useDisclosure from '@/hooks/useDisclosure';
import { Tooltip, Typography } from '@mui/material';
import { Check } from 'lucide-react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const ColorItem: React.FC<{ color: { title: string; value: string } }> = ({ color }) => {
  const { isOpen: isHovered, onToggle } = useDisclosure();
  const { watch, setValue } = useFormContext<{
    title: string;
    color: string;
    maxSize: number;
  }>();

  const selectedColor = watch('color');

  return (
    <Tooltip
      title={
        <Flex flexDirection={'column'}>
          <Typography fontWeight={'bold'} fontSize={'13px'}>
            {color.title}
          </Typography>
          <Typography fontSize={'11px'}>{color.value}</Typography>
        </Flex>
      }
    >
      <Flex
        onMouseEnter={onToggle}
        onMouseLeave={onToggle}
        onClick={() => {
          setValue('color', color.value);
        }}
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={'50%'}
        boxShadow={1}
        minWidth={'20px'}
        bgcolor={color.value}
        sx={{
          aspectRatio: 1,
          cursor: 'pointer',
          transformOrigin: 'center center',
          transform: 'scale(1)',
          transition: 'transform 200ms linear',
          '&:hover': {
            transform: 'scale(1.2)'
          }
        }}
      >
        <Check
          size={12}
          strokeWidth={4}
          color="white"
          style={{
            opacity: selectedColor === color.value ? 1 : isHovered ? 0.5 : 0,
            transition: 'opacity 200ms linear'
          }}
        />
      </Flex>
    </Tooltip>
  );
};

export default ColorItem;
