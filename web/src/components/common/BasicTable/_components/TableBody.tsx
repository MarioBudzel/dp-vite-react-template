import { Checkbox, TableCell, TableRow } from '@mui/material';
import MuiTableBody from '@mui/material/TableBody';
import { getCommonPinnedStyles, getTableRowStyles } from '../data/styles';
import useTableContext from '../hooks/useTableContext';
import Td from './Td';

const TableBody: React.FC<{ enableRowSelection?: boolean }> = ({ enableRowSelection }) => {
  const {
    table: { getRowModel },
    dense,
    verticalAlign,
    variant,
    customRowSx,
    theme,
    onRowClick,
    selectedRows,
    setSelectedRows
  } = useTableContext();
  const rows = getRowModel().rows;

  return (
    <MuiTableBody>
      {rows.map((row) => {
        const { id, getVisibleCells } = row;
        const cells = getVisibleCells();

        return (
          <TableRow sx={getTableRowStyles({ variant, verticalAlign, customRowSx, dense, theme, onRowClick })} key={id}>
            {enableRowSelection ? (
              <TableCell>
                <Checkbox
                  checked={selectedRows[row.id] ?? false}
                  onClick={() => setSelectedRows((prev) => ({ ...prev, [row.id]: !prev[row.id] }))}
                />
              </TableCell>
            ) : null}
            {cells.map((cell) => (
              <Td style={getCommonPinnedStyles(cell.column, theme)} key={cell.id} cell={cell} onClick={() => onRowClick(row.original)} />
            ))}
          </TableRow>
        );
      })}
    </MuiTableBody>
  );
};

export default TableBody;

//{ '&:last-child td, &:last-child th': { border: 0 } }

/**
 * '&:last-child td:last-child': {
                borderRadius: '0 10px 10px 0'
              },
              '&:last-child td:first-child': {
                borderRadius: '10px 0px 0px 10px'
              }
 */
