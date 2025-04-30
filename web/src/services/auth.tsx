// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveUserToLocalStorage = (user: any) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const extractUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');

  if (!user) return null;

  try {
    return JSON.parse(user);
  } catch {
    return null;
  }
};

export const extractTokenFromLocalStorage = () => {
  const token = localStorage.getItem('auth-token');

  if (!token) return null;

  return token;
};

export const saveTokenToLocalStorage = (token: string) => {
  localStorage.setItem('auth-token', token);
};

export const clearAuthFromStorage = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('auth-token');
};
