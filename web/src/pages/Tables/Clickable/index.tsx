import { BaseTable, Flex, PageTitle } from '@/components/common';
import BorderWrapper from '@/components/common/BorderWrapper';
import Helper from '@/components/common/Helper';
import Modals from '@/components/ui/Modals';
import useDisclosure from '@/hooks/useDisclosure';
import { Switch, Typography, useTheme } from '@mui/material';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { CalendarClock, ChartBarStacked, Info } from 'lucide-react';
import React from 'react';

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
  brand: string;
  releaseDate: string;
};

const dummyProducts: Product[] = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  category: ['Electronics', 'Clothing', 'Home & Kitchen', 'Sports', 'Books'][index % 5],
  price: parseFloat((Math.random() * 100).toFixed(2)),
  stock: Math.floor(Math.random() * 500),
  rating: parseFloat((Math.random() * 5).toFixed(1)),
  brand: ['Apple', 'Nike', 'Samsung', 'Adidas', 'Sony'][index % 5],
  releaseDate: new Date(2020 + (index % 4), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toLocaleDateString('sk-SK')
}));

const columnHelper = createColumnHelper<Product>();

const ClickableRow: React.FC = () => {
  const theme = useTheme();
  const { isOpen: dense, onToggle } = useDisclosure();
  const { isOpen: modalOpen, onToggle: toggleModal } = useDisclosure();
  const [clickedRow, setClickedRow] = React.useState<Product | undefined>(null);

  const columns: ColumnDef<Product, unknown>[] = [
    columnHelper.accessor('name', {
      cell: (info) => (
        <Typography color={'text.primary'} variant="h6" fontWeight={'bold'}>
          {info.getValue()}
        </Typography>
      ),
      header: 'Product name'
    }),
    columnHelper.accessor('category', {
      cell: (info) => (
        <Flex minWidth={'150px'} alignItems={'center'} gap={1}>
          <ChartBarStacked size={18} style={{ color: theme.palette.warning.main }} />
          <Typography color={'text.primary'}>{info.getValue()}</Typography>
        </Flex>
      ),
      header: 'Category'
    }),
    columnHelper.accessor('price', {
      cell: (info) => <Flex justifyContent={'flex-end'}>{info.getValue()}€</Flex>,
      header: 'Price (€)'
    }),
    columnHelper.accessor('stock', {
      cell: (info) => <Flex justifyContent={'flex-end'}>{info.getValue()} pcs</Flex>,
      header: 'Stock'
    }),
    columnHelper.accessor('brand', {
      cell: (info) => <Flex>{info.getValue()}</Flex>,
      header: 'Brand'
    }),
    columnHelper.accessor('releaseDate', {
      cell: (info) => (
        <Flex minWidth={'150px'} alignItems={'center'} gap={1}>
          <CalendarClock size={18} style={{ color: theme.palette.warning.main }} />
          <Typography color={'text.primary'}>{info.getValue()}</Typography>
        </Flex>
      ),
      header: 'Release date'
    })
  ];

  return (
    <Flex
      flexDirection={'column'}
      px={5}
      py={5}
      gap={3}
      sx={{
        [theme.breakpoints.down('sm')]: {
          px: 2
        }
      }}
    >
      <PageTitle pageTitle="Clickable Rows">
        <Helper colorScheme="warning">Every table feature can be used simultaneously</Helper>
      </PageTitle>
      <BorderWrapper px={5} borderColor={'text.disabled'} boxShadow={1} display={'flex'} flexDirection={'column'}>
        <Flex justifyContent={'flex-end'} alignItems={'center'}>
          <Switch checked={dense} onChange={onToggle} color="secondary" />
          <Typography variant="h6" fontWeight={'bold'}>
            Toggle density
          </Typography>
        </Flex>

        <BaseTable
          variant="rounded"
          columns={columns}
          data={dummyProducts}
          dense={dense}
          enablePinning
          enableRowSelection
          selectedRowsIcons={
            <Flex flexDirection={'row-reverse'} alignItems={'center'} gap={1}>
              <Info size={16} style={{ color: theme.palette.info.dark }} />
              <Typography fontStyle={'italic'} fontSize={'13px'} color={'info.dark'} fontWeight={'bold'}>
                Add your own actions here
              </Typography>
            </Flex>
          }
          onRowClick={(row) => {
            setClickedRow(row);
            toggleModal();
          }}
        />
      </BorderWrapper>
      <Modals.Confirm
        modalTitle="Row clicked!"
        isOpen={modalOpen}
        onClose={() => {
          toggleModal();
          setClickedRow(null);
        }}
        text={`You clicked on a row with product name: ${clickedRow?.name}`}
        onConfirm={() => {
          toggleModal();
          setClickedRow(null);
        }}
        onCancel={toggleModal}
      />
    </Flex>
  );
};

export default ClickableRow;
