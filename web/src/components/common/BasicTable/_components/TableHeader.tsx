import { Checkbox, TableCell, TableHead, TableRow } from '@mui/material';
import { getCommonPinnedStyles, getTableHeaderStyles } from '../data/styles';
import useTableContext from '../hooks/useTableContext';
import Th from './Th';

const TableHeader: React.FC<{ enableRowSelection: boolean; enablePinning?: boolean }> = ({ enableRowSelection, enablePinning }) => {
  const {
    table: { getHeaderGroups, getRowModel },
    dense,
    customHeaderSx,
    variant,
    verticalAlign,
    theme,
    setSelectedRows,
    selectedRows
  } = useTableContext();

  return (
    <TableHead>
      {getHeaderGroups().map((header) => {
        const { id, headers } = header;
        return (
          <TableRow key={id} sx={getTableHeaderStyles({ customHeaderSx, variant, dense, verticalAlign })}>
            {enableRowSelection ? (
              <TableCell width={'fit-content'}>
                <Checkbox
                  checked={Object.keys(selectedRows).length === getRowModel().rows.length && Object.values(selectedRows).every(Boolean)}
                  onClick={() => {
                    const rows = getRowModel().rows;

                    setSelectedRows(() => {
                      const selectedRows = rows.reduce(
                        (acc, row) => {
                          acc[row.id] = true;
                          return acc;
                        },
                        {} as Record<number, boolean>
                      );
                      return selectedRows;
                    });
                  }}
                />
              </TableCell>
            ) : null}
            {headers.map((_header, index) => (
              <Th
                enablePinning={enablePinning}
                style={getCommonPinnedStyles(_header.column, theme)}
                onClick={_header.column.getToggleSortingHandler()}
                sx={{ py: 2 }}
                key={index}
                header={_header}
              />
            ))}
          </TableRow>
        );
      })}
    </TableHead>
  );
};

export default TableHeader;
