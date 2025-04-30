import { Flex, UserCard } from '@/components/common';
import { useAuth } from '@/context/AuthContext';
import { authValidator } from '@/validator/authValidator';
import { Fab, Typography, useTheme } from '@mui/material';
import { Edit2, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { z } from 'zod';

const FullUserCard: React.FC<{ users: (z.infer<typeof authValidator.edit> & { _id: string })[]; removeUser: (userId: string) => void }> = ({
  users,
  removeUser
}) => {
  const { user: currentUser } = useAuth();
  const theme = useTheme();

  const navigate = useNavigate();
  return (
    <Flex
      gap={2}
      flexWrap={'wrap'}
      sx={{
        [theme.breakpoints.down('sm')]: {
          justifyContent: 'center'
        }
      }}
    >
      {users?.map((user: z.infer<typeof authValidator.edit> & { _id: string }, index: number) => {
        const disaleButtons = user._id === currentUser._id;

        return (
          <UserCard boxShadow={2} key={index} width={'350px'} py={1}>
            <UserCard.CardBody>
              <Flex py={2} px={8} flexDirection={'column'} gap={2} alignItems={'center'}>
                <UserCard.ProfilePicture imageUrl={user.profilePicturePath} />
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <Typography fontStyle={'italic'} color={'text.disabled'} fontSize={'11px'}>
                    {user._id}
                  </Typography>
                  <Typography variant="h5" fontWeight={'bold'}>
                    {user.fullName}
                  </Typography>
                  <Typography color={'text.disabled'} fontSize={'12px'}>
                    {user.email}
                  </Typography>
                </Flex>
                <Flex gap={1} justifyContent={'center'} flexWrap={'wrap'}>
                  {user.isAdmin ? (
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
                        zIndex: 0
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
                      zIndex: 0
                    }}
                  >
                    <Typography fontWeight={'bold'} color={'info.main'} fontSize={'12px'}>
                      {user.permission === 'RW' ? 'Read-Write' : 'Read-Only'}
                    </Typography>
                  </Fab>
                </Flex>
                <Flex gap={1} flexDirection={'column'} alignItems={'center'} sx={{ opacity: disaleButtons ? 0 : 1 }}>
                  <Fab
                    disabled={disaleButtons}
                    variant="extended"
                    color="info"
                    sx={{
                      width: '100px',
                      height: 'fit-content',
                      py: 1,
                      boxShadow: 1,
                      zIndex: 0
                    }}
                    onClick={() => {
                      navigate(`/dashboard/user/edit/${user._id}`, { replace: true });
                    }}
                  >
                    <Flex gap={1} alignItems={'center'}>
                      <Edit2 size={13} />
                      <Typography fontWeight={'bold'} fontSize={'13px'}>
                        Edit
                      </Typography>
                    </Flex>
                  </Fab>
                  <Fab
                    disabled={disaleButtons}
                    variant="extended"
                    color="error"
                    sx={{
                      width: '100px',
                      height: 'fit-content',
                      py: 1,
                      boxShadow: 1,
                      zIndex: 0
                    }}
                    onClick={() => removeUser(user._id)}
                  >
                    <Flex gap={1} alignItems={'center'}>
                      <Trash2 size={13} />
                      <Typography fontWeight={'bold'} fontSize={'13px'}>
                        Delete
                      </Typography>
                    </Flex>
                  </Fab>
                </Flex>
              </Flex>
            </UserCard.CardBody>
          </UserCard>
        );
      })}
    </Flex>
  );
};

export default FullUserCard;
