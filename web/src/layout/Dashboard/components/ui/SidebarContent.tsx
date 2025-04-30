import { Flex } from '@/components/common';
import CondensedDropdownLink from '@/components/ui/SidebarLinks/CondensedDropdownLink ';
import CondensedLink from '@/components/ui/SidebarLinks/CondensedLink';
import { UserSidebarLinks } from '@/menu-items/Dashboard/User';
import { DocsLinks } from '@/menu-items/documentation/NavLinks';
import React from 'react';
import useSidebarContext from '../../hooks/useSidebarContext';
import GroupHandler from './GroupHandlex';

const SidebarContent: React.FC<{ ignoreMediaQuery?: boolean; useDocsRoutes?: boolean }> = ({ ignoreMediaQuery, useDocsRoutes }) => {
  const sidebarItems = useDocsRoutes ? DocsLinks : UserSidebarLinks;
  const { isOpen } = useSidebarContext();

  return (
    <Flex
      flexDirection={'column'}
      gap={isOpen ? 2 : 1}
      px={'var(--sidebar-padding)'}
      sx={{ transition: 'gap 120ms linear 0ms', overflow: 'hidden', overflowY: 'auto' }}
      pb={2}
      position={'relative'}
    >
      {isOpen || ignoreMediaQuery ? (
        <React.Fragment>
          {sidebarItems.map((group, index) => (
            <GroupHandler group={group} key={index} useDocsRoutes={useDocsRoutes} />
          ))}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {sidebarItems.map((group, index) => (
            <React.Fragment key={index}>
              {group.paths.map((path, idx) =>
                path.type !== 'list' ? <CondensedLink path={path} key={idx} /> : <CondensedDropdownLink key={idx} links={path} />
              )}
            </React.Fragment>
          ))}
        </React.Fragment>
      )}
    </Flex>
  );
};

export default SidebarContent;
