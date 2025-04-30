import { PageTitle } from '@/components/common';
import Flex from '@/components/common/Flex.component';
import Helper from '@/components/common/Helper';
import { Permissions } from '@/enums';
import { authValidator } from '@/validator/authValidator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Grid } from '@mui/material';
import { Lightbulb, ShieldAlert } from 'lucide-react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import UserBasicInfo from './components/UserBasicForm';
import UserGeneral from './components/UserGeneralForm';

export type AdminCreate = z.infer<typeof authValidator.adminCreate>;

const AdminCreate: React.FC = () => {
  const form = useForm<AdminCreate>({
    mode: 'onChange',
    resolver: zodResolver(authValidator.adminCreate),
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

  return (
    <Flex flexDirection={'column'} width={'100%'} height={'100%'} gap={3} px={2} pb={3}>
      <PageTitle pageTitle="Admin Create User">
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
            <UserBasicInfo create />
          </Grid>
          <Grid item xs={12} md={8}>
            <UserGeneral />
          </Grid>
        </Grid>
      </FormProvider>
    </Flex>
  );
};

export default AdminCreate;
