import { Box } from '@mui/material';
import { useLocation, useMatches, useNavigate } from 'react-router';
import { componentsNavigation } from '../data/navLinks';

const ComponentsNavigation: React.FC = () => {
  const matches = useMatches();
  const pathName = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <Box component={'ul'}>
      {componentsNavigation.map((link, index) => {
        const isIndex = link.index;
        const isActive = isIndex ? pathName === link.path : matches.some((match) => match.pathname === link.path);

        return (
          <Box
            component={'li'}
            key={index}
            mb={2}
            sx={{
              cursor: 'pointer',
              color: isActive ? 'primary.main' : 'text.secondary',
              fontWeight: isActive ? '700' : '',
              transition: 'text-decoration 200ms ease-in',
              '&:hover': {
                textDecoration: 'underline',
                textDecorationThickness: '.15rem',
                textUnderlineOffset: '.4rem'
              }
            }}
            onClick={() => navigate(link.path, { replace: true })}
          >
            {link.name}
          </Box>
        );
      })}
    </Box>
  );
};

export default ComponentsNavigation;
