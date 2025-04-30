import { Flex } from '@/components/common';
import { Box, Container, useTheme } from '@mui/material';

import CodeBlock from '@/components/common/CodeBlock';
import DashedDivider from '../../components/DashedDivider';
import DocsBody from '../../components/DocsBody';
import DocsSubtitle from '../../components/DocsSubtitle';
import DocsTitle from '../../components/DocsTitle';
import FileText from '../../components/FileText';

const Navigation: React.FC = () => {
  const theme = useTheme();
  return (
    <Container maxWidth={'sm'} disableGutters>
      <Flex
        py={5}
        maxWidth={'100%'}
        flexDirection={'column'}
        gap={3}
        sx={{
          [theme.breakpoints.down('sm')]: {
            px: 3
          }
        }}
      >
        <Box>
          <DocsTitle>Navigation</DocsTitle>
          <DocsBody component={'div'}>
            User navigation is handled inside:
            <Box mt={2}>
              <b>Landing Page</b>
              <ul>
                <li style={{ marginBottom: '4px' }}>
                  <FileText>web/src/layout/LandingPageV2/data/links.tsx</FileText>
                </li>
              </ul>
            </Box>
            <Box mt={2}>
              <b>Dashboard</b>
              <ul>
                <li style={{ marginBottom: '4px' }}>
                  <FileText>web/src/menu-items/Dashboard/User.ts</FileText>
                </li>
              </ul>
            </Box>
          </DocsBody>
        </Box>
        <DashedDivider />
        <Box>
          <DocsSubtitle>Langing Page</DocsSubtitle>
          <DocsBody mb={2}>
            Landing Page navigation follows <FileText>TNavigationLink</FileText> TS type:
          </DocsBody>
          <CodeBlock language="typescript" rounded>
            {`export type TNavigationLink =
  | {
      name: string;
      path: string;
      type: ENavigationLinkTypes.LINK;
      categories?: never;
    }
  | {
      name: string;
      path?: never;
      type: ENavigationLinkTypes.DROPDOWN;
      categories: TCategory[];
    };`}
          </CodeBlock>
          <DocsBody my={2}>
            To customize Landing Page navigation update the file <FileText>links.tsx</FileText>:
          </DocsBody>
          <CodeBlock language="typescript" rounded>
            {`// inside web/src/layout/LandingPageV2/data/links.tsx

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
          ...`}
          </CodeBlock>
        </Box>
        <DashedDivider />
        <Box>
          <DocsSubtitle>Dashboard</DocsSubtitle>
          <DocsBody mb={2}>
            Dashboard navigation follows <FileText>TSidebarLink</FileText> TS type:
          </DocsBody>
          <CodeBlock language="typescript" rounded>
            {`type TSidebarPathsDefault = {
  icon?: LucideIcon;
  name: string;
  adminPath?: boolean;
};

export type TListPaths = TSidebarPathsDefault & {
  type: 'list';
  path?: never;
  parentPath: string;
  paths: (TSidebarPathsDefault & { path: string })[];
};

export type TSidebarPaths = 
  | TListPaths 
  | (TSidebarPathsDefault & { type: 'default'; path: string; paths?: never; parentPath?: never });

export type TSidebarLink = {
  groupTitle?: string;
  paths: TSidebarPaths[];
};`}
          </CodeBlock>
          <DocsBody my={2}>
            To customize Dashboard navigation update the file <FileText>User.ts</FileText>:
          </DocsBody>
          <CodeBlock language="typescript" rounded>
            {`// inside web/src/menu-items/Dashboard/User.ts

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
          ...`}
          </CodeBlock>
        </Box>
      </Flex>
    </Container>
  );
};

export default Navigation;
