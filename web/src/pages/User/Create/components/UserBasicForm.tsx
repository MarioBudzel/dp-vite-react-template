import { Toastify, VisuallyHiddenInput } from '@/components/common';
import { AdminButtonWrapper } from '@/components/common/ButtonWrappers';
import Flex from '@/components/common/Flex.component';
import Modals from '@/components/ui/Modals';
import { Permissions } from '@/enums';
import useDisclosure from '@/hooks/useDisclosure';
import { getBaseURL } from '@/lib/util';
import { useRemoveUserMutation } from '@/store/api';
import { Box, Button, Fab, IconButton, Switch, Typography, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { SwitchCamera, Trash2 } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { AdminCreate } from '..';

const UserBasicInfo: React.FC<{ edit?: boolean; create?: boolean }> = ({ edit, create }) => {
  const { watch, setValue } = useFormContext<AdminCreate>();
  const { isOpen, onToggle } = useDisclosure();

  const isAdmin = watch('isAdmin');
  //@ts-expect-error _id will be there on edit
  const id = watch('_id');
  const fullName = watch('fullName');
  const permission = watch('permission');

  const profilePicture = watch('profilePicture');
  const picturePath = watch('profilePicturePath');

  const theme = useTheme();

  const [deleteUser] = useRemoveUserMutation();
  const navigate = useNavigate();

  const removeUser = async () => {
    try {
      const response = await deleteUser({ userId: id });
      if ('error' in response) throw new Error();

      navigate('/dashboard/user/list', { replace: true });
    } catch {
      Toastify.error({ label: 'A mysterious error has occured!' });
    }
  };

  return (
    <Flex borderRadius={3} boxShadow={3} py={3} px={2} flexDirection={'column'} bgcolor={'background.paper'} gap={3}>
      <Flex width={'100%'} py={5} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={1}>
        <Box
          width={'150px'}
          py={1}
          px={1}
          sx={{
            aspectRatio: 1,
            border: '1px dashed',
            borderColor: grey[400],
            borderRadius: '50%'
          }}
        >
          <Button
            component="label"
            sx={{
              px: 0,
              py: 0,
              width: '100%',
              cursor: 'pointer',
              aspectRatio: 1,
              borderRadius: '50%',
              bgcolor: grey[400],

              backgroundImage: profilePicture
                ? //@ts-expect-error Previw exists
                  `url(${profilePicture.preview})`
                : `url("${getBaseURL()}/${picturePath}")`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              transition: 'background-color 120ms ease-in',
              '&:hover': {
                bgcolor: 'text.disabled'
              }
            }}
          >
            <Flex
              width={'100%'}
              height={'100%'}
              borderRadius={'50%'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              position={'relative'}
              sx={{
                bgcolor: picturePath || profilePicture ? `rgba(0, 0, 0, .7)` : 'unset',
                opacity: picturePath || profilePicture ? 0 : 1,
                transition: 'opacity 300ms ease-in',
                '&:hover': {
                  opacity: 1
                }
              }}
            >
              <SwitchCamera size={35} color={grey[100]} />
              <Typography fontWeight={'bold'} color={grey[100]}>
                Upload photo
              </Typography>
              {profilePicture ? (
                <IconButton
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    border: '1px solid',
                    borderColor: theme.palette.error.light
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setValue('profilePicture', null);
                  }}
                >
                  <Trash2 size={16} style={{ color: theme.palette.error.main }} />
                </IconButton>
              ) : null}
              <VisuallyHiddenInput
                accept=".jpg, .png, .gif, .jpeg"
                type="file"
                onChange={(event) => {
                  const {
                    target: { files }
                  } = event;
                  const file = files[0];

                  if (!file) return;

                  Object.assign(file, {
                    preview: URL.createObjectURL(file)
                  });

                  setValue('profilePicture', file);
                }}
              />
            </Flex>
          </Button>
        </Box>
        <Typography color={grey[400]}>Allows .jpeg, .jpg, .png, .gif</Typography>
      </Flex>
      {create || edit ? (
        <AdminButtonWrapper>
          <Flex minHeight={'25px'} width={'100%'} alignItems={'center'} justifyContent={'space-between'} px={3}>
            <Typography fontWeight={'700'} variant="h5" color={'text.secondary'}>
              Admin
            </Typography>
            <Switch color="secondary" size="medium" checked={isAdmin} onChange={() => setValue('isAdmin', !isAdmin)} />
          </Flex>
          <Flex minHeight={'25px'} width={'100%'} alignItems={'center'} justifyContent={'space-between'} px={3}>
            <Typography fontWeight={'700'} variant="h5" color={'text.secondary'}>
              Read-only
            </Typography>
            <Switch
              color="secondary"
              size="medium"
              checked={permission === Permissions.RO}
              onChange={() => setValue('permission', permission === Permissions.RO ? Permissions.RW : Permissions.RO)}
            />
          </Flex>
          {edit && (
            <Fab
              variant="extended"
              color="error"
              sx={{
                width: '100%',
                height: 'fit-content',
                py: 1,
                boxShadow: 1
              }}
              onClick={onToggle}
            >
              <Flex gap={1} alignItems={'center'}>
                <Trash2 size={13} />
                <Typography fontWeight={'bold'} fontSize={'13px'}>
                  Delete
                </Typography>
              </Flex>
            </Fab>
          )}
        </AdminButtonWrapper>
      ) : null}
      <Modals.Confirm
        isOpen={isOpen}
        onClose={onToggle}
        onConfirm={removeUser}
        text={`You are about to delete: ${fullName}. Do you want to proceed?`}
        modalTitle="User deletion"
        onCancel={onToggle}
      />
    </Flex>
  );
};

export default UserBasicInfo;
