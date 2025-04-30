import { Flex, PageTitle, Toastify } from '@/components/common';
import Loading from '@/components/common/Loading';
import { useListUsersQuery, useRemoveUserMutation } from '@/store/api';
import { Box, Typography, useTheme, Zoom } from '@mui/material';
import { Grid2x2, Grid3x3, List } from 'lucide-react';
import React from 'react';
import CardCompact from './components/CardCompact';
import FullUserCard from './components/FullUserCard';
import UsersTable from './components/UsersTable';

const UsersList: React.FC = () => {
  const [position, setPosition] = React.useState<number>(0);
  const theme = useTheme();

  const { data, isLoading } = useListUsersQuery({});
  const [deleteUser] = useRemoveUserMutation();

  if (isLoading) return <Loading />;

  const removeUser = async (userId: string) => {
    try {
      const response = await deleteUser({ userId });
      if ('error' in response) throw new Error();

      Toastify.success({ label: 'You did it!' });
    } catch {
      Toastify.error({ label: 'A mysterious error has occured!' });
    }
  };

  return (
    <Flex flexDirection={'column'} width={'100%'} height={'100%'} gap={3} px={2} pb={3}>
      <PageTitle pageTitle="User List" />
      <Flex width={'100%'} justifyContent={'flex-end'} gap={2} alignItems={'center'}>
        <Typography fontWeight={'bold'}>Layout</Typography>
        <Flex position={'relative'} bgcolor={'info.main'} borderRadius={2} zIndex={2} boxShadow={1}>
          <Flex
            position={'absolute'}
            bgcolor={'rgba(0,0,0, .2)'}
            borderRadius={2}
            width={'30px'}
            height={'30px'}
            zIndex={0}
            top={'50%'}
            sx={{
              transform: `translate(calc(${position * 36}px + 3px ), -50%)`,
              transition: 'transform 200ms ease-out'
            }}
          />
          <Flex
            width={'36px'}
            sx={{ aspectRatio: 1, cursor: 'pointer' }}
            alignItems={'center'}
            p={1}
            zIndex={2}
            onClick={() => setPosition(0)}
          >
            <Grid2x2 size={20} style={{ color: theme.palette.secondary.main }} />
          </Flex>
          <Flex
            width={'36px'}
            sx={{ aspectRatio: 1, cursor: 'pointer' }}
            alignItems={'center'}
            p={1}
            zIndex={2}
            onClick={() => setPosition(1)}
          >
            <Grid3x3 size={20} style={{ color: theme.palette.secondary.main }} />
          </Flex>
          <Flex
            width={'36px'}
            sx={{ aspectRatio: 1, cursor: 'pointer' }}
            alignItems={'center'}
            p={1}
            zIndex={2}
            onClick={() => setPosition(2)}
          >
            <List size={20} style={{ color: theme.palette.secondary.main }} />
          </Flex>
        </Flex>
      </Flex>

      <Zoom in={position === 0}>
        <Box
          sx={{
            height: position === 0 ? 'auto' : '0px',
            opacity: position === 0 ? 1 : 0,
            transition: 'height 200ms ease-out, opacity 200ms ease-out'
          }}
        >
          <FullUserCard users={data?.users} removeUser={removeUser} />
        </Box>
      </Zoom>

      <Zoom in={position === 1}>
        <Box
          sx={{
            height: position === 1 ? 'auto' : '0px',
            opacity: position === 1 ? 1 : 0,
            transition: 'height 200ms ease-out, opacity 200ms ease-out'
          }}
        >
          <CardCompact users={data?.users} removeUser={removeUser} />
        </Box>
      </Zoom>
      <Zoom in={position === 2}>
        <Box
          sx={{
            height: position === 2 ? 'auto' : '0px',
            opacity: position === 2 ? 1 : 0,
            transition: 'height 200ms ease-out, opacity 200ms ease-out'
          }}
        >
          <UsersTable users={data?.users} removeUser={removeUser} />
        </Box>
      </Zoom>
    </Flex>
  );
};

export default UsersList;
