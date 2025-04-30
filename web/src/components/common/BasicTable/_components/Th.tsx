import useDisclosure from '@/hooks/useDisclosure';
import { IconButton, TableCell, TableCellProps, useTheme } from '@mui/material';
import { flexRender, Header } from '@tanstack/react-table';
import { ChevronDown, ChevronUp, Pin, PinOff } from 'lucide-react';
import React from 'react';
import Flex from '../../Flex.component';

const Th: React.FC<{ header: Header<unknown, unknown>; enablePinning?: boolean } & TableCellProps> = ({
  header,
  enablePinning,
  ...rest
}) => {
  const { isOpen: isHovered, onToggle } = useDisclosure();
  const theme = useTheme();
  const {
    getContext,
    column: {
      getIsSorted,
      columnDef: { header: columnHeader }
    }
  } = header;

  const sortIcons = {
    asc: <ChevronUp size={16} style={{ color: theme.palette.secondary.main }} />,
    desc: <ChevronDown size={16} style={{ color: theme.palette.secondary.main }} />
  };

  const handlePinning = (event: React.MouseEvent) => {
    event.stopPropagation();

    if (!header.column.getIsPinned()) return header.column.pin('left');
    if (header.column.getIsPinned() === 'left') return header.column.pin('right');

    header.column.pin(undefined);
  };

  return (
    <TableCell {...rest}>
      <Flex justifyContent={'space-between'} onMouseEnter={onToggle} onMouseLeave={onToggle}>
        <Flex alignItems={'center'} gap={1} flexGrow={1}>
          {flexRender(columnHeader, getContext())}
          {sortIcons[getIsSorted() as string] ?? null}
        </Flex>
        {enablePinning ? (
          <IconButton size="small" onClick={handlePinning}>
            {header.column.getIsPinned() !== 'right' ? (
              <Pin
                size={13}
                style={{
                  transition: 'transform 300ms linear, opacity 200ms linear',
                  opacity: isHovered ? 1 : 0,
                  color: !header.column.getIsPinned() ? theme.palette.text.disabled : theme.palette.secondary.main,
                  transform: !header.column.getIsPinned() ? 'rotate(0)' : 'rotate(45deg)'
                }}
              />
            ) : (
              <PinOff
                size={13}
                style={{
                  transition: 'transform 300ms linear, opacity 200ms linear',
                  opacity: isHovered ? 1 : 0,
                  color: !header.column.getIsPinned() ? theme.palette.text.disabled : theme.palette.secondary.main,
                  transform: !header.column.getIsPinned() ? 'rotate(0)' : 'rotate(-45deg)'
                }}
              />
            )}
          </IconButton>
        ) : null}
      </Flex>
    </TableCell>
  );
};

export default Th;
