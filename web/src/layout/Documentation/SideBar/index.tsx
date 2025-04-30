import { Flex } from '@/components/common';
import SidebarContent from '@/layout/Dashboard/components/ui/SidebarContent';
import { useTheme } from '@mui/material';

const DocumentationSidebar: React.FC = () => {
  const theme = useTheme();
  return (
    <Flex
      flexDirection={'column'}
      maxHeight={'100%'}
      width={'var(--dashboard-sidebar-full-width)'}
      sx={{
        transition: 'width 120ms linear 0ms',
        [theme.breakpoints.down('sm')]: {
          visibility: 'hidden',
          display: 'none'
        }
      }}
      zIndex={200}
      py={2}
    >
      <SidebarContent useDocsRoutes />
    </Flex>
  );
};

export default DocumentationSidebar;
