import { BoxProps, Typography, useTheme } from '@mui/material';
import { CloudUpload } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import Flex from './Flex.component';
import Toastify from './Toastify';

const MAX_TOTAL_SIZE = 10 * 1024 * 1024; // 10MB - nginx config
const MAX_SIZE_PER_FILE = 5 * 1024 * 1024; // 5MB

const EXCLUDED_MIME_TYPES = [
  'application/x-msdownload', // .exe, .dll
  'application/x-msdos-program', // .bat
  'application/x-sh', // .sh
  'application/x-7z-compressed', // .7z
  'application/x-rar-compressed', // .rar
  'application/zip', // .zip
  'application/json'
];

const FileUploader: React.FC<{ setFiles: React.Dispatch<React.SetStateAction<File[]>>; iconSize?: number } & BoxProps> = ({
  setFiles,
  iconSize = 50,
  ...rest
}) => {
  const theme = useTheme();
  const { getInputProps, getRootProps } = useDropzone({
    maxSize: MAX_SIZE_PER_FILE,
    onDrop: (accpetedFiles) => {
      const filteredFiles = accpetedFiles.filter((file) => {
        return !EXCLUDED_MIME_TYPES.includes(file.type);
      });

      const totalSize = accpetedFiles.reduce((sum, file) => (sum += file.size), 0);

      if (totalSize > MAX_TOTAL_SIZE) return Toastify.error({ label: 'Total file size exceeds 10MB!' });

      if (accpetedFiles.length !== filteredFiles.length)
        Toastify.error({ label: 'Some files were excluded. (Executables and Archives not allowed!)' });

      setFiles(filteredFiles);
    },
    onDropRejected: () => {
      return Toastify.error({ label: 'Max size per file exceeded!' });
    }
  });

  return (
    <Flex
      {...getRootProps()}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      border={'1px dashed'}
      borderColor={'text.disabled'}
      borderRadius={'7px'}
      width={'100%'}
      minHeight={'350px'}
      sx={{
        cursor: 'pointer'
      }}
      {...rest}
    >
      <input {...getInputProps()} />
      <CloudUpload size={iconSize} style={{ color: theme.palette.secondary.light }} />
      <Typography color={'text.disabled'} textAlign={'center'}>
        Drag you files here or <span style={{ textDecoration: 'underline', color: theme.palette.warning.main }}>browse</span> your files.
      </Typography>
      <Typography color={'text.disabled'} textAlign={'center'} fontSize={'11px'}>
        Max size per file 5MB.
      </Typography>
      <Typography color={'text.disabled'} textAlign={'center'} fontSize={'11px'}>
        Max total size 10MB.
      </Typography>
    </Flex>
  );
};

export default FileUploader;
