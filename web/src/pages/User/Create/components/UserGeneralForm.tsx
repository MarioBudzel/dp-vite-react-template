import { Flex, Toastify } from '@/components/common';
import { StyledFormControl } from '@/components/common/Form/StyledFormControl.component';
import { Button, Collapse, Grid, IconButton, InputAdornment, OutlinedInput, useTheme } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { AdminCreate } from '..';

import CountrySelect from '@/components/common/CountrySelect';
import Modals from '@/components/ui/Modals';
import useDisclosure from '@/hooks/useDisclosure';
import { useCreateUserMutation, useEditUserMutation, useUpdateProfilePictureMutation } from '@/store/api';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router';

const UserGeneral: React.FC<{ edit?: boolean; showSaveButton?: boolean; userId?: string }> = ({ edit, showSaveButton, userId }) => {
  const theme = useTheme();
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  const { control, trigger, getValues, reset } = useFormContext<AdminCreate>();
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [createUser] = useCreateUserMutation();
  const [updateUser] = useEditUserMutation();
  const [updateProfilePicture] = useUpdateProfilePictureMutation();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleCreate = async () => {
    const data = getValues();

    if (!(await trigger())) return;

    const { profilePicture, ...rest } = data;

    try {
      const response = !edit ? await createUser(rest) : await updateUser({ userId: userId, ...rest });

      if ('error' in response) throw new Error('Error');

      if (profilePicture) {
        const formData = new FormData();
        formData.append('profilePicture', profilePicture);
        formData.append('userId', response.data.userId);
        await updateProfilePicture(formData);
      }
      reset();
      if (edit) return Toastify.success({ label: 'User updated!' });
      onToggle();
    } catch {
      Toastify.error({ label: 'Sorry, a mysterious problem occured!' });
    }
  };

  return (
    <Flex borderRadius={3} boxShadow={3} py={3} px={2} flexDirection={'column'} bgcolor={'background.paper'} gap={3}>
      <Grid container columnSpacing={2} rowSpacing={2}>
        <Grid item xs={12} md={6}>
          <StyledFormControl formularPath="fullName" isRequired title="Full name">
            <Controller
              control={control}
              name="fullName"
              render={({ field: { value, onChange } }) => <OutlinedInput value={value} onChange={onChange} placeholder="Sam Superuser" />}
            />
          </StyledFormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledFormControl formularPath="email" title="Email adress" isRequired>
            <Controller
              control={control}
              name="email"
              render={({ field: { value, onChange } }) => (
                <OutlinedInput autoComplete="" value={value} onChange={onChange} placeholder="mail@example.com" />
              )}
            />
          </StyledFormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledFormControl formularPath="password" title="Password" isRequired>
            <Controller
              control={control}
              name="password"
              render={({ field: { value, onChange, onBlur } }) => (
                <OutlinedInput
                  autoComplete="new-password"
                  type={!showPassword ? 'password' : 'text'}
                  placeholder="●●●●●●●●"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  endAdornment={
                    value !== '' && (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword} onMouseDown={handleMouseDownPassword}>
                          {showPassword ? (
                            <VisibilityOffIcon
                              style={{
                                color: theme.palette.text.primary
                              }}
                            />
                          ) : (
                            <VisibilityIcon
                              style={{
                                color: theme.palette.text.primary
                              }}
                            />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }
                />
              )}
            />
          </StyledFormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledFormControl formularPath="state" title="Country">
            <Controller
              control={control}
              name="state"
              render={({ field: { value, onChange } }) => <CountrySelect value={value} onChange={onChange} />}
            />
          </StyledFormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledFormControl formularPath="city" title="City">
            <Controller
              control={control}
              name="city"
              render={({ field: { value, onChange } }) => (
                <OutlinedInput autoComplete="" value={value} onChange={onChange} placeholder="eg. Žilina..." />
              )}
            />
          </StyledFormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledFormControl formularPath="streetName" title="Street">
            <Controller
              control={control}
              name="streetName"
              render={({ field: { value, onChange } }) => (
                <OutlinedInput autoComplete="" value={value} onChange={onChange} placeholder="eg. Mila Urbana..." />
              )}
            />
          </StyledFormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledFormControl formularPath="houseNumber" title="House number">
            <Controller
              control={control}
              name="houseNumber"
              render={({ field: { value, onChange } }) => (
                <OutlinedInput autoComplete="" value={value} onChange={onChange} placeholder="eg. 2543/6..." />
              )}
            />
          </StyledFormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledFormControl formularPath="postalCode" title="Postal code">
            <Controller
              control={control}
              name="postalCode"
              render={({ field: { value, onChange } }) => <OutlinedInput value={value} onChange={onChange} placeholder="eg. 010 01..." />}
            />
          </StyledFormControl>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Flex width={'100%'} justifyContent={'flex-end'}>
          {!edit ? (
            <Button onClick={handleCreate} color="secondary">
              Create user
            </Button>
          ) : (
            <Collapse in={showSaveButton}>
              <Button onClick={handleCreate} color="secondary">
                Save changes
              </Button>
            </Collapse>
          )}
        </Flex>
      </Grid>
      <Modals.Confirm
        isOpen={isOpen}
        onClose={onToggle}
        onConfirm={() => {
          navigate('/dashboard/user/list', { replace: true });
        }}
        text="User succesfully created. Proceed to users list?"
        modalTitle="User created"
        onCancel={onToggle}
      />
    </Flex>
  );
};

export default UserGeneral;
