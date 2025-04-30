import { Navigate } from 'react-router';
import { Route } from './types';

import AdminWrapper from '@/components/Auth/AdminWrapper';
import { MaintenanceWrapper } from '@/components/common';
import DashboardLayout from '@/layout/Dashboard';
import { SidebarProvider } from '@/layout/Dashboard/context/SidebarContext';
import App from '@/pages/App';
import FileManager from '@/pages/FileManager';
import { PermissionShowcase, RoleButtons } from '@/pages/Misc';
import { BasicTable, ClickableRow, SearchTable, SelectableTable, StyledTables } from '@/pages/Tables';
import { Account, AdminCreate, Edit, UsersList } from '@/pages/User';
import { PrivateWrapper } from './PrivateWrapper';

const privateRoutes = (): Route[] => {
  return [
    {
      path: '',
      element: <MaintenanceWrapper returnWrapper={<PrivateWrapper />} />,
      children: [
        {
          path: '',
          index: true,
          element: <Navigate to={'/dashboard/app'} />
        },
        {
          path: 'dashboard',
          element: (
            <SidebarProvider>
              <DashboardLayout />
            </SidebarProvider>
          ),
          handle: {
            crumb: 'Dashboard'
          },
          children: [
            {
              path: 'app',
              element: <App />
            },
            {
              path: 'user',
              handle: {
                crumb: 'User'
              },
              children: [
                {
                  path: '',
                  index: true,
                  element: <Navigate to={'/dashboard/user/account'} />
                },
                {
                  path: 'account',
                  handle: {
                    crumb: 'Account'
                  },
                  element: <Account />
                },
                {
                  path: 'list',
                  handle: {
                    crumb: 'List'
                  },
                  element: (
                    <AdminWrapper>
                      <UsersList />
                    </AdminWrapper>
                  )
                },
                {
                  path: 'create',
                  handle: {
                    crumb: 'Admin user create'
                  },
                  element: (
                    <AdminWrapper>
                      <AdminCreate />
                    </AdminWrapper>
                  )
                },
                {
                  path: 'edit',
                  element: (
                    <AdminWrapper>
                      <Navigate to={'/dashboard/user/list'} />
                    </AdminWrapper>
                  )
                },
                {
                  path: 'edit/:userId',
                  handle: {
                    crumb: 'Edit'
                  },
                  element: (
                    <AdminWrapper>
                      <Edit />
                    </AdminWrapper>
                  )
                }
              ]
            },
            {
              path: 'file-management',
              handle: {
                crumb: 'File Management'
              },
              element: <FileManager />
            },
            {
              path: 'tables',
              children: [
                {
                  path: 'basic',
                  element: <BasicTable />,
                  handle: {
                    crumb: 'Basic Table'
                  }
                },
                {
                  path: 'styled',
                  element: <StyledTables />,
                  handle: {
                    crumb: 'Styled Tables'
                  }
                },
                {
                  path: 'search',
                  element: <SearchTable />,
                  handle: {
                    crumb: 'Search Table'
                  }
                },
                {
                  path: 'selectable',
                  element: <SelectableTable />,
                  handle: {
                    crumb: 'Selectable Rows'
                  }
                },
                {
                  path: 'clickable-row',
                  element: <ClickableRow />,
                  handle: {
                    crumb: 'Clickable Rows'
                  }
                }
              ]
            },
            {
              path: 'misc',
              children: [
                {
                  path: 'permission-pages',
                  element: <PermissionShowcase />
                },
                {
                  path: 'role-buttons',
                  element: <RoleButtons />
                }
              ]
            },
            {
              path: '',
              element: <Navigate to={'/dashboard/app'} />
            },
            {
              path: '*',
              element: <Navigate to={'/status/page-not-found'} />
            }
          ]
        },
        {
          path: '*',
          element: <Navigate to={'/status/page-not-found'} />
        }
      ]
    }
  ];
};

export default privateRoutes;
