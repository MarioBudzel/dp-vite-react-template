import { Permissions } from '@/enums';

export interface AuthState {
  auth: DefaultAuthState;
}

export interface DefaultAuthState {
  user?: UserState;
  isAuthorized: boolean;
  isAdmin: boolean;
  token?: string | null;
}

export interface UserState {
  _id: string;
  isAdmin?: boolean;
  parmission?: Permissions;
  email: string;
  name?: string;
  surName: string;
  profilePicturePath: string;
  fullName: string;
}
