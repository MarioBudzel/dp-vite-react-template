import { Breadcrumbs, Link, Typography } from '@mui/material';
import { grey, lightBlue } from '@mui/material/colors';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useMatches, useNavigate, useParams } from 'react-router';

const Crumbs: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const matches = useMatches();
  const crumbs = matches
    // @ts-expect-error Crumb is on the type
    .filter((match) => Boolean(match?.handle?.crumb))
    .map((match) => ({
      // @ts-expect-error Crumb is on the type
      label: match.handle?.crumb,
      pathname: match.pathname,
      params
    }));

  const isGoBack = crumbs.find((crumb) => crumb.label === -1) !== undefined;

  if (isGoBack)
    return (
      <Breadcrumbs separator={<ChevronRight />}>
        <Link
          sx={{
            cursor: 'pointer',
            color: grey[500],
            textDecoration: 'none',
            transition: 'color 300ms',
            '&:hover': {
              color: lightBlue[400],
              textDecoration: 'underline'
            }
          }}
          onClick={() => navigate(-1)}
          display={'flex'}
          alignItems={'center'}
          gap={1}
        >
          <ArrowLeft size={16} />
          Go back
        </Link>
      </Breadcrumbs>
    );

  return (
    <Breadcrumbs separator={<ChevronRight size={16} />}>
      {crumbs.map((crumb, index) => (
        <Typography
          key={index}
          color={index === crumbs.length - 1 ? 'text.disabled' : 'text.primary'}
          sx={{
            cursor: index !== crumbs.length - 1 ? 'pointer' : 'default'
          }}
          onClick={
            index === crumbs.length - 1 ? undefined : () => navigate(crumb.pathname === '/dashboard' ? '/dashboard/app' : crumb.pathname)
          }
        >
          {crumb.label}
        </Typography>
      ))}
    </Breadcrumbs>
  );
};

export default Crumbs;
