import { Flex } from '@/components/common';
import { NavigationLink } from '@/components/ui';
import { useMediaQuery, useTheme } from '@mui/material';
import { NavigationLinks } from '../../data/links';

const HorizontalNavigation: React.FC<{ children?: React.ReactElement | React.ReactNode }> = ({ children }) => {
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Flex display={matchSM ? 'none' : 'flex'} gap={8} justifyContent={'center'} alignItems={'center'}>
      {children}
    </Flex>
  );
};

const VerticalNavigation: React.FC<{ children?: React.ReactElement | React.ReactNode }> = ({ children }) => {
  return (
    <Flex gap={1} py={2} width={'100%'} flexDirection={'column'}>
      {children}
    </Flex>
  );
};

const Navigation: React.FC<{ type?: 'horizontal' | 'vertical' }> = ({ type = 'horizontal' }) => {
  return type === 'horizontal' ? (
    <HorizontalNavigation>
      {NavigationLinks.map((link, index) => (
        <NavigationLink link={link} type={type} key={index} />
      ))}
    </HorizontalNavigation>
  ) : (
    <VerticalNavigation>
      {NavigationLinks.map((link, index) => (
        <NavigationLink link={link} type={type} key={index} />
      ))}
    </VerticalNavigation>
  );
};

export default Navigation;
