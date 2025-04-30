import { TTableStyleProps } from '@/types';
import { CoreRow } from '@tanstack/react-table';
import React from 'react';
import useTableInstance from '../hooks/useTableInstance';

export const TableContext = React.createContext<
  {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    table: ReturnType<typeof useTableInstance<any>>;
    onRowClick?: (row: CoreRow<unknown>['original']) => void;
    selectedRows?: Record<number, boolean>;
    setSelectedRows?: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
  } & TTableStyleProps
>({
  table: undefined
});
