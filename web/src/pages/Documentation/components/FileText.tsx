import { useTheme } from '@mui/material';
import React from 'react';

type Props = {
  children: string;
};

const FileText: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  return (
    <span
      style={{
        backgroundColor: theme.palette.text.disabled,
        paddingInline: '4px',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: theme.palette.text.secondary,
        color: 'white',
        textWrap: 'nowrap'
      }}
    >
      <b>{children}</b>
    </span>
  );
};

export default FileText;
