export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp extends ISignIn {
  confirmPassword: string;
  name: string;
  lastName: string;
  sendEmail: boolean;
  fullName: string;
}

export enum ValidFormValues {
  EMAIL = 'email',
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'confirmPassword',
  NAME = 'name',
  LAST_NAME = 'lastName',
  SEND_EMAIL = 'sendEmail'
}
