import { Flex } from '@/components/common';
import { Outlet } from 'react-router';
import AppBar from './AppBar';
import DocumentationSidebar from './SideBar';

const DocumentationLayout: React.FC = () => {
  return (
    <Flex flexDirection={'column'} maxWidth={'100dvw'} minHeight={'100dvh'} maxHeight={'100dvh'} component={'main'}>
      <AppBar />
      <Flex flexGrow={1} overflow={'hidden'}>
        <DocumentationSidebar />
        <Flex flexGrow={1} bgcolor={'background.paper'} maxHeight={'100%'} overflow={'auto'} width={'100%'}>
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DocumentationLayout;
