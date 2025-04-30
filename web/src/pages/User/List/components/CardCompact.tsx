import { Flex, UserCard } from '@/components/common';
import { useAuth } from '@/context/AuthContext';
import { authValidator } from '@/validator/authValidator';
import { IconButton, Typography, useTheme } from '@mui/material';
import { Edit2, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { z } from 'zod';

const CardCompact: React.FC<{ users: (z.infer<typeof authValidator.edit> & { _id: string })[]; removeUser: (userId: string) => void }> = ({
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
            <UserCard.CardBody width={'100%'} alignItems={'flex-start'}>
              <Flex gap={2} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                <Flex alignItems={'center'} gap={1}>
                  <UserCard.ProfilePicture imageUrl={user.profilePicturePath} size="small" />
                  <Flex flexDirection={'column'}>
                    <Typography variant="h5" fontWeight={'bold'}>
                      {user.fullName}
                    </Typography>
                    <Typography color={'text.disabled'} fontSize={'12px'}>
                      {user.email}
                    </Typography>
                  </Flex>
                </Flex>
                <Flex alignItems={'center'} justifyContent={'flex-end'} sx={{ opacity: disaleButtons ? 0 : 1 }}>
                  <IconButton
                    size="small"
                    onClick={() => {
                      navigate(`/dashboard/user/edit/${user._id}`, { replace: true });
                    }}
                  >
                    <Edit2 size={16} style={{ color: theme.palette.info.main }} />
                  </IconButton>
                  <IconButton size="small" onClick={() => removeUser(user._id)}>
                    <Trash2 size={16} style={{ color: theme.palette.error.main }} />
                  </IconButton>
                </Flex>
              </Flex>
            </UserCard.CardBody>
          </UserCard>
        );
      })}
    </Flex>
  );
};

export default CardCompact;
