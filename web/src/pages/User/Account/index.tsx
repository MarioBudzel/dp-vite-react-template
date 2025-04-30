import { PageTitle } from '@/components/common';
import Flex from '@/components/common/Flex.component';
import Helper from '@/components/common/Helper';
import Loading from '@/components/common/Loading';
import { Permissions } from '@/enums';
import { useGetCurrentUserQuery } from '@/store/api';
import { authValidator } from '@/validator/authValidator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Grid } from '@mui/material';
import { Lightbulb, ShieldAlert } from 'lucide-react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import UserBasicInfo from '../Create/components/UserBasicForm';
import UserGeneral from '../Create/components/UserGeneralForm';

export type Edit = z.infer<typeof authValidator.edit>;

const Account: React.FC = () => {
  const form = useForm<Edit>({
    mode: 'onChange',
    resolver: zodResolver(authValidator.edit),
    defaultValues: {
      city: '',
      email: '',
      fullName: '',
      houseNumber: '',
      isAdmin: false,
      password: '',
      permission: Permissions.RW,
      profilePicture: null,
      profilePicturePath: '',
      state: 'SK',
      streetName: '',
      postalCode: ''
    }
  });
  const { reset, watch } = form;

  const { data, isLoading } = useGetCurrentUserQuery({});
  const formValues = watch();
  const password = watch('password');
  const profilePicture = watch('profilePicture');

  const changedFields = React.useMemo(
    () =>
      Object.entries(formValues)
        .filter(([key]) => key !== 'password' && key !== 'profilePicture')
        .filter(([key, value]) => data?.user?.[key] !== value)
        .map(([key]) => key),
    [data, formValues]
  );

  const showSaveButton = Boolean(changedFields.length !== 0 || password || profilePicture);

  React.useEffect(() => {
    if (data) reset(data.user);
  }, [data, reset]);

  if (isLoading) return <Loading />;

  return (
    <Flex flexDirection={'column'} width={'100%'} height={'100%'} gap={3} px={2} pb={3}>
      <PageTitle pageTitle="Account">
        <Flex gap={2}>
          <Helper boxProps={{ width: 'fit-content' }} icon={<Lightbulb />} colorScheme="warning">
            <span style={{ fontWeight: 700 }}>Notice: </span>
            Any changes made will be removed in 5 minutes!
          </Helper>
          <Helper boxProps={{ width: 'fit-content' }} icon={<ShieldAlert />} colorScheme="error">
            <span style={{ fontWeight: 700 }}>Warning: </span>
            Every new item is visible to other users. Do not share any personal information!
          </Helper>
        </Flex>
      </PageTitle>
      <FormProvider {...form}>
        <Grid container columnSpacing={3} rowSpacing={3}>
          <Grid item xs={12} md={4}>
            <UserBasicInfo />
          </Grid>
          <Grid item xs={12} md={8}>
            <UserGeneral edit showSaveButton={showSaveButton} userId={data.user._id} />
          </Grid>
        </Grid>
      </FormProvider>
    </Flex>
  );
};

export default Account;
