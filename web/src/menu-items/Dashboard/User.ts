import { TSidebarLink } from '@/types';
import {
  Boxes,
  CircleOff,
  CircleX,
  FolderKanban,
  Grid2x2Check,
  Grid3x3,
  MousePointerClick,
  Shell,
  ShieldAlert,
  Squirrel,
  Table2,
  TableProperties,
  User,
  Wrench
} from 'lucide-react';

export const UserSidebarLinks: TSidebarLink[] = [
  {
    groupTitle: 'Overview',
    paths: [
      {
        name: 'App',
        path: '/dashboard/app',
        type: 'default',
        icon: Boxes
      }
    ]
  },
  {
    groupTitle: 'Tables',
    paths: [
      {
        name: 'Basic',
        type: 'default',
        icon: Grid3x3,
        path: '/dashboard/tables/basic'
      },
      {
        name: 'Styled',
        type: 'default',
        icon: Table2,
        path: '/dashboard/tables/styled'
      },
      {
        name: 'Search & Pin',
        type: 'default',
        icon: TableProperties,
        path: '/dashboard/tables/search'
      },
      {
        name: 'Selectable',
        type: 'default',
        icon: Grid2x2Check,
        path: '/dashboard/tables/selectable'
      },
      {
        name: 'Clickable Row',
        type: 'default',
        icon: MousePointerClick,
        path: '/dashboard/tables/clickable-row'
      }
    ]
  },
  {
    groupTitle: 'Management',
    paths: [
      {
        name: 'User',
        type: 'list',
        icon: User,
        parentPath: '/dashboard/user',
        paths: [
          {
            name: 'Account',
            path: '/dashboard/user/account'
          },
          {
            name: 'List',
            path: '/dashboard/user/list',
            adminPath: true
          },
          {
            name: 'Create',
            path: '/dashboard/user/create',
            adminPath: true
          },
          {
            name: 'Edit',
            path: '/dashboard/user/edit',
            adminPath: true
          }
        ]
      },
      {
        name: 'File Management',
        type: 'default',
        path: '/dashboard/file-management',
        icon: FolderKanban
      }
    ]
  },
  {
    groupTitle: 'Status',
    paths: [
      {
        name: '404',
        type: 'default',
        icon: Squirrel,
        path: '/status/page-not-found'
      },
      {
        name: 'Error',
        type: 'default',
        icon: CircleX,
        path: '/status/error'
      },
      {
        name: 'Maintenance',
        type: 'default',
        icon: Wrench,
        path: '/status/maintenance'
      },
      {
        name: 'Permission',
        type: 'default',
        icon: CircleOff,
        path: '/status/permission'
      }
    ]
  },
  {
    groupTitle: 'Misc',
    paths: [
      {
        name: 'Permission pages',
        type: 'default',
        icon: ShieldAlert,
        path: '/dashboard/misc/permission-pages'
      },
      {
        name: 'Role buttons',
        type: 'default',
        icon: Shell,
        path: '/dashboard/misc/role-buttons'
      }
    ]
  }
];
