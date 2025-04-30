import { Typography } from '@mui/material';

const ModalTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Typography variant="subtitle1">{children}</Typography>;
};

export default ModalTitle;
