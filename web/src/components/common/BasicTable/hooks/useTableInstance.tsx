import {
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import { TCustomTableProps } from '..';
import useTableState from './useTableState';

const useTableInstance = <TData,>(
  props: TCustomTableProps<TData>,
  tableState: Omit<ReturnType<typeof useTableState>, 'selectedRows' | 'setSelectedRows'>
) => {
  return useReactTable<TData>({
    ...props,
    state: {
      globalFilter: tableState.globalFilter,
      columnFilters: tableState.columnFilters,
      columnVisibility: tableState.columnVisibility,
      sorting: tableState.sorting
    },
    onColumnFiltersChange: tableState.setColumnFilters,
    onColumnVisibilityChange: tableState.setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onGlobalFilterChange: tableState.setGlobalFilter,
    onSortingChange: tableState.setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    ...(props.globalFilterFn ? { globalFilterFn: props.globalFilterFn } : {})
  });
};

export default useTableInstance;
