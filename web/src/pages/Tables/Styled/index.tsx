import { BaseTable, Flex } from '@/components/common';
import BorderWrapper from '@/components/common/BorderWrapper';
import Crumbs from '@/components/common/Crumbs';
import Helper from '@/components/common/Helper';
import useDisclosure from '@/hooks/useDisclosure';
import { Switch, Typography, useTheme } from '@mui/material';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { CalendarClock, ChartBarStacked } from 'lucide-react';

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

const StyledTables: React.FC = () => {
  const theme = useTheme();
  const { isOpen: dense, onToggle } = useDisclosure();

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
      <Flex flexDirection={'column'} gap={2}>
        <Typography variant="h3" fontWeight={'bold'}>
          Styled Table
        </Typography>
        <Crumbs />
        <Helper colorScheme="warning">Every table feature can be used simultaneously</Helper>
      </Flex>
      <BorderWrapper px={5} borderColor={'text.disabled'} boxShadow={1} display={'flex'} flexDirection={'column'}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Typography color={'text.disabled'} fontStyle={'italic'}>
            Variant: rounded
          </Typography>
          <Flex justifyContent={'flex-end'} alignItems={'center'}>
            <Switch checked={dense} onChange={onToggle} color="secondary" />
            <Typography variant="h6" fontWeight={'bold'}>
              Toggle density
            </Typography>
          </Flex>
        </Flex>
        <BaseTable variant="rounded" disableSearch columns={columns} data={dummyProducts} dense={dense} />
      </BorderWrapper>
      <BorderWrapper px={5} borderColor={'primary.light'} boxShadow={1} display={'flex'} flexDirection={'column'}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Typography color={'text.disabled'} fontStyle={'italic'}>
            Variant: custom
          </Typography>
          <Flex justifyContent={'flex-end'} alignItems={'center'}>
            <Switch checked={dense} onChange={onToggle} color="secondary" />
            <Typography variant="h6" fontWeight={'bold'}>
              Toggle density
            </Typography>
          </Flex>
        </Flex>
        <BaseTable
          variant="custom"
          disableSearch
          columns={columns}
          data={dummyProducts}
          dense={dense}
          customRowSx={{
            '& td': {
              verticalAlign: 'top',
              transition: 'background-color 300ms ease-in-out',
              py: dense ? 1 : 3,
              borderWidth: '1px', // Set border width to be uniform
              borderStyle: 'solid',
              borderColor: 'secondary.light' // Change to secondary color
            },
            '&:last-child td': {}
          }}
          customHeaderSx={{
            '& th': {
              fontWeight: 'bold',
              fontSize: '14px',
              verticalAlign: 'top',
              backgroundColor: 'secondary.light',
              py: dense ? 1 : 2,
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'secondary.light',
              textAlign: 'center'
            },
            '& th:last-of-type': {
              borderWidth: '1px 1px 1px 0',
              borderRadius: '0 8px 8px 0'
            },
            '& th:first-of-type': {
              borderWidth: '1px 0 1px 1px',
              borderRadius: '8px 0 0 8px'
            }
          }}
        />
      </BorderWrapper>
    </Flex>
  );
};

export default StyledTables;
