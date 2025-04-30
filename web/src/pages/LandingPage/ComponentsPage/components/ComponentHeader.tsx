import { Flex } from '@/components/common';
import { TFlexProps } from '@/components/common/Flex.component';
import { Typography, TypographyOwnProps } from '@mui/material';
import React from 'react';

type Props = {
  title: string;
  subtitle?: string;
  titleProps?: TypographyOwnProps;
  subtitleProps?: TypographyOwnProps;
  rootProps?: Omit<TFlexProps, 'children'>;
};

const ComponentHeader: React.FC<Props> = ({ title, subtitle, titleProps, subtitleProps, rootProps }) => {
  return (
    <Flex flexDirection={'column'} {...rootProps}>
      <Typography component={'h2'} variant="h2" color={'primary.main'} {...titleProps}>
        {title}
      </Typography>
      <Typography component={'span'} variant="body1" color={'text.secondary'} {...subtitleProps}>
        {subtitle}
      </Typography>
    </Flex>
  );
};

export default ComponentHeader;
