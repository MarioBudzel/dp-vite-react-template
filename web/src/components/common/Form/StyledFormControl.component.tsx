import { FormControl, FormHelperText, FormLabel, useTheme } from '@mui/material';
import { useFormContext } from 'react-hook-form';

interface IFormControlProps {
  title: string;
  isRequired?: boolean;
  formularPath: string;
  children: React.ReactNode;
  width?: string;
}

const Control: React.FC<IFormControlProps & { error: string }> = ({ title, isRequired, formularPath, children, error, width }) => {
  const theme = useTheme();
  return (
    <FormControl required={isRequired} style={{ width: width ?? '100%' }}>
      <FormLabel htmlFor={formularPath}>{title}</FormLabel>
      {children}
      <FormHelperText error style={{ color: theme.palette.error.light }}>
        {error}
      </FormHelperText>
    </FormControl>
  );
};

export const StyledFormControl: React.FC<IFormControlProps> = ({ title, isRequired, children, formularPath, width }) => {
  const {
    formState: { errors }
  } = useFormContext();

  const error = errors[formularPath]?.message as string;
  return (
    <Control width={width} error={error} formularPath={formularPath} isRequired={isRequired} title={title}>
      {children}
    </Control>
  );
};
