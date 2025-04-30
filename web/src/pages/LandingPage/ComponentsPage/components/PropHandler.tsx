import { Flex } from '@/components/common';
import useDisclosure from '@/hooks/useDisclosure';
import { Box, Collapse, IconButton, Typography, useTheme } from '@mui/material';
import { ChevronDown } from 'lucide-react';
import React from 'react';

export type PropHandlerType = {
  propName: string;
  propDescription: string;
  propType: string;
  propDefault?: string;
};

const PropHandler: React.FC<PropHandlerType> = ({ propName, propType, propDescription, propDefault }) => {
  const theme = useTheme();
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box width={'100%'} borderBottom={'1px solid'} borderColor={'primary.dark'} py={2}>
      <Flex width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant="body1" color={'primary.main'} sx={{ textDecoration: 'underline' }}>
          {propName}
        </Typography>
        <IconButton onClick={onToggle}>
          <ChevronDown size={'16px'} style={{ color: theme.palette.text.disabled }} />
        </IconButton>
      </Flex>
      <Collapse in={isOpen}>
        <Box p={1} width={'100%'}>
          <Typography variant="body1" mb={2}>
            {propDescription}
          </Typography>
          <Flex gap={2} alignItems={'flex-end'} width={'100%'}>
            <Typography variant="body1" color={'text.disabled'}>
              Type:
            </Typography>
            <Box
              whiteSpace={'pre-wrap'}
              p={1}
              borderRadius={2}
              bgcolor={`rgba(${theme.palette.primary.lightChannel}, .7)`}
              border={'1px solid'}
              borderColor={'primary.main'}
            >
              {propType}
            </Box>
          </Flex>
          {propDefault ? (
            <Flex gap={2} mt={2} alignItems={'flex-end'}>
              <Typography variant="body1" color={'text.disabled'}>
                Default:
              </Typography>
              <Typography
                variant="body1"
                p={1}
                borderRadius={2}
                bgcolor={`rgba(${theme.palette.primary.lightChannel}, .7)`}
                border={'1px solid'}
                borderColor={'primary.main'}
              >
                {propDefault}
              </Typography>
            </Flex>
          ) : null}
        </Box>
      </Collapse>
    </Box>
  );
};

export default PropHandler;
