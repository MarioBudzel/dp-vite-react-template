import { TTableStyleProps } from '@/types';
import { Checkbox, IconButton, OutlinedInput, Table, TableContainer, Typography, useTheme } from '@mui/material';
import { CoreRow, TableOptions, VisibilityState } from '@tanstack/react-table';
import TableBody from './_components/TableBody';
import TableHeader from './_components/TableHeader';
import { TableContext } from './context/TableContext';
import useTableInstance from './hooks/useTableInstance';
import useTablePagination from './hooks/useTablePagination';
import useTableState from './hooks/useTableState';

import { Minus, Search, X } from 'lucide-react';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import Flex from '../Flex.component';

export type TCustomTableProps<TData> = {
  columns: TableOptions<TData>['columns'];
  data: TableOptions<TData>['data'];
  globalFilterFn?: TableOptions<TData>['globalFilterFn'];
  defaultHiddenColumns?: VisibilityState;
  onRowClick?: (row: CoreRow<TData>['original']) => void;
  initialPageSize?: number;
  disableSearch?: boolean;
  selectedRowsIcons?: React.ReactNode;
  enableRowSelection?: boolean;
  enablePinning?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelectedRowsChanged?: (selectedRows: TData[]) => void;
} & TTableStyleProps;

const BaseTable = <TData,>({
  customHeaderSx,
  customRowSx,
  dense,
  variant = 'simple',
  verticalAlign,
  onRowClick,
  initialPageSize = 5,
  disableSearch,
  selectedRowsIcons,
  onSelectedRowsChanged,
  enableRowSelection,
  enablePinning,
  ...rest
}: TCustomTableProps<TData>) => {
  const { setSelectedRows, selectedRows, ...tableState } = useTableState(rest.defaultHiddenColumns);
  const table = useTableInstance<TData>(rest, tableState);
  const theme = useTheme();

  const [searchValue, setSearchValue] = React.useState<string>('');

  const handleGlobalSearch = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      target: { value }
    } = event;

    tableState.setGlobalFilter(value);
  }, 500);

  const { paginationContent } = useTablePagination({ initialPageSize, table, pageSizes: [5, 10, 15] });

  const selectedRowsCount = Object.values(selectedRows).reduce((acc, value) => {
    if (value) acc += 1;
    return acc;
  }, 0 as number);

  React.useEffect(() => {
    const rows = table.getRowModel().rowsById;
    const selectedOriginals = Object.keys(selectedRows)
      .filter((index) => selectedRows[index])
      .map((index) => rows[index].original);

    onSelectedRowsChanged?.(selectedOriginals);
  }, [selectedRows, table, onSelectedRowsChanged]);

  return (
    <TableContext.Provider
      value={{ table, customHeaderSx, customRowSx, dense, variant, verticalAlign, theme, onRowClick, selectedRows, setSelectedRows }}
    >
      <Flex flexDirection={'column'} gap={2} position={'relative'}>
        <Flex
          width={'100%'}
          position={'sticky'}
          top={0}
          left={0}
          bgcolor={'warning.main'}
          zIndex={10}
          justifyContent={'space-between'}
          alignItems={'center'}
          px={2}
          borderRadius={3}
          overflow={'hidden'}
          sx={{
            height: selectedRowsCount !== 0 ? '50px' : '0px',
            transition: 'height 200ms linear'
          }}
        >
          <Checkbox
            checked={Object.values(selectedRows).some(Boolean)}
            onClick={() => setSelectedRows({})}
            checkedIcon={<Minus size={16} style={{ color: theme.palette.warning.contrastText }} />}
          />
          <Typography fontWeight={'bold'} color={'warning.contrastText'} variant="h6" flexGrow={1}>
            {selectedRowsCount} selected
          </Typography>
          {selectedRowsIcons}
        </Flex>
        {!disableSearch ? (
          <Flex width={'100%'}>
            <OutlinedInput
              sx={{
                bgcolor: 'primary.light',
                maxWidth: '300px',
                color: 'text.primary',
                border: '1px solid',
                borderColor: 'text.disabled',
                fontWeight: 'bold',
                px: 2
              }}
              value={searchValue}
              placeholder="Search..."
              startAdornment={<Search />}
              endAdornment={
                searchValue ? (
                  <IconButton
                    size="small"
                    onClick={() => {
                      tableState.setGlobalFilter('');
                      setSearchValue('');
                    }}
                  >
                    <X size={16} style={{ color: theme.palette.text.primary }} />
                  </IconButton>
                ) : null
              }
              onChange={(event) => {
                setSearchValue(event.target.value);
                handleGlobalSearch(event);
              }}
            />
          </Flex>
        ) : null}
        <TableContainer>
          <Table
            sx={{
              borderSpacing: `0 ${dense && variant !== 'rounded' ? 0 : dense ? 10 : 16}px`,
              borderCollapse: 'separate',
              transition: 'border-spacing 200ms linear'
            }}
          >
            <TableHeader enablePinning={enablePinning} enableRowSelection={enableRowSelection} />
            <TableBody enableRowSelection={enableRowSelection} />
          </Table>
        </TableContainer>
        {paginationContent}
      </Flex>
    </TableContext.Provider>
  );
};

export default BaseTable;
