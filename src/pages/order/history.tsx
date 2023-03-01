/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable arrow-body-style */
import { ShopLayout } from '@/components';
import { Chip, Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid/models';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import Link from 'next/link';
import { ReactNode } from 'react';
import { NextPageWithLayout } from '../_app';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 100,
  },
  {
    field: 'fullname',
    headerName: 'Nombre completo',
    width: 300,
  },
  {
    field: 'paid',
    headerName: 'Pagado',
    description: 'El estado de pago de la orden',
    width: 200,
    renderCell: (params: GridRenderCellParams<boolean, { paid: boolean }>) => {
      // params.row.paid
      return params.value ? (
        <Chip color="success" variant="outlined" label="Pagada" />
      ) : (
        <Chip color="warning" variant="outlined" label="No Pagada" />
      );
    },
  },
  {
    field: 'date',
    headerName: 'Fecha',
    description: 'Ver la fecha cuando se creo la orden',
    width: 200,
  },
  {
    field: 'order',
    headerName: 'Ver order',
    description: 'Enlace a la orden',
    width: 100,
    sortable: false,
    renderCell: (params: GridRenderCellParams<boolean, { id: string }>) => {
      return (
        <Link
          prefetch={false}
          style={{ textDecoration: 'underline', color: 'blue' }}
          href={`/order/${params.row.id}`}
        >
          Ver Orden
        </Link>
      );
    },
  },
];

const rows: any[] = [
  {
    id: 1,
    fullname: 'Shammael Bien-Aise',
    paid: true,
    date: formatDistanceToNow(new Date().setHours(4), {
      locale: es,
      addSuffix: true,
    }),
  },
  {
    id: 2,
    fullname: 'Shammael Bien-Aise',
    paid: false,
    date: formatDistanceToNow(new Date().setMinutes(4), {
      locale: es,
    }),
  },
  {
    id: 3,
    fullname: 'Shammael Bien-Aise',
    paid: true,
    date: formatDistanceToNow(new Date().setMinutes(1), {
      locale: es,
    }),
  },
  {
    id: 4,
    fullname: 'Shammael Bien-Aise',
    paid: true,
    date: formatDistanceToNow(new Date().setMilliseconds(250), {
      locale: es,
    }),
  },
  {
    id: 5,
    fullname: 'Shammael Bien-Aise',
    paid: false,
    date: formatDistanceToNow(new Date().setHours(4), {
      locale: es,
      addSuffix: true,
    }),
  },
];

const HistoryPage: NextPageWithLayout = () => (
  <>
    <Typography variant="h1">Historial de órdenes</Typography>
    <Grid container sx={{ mt: 2 }}>
      <Grid item xs={12} sx={{ height: '650px', width: '100%' }}>
        <DataGrid
          columns={columns}
          rows={rows}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </Grid>
    </Grid>
  </>
);

HistoryPage.getLayout = (page: ReactNode) => (
  <ShopLayout title="Order History">{page}</ShopLayout>
);

export default HistoryPage;
