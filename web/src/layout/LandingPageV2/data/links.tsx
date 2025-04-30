import { ENavigationLinkTypes } from '@/enums';
import { TNavigationLink } from '@/types';

export const NavigationLinks: TNavigationLink[] = [
  {
    path: '',
    name: 'Home',
    type: ENavigationLinkTypes.LINK
  },
  {
    path: '/components',
    name: 'Components',
    type: ENavigationLinkTypes.LINK
  },
  {
    name: 'Pages',
    type: ENavigationLinkTypes.DROPDOWN,
    categories: [
      {
        title: 'Authentication',
        paths: [
          {
            path: '/auth/signin/left',
            type: ENavigationLinkTypes.LINK,
            name: 'Sign in (split left)'
          },
          {
            path: '/auth/signin/right',
            type: ENavigationLinkTypes.LINK,
            name: 'Sign in (split right)'
          },
          {
            path: '/auth/signin/center',
            type: ENavigationLinkTypes.LINK,
            name: 'Sign in (center)'
          },
          {
            path: '/auth/signup/left',
            type: ENavigationLinkTypes.LINK,
            name: 'Sign up (split left)'
          },
          {
            path: '/auth/signup/right',
            type: ENavigationLinkTypes.LINK,
            name: 'Sign up (split right)'
          },
          {
            path: '/auth/signup/center',
            type: ENavigationLinkTypes.LINK,
            name: 'Sign up (center)'
          }
        ]
      },
      {
        title: 'Dashboard',
        paths: [
          {
            path: '/dashboard/app',
            type: ENavigationLinkTypes.LINK,
            name: 'App (Overview)'
          },
          {
            path: '/dashboard/tables/basic',
            type: ENavigationLinkTypes.LINK,
            name: 'Basic table (Tables)'
          },
          {
            path: '/dashboard/tables/styled',
            type: ENavigationLinkTypes.LINK,
            name: 'Styled table (Tables)'
          },
          {
            path: '/dashboard/tables/search',
            type: ENavigationLinkTypes.LINK,
            name: 'Search table (Tables)'
          },
          {
            path: '/dashboard/tables/selectable',
            type: ENavigationLinkTypes.LINK,
            name: 'Selectable table (Tables)'
          },
          {
            path: '/dashboard/tables/clickable-row',
            type: ENavigationLinkTypes.LINK,
            name: 'Cickable table (Tables)'
          }
        ]
      },
      {
        title: 'Status',
        paths: [
          {
            path: '/status/page-not-found',
            type: ENavigationLinkTypes.LINK,
            name: '404'
          },
          {
            path: '/status/error',
            type: ENavigationLinkTypes.LINK,
            name: 'Error'
          },
          {
            path: '/status/maintenance',
            type: ENavigationLinkTypes.LINK,
            name: 'Maintenance'
          },
          {
            path: '/status/permission',
            type: ENavigationLinkTypes.LINK,
            name: 'Permission'
          }
        ]
      }
    ]
  },
  {
    path: '/docs',
    name: 'Docs',
    type: ENavigationLinkTypes.LINK
  }
];
