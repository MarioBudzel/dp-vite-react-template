import { BaseTable, Flex } from '@/components/common';
import { Typography, useTheme } from '@mui/material';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { Info } from 'lucide-react';
import React from 'react';

export type FormatsTableColumns = {
  format: string;
  strategy: string;
  goal: string[];
  kpi: string[];
  kpiValue: number[];
  budget: string;
  duration: {
    startDate: Date;
    endDate: Date;
  };
  geography: string;
  demography: string;
};

const columnHelper = createColumnHelper<FormatsTableColumns>();

const FormatsTable: React.FC = () => {
  const theme = useTheme();
  const dummyData: FormatsTableColumns[] = [
    {
      budget: '1 200 €',
      strategy: 'Campaign awareness and recognition',
      demography: 'Male 34-40',
      duration: {
        startDate: new Date(),
        endDate: new Date()
      },
      format: 'Banner',
      geography: 'Whole country',
      goal: ['Target CPA', 'Maximize conversions'],
      kpi: ['CPM', 'CPV', 'ROAS'],
      kpiValue: [1.2, 1.8, 6]
    },
    {
      budget: '1 200 €',
      strategy: 'Awareness and recognition',
      demography: 'Male 34-40',
      duration: {
        startDate: new Date(),
        endDate: new Date()
      },
      format: 'Banner',
      geography: 'Whole country',
      goal: ['Target CPA', 'Maximize conversions'],
      kpi: ['CPM', 'CPV', 'ROAS'],
      kpiValue: [1.2, 1.8, 6]
    }
  ];
  const columns: ColumnDef<FormatsTableColumns, unknown>[] = [
    columnHelper.accessor('strategy', {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('format', {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('goal', {
      cell: (info) => {
        const goals = info.getValue() as string[];

        return (
          <Flex flexDirection={'column'} gap={2}>
            {goals.map((kpi, index) => (
              <React.Fragment key={index}>{kpi}</React.Fragment>
            ))}
          </Flex>
        );
      }
    }),
    columnHelper.accessor('kpi', {
      cell: (info) => {
        const kpis = info.getValue() as string[];

        return (
          <Flex flexDirection={'column'} gap={2}>
            {kpis.map((kpi, index) => (
              <React.Fragment key={index}>{kpi}</React.Fragment>
            ))}
          </Flex>
        );
      }
    }),
    columnHelper.accessor('budget', {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('geography', {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('demography', {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('duration', {
      cell: () => '22.2.2025 - 22.5.2025'
    })
  ];

  return (
    <BaseTable
      onSelectedRowsChanged={(selectedRows) => console.log(selectedRows)}
      variant="simple"
      dense
      columns={columns}
      data={dummyData}
      selectedRowsIcons={
        <Flex flexDirection={'row-reverse'} alignItems={'center'} gap={1}>
          <Info size={16} style={{ color: theme.palette.info.dark }} />
          <Typography fontStyle={'italic'} fontSize={'13px'} color={'info.dark'} fontWeight={'bold'}>
            Add your own actions here
          </Typography>
        </Flex>
      }
      onRowClick={(row: FormatsTableColumns) => console.log('rowClicked', row.budget)}
    />
  );
};

export default FormatsTable;
