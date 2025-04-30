import { Flex } from '@/components/common';
import BorderWrapper from '@/components/common/BorderWrapper';
import { Typography, useTheme } from '@mui/material';
import { Component } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';
import ComponentHeader from '../components/ComponentHeader';
import { componentsNavigation } from '../data/navLinks';

const Overview: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const filteredNavigation = componentsNavigation.filter((link) => link.name !== 'Overview');

  return (
    <Flex width={'100%'} flexDirection={'column'} gap={5} p={5} sx={{ [theme.breakpoints.down('md')]: { padding: 1 } }}>
      <ComponentHeader title="Overview" subtitle="This page highlights selected components and demonstrates their usage and props." />
      <Flex width={'100%'} gap={2} flexWrap={'wrap'} justifyContent={'center'}>
        {filteredNavigation.map((link, index) => (
          <BorderWrapper
            key={index}
            width={'150px'}
            maxWidth={'150px'}
            maxHeight={'150px'}
            sx={{
              aspectRatio: 1,
              transition: 'all 200ms ease-in-out',
              cursor: 'pointer',
              '&:hover': { fontWeight: 'bold', bgcolor: `rgba(${theme.palette.background.paperChannel}, .1)` }
            }}
            flexShrink={0}
            display={'flex'}
            flexDirection={'column'}
            gap={2}
            borderRadius={3}
            borderColor={'secondary.light'}
            boxShadow={3}
            justifyContent={'center'}
            alignItems={'center'}
            position={'relative'}
            fontSize={'19px'}
            onClick={() => navigate(link.path, { replace: true })}
          >
            <Component
              style={{ color: `rgba(${theme.palette.text.disabledChannel}, .1)`, position: 'absolute', width: '80%', height: '80%' }}
            />
            <Typography
              textAlign={'center'}
              color={'primary.main'}
              fontSize={'inherit'}
              fontWeight={'inherit'}
              sx={{
                transition: 'all 200ms ease-in-out'
              }}
            >
              {link.name}
            </Typography>
          </BorderWrapper>
        ))}
      </Flex>
    </Flex>
  );
};

export default Overview;
