import { BaseTable, Flex, UserCard } from '@/components/common';
import { useAuth } from '@/context/AuthContext';
import { Permissions } from '@/enums';
import { authValidator } from '@/validator/authValidator';
import { Fab, IconButton, Typography, useTheme } from '@mui/material';
import { createColumnHelper, TableOptions } from '@tanstack/react-table';
import { Edit2, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { z } from 'zod';

type TUsersTableData = {
  id: string;
  fullname: string;
  profilePicturePath: string;
  country: string;
  city: string;
  email: string;
  isAdmin: boolean;
  permission: Permissions;
};

const columnHelper = createColumnHelper<TUsersTableData>();

const UsersTable: React.FC<{ users: (z.infer<typeof authValidator.edit> & { _id: string })[]; removeUser: (userId: string) => void }> = ({
  users,
  removeUser
}) => {
  const { user: currentUser } = useAuth();
  const theme = useTheme();
  const navigate = useNavigate();

  const columns: TableOptions<TUsersTableData>['columns'] = [
    columnHelper.display({
      id: 'user-info',
      cell: (info) => {
        const original = info.row.original;
        const { profilePicturePath, fullname } = original;

        return (
          <Flex alignItems={'center'} gap={2}>
            <UserCard.ProfilePicture imageUrl={profilePicturePath} size="small" />
            <Typography variant="h5" fontWeight={'bold'}>
              {fullname}
            </Typography>
          </Flex>
        );
      },
      header: () => (
        <Typography fontWeight={'bold'} fontSize={'16px'}>
          User
        </Typography>
      )
    }),
    columnHelper.accessor('email', {
      header: () => (
        <Typography fontWeight={'bold'} fontSize={'16px'}>
          Contact
        </Typography>
      )
    }),
    columnHelper.accessor('city', {
      header: () => (
        <Typography fontWeight={'bold'} fontSize={'16px'}>
          City
        </Typography>
      )
    }),
    columnHelper.accessor('country', {
      header: () => (
        <Typography fontWeight={'bold'} fontSize={'16px'}>
          Country
        </Typography>
      )
    }),
    columnHelper.display({
      id: 'permission-role',
      cell: (info) => {
        const {
          row: { original }
        } = info;

        return (
          <Flex gap={1}>
            {original.isAdmin ? (
              <Fab
                variant="extended"
                sx={{
                  width: 'fit-content',
                  cursor: 'default',
                  height: 'fit-content',
                  bgcolor: `rgba(${theme.palette.error.lightChannel}, .2)`,
                  boxShadow: 1,
                  '&:hover': {
                    bgcolor: `rgba(${theme.palette.error.lightChannel}, .2)`
                  },
                  flexShrink: 0
                }}
              >
                <Typography fontWeight={'bold'} color={'error.main'} fontSize={'12px'}>
                  Admin
                </Typography>
              </Fab>
            ) : null}
            <Fab
              variant="extended"
              sx={{
                cursor: 'default',
                width: 'fit-content',
                height: 'fit-content',
                bgcolor: `rgba(${theme.palette.info.lightChannel}, .2)`,
                boxShadow: 1,
                '&:hover': {
                  bgcolor: `rgba(${theme.palette.error.lightChannel}, .2)`
                },
                flexShrink: 0
              }}
            >
              <Typography fontWeight={'bold'} color={'info.main'} fontSize={'12px'}>
                {original.permission === 'RW' ? 'Read-Write' : 'Read-Only'}
              </Typography>
            </Fab>
          </Flex>
        );
      },
      header: () => (
        <Typography fontWeight={'bold'} fontSize={'16px'}>
          Permissions/Roles
        </Typography>
      )
    }),
    columnHelper.display({
      id: 'user-actions',
      cell: (info) => {
        const {
          row: { original }
        } = info;
        const disaleButtons = original.id === currentUser._id;

        return (
          <Flex alignItems={'center'} justifyContent={'flex-end'} sx={{ opacity: disaleButtons ? 0 : 1 }}>
            <IconButton
              size="small"
              onClick={(event) => {
                event.stopPropagation();
                navigate(`/dashboard/user/edit/${original.id}`, { replace: true });
              }}
            >
              <Edit2 size={16} style={{ color: theme.palette.info.main }} />
            </IconButton>
            <IconButton
              size="small"
              onClick={(event) => {
                event.stopPropagation();
                removeUser(original.id);
              }}
            >
              <Trash2 size={16} style={{ color: theme.palette.error.main }} />
            </IconButton>
          </Flex>
        );
      }
    })
  ];

  const data: TUsersTableData[] = users?.map((user) => ({
    id: user._id,
    city: user.city,
    country: user.state,
    email: user.email,
    fullname: user.fullName,
    isAdmin: user.isAdmin,
    permission: user.permission,
    profilePicturePath: user.profilePicturePath
  }));

  return <BaseTable variant="rounded" dense columns={columns} data={data} disableSearch />;
};

export default UsersTable;
