import { TableCell, TableCellProps } from '@mui/material';
import { Cell, flexRender } from '@tanstack/react-table';

const Td: React.FC<{ cell: Cell<unknown, unknown> } & TableCellProps> = ({ cell, ...rest }) => {
  const {
    getContext,
    column: {
      columnDef: { cell: columnCell }
    }
  } = cell;

  return <TableCell {...rest}>{flexRender(columnCell, getContext())}</TableCell>;
};

export default Td;
