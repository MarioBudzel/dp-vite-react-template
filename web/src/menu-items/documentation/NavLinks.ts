import { TSidebarLink } from '@/types';

export const DocsLinks: TSidebarLink[] = [
  {
    groupTitle: 'Getting started',
    paths: [
      {
        name: 'Introduction',
        path: '/docs/overview',
        type: 'default'
      },
      {
        name: 'Setup',
        path: '/docs/setup',
        type: 'default'
      }
    ]
  },
  {
    groupTitle: 'Theme UI',
    paths: [
      {
        name: 'Colors',
        path: '/docs/colors',
        type: 'default'
      },
      {
        name: 'Typography',
        path: '/docs/typography',
        type: 'default'
      },
      {
        name: 'Logo',
        path: '/docs/Logo',
        type: 'default'
      },
      {
        name: 'Navigation',
        path: '/docs/Navigation',
        type: 'default'
      }
    ]
  },
  {
    groupTitle: 'Development',
    paths: [
      {
        name: 'Routing',
        path: '/docs/routing',
        type: 'default'
      },
      {
        name: 'Environment variables',
        path: '/docs/environment-vars',
        type: 'default'
      },
      {
        name: 'Structure',
        path: '/docs/structure',
        type: 'default'
      }
    ]
  }
];
