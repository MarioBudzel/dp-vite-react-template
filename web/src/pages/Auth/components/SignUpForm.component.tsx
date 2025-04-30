import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { StyledFormControl } from '../../../components/common/Form/StyledFormControl.component';
import { authValidator } from '../../../validator/authValidator';
import { initialValues } from '../constants/initialValues';
import { ISignUp, ValidFormValues } from '../types';

import Helper from '@/components/common/Helper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useLocation, useNavigate } from 'react-router';

export const SignUpForm: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isSplit = location.pathname.includes('left') || location.pathname.includes('right');
  const isLeft = location.pathname.endsWith('/left');

  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [showConfirm, setShowConfirm] = React.useState<boolean>(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleShowConfirm = () => {
    setShowConfirm((prev) => !prev);
  };

  const formMethods = useForm<ISignUp>({
    resolver: zodResolver(authValidator.signUp),
    mode: 'onBlur',
    defaultValues: initialValues.signUpValues
  });

  const { control } = formMethods;

  return (
    <FormProvider {...formMethods}>
      <Typography variant="h3" color={'text.secondary'}>
        Create an account
      </Typography>
      <StyledFormControl formularPath={'fullName'} isRequired title="Full Name">
        <Controller
          control={control}
          name={'fullName'}
          render={({ field: { onChange, value, onBlur } }) => (
            <OutlinedInput autoComplete="family-name" onChange={onChange} onBlur={onBlur} value={value} />
          )}
        />
      </StyledFormControl>
      <StyledFormControl formularPath={ValidFormValues.EMAIL} isRequired title="Email Address">
        <Controller
          control={control}
          name={ValidFormValues.EMAIL}
          render={({ field: { onChange, value, onBlur } }) => (
            <OutlinedInput autoComplete="username" onChange={onChange} onBlur={onBlur} value={value} />
          )}
        />
      </StyledFormControl>
      <StyledFormControl formularPath={ValidFormValues.PASSWORD} isRequired title="Password">
        <Controller
          control={control}
          name={ValidFormValues.PASSWORD}
          render={({ field: { onChange, value, onBlur } }) => (
            <OutlinedInput
              type={!showPassword ? 'password' : 'text'}
              autoComplete="new-password"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              endAdornment={
                value !== '' && (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} onMouseDown={handleMouseDownPassword}>
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                )
              }
            />
          )}
        />
      </StyledFormControl>
      <StyledFormControl formularPath={ValidFormValues.CONFIRM_PASSWORD} isRequired title="Confirm Password">
        <Controller
          control={control}
          name={ValidFormValues.CONFIRM_PASSWORD}
          render={({ field: { onChange, value, onBlur } }) => (
            <OutlinedInput
              type={!showConfirm ? 'password' : 'text'}
              autoComplete="new-password"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              endAdornment={
                value !== '' && (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowConfirm} onMouseDown={handleMouseDownPassword}>
                      {showConfirm ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                )
              }
            />
          )}
        />
      </StyledFormControl>
      <Controller
        control={control}
        name={ValidFormValues.SEND_EMAIL}
        render={({ field: { onChange, value } }) => (
          <Box display={'flex'} justifyContent={'center'}>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => onChange(!value)}
                  checked={value}
                  sx={{
                    color: 'text.onSurface',
                    '&.Mui-checked': {
                      color: 'secondary.main'
                    }
                  }}
                />
              }
              label={
                <Typography variant="h5" color={'text.onSurface'}>
                  Send email
                </Typography>
              }
            />
          </Box>
        )}
      />
      <Stack spacing={1}>
        {/* <Fab
          variant="extended"
          sx={{
            bgcolor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            transition: 'background-color color 0.2s ease-in-out',
            '&:hover': {
              bgcolor: theme.palette.secondary.light,
              color: theme.palette.secondary.contrastText
            }
          }}
          onClick={handleSubmit}
        >
          <Typography variant="h5" color={'text.onPrimary'}>
            Sign up
          </Typography>
        </Fab> */}
        <Helper boxProps={{ boxShadow: 1 }} colorScheme="secondary">
          The <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Sign up</span> is disabled! Use{' '}
          <span
            style={{ fontWeight: 'bold', fontStyle: 'italic', cursor: 'pointer' }}
            onClick={() =>
              isSplit ? (isLeft ? navigate('/auth/signin/left') : navigate('/auth/signin/right')) : navigate('/auth/signin/center')
            }
          >
            Sign in form
          </span>
        </Helper>
      </Stack>

      <Stack spacing={1} textAlign={'center'}>
        <Typography variant="body1" color={'text.onSurface'}>
          Already have an account?{' '}
          <Link
            underline="hover"
            variant="h5"
            color={'text.secondary'}
            style={{ cursor: 'pointer' }}
            onClick={() =>
              isSplit ? (isLeft ? navigate('/auth/signin/left') : navigate('/auth/signin/right')) : navigate('/auth/signin/center')
            }
          >
            Sign in
          </Link>
        </Typography>
      </Stack>
    </FormProvider>
  );
};
