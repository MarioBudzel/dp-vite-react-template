import { ISignUp, ValidFormValues } from '../types';

const signInValues: Record<Exclude<ValidFormValues, 'confirmPassword' | 'name' | 'lastName' | 'sendEmail'>, string> = {
  email: 'admin@admin.com',
  password: 'admin1'
};

const signUpValues: Pick<ISignUp, ValidFormValues> = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  lastName: '',
  sendEmail: true
};

export const initialValues = {
  signInValues: signInValues,
  signUpValues: signUpValues
};
