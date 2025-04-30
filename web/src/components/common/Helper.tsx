import { BoxProps, Typography, TypographyProps, useTheme } from '@mui/material';
import { BadgeInfo } from 'lucide-react';
import React from 'react';
import Flex from './Flex.component';

type THelperProps = {
  children: React.ReactNode;
  colorScheme?: 'secondary' | 'info' | 'primary' | 'success' | 'warning' | 'error';
  icon?: React.ReactElement;
  iconSize?: number;
  boxProps?: BoxProps;
  textProps?: TypographyProps;
};

const Helper: React.FC<THelperProps> = ({ colorScheme = 'secondary', icon, children, iconSize, ...rest }) => {
  const theme = useTheme();
  return (
    <Flex alignItems={'center'} borderRadius={2} width={'100%'} py={1} px={1} gap={1} bgcolor={`${colorScheme}.main`} {...rest.boxProps}>
      {icon ? (
        icon
      ) : (
        <BadgeInfo
          size={iconSize ? iconSize : 20}
          style={{
            color: theme.palette[colorScheme].contrastText
          }}
        />
      )}
      <Typography fontWeight={500} color={theme.palette[colorScheme].contrastText} fontSize={'12px'} {...rest.textProps}>
        {children}
      </Typography>
    </Flex>
  );
};

export default Helper;
