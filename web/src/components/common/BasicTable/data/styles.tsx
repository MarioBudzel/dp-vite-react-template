import { TTableStyleProps } from '@/types';
import { TableRowOwnProps, Theme } from '@mui/material';
import { Column, CoreRow } from '@tanstack/react-table';
import { CSSProperties } from 'react';

export const getTableRowStyles = ({
  variant,
  verticalAlign,
  customRowSx,
  dense,
  theme,
  onRowClick
}: TTableStyleProps & { onRowClick?: (row: CoreRow<unknown>['original']) => void }) => {
  const stylesMap: { [K in typeof variant]?: TableRowOwnProps['sx'] } = {
    rounded: {
      '& td': {
        verticalAlign: verticalAlign,
        transition: 'background-color 300ms ease-in-out',
        py: dense ? 1 : 3,
        borderWidth: '1px 0 1px 0',
        borderStyle: 'solid',
        borderColor: 'primary.light'
      },
      '& td:last-of-type': {
        borderWidth: '1px 1px 1px 0',
        borderRadius: '0 12px 12px 0'
      },
      '& td:first-of-type': {
        borderWidth: '1px 0 1px 1px',
        borderRadius: '12px 0px 0px 12px'
      },
      ...(onRowClick
        ? {
            '&:hover td': {
              cursor: 'pointer',
              backgroundColor: theme ? `rgba(${theme.palette.primary.lightChannel}, .3)` : 'primary.light'
            }
          }
        : {}),
      ...(customRowSx ? customRowSx : {})
    },
    simple: {
      '& td': {
        verticalAlign: verticalAlign,
        borderColor: 'primary.light',
        py: dense ? 1 : 3
      },
      '&:last-child td': {
        border: 0
      },
      ...(customRowSx ? customRowSx : {})
    }
  };

  return variant === 'custom' ? stylesMap['simple'] : stylesMap[variant];
};

export const getTableHeaderStyles = ({ variant, verticalAlign, customHeaderSx, dense }: TTableStyleProps) => {
  const stylesMap: { [K in typeof variant]?: TableRowOwnProps['sx'] } = {
    rounded: {
      '& th': {
        fontWeight: 'bold',
        fontSize: '14px',
        verticalAlign: verticalAlign,
        backgroundColor: 'primary.light',
        py: dense ? 1 : 2,
        borderWidth: '1px 0 1px 0',
        borderStyle: 'solid',
        borderColor: 'primary.light'
      },
      '& th:last-of-type': {
        borderWidth: '1px 1px 1px 0',
        borderRadius: '0 12px 12px 0'
      },
      '& th:first-of-type': {
        borderWidth: '1px 0 1px 1px',
        borderRadius: '12px 0px 0px 12px'
      },
      ...(customHeaderSx ? customHeaderSx : {})
    },
    simple: {
      '& th': {
        backgroundColor: 'primary.light',
        borderColor: 'primary.light',
        py: dense ? 1 : 2,
        fontWeight: 'bold',
        fontSize: '14px'
      },
      ...(customHeaderSx ? customHeaderSx : {})
    }
  };
  return variant === 'custom' ? stylesMap['simple'] : stylesMap[variant];
};

export const getCommonPinnedStyles = (column: Column<unknown>, theme: Theme): CSSProperties => {
  const isPinned = column.getIsPinned();
  return {
    backgroundColor: isPinned ? theme.palette.primary.light : undefined,
    boxShadow: isPinned ? theme.shadows[1] : undefined,
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    position: isPinned ? 'sticky' : 'relative',
    zIndex: isPinned ? 1 : 0
  };
};
