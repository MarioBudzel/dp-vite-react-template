import { Flex } from '@/components/common';
import BorderWrapper from '@/components/common/BorderWrapper';
import { mode, setTheme, systemMode, toggleTheme } from '@/store/reducers/theme-slice';
import { Switch, Typography, useTheme } from '@mui/material';
import { Moon, Sun, SunMoon } from 'lucide-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

type TLargeThemeToggle =
  | {
      singleThemeToggle: true;
      themeControl: 'dark' | 'light' | 'system';
      offStateTheme?: never;
    }
  | {
      singleThemeToggle?: false;
      themeControl?: never;
      offStateTheme: 'dark' | 'light' | 'system';
    };

const LargeToggle: React.FC<TLargeThemeToggle> = ({ singleThemeToggle, themeControl, offStateTheme }) => {
  const theme = useTheme();
  const userTheme = useSelector(mode);
  const useSystemTheme = useSelector(systemMode);
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  const renderIcon = () => {
    if (singleThemeToggle && themeControl === 'dark') return <Moon size={20} color={theme.palette.secondary.main} />;
    if (singleThemeToggle && themeControl === 'light') return <Sun size={20} color={theme.palette.secondary.main} />;

    if (singleThemeToggle && themeControl == 'system') return <SunMoon size={20} color={theme.palette.secondary.main} />;

    if (!singleThemeToggle && userTheme === 'dark') return <Moon size={20} color={theme.palette.secondary.main} />;
    if (!singleThemeToggle && userTheme === 'light') return <Sun size={20} color={theme.palette.secondary.main} />;
  };

  React.useEffect(() => {
    if (themeControl === 'system') return setIsChecked(useSystemTheme);
    setIsChecked(userTheme === themeControl && !useSystemTheme);
  }, [userTheme, useSystemTheme, themeControl]);

  return (
    <BorderWrapper
      px={0}
      py={0}
      borderColor={!isChecked ? 'primary.dark' : 'secondary.dark'}
      boxShadow={3}
      sx={{
        bgcolor: !isChecked ? 'transparent' : 'primary.light',
        cursor: 'pointer',
        transition: 'background-color .2s ease-in-out',
        '&:hover': {
          bgcolor: 'primary.light'
        }
      }}
      onClick={() => {
        if (singleThemeToggle) return dispatch(setTheme(themeControl));

        return dispatch(toggleTheme());
      }}
    >
      <Flex px={3} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} width={'fit-content'} sx={{ aspectRatio: 1 }}>
        {renderIcon()}
        <Typography variant="h5" textTransform={'capitalize'}>
          {themeControl ? themeControl : userTheme}
        </Typography>
        <Switch
          disabled
          checked={singleThemeToggle ? isChecked : userTheme !== offStateTheme}
          checkedIcon={
            userTheme === 'dark' ? (
              <Moon size={20} color={theme.palette.secondary.main} />
            ) : (
              <Sun size={20} color={theme.palette.secondary.main} />
            )
          }
          color="secondary"
        />
      </Flex>
    </BorderWrapper>
  );
};

export default LargeToggle;
