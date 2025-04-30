import { IconButton, Tooltip, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';
import { Table } from '@tanstack/react-table';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import React from 'react';

type Props = {
  initialPageSize?: number;
  pageSizes?: number[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table: Table<any>;
};

const useTablePagination = ({ initialPageSize = 4, pageSizes = [4, 8, 12], table }: Props) => {
  const theme = useTheme();
  const [paginationState, setPaginationState] = React.useState({
    pageIndex: 0,
    pageSize: initialPageSize
  });

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaginationState({ pageIndex: 0, pageSize: parseInt(e.target.value, 10) });
    table.setPageSize(parseInt(e.target.value, 10));
    table.setPageIndex(0);
  };
  const handlePageChange = (_: unknown, newPage: number) => {
    setPaginationState((prev) => ({ ...prev, pageIndex: newPage }));
    table.setPageIndex(newPage);
  };

  React.useEffect(() => {
    table.setPageSize(initialPageSize);
  }, [table, initialPageSize]);

  const TablePaginationActions = () => {
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <Tooltip title="First">
          <>
            <IconButton
              size="small"
              onClick={() => {
                table.setPageIndex(0);
                setPaginationState((prev) => ({ ...prev, pageIndex: 0 }));
              }}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronsLeft
                size={20}
                style={{ color: !table.getCanPreviousPage() ? theme.palette.text.disabled : theme.palette.text.primary }}
              />
            </IconButton>
          </>
        </Tooltip>

        <Tooltip title="Previous">
          <>
            <IconButton
              size="small"
              onClick={() => {
                table.previousPage();
                setPaginationState((prev) => ({ ...prev, pageIndex: prev.pageIndex - 1 }));
              }}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeft
                size={20}
                style={{ color: !table.getCanPreviousPage() ? theme.palette.text.disabled : theme.palette.text.primary }}
              />
            </IconButton>
          </>
        </Tooltip>
        <Tooltip title="Next">
          <>
            <IconButton
              size="small"
              onClick={() => {
                table.nextPage();
                setPaginationState((prev) => ({ ...prev, pageIndex: prev.pageIndex + 1 }));
              }}
              disabled={!table.getCanNextPage()}
            >
              <ChevronRight
                size={20}
                style={{ color: !table.getCanNextPage() ? theme.palette.text.disabled : theme.palette.text.primary }}
              />
            </IconButton>
          </>
        </Tooltip>
        <Tooltip title="Last">
          <>
            <IconButton
              size="small"
              onClick={() => {
                table.setPageIndex(table.getPageCount() - 1);
                setPaginationState((prev) => ({ ...prev, pageIndex: table.getPageCount() - 1 }));
              }}
              disabled={!table.getCanNextPage()}
            >
              <ChevronsRight
                size={20}
                style={{ color: !table.getCanNextPage() ? theme.palette.text.disabled : theme.palette.text.primary }}
              />
            </IconButton>
          </>
        </Tooltip>
      </Box>
    );
  };

  const paginationContent = (
    <TablePagination
      sx={{
        display: table.getRowCount() === 0 ? 'none' : 'block',
        '& .MuiToolbar-root .MuiTablePagination-displayedRows, .MuiTablePagination-selectLabel': {
          color: theme.palette.text.primary,
          fontSize: '13px',
          fontWeight: 'bold'
        },
        '& .MuiToolbar-root .MuiSvgIcon-root': {
          color: theme.palette.text.primary
        }
      }}
      labelRowsPerPage="Item count"
      labelDisplayedRows={({ count }) => `Page ${paginationState.pageIndex + 1} / ${Math.ceil(count / paginationState.pageSize)}`}
      count={table.getRowCount()}
      page={paginationState.pageIndex}
      rowsPerPage={paginationState.pageSize}
      rowsPerPageOptions={pageSizes}
      component="div"
      onPageChange={handlePageChange}
      onRowsPerPageChange={handleRowsPerPageChange}
      ActionsComponent={TablePaginationActions}
    />
  );

  return {
    paginationContent,
    paginationState
  };
};

export default useTablePagination;
