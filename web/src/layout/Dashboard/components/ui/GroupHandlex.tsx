import { Flex } from '@/components/common';
import DefaultLink from '@/components/ui/SidebarLinks/DefaultLink';
import DropdownLink from '@/components/ui/SidebarLinks/DropdownLink';
import useDisclosure from '@/hooks/useDisclosure';
import { TSidebarLink } from '@/types';
import { Collapse, Typography } from '@mui/material';

type TGroupHandlerProps = {
  group: TSidebarLink;
  useDocsRoutes?: boolean;
};

const GroupHandler: React.FC<TGroupHandlerProps> = ({ group, useDocsRoutes }) => {
  const { groupTitle, paths } = group;

  const { isOpen, onToggle } = useDisclosure(true);

  return (
    <Flex flexDirection={'column'} gap={2}>
      <Typography
        onClick={onToggle}
        textTransform={'uppercase'}
        fontWeight={700}
        fontSize={'12px'}
        color={'text.secondary'}
        sx={{
          position: 'relative',
          marginLeft: '-5px',
          cursor: 'pointer',
          transform: 'scale(1)',
          transformOrigin: 'bottom left',
          transition:
            'margin-left 120ms cubic-bezier(.17,.67,.83,.67), color 120ms cubic-bezier(.17,.67,.83,.67), transform 120ms cubic-bezier(.17,.67,.83,.67)',
          '&::before': {
            content: '">"',
            display: 'inline-block',
            marginRight: '5px',
            marginTop: 'auto',
            marginBottom: 'auto',
            fontSize: '13px',
            opacity: 0,
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            transformOrigin: 'center',
            transition: 'opacity 120ms cubic-bezier(.17,.67,.83,.67), transform 120ms cubic-bezier(.17,.67,.83,.67)'
          },
          '&:hover': {
            marginLeft: 0,
            color: 'primary.contrastText',
            transform: 'scale(1.05)'
          },
          '&:hover::before': {
            opacity: 1,
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)'
          }
        }}
      >
        {groupTitle}
      </Typography>
      <Collapse in={isOpen}>
        <Flex flexDirection={'column'} gap={1}>
          {paths.map((path, pathIndex) =>
            path.type === 'default' ? (
              <DefaultLink useDocsRoutes={useDocsRoutes} key={pathIndex} path={path} />
            ) : (
              <DropdownLink key={pathIndex} links={path} />
            )
          )}
        </Flex>
      </Collapse>
    </Flex>
  );
};

export default GroupHandler;
