import { Box, Typography } from '@mui/material';
import { RemoveShoppingCartOutlined } from '@mui/icons-material';
import { ReactElement } from 'react';
import { ShopLayout } from '@/components';
import Link from 'next/link';
import { NextPageWithLayout } from '../_app';

const EmptyCartPage: NextPageWithLayout = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="calc(100vh - 200px)"
    flexDirection={{ sm: 'row', xs: 'column' }}
  >
    <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography>Su Carrito está vació</Typography>
      <Link href="/">
        <Typography variant="h6" color="secondary">
          Regresar al home
        </Typography>
      </Link>
    </Box>
  </Box>
);

EmptyCartPage.getLayout = (page: ReactElement) => (
  <ShopLayout title="Carrito vació">{page}</ShopLayout>
);

export default EmptyCartPage;
