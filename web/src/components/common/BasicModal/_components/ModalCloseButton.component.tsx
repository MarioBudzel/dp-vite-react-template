import { IconButton, Tooltip, useTheme } from '@mui/material';
import { X } from 'lucide-react';

const ModalCloseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const theme = useTheme();
  return (
    <Tooltip title="Close">
      <IconButton size="small" onClick={onClick}>
        <X size={16} style={{ color: theme.palette.text.primary }} />
      </IconButton>
    </Tooltip>
  );
};

export default ModalCloseButton;
