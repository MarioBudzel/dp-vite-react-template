import { getBaseURL } from '@/lib/util';
import { Box, Button } from '@mui/material';
import { grey } from '@mui/material/colors';

const UserProfilePicture: React.FC<{ imageUrl: string | undefined; size?: 'default' | 'small'; useExternal?: boolean }> = ({
  imageUrl,
  size = 'default',
  useExternal
}) => {
  return (
    <Box
      width={size === 'small' ? '50px' : '150px'}
      py={size === 'small' ? '5px' : 1}
      px={size === 'small' ? '5px' : 1}
      sx={{
        aspectRatio: 1,
        border: '1px dashed',
        borderColor: grey[400],
        borderRadius: '50%'
      }}
    >
      <Button
        component="label"
        sx={{
          minWidth: 0,
          minHeight: 0,
          px: 0,
          py: 0,
          width: '100%',
          cursor: 'pointer',
          aspectRatio: 1,
          borderRadius: '50%',
          bgcolor: grey[400],
          backgroundImage: useExternal ? `url("${imageUrl}")` : `url("${getBaseURL()}/${imageUrl}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transition: 'background-color 120ms ease-in',
          '&:hover': {
            bgcolor: 'text.disabled'
          }
        }}
      />
    </Box>
  );
};

export default UserProfilePicture;
