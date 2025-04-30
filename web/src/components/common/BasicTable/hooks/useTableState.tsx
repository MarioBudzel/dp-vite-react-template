import { ColumnFiltersState, SortingState, VisibilityState } from '@tanstack/react-table';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useTableState = (defaultHiddenColumns?: VisibilityState) => {
  const [globalFilter, setGlobalFilter] = React.useState<string>('');
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>(defaultHiddenColumns);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [selectedRows, setSelectedRows] = React.useState<Record<number, boolean>>({});

  return {
    globalFilter,
    setGlobalFilter,
    columnFilters,
    setColumnFilters,
    columnVisibility,
    setColumnVisibility,
    sorting,
    setSorting,
    selectedRows,
    setSelectedRows
  };
};

export default useTableState;
