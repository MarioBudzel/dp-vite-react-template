import { zodResolver } from '@hookform/resolvers/zod';
import { Fab, FormHelperText, IconButton, InputAdornment, Link, OutlinedInput, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import { StyledFormControl } from '../../../components/common/Form/StyledFormControl.component';
import { useAuth } from '../../../context/AuthContext';
import { useLazyLoginQuery } from '../../../store/api';
import { authValidator } from '../../../validator/authValidator';
import { initialValues } from '../constants/initialValues';
import { ISignIn, ValidFormValues } from '../types';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const SignInForm: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isSplit = location.pathname.includes('left') || location.pathname.includes('right');
  const isLeft = location.pathname.endsWith('/left');

  const { saveAuthData } = useAuth();
  const [signInError, setSignInError] = React.useState<string | null>(null);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const [signIn] = useLazyLoginQuery();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formMethods = useForm<ISignIn>({
    resolver: zodResolver(authValidator.signIn),
    mode: 'onBlur',
    defaultValues: initialValues.signInValues
  });

  const { control, getValues, trigger } = formMethods;

  const handleSubmit = async () => {
    if (!(await trigger())) return;

    try {
      const { data, error } = await signIn({ ...getValues() });

      if (error) {
        const formError = error as FetchBaseQueryError;
        throw new Error(formError?.data as string);
      }
      saveAuthData({ token: data.token });
    } catch {
      setSignInError('Invalid credentials');
    }
  };

  return (
    <FormProvider {...formMethods}>
      <Typography variant="h3" color={'text.secondary'}>
        Sing in
      </Typography>
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
            <>
              <OutlinedInput
                type={!showPassword ? 'password' : 'text'}
                autoComplete="password"
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
              <Link
                mt={2}
                underline="hover"
                variant="h6"
                textAlign={'end'}
                color={'text.onSurface'}
                style={{ cursor: 'pointer' }}
                onClick={() => {}}
              >
                Forgot Password
              </Link>
            </>
          )}
        />
      </StyledFormControl>
      <FormHelperText sx={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }} error style={{ color: theme.palette.error.light }}>
        {signInError}
      </FormHelperText>
      <Stack spacing={1}>
        <Fab
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
          <Typography variant="h5" color={'text.onPrimary'} mx={3}>
            Sign in
          </Typography>
        </Fab>
      </Stack>

      <Stack spacing={1} textAlign={'center'}>
        <Typography variant="body1" color={'text.onSurface'}>
          {`Don't have an account?`}{' '}
          <Link
            underline="hover"
            variant="h5"
            color={'text.secondary'}
            style={{ cursor: 'pointer' }}
            onClick={() =>
              isSplit ? (isLeft ? navigate('/auth/signup/left') : navigate('/auth/signup/right')) : navigate('/auth/signup/center')
            }
          >
            Sign up
          </Link>
        </Typography>
      </Stack>
    </FormProvider>
  );
};
