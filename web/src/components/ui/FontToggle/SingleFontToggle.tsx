import BorderWrapper from '@/components/common/BorderWrapper';
import { prefferedFont, setPrefferedFont } from '@/store/reducers/font-slice';
import { TFontOption } from '@/types';

import { Typography, useTheme } from '@mui/material';
import { Type } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

const SingleFontToggle: React.FC<{ font: TFontOption }> = ({ font }) => {
  const theme = useTheme();
  const selectedFont = useSelector(prefferedFont);
  const dispatch = useDispatch();

  const isSelected = font.fontValue === selectedFont;

  const handleFontChange = () => {
    dispatch(setPrefferedFont(font.fontValue));
  };
  return (
    <BorderWrapper
      boxShadow={isSelected ? 1 : 'unset'}
      onClick={handleFontChange}
      borderColor={!isSelected ? 'transparent' : 'primary.dark'}
      display={'flex'}
      width={'100px'}
      px={1}
      py={1}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{
        bgcolor: !isSelected ? 'transparent' : 'primary.light',
        aspectRatio: 1,
        cursor: 'pointer',
        transition: 'background-color .2s ease-in-out',
        '&:hover': {
          bgcolor: 'primary.light'
        }
      }}
    >
      <Type size={24} strokeWidth={3} color={isSelected ? theme.palette.secondary.main : theme.palette.primary.main} />
      <Typography mt={1} fontFamily={font.fontValue} fontSize={'14px'} fontWeight={700}>
        {font.displayName}
      </Typography>
      <Typography fontFamily={font.fontValue} fontSize={'12px'} color={'secondary.dark'} fontWeight={400}>
        AaBbCc
      </Typography>
    </BorderWrapper>
  );
};

export default SingleFontToggle;
