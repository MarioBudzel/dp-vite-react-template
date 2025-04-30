import AdminWrapper from '@/components/Auth/AdminWrapper';
import { MaintenanceWrapper } from '@/components/common';
import AuthLayout from '@/layout/Auth';
import DocumentationLayout from '@/layout/Documentation';
import SignInCenter from '@/pages/Auth/SignInCenter';
import SignInSplit from '@/pages/Auth/SignInSplit';
import SignUpCenter from '@/pages/Auth/SignUpCenter';
import SignUpSplit from '@/pages/Auth/SignUpSplit';
import { EnvironmentVariables, Introduction, Logo, Navigation, ProjectStructure, Routing, Setup, Typography } from '@/pages/Documentation';
import Colors from '@/pages/Documentation/Pages/Colors';
import { Components, Home } from '@/pages/LandingPage';
import AnimatedIconButton from '@/pages/LandingPage/ComponentsPage/AnimatedIconButton';
import BorderWrapper from '@/pages/LandingPage/ComponentsPage/BorderWrapper';
import BoxSlider from '@/pages/LandingPage/ComponentsPage/BoxSlider';
import DrawerDocs from '@/pages/LandingPage/ComponentsPage/Drawer';
import IconDrawer from '@/pages/LandingPage/ComponentsPage/IconDrawer';
import ModalBasicDocs from '@/pages/LandingPage/ComponentsPage/ModalBasic';
import ModalVariations from '@/pages/LandingPage/ComponentsPage/ModalVariations';
import Overview from '@/pages/LandingPage/ComponentsPage/Overview';
import ProfilePicture from '@/pages/LandingPage/ComponentsPage/ProfilePicture';
import ProgressBar from '@/pages/LandingPage/ComponentsPage/ProgressBar';
import ThemeToggles from '@/pages/LandingPage/ComponentsPage/ThemeToggle';
import ToastifyDocs from '@/pages/LandingPage/ComponentsPage/Toastify';
import { Error, Maintenance, PageNotFound, Permission } from '@/pages/Status';
import { Navigate } from 'react-router';
import LandingPageV2 from '../layout/LandingPageV2';
import { PublicWrapper } from './PublicWrapper';
import { Route } from './types';

const publicRoutes = (): Route[] => {
  return [
    // Routes under PublicWrapper
    {
      path: '',
      element: <PublicWrapper />,
      children: [
        {
          path: '',
          element: <LandingPageV2 />,
          children: [
            {
              index: true,
              path: '/',
              element: <Home />,
              handle: {
                crumb: 'Home'
              }
            },
            {
              path: 'components',
              element: <Components />,
              handle: {
                crumb: 'Components'
              },
              children: [
                {
                  index: true,
                  element: <Overview />,
                  handle: {
                    crumb: 'Overview'
                  }
                },
                {
                  path: 'theme-toggles',
                  element: <ThemeToggles />,
                  handle: {
                    crumb: 'Theme Toggles'
                  }
                },
                {
                  path: 'animated-icon-button',
                  element: <AnimatedIconButton />,
                  handle: {
                    crumb: 'Animated Icon Button'
                  }
                },
                {
                  path: 'profile-picture',
                  element: <ProfilePicture />,
                  handle: {
                    crumb: 'User Profile Picture'
                  }
                },
                {
                  path: 'drawer',
                  element: <DrawerDocs />,
                  handle: {
                    crumb: 'Drawer'
                  }
                },
                {
                  path: 'icon-drawer',
                  element: <IconDrawer />,
                  handle: {
                    crumb: 'Icon Drawer'
                  }
                },
                {
                  path: 'modal-basic',
                  element: <ModalBasicDocs />,
                  handle: {
                    crumb: 'Modal (Basic)'
                  }
                },
                {
                  path: 'modal-variation',
                  element: <ModalVariations />,
                  handle: {
                    crumb: 'Modal (Variations)'
                  }
                },
                {
                  path: 'border-wrapper',
                  element: <BorderWrapper />,
                  handle: {
                    crumb: 'Border Wrapper'
                  }
                },
                {
                  path: 'box-slider',
                  element: <BoxSlider />,
                  handle: {
                    crumb: 'BoxSlider'
                  }
                },
                {
                  path: 'simple-progress-bar',
                  element: <ProgressBar />,
                  handle: {
                    crumb: 'Simple Progress Bar'
                  }
                },
                {
                  path: 'toastify',
                  element: <ToastifyDocs />,
                  handle: {
                    crumb: 'Toastify'
                  }
                }
              ]
            }
          ]
        },
        {
          path: 'auth',
          element: <MaintenanceWrapper returnWrapper={<AuthLayout />} />,
          children: [
            {
              path: 'signup/left',
              element: <SignUpSplit />
            },
            {
              path: 'signup/right',
              element: <SignUpSplit />
            },
            {
              path: 'signup/center',
              element: <SignUpCenter />
            },
            {
              path: 'signin/left',
              element: <SignInSplit />
            },
            {
              path: 'signin/right',
              element: <SignInSplit />
            },
            {
              path: 'signin/center',
              element: <SignInCenter />
            },
            {
              path: '*',
              element: <Navigate to={'/auth/signin/left'} replace={true} />
            }
          ]
        }
      ]
    },
    {
      path: 'docs',
      element: <DocumentationLayout />,
      children: [
        {
          path: '',
          element: <Navigate to={'/docs/overview'} replace={true} />
        },
        {
          path: 'overview',
          element: <Introduction />
        },
        {
          path: 'setup',
          element: <Setup />
        },
        {
          path: 'colors',
          element: <Colors />
        },
        {
          path: 'typography',
          element: <Typography />
        },
        {
          path: 'logo',
          element: <Logo />
        },
        {
          path: 'navigation',
          element: <Navigation />
        },
        {
          path: 'routing',
          element: <Routing />
        },
        {
          path: 'environment-vars',
          element: <EnvironmentVariables />
        },
        {
          path: 'structure',
          element: <ProjectStructure />
        },
        {
          path: '*',
          element: <Navigate to={'/docs/overview'} replace={true} />
        }
      ]
    },
    {
      path: 'status',
      children: [
        {
          path: 'page-not-found',
          element: <PageNotFound />
        },
        {
          path: 'error',
          element: <Error />
        },
        {
          path: 'maintenance',
          element: <Maintenance />
        },
        {
          path: 'permission',
          element: <Permission />
        }
      ]
    },
    {
      path: 'admin',
      element: <AdminWrapper />,
      children: [
        {
          path: 'page-not-found',
          element: <PageNotFound />
        },
        {
          path: 'error',
          element: <Error />
        },
        {
          path: 'maintenance',
          element: <Maintenance />
        }
      ]
    },
    {
      path: '*',
      element: <Navigate to={'/status/page-not-found'} />
    }
  ];
};

export default publicRoutes;
